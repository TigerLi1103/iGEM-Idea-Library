import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Idea, IdeaStatus } from '../types';
import { db } from '../firebase';
import { collection, onSnapshot, query, where, addDoc, updateDoc, doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useAuth } from './AuthContext';

interface IdeaContextType {
  ideas: Idea[];
  loading: boolean;
  addIdea: (idea: Partial<Idea>) => Promise<string>;
  getIdeaById: (id: string) => Idea | undefined;
  getIdeasByVillage: (villageId: string) => Idea[];
  getIdeasByAuthor: (authorId: string) => Idea[];
  updateIdea: (id: string, updates: Partial<Idea>) => Promise<void>;
  updateIdeaStatus: (id: string, status: IdeaStatus) => Promise<void>;
}

const IdeaContext = createContext<IdeaContextType | undefined>(undefined);

export const IdeaProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [loading, setLoading] = useState(true);
  const { user, isAdmin } = useAuth();

  useEffect(() => {
    // If admin, see all ideas
    // If logged in, see published ideas + own ideas
    // If not logged in, only see published ideas
    
    let unsubscribes: (() => void)[] = [];

    if (isAdmin) {
      const q = collection(db, 'ideas');
      const unsub = onSnapshot(q, (snapshot) => {
        const fetchedIdeas = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Idea[];
        setIdeas(fetchedIdeas);
        setLoading(false);
      }, (error) => {
        console.error("Admin fetch error:", error);
        setLoading(false);
      });
      unsubscribes.push(unsub);
    } else if (user) {
      // Fetch published ideas
      const qPublished = query(collection(db, 'ideas'), where('status', '==', 'published'));
      const unsubPublished = onSnapshot(qPublished, (snapshot) => {
        const publishedIdeas = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Idea[];
        
        setIdeas(prev => {
          const ownIdeas = prev.filter(i => i.authorId === user.id && i.status !== 'published');
          // Merge and remove duplicates by ID
          const combined = [...publishedIdeas, ...ownIdeas];
          const unique = Array.from(new Map(combined.map(item => [item.id, item])).values());
          return unique;
        });
        setLoading(false);
      }, (error) => {
        console.error("Published fetch error:", error);
      });
      unsubscribes.push(unsubPublished);

      // Fetch own ideas
      const qOwn = query(collection(db, 'ideas'), where('authorId', '==', user.id));
      const unsubOwn = onSnapshot(qOwn, (snapshot) => {
        const ownIdeas = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Idea[];
        
        setIdeas(prev => {
          const publishedIdeas = prev.filter(i => i.status === 'published');
          // Merge and remove duplicates by ID
          const combined = [...publishedIdeas, ...ownIdeas];
          const unique = Array.from(new Map(combined.map(item => [item.id, item])).values());
          return unique;
        });
        setLoading(false);
      }, (error) => {
        console.error("Own fetch error:", error);
      });
      unsubscribes.push(unsubOwn);
    } else {
      const q = query(collection(db, 'ideas'), where('status', '==', 'published'));
      const unsub = onSnapshot(q, (snapshot) => {
        const fetchedIdeas = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Idea[];
        setIdeas(fetchedIdeas);
        setLoading(false);
      }, (error) => {
        console.error("Guest fetch error:", error);
        setLoading(false);
      });
      unsubscribes.push(unsub);
    }

    return () => unsubscribes.forEach(unsub => unsub());
  }, [user, isAdmin]);

  const addIdea = async (newIdea: Partial<Idea>) => {
    if (!user) throw new Error('Must be logged in to add an idea');
    
    const ideaData = {
      title: newIdea.title || '',
      summary: newIdea.summary || '',
      description: newIdea.description || '',
      villageId: newIdea.villageId || '',
      tags: newIdea.tags || [],
      problemStatement: newIdea.problemStatement || '',
      proposedSolution: newIdea.proposedSolution || '',
      innovationPoints: newIdea.innovationPoints || [],
      risks: newIdea.risks || [],
      authorId: user.id,
      authorName: user.name,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: 'pending',
      sourceType: 'manual',
      aiMatchedTeams: newIdea.aiMatchedTeams || [],
      potentialAwards: newIdea.potentialAwards || [],
      relatedProjects: [],
      confidenceScore: newIdea.confidenceScore || 0.8,
      verifiedStatus: false,
      chassis: newIdea.chassis || '',
      applicationArea: newIdea.applicationArea || '',
    };

    const docRef = await addDoc(collection(db, 'ideas'), ideaData);
    return docRef.id;
  };

  const getIdeaById = (id: string) => ideas.find(i => i.id === id);
  
  const getIdeasByVillage = (villageId: string) => 
    ideas.filter(i => i.villageId === villageId);

  const getIdeasByAuthor = (authorId: string) => 
    ideas.filter(i => i.authorId === authorId);

  const updateIdea = async (id: string, updates: Partial<Idea>) => {
    const ideaRef = doc(db, 'ideas', id);
    await updateDoc(ideaRef, { 
      ...updates, 
      updatedAt: new Date().toISOString() 
    });
  };

  const updateIdeaStatus = async (id: string, status: IdeaStatus) => {
    await updateIdea(id, { status });
  };

  return (
    <IdeaContext.Provider value={{ 
      ideas, 
      loading,
      addIdea, 
      getIdeaById, 
      getIdeasByVillage, 
      getIdeasByAuthor,
      updateIdea,
      updateIdeaStatus 
    }}>
      {children}
    </IdeaContext.Provider>
  );
};

export const useIdeas = () => {
  const context = useContext(IdeaContext);
  if (context === undefined) {
    throw new Error('useIdeas must be used within an IdeaProvider');
  }
  return context;
};
