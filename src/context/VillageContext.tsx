import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Village } from '../types';
import { db } from '../firebase';
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { useAuth } from './AuthContext';
import { VILLAGES as INITIAL_VILLAGES } from '../data';

interface VillageContextType {
  villages: Village[];
  loading: boolean;
  addVillage: (village: Partial<Village>) => Promise<void>;
  updateVillage: (id: string, village: Partial<Village>) => Promise<void>;
  deleteVillage: (id: string) => Promise<void>;
  getVillageById: (id: string) => Village | undefined;
}

const VillageContext = createContext<VillageContextType | undefined>(undefined);

export const VillageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [villages, setVillages] = useState<Village[]>([]);
  const [loading, setLoading] = useState(true);
  const { isAdmin } = useAuth();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'villages'), async (snapshot) => {
      if (snapshot.empty && isAdmin) {
        // If Firestore is empty and user is admin, seed it with INITIAL_VILLAGES
        for (const village of INITIAL_VILLAGES) {
          const id = village.id;
          await setDoc(doc(db, 'villages', id), {
            ...village,
            ideaCount: 0 // Initialize with 0, will be calculated from ideas collection
          });
        }
      } else {
        const fetchedVillages = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Village[];
        setVillages(fetchedVillages);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [isAdmin]);

  const addVillage = async (village: Partial<Village>) => {
    if (!isAdmin) throw new Error('Unauthorized');
    const id = village.id || village.name?.toLowerCase().replace(/\s+/g, '-') || Math.random().toString(36).substr(2, 9);
    await setDoc(doc(db, 'villages', id), {
      ...village,
      id,
      ideaCount: village.ideaCount || 0,
      color: village.color || 'slate'
    });
  };

  const updateVillage = async (id: string, village: Partial<Village>) => {
    if (!isAdmin) throw new Error('Unauthorized');
    const villageRef = doc(db, 'villages', id);
    await updateDoc(villageRef, village);
  };

  const deleteVillage = async (id: string) => {
    if (!isAdmin) throw new Error('Unauthorized');
    await deleteDoc(doc(db, 'villages', id));
  };

  const getVillageById = (id: string) => villages.find(v => v.id === id);

  return (
    <VillageContext.Provider value={{ 
      villages, 
      loading, 
      addVillage, 
      updateVillage, 
      deleteVillage,
      getVillageById
    }}>
      {children}
    </VillageContext.Provider>
  );
};

export const useVillages = () => {
  const context = useContext(VillageContext);
  if (context === undefined) {
    throw new Error('useVillages must be used within a VillageProvider');
  }
  return context;
};
