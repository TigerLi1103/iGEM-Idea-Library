import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Badge, cn } from '../components/UI';
import { useVillages } from '../context/VillageContext';
import { 
  Upload, 
  Sparkles, 
  CheckCircle2, 
  Info, 
  ChevronRight, 
  ChevronLeft,
  Beaker,
  Globe,
  Tag as TagIcon,
  AlertTriangle,
  AlertCircle,
  Zap,
  Wand2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { useAuth } from '../context/AuthContext';
import { useIdeas } from '../context/IdeaContext';
import type { AIMatchedTeam, PotentialAward } from '../types';

export const UploadIdea: React.FC = () => {
  const MATCH_SIMILARITY_THRESHOLD = 0.72;
  const MAX_MATCHED_TEAMS_TO_STORE = 50; // Firestore doc size safety cap; UI can still fold/unfold within this.

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isParsing, setIsParsing] = useState(false);
  const [parseSuccess, setParseSuccess] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [aiInput, setAiInput] = useState('');
  const [showAiInput, setShowAiInput] = useState(false);
  const [aiAnalysisResult, setAiAnalysisResult] = useState<{
    aiMatchedTeams: AIMatchedTeam[];
    potentialAwards: PotentialAward[];
    recommendedVillageId?: string;
    confidenceScore: number;
  } | null>(null);
  const [newIdeaId, setNewIdeaId] = useState<string | null>(null);
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addIdea, updateIdea } = useIdeas();
  const { villages, loading: villagesLoading } = useVillages();

  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    description: '',
    village: '',
    tags: '',
    problem: '',
    solution: '',
    innovation: '',
    risks: '',
    chassis: '',
    applicationArea: '',
  });

  const handleNext = () => setStep(s => s + 1);
  const handleBack = () => setStep(s => s - 1);

  const handleAiParse = async () => {
    if (!aiInput.trim()) return;
    
    setIsParsing(true);
    setParseSuccess(false);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const model = "gemini-3-flash-preview";
      
      const villageList = villages.map(v => `${v.id}: ${v.name}`).join(', ');
      
      const prompt = `
        You are an expert iGEM project consultant and synthetic biology specialist. 
        Your task is to analyze the provided project description and extract structured information for a project submission form.

        I will provide a project description, which might be a rough draft, an abstract, or a detailed plan.
        Please extract the following fields and return them as a valid JSON object:
        
        - title: A professional, concise, and catchy project title (max 10 words).
        - summary: A compelling one-sentence "elevator pitch" for the project.
        - description: A clear, structured description of the project's background and goals.
        - village: The ID of the most relevant iGEM village from this list: [${villageList}]. Choose the single best fit.
        - tags: A comma-separated list of 3-5 relevant keywords (e.g., "Biosensor", "CRISPR", "Metabolic Engineering").
        - problem: A clear statement of the specific problem or challenge being addressed.
        - solution: A description of the proposed biological system or technical approach.
        - innovation: 2-3 key unique or innovative points (separate with newlines if multiple).
        - risks: 2-3 potential technical, safety, or ethical risks (separate with newlines if multiple).
        - chassis: The primary biological organism(s) used as the host (e.g., "E. coli BL21", "S. cerevisiae", "B. subtilis"). If not mentioned, leave empty.
        - applicationArea: The main field of application (e.g., "Medical", "Environmental", "Industrial", "Food & Nutrition"). If not mentioned, leave empty.

        Project Description:
        """
        ${aiInput}
        """

        IMPORTANT:
        1. Return ONLY the raw JSON object. Do not include markdown formatting like \`\`\`json.
        2. Ensure all fields are strings.
        3. If a field cannot be inferred, return an empty string.
        4. Be scientifically accurate and professional in your phrasing.
      `;

      const response = await ai.models.generateContent({
        model,
        contents: [{ parts: [{ text: prompt }] }],
      });

      const text = response.text.replace(/```json|```/g, '').trim();
      const result = JSON.parse(text || '{}');
      
      setFormData({
        title: result.title || '',
        summary: result.summary || '',
        description: result.description || '',
        village: result.village || '',
        tags: result.tags || '',
        problem: result.problem || '',
        solution: result.solution || '',
        innovation: result.innovation || '',
        risks: result.risks || '',
        chassis: result.chassis || '',
        applicationArea: result.applicationArea || '',
      });
      
      setParseSuccess(true);
      setTimeout(() => {
        setShowAiInput(false);
        setStep(1); // Reset to step 1 to review
        setParseSuccess(false);
      }, 1500);
    } catch (error) {
      console.error("AI Parsing Error:", error);
      alert("AI parsing failed. Please check your input or try again.");
    } finally {
      setIsParsing(false);
    }
  };

  const handleClear = () => {
    setFormData({
      title: '',
      summary: '',
      description: '',
      village: '',
      tags: '',
      problem: '',
      solution: '',
      innovation: '',
      risks: '',
      chassis: '',
      applicationArea: '',
    });
    setAiInput('');
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    // Prevent submission if not on the final step
    if (step < 3) {
      handleNext();
      return;
    }

    // Basic validation for the last step
    if (!formData.description.trim()) {
      setStep(2);
      alert("Please provide a detailed description in Step 2.");
      return;
    }

    if (!showConfirmSubmit) {
      setShowConfirmSubmit(true);
      return;
    }

    setIsSubmitting(true);
    
    const tagsArray = formData.tags.split(',').map(t => t.trim()).filter(t => t !== '');
    
    const newIdea = {
      title: formData.title,
      summary: formData.summary,
      description: formData.description,
      villageId: formData.village,
      tags: tagsArray,
      problemStatement: formData.problem,
      proposedSolution: formData.solution,
      innovationPoints: formData.innovation.split('\n').map(p => p.trim()).filter(p => p !== ''),
      risks: formData.risks.split('\n').map(r => r.trim()).filter(r => r !== ''),
      chassis: formData.chassis,
      applicationArea: formData.applicationArea,
      status: 'pending' as const,
      sourceType: 'manual' as const,
      aiMatchedTeams: [],
      potentialAwards: [],
      confidenceScore: 0,
    };

    try {
      const id = await addIdea(newIdea);
      setNewIdeaId(id);
      setShowResults(true);
      setIsSubmitting(false);
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Failed to submit idea. Please try again.");
      setIsSubmitting(false);
    }
  };

  const runAiAnalysis = async () => {
    if (!newIdeaId) return;
    setIsAnalyzing(true);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const villageList = villages.map(v => `${v.id}: ${v.name}`).join(', ');
      
      const prompt = `
        You are an expert iGEM project analyst. Your task is to provide a UNIQUE and DEEP analysis for the following project idea. 
        CRITICAL: You MUST use the Google Search tool to find REAL, SPECIFIC historical iGEM projects from the official iGEM archives (2004-2024). 
        DO NOT provide generic or hallucinated results. Every project you match must be a real team with a real project title.
        
        Matching requirements for "aiMatchedTeams":
        - Only include a historical team if it is sufficiently similar to the current idea (similarity must be >= ${MATCH_SIMILARITY_THRESHOLD}).
        - The number of matches is NOT fixed. Return as many valid matches as you can find, prioritizing quality and correctness.
        - Prioritize matches that have strong recognitions (Grand Prize/Winner/Finalist/Village Award/Special Prizes/Medals) when possible.
        - For each match, you MUST provide:
          - similarity (0-1): similarity score vs the current idea
          - awards (array of strings): confirmed recognitions for that team/project, empty if unknown
          - awardTier (0-3): 3=top-tier (Grand Prize/Winner), 2=Finalist/Village Award, 1=Special Prize/Medal, 0=none/unknown
	        
        Project Details:
        Title: ${formData.title}
        Summary: ${formData.summary}
        Description: ${formData.description}
        Problem: ${formData.problem}
        Solution: ${formData.solution}
        Chassis: ${formData.chassis}
        Application Area: ${formData.applicationArea}
        
        Tasks:
        1. Search for REAL, specific historical iGEM projects (Team Name, Year, Project Title) from the official iGEM archives that are highly relevant to this specific idea. Provide a real wiki link if possible. Only include those with similarity >= ${MATCH_SIMILARITY_THRESHOLD}.
        2. Identify 5-6 potential iGEM Special Prizes from this OFFICIAL list: [Best Model, Best Measurement, Best Hardware, Best Software Tool, Best Integrated Human Practices, Best Education, Inclusivity Award, Sustainable Development Impact, Safety & Security Award, Best Entrepreneurship, Best New Basic Part, Best New Composite Part, Best Improved Part, Best Part Collection]. Explain WHY based on the project's unique features.
        3. Recommend the best village from this list: [${villageList}].
        4. Provide a confidence score (0-1) for the village recommendation.
        
        Return the results in the following JSON format:
        {
          "aiMatchedTeams": [
            { "teamName": "...", "year": 2023, "projectTitle": "...", "link": "...", "matchReason": "...", "similarity": 0.86, "awards": ["..."], "awardTier": 2 }
          ],
          "potentialAwards": [
            { "name": "...", "reason": "..." }
          ],
          "recommendedVillageId": "...",
          "confidenceScore": 0.95
        }
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [{ parts: [{ text: prompt }] }],
        config: {
          tools: [{ googleSearch: {} }],
          responseMimeType: "application/json",
        }
      });

      let parsed;
      try {
        if (response.text) {
          parsed = JSON.parse(response.text.replace(/```json|```/g, '').trim());
        } else {
          throw new Error("Empty response from AI");
        }
      } catch (e) {
        console.error("Failed to parse AI response:", e);
        throw e; // Trigger the catch block below
      }

      const result = {
        aiMatchedTeams: Array.isArray(parsed.aiMatchedTeams) ? parsed.aiMatchedTeams : [],
        potentialAwards: Array.isArray(parsed.potentialAwards) ? parsed.potentialAwards : [],
        recommendedVillageId: parsed.recommendedVillageId || formData.village,
        confidenceScore: parsed.confidenceScore || 0.85
      };

      const sanitizedTeams: AIMatchedTeam[] = result.aiMatchedTeams
        .map((t: any) => {
          const similarityRaw = typeof t?.similarity === 'number' ? t.similarity : 0;
          const similarity = Number.isFinite(similarityRaw) ? Math.max(0, Math.min(1, similarityRaw)) : 0;
          const awardTierRaw = typeof t?.awardTier === 'number' ? t.awardTier : 0;
          const awardTier = Number.isFinite(awardTierRaw) ? Math.max(0, Math.min(3, Math.round(awardTierRaw))) : 0;
          const awards = Array.isArray(t?.awards) ? t.awards.filter((a: any) => typeof a === 'string' && a.trim() !== '') : [];

          return {
            teamName: typeof t?.teamName === 'string' ? t.teamName : 'Unknown Team',
            year: typeof t?.year === 'number' && Number.isFinite(t.year) ? t.year : 0,
            projectTitle: typeof t?.projectTitle === 'string' ? t.projectTitle : '',
            link: typeof t?.link === 'string' ? t.link : '#',
            matchReason: typeof t?.matchReason === 'string' ? t.matchReason : '',
            similarity,
            awards,
            awardTier,
          };
        })
        .filter((t) => t.similarity !== undefined && t.similarity >= MATCH_SIMILARITY_THRESHOLD)
        .sort((a, b) => {
          const tierDiff = (b.awardTier ?? 0) - (a.awardTier ?? 0);
          if (tierDiff !== 0) return tierDiff;
          const simDiff = (b.similarity ?? 0) - (a.similarity ?? 0);
          if (simDiff !== 0) return simDiff;
          return (b.year ?? 0) - (a.year ?? 0);
        })
        .slice(0, MAX_MATCHED_TEAMS_TO_STORE);

      result.aiMatchedTeams = sanitizedTeams;
      
      setAiAnalysisResult(result);
      
      // Update the idea in Firestore with AI results
      await updateIdea(newIdeaId, {
        aiMatchedTeams: result.aiMatchedTeams,
        potentialAwards: result.potentialAwards,
        confidenceScore: result.confidenceScore,
      });
    } catch (error) {
      console.error("AI Analysis failed:", error);
      // More descriptive fallback to show it's a fallback
      setAiAnalysisResult({
        aiMatchedTeams: [
          {
            teamName: "Historical Match Not Found",
            year: 2024,
            projectTitle: "Please try re-analyzing later",
            link: "#",
            matchReason: "The AI search encountered an error.",
            similarity: 0,
            awards: [],
            awardTier: 0,
          }
        ],
        potentialAwards: [
          { name: "Analysis Error", reason: "Could not determine awards at this time." }
        ],
        recommendedVillageId: formData.village,
        confidenceScore: 0.5
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT') {
        e.preventDefault();
        if (step < 3) {
          handleNext();
        } else if (!showConfirmSubmit) {
          setShowConfirmSubmit(true);
        } else {
          handleSubmit();
        }
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Submit Your iGEM Idea</h1>
        <p className="text-slate-500">Share your vision and let AI help you refine it for the competition.</p>
      </div>

      {!showResults ? (
        <div className="space-y-6">
          {/* AI Quick Parse Section */}
          <Card className={cn(
            "p-6 border-2 transition-all duration-300",
            showAiInput ? "border-emerald-500 bg-emerald-50/30" : "border-slate-100 bg-white"
          )}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                  showAiInput ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-600"
                )}>
                  <Wand2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">AI Magic Fill</h3>
                  <p className="text-xs text-slate-500">Paste a long text and let AI separate it for you</p>
                </div>
              </div>
              <Button 
                variant={showAiInput ? "ghost" : "outline"} 
                onClick={() => setShowAiInput(!showAiInput)}
                className="text-xs h-8"
              >
                {showAiInput ? "Cancel" : "Try AI Parse"}
              </Button>
            </div>

            <AnimatePresence>
              {showAiInput && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 pt-2">
                    <textarea 
                      placeholder="Paste your project draft, abstract, or notes here... AI will automatically fill the form below."
                      className="w-full p-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none h-48 resize-none text-sm"
                      value={aiInput}
                      onChange={e => setAiInput(e.target.value)}
                    />
                    <div className="flex justify-between items-center">
                      <Button 
                        variant="ghost" 
                        onClick={handleClear}
                        className="text-slate-400 hover:text-slate-600 text-xs"
                      >
                        Clear All
                      </Button>
                      <Button 
                        onClick={handleAiParse} 
                        disabled={isParsing || !aiInput.trim() || parseSuccess}
                        className={cn(
                          "transition-all duration-300",
                          parseSuccess ? "bg-emerald-500 hover:bg-emerald-500" : "bg-emerald-600 hover:bg-emerald-700"
                        )}
                      >
                        {isParsing ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Parsing Text...
                          </>
                        ) : parseSuccess ? (
                          <>
                            <CheckCircle2 className="w-4 h-4" />
                            Success! Form Filled
                          </>
                        ) : (
                          <>
                            <Zap className="w-4 h-4 fill-current" />
                            Magic Parse & Fill
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>

          <Card className="p-8">
            {/* Progress Bar */}
            <div className="flex items-center justify-between mb-10 relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 -z-10" />
              {[1, 2, 3].map((s) => (
                <div 
                  key={s} 
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300",
                    step >= s ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-400"
                  )}
                >
                  {s}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} className="space-y-8">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                          Project Title
                          <Info className="w-3 h-3 text-slate-400" />
                        </label>
                        <input 
                          required
                          type="text" 
                          placeholder="e.g., Rapid Detection of Microplastics..."
                          className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                          value={formData.title}
                          onChange={e => setFormData({...formData, title: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Short Summary</label>
                        <textarea 
                          required
                          placeholder="A one-sentence pitch of your project..."
                          className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none h-20 resize-none"
                          value={formData.summary}
                          onChange={e => setFormData({...formData, summary: e.target.value})}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            Target Village
                          </label>
                          <select 
                            required
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                            value={formData.village}
                            onChange={e => setFormData({...formData, village: e.target.value})}
                          >
                            <option value="">Select a Village</option>
                            {villages.map(v => <option key={v.id} value={v.id}>{v.name}</option>)}
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                            <Beaker className="w-4 h-4" />
                            Proposed Chassis
                          </label>
                          <input 
                            type="text" 
                            placeholder="e.g., E. coli BL21, Yeast..."
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                            value={formData.chassis}
                            onChange={e => setFormData({...formData, chassis: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            Application Area
                          </label>
                          <input 
                            type="text" 
                            placeholder="e.g., Medical, Environmental..."
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                            value={formData.applicationArea}
                            onChange={e => setFormData({...formData, applicationArea: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Problem Statement</label>
                      <textarea 
                        required
                        placeholder="What specific problem are you trying to solve?"
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none h-32"
                        value={formData.problem}
                        onChange={e => setFormData({...formData, problem: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Proposed Solution</label>
                      <textarea 
                        required
                        placeholder="Describe your biological system and how it works..."
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none h-32"
                        value={formData.solution}
                        onChange={e => setFormData({...formData, solution: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Detailed Description</label>
                      <textarea 
                        required
                        placeholder="Provide a full, detailed description of your project's background, methodology, and goals..."
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none h-48"
                        value={formData.description}
                        onChange={e => setFormData({...formData, description: e.target.value})}
                      />
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-emerald-500" />
                        Innovation Points
                      </label>
                      <textarea 
                        placeholder="What makes your approach unique? (One per line)"
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none h-24"
                        value={formData.innovation}
                        onChange={e => setFormData({...formData, innovation: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-500" />
                        Potential Risks
                      </label>
                      <textarea 
                        placeholder="What could go wrong? Safety, technical, or ethical risks..."
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none h-24"
                        value={formData.risks}
                        onChange={e => setFormData({...formData, risks: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                        <TagIcon className="w-4 h-4" />
                        Keywords
                      </label>
                      <input 
                        type="text" 
                        placeholder="e.g., Biosensor, CRISPR, Water (comma separated)"
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                        value={formData.tags}
                        onChange={e => setFormData({...formData, tags: e.target.value})}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {step === 3 && showConfirmSubmit && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6 flex items-start gap-3"
                >
                  <div className="p-2 bg-amber-100 rounded-full text-amber-600">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900 text-sm">Ready to submit?</h4>
                    <p className="text-xs text-amber-700">Once submitted, your idea will be saved to the library and you can run the AI Deep Analysis.</p>
                  </div>
                </motion.div>
              )}

              <div className="flex justify-between pt-6 border-t border-slate-100">
                {step > 1 ? (
                  <Button type="button" variant="outline" onClick={handleBack}>
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </Button>
                ) : <div />}
                
                {step < 3 ? (
                  <Button type="button" onClick={handleNext}>
                    Next Step
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <div className="flex gap-3">
                    {showConfirmSubmit && (
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setShowConfirmSubmit(false)}
                        disabled={isSubmitting}
                      >
                        Cancel
                      </Button>
                    )}
                    <Button 
                      type="submit" 
                      variant={showConfirmSubmit ? "primary" : "secondary"} 
                      disabled={isSubmitting}
                      className="px-8"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : showConfirmSubmit ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          Confirm & Submit
                        </>
                      ) : (
                        <>
                          <Upload className="w-4 h-4" />
                          Submit Idea
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </div>
            </form>
          </Card>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-8"
        >
          <div className="bg-emerald-600 rounded-3xl p-8 text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Submission Successful!</h2>
            <p className="text-emerald-100">Your idea has been saved to the library.</p>
            
            {!aiAnalysisResult && !isAnalyzing && (
              <Button 
                onClick={runAiAnalysis}
                className="mt-6 bg-white text-emerald-600 hover:bg-emerald-50 border-none font-bold"
              >
                <Sparkles className="w-4 h-4" />
                Run AI Deep Analysis
              </Button>
            )}

            {isAnalyzing && (
              <div className="mt-6 flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                <p className="text-sm font-medium animate-pulse">AI is searching historical iGEM data...</p>
              </div>
            )}
          </div>

          {aiAnalysisResult && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 border-l-4 border-l-purple-500 bg-purple-50/30">
                  <div className="flex items-center gap-2 mb-4 text-purple-700">
                    <Sparkles className="w-5 h-5" />
                    <h3 className="font-bold">AI Recommended Village</h3>
                  </div>
                  <p className="text-sm text-slate-700 mb-4">
                    Based on your description, we recommend the <strong>{villages.find(v => v.id === aiAnalysisResult?.recommendedVillageId)?.name || 'selected'} Village</strong>.
                  </p>
                  <Badge variant="ai">Confidence: {(aiAnalysisResult?.confidenceScore * 100).toFixed(0)}%</Badge>
                </Card>

                <Card className="p-6 border-l-4 border-l-blue-500 bg-blue-50/30">
                  <div className="flex items-center gap-2 mb-4 text-blue-700">
                    <Globe className="w-5 h-5" />
                    <h3 className="font-bold">Historical Matches</h3>
                  </div>
                  <p className="text-sm text-slate-700 mb-4">Found <strong>{aiAnalysisResult?.aiMatchedTeams.length || 0} previous iGEM teams</strong> with similar approaches.</p>
                  <Button variant="outline" className="h-8 text-xs" onClick={() => navigate(`/ideas/${newIdeaId}`)}>View Matches</Button>
                </Card>

                <Card className="p-6 border-l-4 border-l-amber-500 bg-amber-50/30 md:col-span-2">
                  <div className="flex items-center gap-2 mb-4 text-amber-700">
                    <Sparkles className="w-5 h-5" />
                    <h3 className="font-bold">Potential Special Prizes</h3>
                  </div>
                  <p className="text-sm text-slate-700 mb-4">Our AI identified potential single awards you could apply for based on your project's unique strengths.</p>
                  <div className="flex flex-wrap gap-2">
                    {aiAnalysisResult?.potentialAwards.map((award, idx) => (
                      <Badge key={idx} variant="verified" className="bg-amber-100 text-amber-700 border-amber-200">
                        {award.name}
                      </Badge>
                    ))}
                    {(!aiAnalysisResult?.potentialAwards || aiAnalysisResult.potentialAwards.length === 0) && (
                      <span className="text-xs text-slate-400 italic">No specific awards identified.</span>
                    )}
                  </div>
                </Card>
              </div>
            </motion.div>
          )}

          <div className="flex justify-center gap-4">
            <Button variant="outline" onClick={() => navigate('/dashboard')}>Go to Dashboard</Button>
            <Button onClick={() => navigate(`/ideas/${newIdeaId || 'i1'}`)}>View Full Idea Page</Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};
