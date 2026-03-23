import React, { useState, useMemo } from 'react';
import { MOCK_AWARDS } from '../data/awards';
import { TEAM_AWARD_RECORDS } from '../data/awards-v2';
import { AwardEntry, AwardType, Division } from '../types';
import { Card, Button, Badge, cn } from '../components/UI';
import { 
  Trophy, 
  Search, 
  Globe, 
  ExternalLink, 
  ChevronDown,
  Layers,
  Award,
  Info,
  Beaker,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type TabType = 'overview' | 'prize' | 'village';

export const AwardsArchive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedVillage, setSelectedVillage] = useState<string>('All');
  const [selectedDivision, setSelectedDivision] = useState<string>('All');
  const [expandedAwardId, setExpandedAwardId] = useState<string | null>(null);

  // Reset filters when switching tabs
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setSelectedType('All');
    setSelectedVillage('All');
    setSearchQuery('');
  };

  const years = ['All', ...Array.from(new Set(MOCK_AWARDS.map(a => a.year.toString()))).sort((a, b) => b.localeCompare(a))];
  const awardTypes = ['All', 'Grand Prize', 'Finalist', 'Village Award', 'Special Prize'];
  const villages = ['All', ...Array.from(new Set(MOCK_AWARDS.map(a => a.village))).sort()];
  const divisions = ['All', 'Collegiate', 'High School'];

  const specificPrizes = useMemo(() => {
    const prizes = new Set<string>();
    TEAM_AWARD_RECORDS.forEach(record => {
      record.specialPrizes.forEach(prize => prizes.add(prize.name));
    });
    return Array.from(prizes).sort();
  }, []);

  const villageList = useMemo(() => {
    const villages = new Set<string>();
    TEAM_AWARD_RECORDS.forEach(record => {
      const hsVillageAllowed = record.division === 'High School' ? record.year >= 2025 : true;
      if (record.village && hsVillageAllowed) villages.add(record.village);
    });
    return Array.from(villages).sort();
  }, []);

  const filteredAwards = useMemo(() => {
    return MOCK_AWARDS.filter(award => {
      const matchesSearch = 
        award.teamName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        award.projectTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        award.awardName.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesYear = selectedYear === 'All' || award.year.toString() === selectedYear;
      
      // Overview tab uses awardType, Prize tab uses awardName
      const matchesType = activeTab === 'prize' 
        ? (selectedType === 'All' || award.awardName === selectedType)
        : (selectedType === 'All' || award.awardType === selectedType);
        
      const matchesVillage = selectedVillage === 'All' || award.village === selectedVillage;
      const matchesDivision = selectedDivision === 'All' || award.division === selectedDivision;

      return matchesSearch && matchesYear && matchesType && matchesVillage && matchesDivision;
    });
  }, [searchQuery, selectedYear, selectedType, selectedVillage, selectedDivision, activeTab]);


  const renderPrizeView = () => {
    if (specificPrizes.length === 0) {
      return (
        <div className="py-20 text-center">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8 text-slate-300" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">No prize data recorded</h3>
          <p className="text-slate-500">Check back later for more data.</p>
        </div>
      );
    }

    const currentPrize = (selectedType === 'All' || !specificPrizes.includes(selectedType)) ? specificPrizes[0] : selectedType;
    const divisionOrder = ['High School', 'Undergraduate', 'Graduate'] as const;
    const divisionLabels: Record<(typeof divisionOrder)[number], string> = {
      'High School': 'High School',
      'Undergraduate': 'Undergraduate',
      'Graduate': 'Graduate',
    };

    const prizeRecords = TEAM_AWARD_RECORDS.filter(record =>
      record.specialPrizes.some(prize => prize.name === currentPrize)
    );
    const yearsWithPrize = Array.from(new Set(prizeRecords.map(record => record.year))).sort((a, b) => b - a);

    return (
      <div className="space-y-8">
        <div className="flex flex-wrap gap-3 mb-8">
          {specificPrizes.map(prize => (
            <button
              key={prize}
              onClick={() => setSelectedType(prize)}
              className={cn(
                "px-5 py-2.5 rounded-2xl text-xs font-bold transition-all border shadow-sm",
                selectedType === prize || (selectedType === 'All' && prize === specificPrizes[0])
                  ? "bg-emerald-600 border-emerald-600 text-white"
                  : "bg-white border-slate-200 text-slate-600 hover:border-emerald-300 hover:bg-emerald-50/30"
              )}
            >
              {prize}
            </button>
          ))}
        </div>

        {yearsWithPrize.map(year => (
          <div key={year} className="space-y-4">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-black text-slate-900">{year}</h3>
              <div className="h-px flex-1 bg-slate-100" />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {divisionOrder.map(division => {
                const divisionRecords = prizeRecords
                  .filter(record => record.year === year && record.division === division)
                  .map(record => ({
                    ...record,
                    prizeStatus: record.specialPrizes.find(prize => prize.name === currentPrize)?.status,
                  }))
                  .filter(record => record.prizeStatus);

                const winners = divisionRecords.filter(record => record.prizeStatus === 'Winner');
                const nominees = divisionRecords.filter(record => record.prizeStatus === 'Nominee');

                return (
                  <Card key={`${year}-${division}`} className="p-5 border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-5">
                      <h4 className="text-sm font-black text-slate-900 uppercase tracking-[0.16em]">
                        {divisionLabels[division]}
                      </h4>
                      <Badge className="bg-slate-100 text-slate-600 border-none text-[10px]">
                        {divisionRecords.length} teams
                      </Badge>
                    </div>

                    <div className="space-y-5">
                      <div className="space-y-2">
                        <div className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] flex items-center gap-2">
                          <Trophy className="w-3 h-3" />
                          Winner
                        </div>
                        {winners.length > 0 ? (
                          <div className="space-y-2">
                            {winners.map(record => (
                              <div key={record.id} className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-4">
                                <div className="font-bold text-slate-900">{record.teamName}</div>
                                <div className="mt-1 text-xs text-slate-500">
                                  {record.village || 'Village TBA'}
                                  {record.grandPrizeLevel ? ` · ${record.grandPrizeLevel}` : ''}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-xs text-slate-400 italic">No winner recorded.</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <div className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] flex items-center gap-2">
                          <Award className="w-3 h-3" />
                          Nominees
                        </div>
                        {nominees.length > 0 ? (
                          <div className="grid grid-cols-1 gap-2">
                            {nominees.map(record => (
                              <div key={record.id} className="rounded-xl border border-slate-100 bg-white px-3 py-2 text-sm text-slate-700">
                                <div className="font-medium">{record.teamName}</div>
                                <div className="text-[11px] text-slate-400 mt-0.5">{record.village || 'Village TBA'}</div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-xs text-slate-400 italic">No nominees recorded.</p>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderVillageView = () => {
    if (villageList.length === 0) {
      return (
        <div className="py-20 text-center">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Globe className="w-8 h-8 text-slate-300" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">No Villages recorded</h3>
          <p className="text-slate-500">Check back later for more data.</p>
        </div>
      );
    }

    const currentVillage = selectedVillage === 'All' ? villageList[0] : selectedVillage;
    const villageRecords = TEAM_AWARD_RECORDS.filter(record => {
      const hsVillageAllowed = record.division === 'High School' ? record.year >= 2025 : true;
      return record.village === currentVillage && hsVillageAllowed;
    });
    const yearsWithVillage = Array.from(new Set(villageRecords.map(record => record.year))).sort((a, b) => b - a);

    return (
      <div className="space-y-8">
        <div className="rounded-2xl border border-blue-100 bg-blue-50/60 px-4 py-3 text-sm text-blue-900">
          <strong>Note:</strong> High School village awards are shown only for <strong>2025+</strong>. For <strong>2020–2024</strong>, this view reflects only villages that had official village-award structure for collegiate / graduate teams.
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {villageList.map(v => (
            <button
              key={v}
              onClick={() => setSelectedVillage(v)}
              className={cn(
                "px-5 py-2.5 rounded-2xl text-xs font-bold transition-all border shadow-sm",
                selectedVillage === v || (selectedVillage === 'All' && v === villageList[0])
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-blue-50/30"
              )}
            >
              {v}
            </button>
          ))}
        </div>

        {yearsWithVillage.map(year => {
          const yearRecords = villageRecords.filter(record => record.year === year);

          return (
            <div key={year} className="space-y-4">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-black text-slate-900">{year}</h3>
                <div className="h-px flex-1 bg-slate-100" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {yearRecords.map(record => (
                  <Card key={record.id} className="p-5 hover:border-blue-200 transition-all group">
                    <div className="flex justify-between items-start mb-3 gap-2">
                      <Badge className="bg-blue-50 text-blue-700 border-none text-[9px] font-black uppercase tracking-widest">
                        {record.division || 'Unknown Division'}
                      </Badge>
                      <span className="text-[10px] font-bold text-slate-400">{record.medal || 'No medal'}</span>
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                      {record.village}
                    </div>
                    <div className="text-lg font-bold text-slate-900 mb-1">{record.teamName}</div>
                    <div className="text-xs text-slate-500 mb-3">
                      {record.grandPrizeLevel || (record.top10 ? 'Top 10' : '—')}
                    </div>
                    <div className="text-[11px] text-slate-600 leading-relaxed">
                      {(record.villageAwards && record.villageAwards.length > 0)
                        ? record.villageAwards.map(a => `${a.name} (${a.status})`).join(' · ')
                        : 'No village-award entry recorded'}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Year</label>
          <select 
            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Award Type</label>
          <select 
            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            {awardTypes.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Village</label>
          <select 
            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
            value={selectedVillage}
            onChange={(e) => setSelectedVillage(e.target.value)}
          >
            {villages.map(v => <option key={v} value={v}>{v}</option>)}
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Division</label>
          <select 
            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
            value={selectedDivision}
            onChange={(e) => setSelectedDivision(e.target.value)}
          >
            {divisions.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredAwards.map(award => (
          <Card key={award.id} className="overflow-hidden group border-slate-200 hover:border-emerald-200 transition-all">
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge className="bg-emerald-50 text-emerald-700 border-emerald-100">
                      {award.year}
                    </Badge>
                    <Badge variant="default" className="text-slate-500 border-slate-200">
                      {award.division}
                    </Badge>
                    <Badge className="bg-amber-50 text-amber-700 border-amber-100">
                      <Trophy className="w-3 h-3 mr-1" />
                      {award.awardName}
                    </Badge>
                  </div>
                  <button 
                    onClick={() => setSearchQuery(award.teamName)}
                    className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors text-left"
                  >
                    {award.teamName}
                  </button>
                  <p className="text-sm font-medium text-slate-600 italic">"{award.projectTitle}"</p>
                  <p className="text-sm text-slate-500 max-w-3xl leading-relaxed">{award.summary}</p>
                </div>
                <div className="flex flex-col items-end gap-3 shrink-0">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <Layers className="w-3 h-3" />
                    {award.village}
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="h-9 text-xs px-3"
                      onClick={() => setExpandedAwardId(expandedAwardId === award.id ? null : award.id)}
                    >
                      {expandedAwardId === award.id ? 'Hide Details' : 'Why This Project Won'}
                      <ChevronDown className={cn("w-3 h-3 ml-1 transition-transform", expandedAwardId === award.id && "rotate-180")} />
                    </Button>
                    <a href={award.wikiLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" className="h-9 w-9 p-0">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {expandedAwardId === award.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Info className="w-3 h-3" />
                            The Problem
                          </h4>
                          <p className="text-sm text-slate-700 leading-relaxed">{award.whyThisProjectWon.problem}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Beaker className="w-3 h-3" />
                            Technical Solution
                          </h4>
                          <p className="text-sm text-slate-700 leading-relaxed">{award.whyThisProjectWon.solution}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Sparkles className="w-3 h-3" />
                            Innovation Points
                          </h4>
                          <p className="text-sm text-slate-700 leading-relaxed">{award.whyThisProjectWon.innovation}</p>
                        </div>
                        <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                          <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Award className="w-3 h-3" />
                            Judge Appeal
                          </h4>
                          <p className="text-sm text-emerald-800 leading-relaxed font-medium">{award.whyThisProjectWon.judgeAppeal}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {award.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded-md uppercase tracking-wider">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Card>
        ))}

        {filteredAwards.length === 0 && (
          <div className="py-20 text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-300" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No awards found</h3>
            <p className="text-slate-500">Try adjusting your filters or search query.</p>
          </div>
        )}
      </div>
    </div>
  );


  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest mb-2">
            <Award className="w-4 h-4" />
            Historical Reference
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Awards Archive</h1>
          <p className="text-slate-500 mt-2 max-w-2xl">
            Explore past iGEM winners, finalists, and special prize recipients to benchmark your ideas and understand winning patterns.
          </p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search teams, projects, or prizes..."
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-2xl w-fit mb-10 overflow-x-auto max-w-full">
        <button 
          onClick={() => handleTabChange('overview')}
          className={cn(
            "px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap",
            activeTab === 'overview' ? "bg-white text-emerald-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
          )}
        >
          Awards Overview
        </button>
        <button 
          onClick={() => handleTabChange('prize')}
          className={cn(
            "px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap",
            activeTab === 'prize' ? "bg-white text-emerald-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
          )}
        >
          Special Prizes
        </button>
        <button 
          onClick={() => handleTabChange('village')}
          className={cn(
            "px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap",
            activeTab === 'village' ? "bg-white text-emerald-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
          )}
        >
          Browse by Village
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'prize' && renderPrizeView()}
          {activeTab === 'village' && renderVillageView()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
