import { AwardEntry, Division } from '../types';

const BASE_AWARDS: AwardEntry[] = [
  // 2025
  {
    id: '2025-1',
    year: 2025,
    teamName: 'GreatBay-SCIE',
    projectTitle: 'Infectious Diseases Project',
    awardType: 'Grand Prize',
    awardName: 'Grand Prize Winner (High School)',
    village: 'Infectious Diseases',
    summary: 'A comprehensive approach to tackling infectious diseases through synthetic biology.',
    wikiLink: 'https://2025.igem.wiki/greatbay-scie/',
    tags: ['Infectious Diseases', 'High School', 'Grand Prize'],
    country: 'China',
    division: 'High School',
    whyThisProjectWon: {
      problem: 'Rapid spread of infectious diseases requires novel detection and treatment methods.',
      solution: 'Developed a modular biosensor and therapeutic platform for targeted intervention.',
      innovation: 'Novel genetic circuit design for high sensitivity and specificity in field conditions.',
      judgeAppeal: 'Exceptional technical depth for a high school team and clear real-world impact.'
    }
  },
  {
    id: '2025-2',
    year: 2025,
    teamName: 'McGill',
    projectTitle: 'Foundational Advance Project',
    awardType: 'Grand Prize',
    awardName: 'Grand Prize Winner (Undergraduate)',
    village: 'Foundational Advance',
    summary: 'Pushing the boundaries of synthetic biology with new foundational tools.',
    wikiLink: 'https://2025.igem.wiki/mcgill/',
    tags: ['Foundational Advance', 'Undergraduate', 'Grand Prize'],
    country: 'Canada',
    division: 'Undergraduate',
    whyThisProjectWon: {
      problem: 'Limitations in current genetic engineering toolsets hinder complex circuit design.',
      solution: 'Created a new suite of standardized parts and modeling frameworks for predictable gene expression.',
      innovation: 'Integration of machine learning with experimental validation to optimize part performance.',
      judgeAppeal: 'Rigorous engineering approach and significant contribution to the iGEM registry.'
    }
  },
  {
    id: '2025-3',
    year: 2025,
    teamName: 'Brno Czech Republic',
    projectTitle: 'Agriculture Project',
    awardType: 'Grand Prize',
    awardName: 'Grand Prize Winner (Overgraduate)',
    village: 'Agriculture',
    summary: 'Innovative solutions for sustainable agriculture using engineered microbes.',
    wikiLink: 'https://2025.igem.wiki/brno-czech-republic/',
    tags: ['Agriculture', 'Overgraduate', 'Grand Prize'],
    country: 'Czech Republic',
    division: 'Overgraduate',
    whyThisProjectWon: {
      problem: 'Agricultural productivity is threatened by climate change and soil degradation.',
      solution: 'Engineered soil bacteria to enhance nutrient uptake and provide natural pest resistance.',
      innovation: 'Developed a stable, self-regulating microbial community for long-term field application.',
      judgeAppeal: 'Strong field data and a clear vision for commercialization and sustainability.'
    }
  },
  // 2025 Special Prizes (mock examples for prize browsing)
  {
    id: '2025-sp-1',
    year: 2025,
    teamName: 'ExampleTech',
    projectTitle: 'Model-Driven Circuit Design',
    awardType: 'Special Prize',
    awardName: 'Best Model',
    village: 'Foundational Advance',
    summary: 'A modeling-first workflow linking design space exploration to wet-lab validation.',
    wikiLink: 'https://2025.igem.wiki/',
    tags: ['Best Model', 'Modeling', 'Design'],
    country: 'USA',
    division: 'Undergraduate',
    whyThisProjectWon: {
      problem: 'Circuit behavior is hard to predict across contexts and chassis.',
      solution: 'Built a parameterized model with automated fitting across experiments.',
      innovation: 'Introduced uncertainty-aware ranking for candidate designs.',
      judgeAppeal: 'Clear traceability from model predictions to measured outcomes.'
    }
  },
  {
    id: '2025-sp-2',
    year: 2025,
    teamName: 'ExampleSense',
    projectTitle: 'Field-Ready Quantification Toolkit',
    awardType: 'Special Prize',
    awardName: 'Best Measurement',
    village: 'Diagnostics',
    summary: 'A calibration and quantification pipeline for low-resource biosensing.',
    wikiLink: 'https://2025.igem.wiki/',
    tags: ['Best Measurement', 'Calibration', 'Diagnostics'],
    country: 'Germany',
    division: 'Undergraduate',
    whyThisProjectWon: {
      problem: 'Measurements are often not comparable across labs and devices.',
      solution: 'Standard curves, controls, and reporting templates for field use.',
      innovation: 'Device-agnostic normalization and error propagation.',
      judgeAppeal: 'High reproducibility and strong documentation for community reuse.'
    }
  },
  {
    id: '2025-sp-3',
    year: 2025,
    teamName: 'ExampleHardware',
    projectTitle: 'Portable Incubation and Readout',
    awardType: 'Special Prize',
    awardName: 'Best Hardware',
    village: 'Diagnostics',
    summary: 'A low-cost, modular device for incubation, mixing, and optical readout.',
    wikiLink: 'https://2025.igem.wiki/',
    tags: ['Best Hardware', 'Device', 'Open-source'],
    country: 'China',
    division: 'High School',
    whyThisProjectWon: {
      problem: 'Many assays require equipment unavailable outside labs.',
      solution: 'Designed a battery-powered, modular instrument with swappable modules.',
      innovation: 'Open-source CAD and assembly instructions with field validation.',
      judgeAppeal: 'Practical engineering and strong accessibility focus.'
    }
  },
  {
    id: '2025-sp-4',
    year: 2025,
    teamName: 'ExampleSoft',
    projectTitle: 'Primer and Construct Designer',
    awardType: 'Special Prize',
    awardName: 'Best Software Tool',
    village: 'Foundational Advance',
    summary: 'A web tool that designs constructs and primers with constraint checks.',
    wikiLink: 'https://2025.igem.wiki/',
    tags: ['Best Software Tool', 'Design', 'Automation'],
    country: 'Canada',
    division: 'Undergraduate',
    whyThisProjectWon: {
      problem: 'Manual construct design is error-prone and slow.',
      solution: 'Automated constraint-based design with validation and export.',
      innovation: 'Integrated parts library and assembly planning.',
      judgeAppeal: 'Immediate usability and clear impact on workflow efficiency.'
    }
  },
  // 2024
  {
    id: '2024-1',
    year: 2024,
    teamName: 'GEMS-Taiwan',
    projectTitle: 'Infectious Diseases Project',
    awardType: 'Grand Prize',
    awardName: 'Grand Prize Winner (High School)',
    village: 'Infectious Diseases',
    summary: 'Advanced diagnostic tools for early detection of infectious pathogens.',
    wikiLink: 'https://2024.igem.wiki/gems-taiwan/',
    tags: ['Infectious Diseases', 'High School', 'Grand Prize'],
    country: 'Taiwan',
    division: 'High School',
    whyThisProjectWon: {
      problem: 'Lack of affordable, rapid diagnostics in resource-limited settings.',
      solution: 'A paper-based biosensor that uses CRISPR-Cas technology for rapid pathogen detection.',
      innovation: 'Simplified the extraction and amplification process for use without specialized equipment.',
      judgeAppeal: 'Outstanding technical execution and a highly practical solution for global health.'
    }
  },
  {
    id: '2024-2',
    year: 2024,
    teamName: 'Heidelberg',
    projectTitle: 'Foundational Advance Project',
    awardType: 'Grand Prize',
    awardName: 'Grand Prize Winner (Undergraduate)',
    village: 'Foundational Advance',
    summary: 'Novel foundational tools for precise control of gene expression.',
    wikiLink: 'https://2024.igem.wiki/heidelberg/',
    tags: ['Foundational Advance', 'Undergraduate', 'Grand Prize'],
    country: 'Germany',
    division: 'Undergraduate',
    whyThisProjectWon: {
      problem: 'Current gene regulation systems often suffer from leakage and low dynamic range.',
      solution: 'Developed a new class of synthetic promoters and repressors with ultra-low background noise.',
      innovation: 'Used structural biology insights to design parts with superior binding affinity.',
      judgeAppeal: 'Exceptional characterization data and a highly reusable toolkit for the community.'
    }
  },
  {
    id: '2024-3',
    year: 2024,
    teamName: 'Marburg',
    projectTitle: 'Agriculture Project',
    awardType: 'Grand Prize',
    awardName: 'Grand Prize Winner (Overgraduate)',
    village: 'Agriculture',
    summary: 'Engineering plants and microbes for enhanced agricultural resilience.',
    wikiLink: 'https://2024.igem.wiki/marburg/',
    tags: ['Agriculture', 'Overgraduate', 'Grand Prize'],
    country: 'Germany',
    division: 'Overgraduate',
    whyThisProjectWon: {
      problem: 'Crop yields are declining due to increasing environmental stressors.',
      solution: 'Engineered symbiotic bacteria that improve plant drought tolerance and nitrogen fixation.',
      innovation: 'Novel delivery mechanism that ensures high colonization rates in diverse soil types.',
      judgeAppeal: 'Comprehensive environmental impact assessment and strong experimental results.'
    }
  },
  // 2024 Special Prizes (mock examples for prize browsing)
  {
    id: '2024-sp-1',
    year: 2024,
    teamName: 'ExampleIHP',
    projectTitle: 'Community-Co-Designed Biosafety Plan',
    awardType: 'Special Prize',
    awardName: 'Best Integrated Human Practices',
    village: 'Safety & Security',
    summary: 'A human practices framework co-developed with local stakeholders and regulators.',
    wikiLink: 'https://2024.igem.wiki/',
    tags: ['Human Practices', 'Biosafety', 'Policy'],
    country: 'UK',
    division: 'Undergraduate',
    whyThisProjectWon: {
      problem: 'Projects often miss early stakeholder alignment and biosafety planning.',
      solution: 'Structured interviews, risk workshops, and iterative design changes.',
      innovation: 'Public-facing biosafety dashboard and decision log.',
      judgeAppeal: 'Demonstrated real design pivots driven by stakeholder input.'
    }
  },
  {
    id: '2024-sp-2',
    year: 2024,
    teamName: 'ExampleEdu',
    projectTitle: 'Synthetic Biology Classroom Kit',
    awardType: 'Special Prize',
    awardName: 'Best Education',
    village: 'Education',
    summary: 'A modular kit and curriculum to teach genetic circuits and biosensors.',
    wikiLink: 'https://2024.igem.wiki/',
    tags: ['Education', 'Curriculum', 'Outreach'],
    country: 'Japan',
    division: 'High School',
    whyThisProjectWon: {
      problem: 'Hands-on synbio education is inaccessible in many schools.',
      solution: 'Designed a safe kit with teacher guides and remote-friendly lessons.',
      innovation: 'Assessment rubrics and localization for multiple languages.',
      judgeAppeal: 'Strong evidence of adoption and educational outcomes.'
    }
  },
  {
    id: '2024-sp-3',
    year: 2024,
    teamName: 'ExampleEntrep',
    projectTitle: 'Bioprocess for Low-Cost Production',
    awardType: 'Special Prize',
    awardName: 'Best Entrepreneurship',
    village: 'Manufacturing',
    summary: 'A scale-up plan and market strategy for a bioproduct with clear differentiation.',
    wikiLink: 'https://2024.igem.wiki/',
    tags: ['Entrepreneurship', 'Scale-up', 'Market'],
    country: 'France',
    division: 'Overgraduate',
    whyThisProjectWon: {
      problem: 'Many prototypes fail to translate to viable products.',
      solution: 'Defined unit economics, regulatory path, and go-to-market plan.',
      innovation: 'Risk-reduction milestones tied to experiments and partnerships.',
      judgeAppeal: 'Credible path from lab to market with strong stakeholder validation.'
    }
  },
  {
    id: '2024-sp-4',
    year: 2024,
    teamName: 'ExampleInclusion',
    projectTitle: 'Accessible SynBio Learning Platform',
    awardType: 'Special Prize',
    awardName: 'Inclusivity Award',
    village: 'Education',
    summary: 'An accessibility-first educational platform for synthetic biology learning and participation.',
    wikiLink: 'https://2024.igem.wiki/',
    tags: ['Inclusivity', 'Education', 'Accessibility'],
    country: 'Singapore',
    division: 'Undergraduate',
    whyThisProjectWon: {
      problem: 'SynBio resources often exclude learners with language, cost, or accessibility barriers.',
      solution: 'Built a multilingual, low-bandwidth, screen-reader-friendly learning and experiment support platform.',
      innovation: 'Combined accessibility tooling with low-cost wet-lab adaptation guides.',
      judgeAppeal: 'Demonstrated measurable impact on participation and access.'
    }
  },
  {
    id: '2024-sp-5',
    year: 2024,
    teamName: 'ExampleSDG',
    projectTitle: 'Carbon-Smart Wastewater Bioprocess',
    awardType: 'Special Prize',
    awardName: 'Sustainable Development Impact',
    village: 'Environment',
    summary: 'A wastewater treatment platform designed around measurable climate and sustainability impact.',
    wikiLink: 'https://2024.igem.wiki/',
    tags: ['Sustainability', 'Environment', 'Wastewater'],
    country: 'Netherlands',
    division: 'Overgraduate',
    whyThisProjectWon: {
      problem: 'Wastewater treatment remains energy-intensive and carbon-heavy in many regions.',
      solution: 'Engineered a bioprocess that reduces sludge and enables resource recovery.',
      innovation: 'Integrated life-cycle assessment into core design decisions.',
      judgeAppeal: 'Strong SDG alignment backed by quantifiable sustainability metrics.'
    }
  },
  {
    id: '2024-sp-6',
    year: 2024,
    teamName: 'ExampleSafety',
    projectTitle: 'Programmable Biocontainment Switch',
    awardType: 'Special Prize',
    awardName: 'Safety & Security Award',
    village: 'Safety & Security',
    summary: 'A layered containment strategy for safer deployment of engineered organisms.',
    wikiLink: 'https://2024.igem.wiki/',
    tags: ['Safety', 'Biocontainment', 'Security'],
    country: 'Switzerland',
    division: 'Undergraduate',
    whyThisProjectWon: {
      problem: 'Field-deployable synthetic biology systems need stronger containment and misuse mitigation.',
      solution: 'Designed a multi-trigger kill-switch and deployment risk assessment workflow.',
      innovation: 'Combined genetic safeguards with operational decision checkpoints.',
      judgeAppeal: 'Security concerns were addressed as part of the core engineering design.'
    }
  },
  {
    id: '2024-sp-7',
    year: 2024,
    teamName: 'ExamplePartBasic',
    projectTitle: 'New Sensor Backbone',
    awardType: 'Special Prize',
    awardName: 'Best New Basic Part',
    village: 'Diagnostics',
    summary: 'Introduced a new standardized sensing part with strong characterization data.',
    wikiLink: 'https://2024.igem.wiki/',
    tags: ['Part', 'Diagnostics', 'Registry'],
    country: 'South Korea',
    division: 'Undergraduate',
    whyThisProjectWon: {
      problem: 'Existing sensing parts lack robustness across contexts.',
      solution: 'Created and characterized a new modular sensor backbone.',
      innovation: 'Showed strong performance across multiple operating conditions.',
      judgeAppeal: 'High reuse value for future teams and strong registry contribution.'
    }
  },
  {
    id: '2024-sp-8',
    year: 2024,
    teamName: 'ExamplePartComposite',
    projectTitle: 'Logic-Gated Detection Module',
    awardType: 'Special Prize',
    awardName: 'Best New Composite Part',
    village: 'Diagnostics',
    summary: 'A composite part that integrates sensing, logic, and reporting in one unit.',
    wikiLink: 'https://2024.igem.wiki/',
    tags: ['Composite Part', 'Logic', 'Diagnostics'],
    country: 'Spain',
    division: 'Undergraduate',
    whyThisProjectWon: {
      problem: 'Teams need higher-level reusable modules rather than isolated parts.',
      solution: 'Built a composite detection module with well-documented interfaces.',
      innovation: 'Reduced integration overhead while preserving modularity.',
      judgeAppeal: 'Clear engineering abstraction and excellent documentation.'
    }
  },
  {
    id: '2024-sp-9',
    year: 2024,
    teamName: 'ExamplePartImprove',
    projectTitle: 'Optimized Expression Cassette',
    awardType: 'Special Prize',
    awardName: 'Best Improved Part',
    village: 'Manufacturing',
    summary: 'Improved a widely used registry part for better expression consistency.',
    wikiLink: 'https://2024.igem.wiki/',
    tags: ['Improved Part', 'Expression', 'Manufacturing'],
    country: 'Belgium',
    division: 'Undergraduate',
    whyThisProjectWon: {
      problem: 'A commonly used part suffers from context sensitivity and unstable output.',
      solution: 'Re-engineered the part to reduce variability and improve predictability.',
      innovation: 'Benchmarking clearly showed gains over the original part.',
      judgeAppeal: 'Practical improvement with immediate utility for the wider community.'
    }
  },
  {
    id: '2024-sp-10',
    year: 2024,
    teamName: 'ExampleCollection',
    projectTitle: 'Stress-Response Toolkit',
    awardType: 'Special Prize',
    awardName: 'Best Part Collection',
    village: 'Foundational Advance',
    summary: 'A coordinated collection of interoperable parts for stress-response engineering.',
    wikiLink: 'https://2024.igem.wiki/',
    tags: ['Part Collection', 'Toolkit', 'Foundational Advance'],
    country: 'Sweden',
    division: 'Overgraduate',
    whyThisProjectWon: {
      problem: 'Teams lack cohesive toolkits for stress-response circuit design.',
      solution: 'Assembled and characterized a collection of interoperable parts.',
      innovation: 'Made collection-level benchmarking central to the project.',
      judgeAppeal: 'High community utility with strong standardization value.'
    }
  },
  // 2023
  {
    id: '2023-1',
    year: 2023,
    teamName: 'Japan-United',
    projectTitle: 'iGEM Project',
    awardType: 'Grand Prize',
    awardName: 'Grand Prize Winner (High School)',
    village: 'New Application',
    summary: 'Innovative application of synthetic biology to solve local challenges.',
    wikiLink: 'https://2023.igem.wiki/japan-united/',
    tags: ['High School', 'Grand Prize'],
    country: 'Japan',
    division: 'High School',
    whyThisProjectWon: {
      problem: 'Local environmental issues required a biological solution.',
      solution: 'Developed a microbial system for targeted degradation of pollutants.',
      innovation: 'Unique integration of traditional knowledge with modern synthetic biology.',
      judgeAppeal: 'Strong community engagement and a well-executed project from start to finish.'
    }
  },
  {
    id: '2023-2',
    year: 2023,
    teamName: 'McGill',
    projectTitle: 'Therapeutics Project',
    awardType: 'Grand Prize',
    awardName: 'Grand Prize Winner (Undergraduate)',
    village: 'Therapeutics',
    summary: 'Novel therapeutic platforms for treating complex diseases.',
    wikiLink: 'https://2023.igem.wiki/mcgill/',
    tags: ['Therapeutics', 'Undergraduate', 'Grand Prize'],
    country: 'Canada',
    division: 'Undergraduate',
    whyThisProjectWon: {
      problem: 'Existing treatments for chronic diseases are often ineffective or have severe side effects.',
      solution: 'A modular drug delivery system using engineered vesicles for targeted therapy.',
      innovation: 'Developed a self-assembling platform that can be easily customized for different cargos.',
      judgeAppeal: 'Impressive clinical relevance and thorough safety considerations.'
    }
  },
  {
    id: '2023-3',
    year: 2023,
    teamName: 'Estonia-TUIT',
    projectTitle: 'Conservation Project',
    awardType: 'Grand Prize',
    awardName: 'Grand Prize Winner (Overgraduate)',
    village: 'Conservation',
    summary: 'Using synthetic biology to protect and restore biodiversity.',
    wikiLink: 'https://2023.igem.wiki/estonia-tuit/',
    tags: ['Conservation', 'Overgraduate', 'Grand Prize'],
    country: 'Estonia',
    division: 'Overgraduate',
    whyThisProjectWon: {
      problem: 'Endangered species are threatened by habitat loss and invasive pathogens.',
      solution: 'Developed a biological tool for monitoring and protecting vulnerable ecosystems.',
      innovation: 'Novel environmental DNA (eDNA) sensing platform for real-time biodiversity tracking.',
      judgeAppeal: 'Pioneering work in conservation biology with a strong ethical framework.'
    }
  },
  // 2022
  {
    id: '2022-1',
    year: 2022,
    teamName: 'Lambert_GA',
    projectTitle: 'iGEM Project',
    awardType: 'Grand Prize',
    awardName: 'Grand Prize Winner (High School)',
    village: 'Diagnostics',
    summary: 'Cutting-edge diagnostics developed by a high school team.',
    wikiLink: 'https://2022.igem.wiki/lambert-ga/',
    tags: ['High School', 'Grand Prize'],
    country: 'USA',
    division: 'High School',
    whyThisProjectWon: {
      problem: 'Early detection of diseases is critical but often inaccessible.',
      solution: 'A low-cost, paper-based diagnostic tool for rapid screening.',
      innovation: 'Optimized cell-free systems for high stability and sensitivity.',
      judgeAppeal: 'Technical excellence and a clear pathway to real-world deployment.'
    }
  },
  {
    id: '2022-2',
    year: 2022,
    teamName: 'TU-Eindhoven',
    projectTitle: 'Therapeutics Project',
    awardType: 'Grand Prize',
    awardName: 'Grand Prize Winner (Undergraduate)',
    village: 'Therapeutics',
    summary: 'Advanced therapeutic solutions for unmet medical needs.',
    wikiLink: 'https://2022.igem.wiki/tu-eindhoven/',
    tags: ['Therapeutics', 'Undergraduate', 'Grand Prize'],
    country: 'Netherlands',
    division: 'Undergraduate',
    whyThisProjectWon: {
      problem: 'Traditional therapies often lack precision, leading to off-target effects.',
      solution: 'Engineered smart cells that respond to specific disease markers in the body.',
      innovation: 'Developed a novel feedback loop for autonomous dose regulation.',
      judgeAppeal: 'Outstanding engineering design and strong validation in relevant models.'
    }
  },
  {
    id: '2022-3',
    year: 2022,
    teamName: 'UCopenhagen',
    projectTitle: 'Conservation Project',
    awardType: 'Grand Prize',
    awardName: 'Grand Prize Winner (Overgraduate)',
    village: 'Conservation',
    summary: 'Innovative approaches to environmental conservation.',
    wikiLink: 'https://2022.igem.wiki/ucopenhagen/',
    tags: ['Conservation', 'Overgraduate', 'Grand Prize'],
    country: 'Denmark',
    division: 'Overgraduate',
    whyThisProjectWon: {
      problem: 'Environmental degradation is accelerating, requiring urgent intervention.',
      solution: 'A biological system for restoring degraded soils and promoting plant growth.',
      innovation: 'Used metabolic engineering to enhance the survival of beneficial microbes in harsh conditions.',
      judgeAppeal: 'Strong focus on ecological impact and a well-documented project.'
    }
  },
  // 2021
  {
    id: '2021-1',
    year: 2021,
    teamName: 'LINKS_China',
    projectTitle: 'iGEM Project',
    awardType: 'Grand Prize',
    awardName: 'Grand Prize Winner (High School)',
    village: 'High School',
    summary: 'A standout project from a high school team in China.',
    wikiLink: 'https://2021.igem.wiki/links-china/',
    tags: ['High School', 'Grand Prize'],
    country: 'China',
    division: 'High School',
    whyThisProjectWon: {
      problem: 'Addressed a significant local challenge with synthetic biology.',
      solution: 'Developed a novel microbial platform for biosensing or production.',
      innovation: 'Innovative use of genetic parts to achieve high performance.',
      judgeAppeal: 'Exceptional teamwork and a highly polished final presentation.'
    }
  },
  {
    id: '2021-2',
    year: 2021,
    teamName: 'Toulouse_INSA-UPS',
    projectTitle: 'Manufacturing Project',
    awardType: 'Grand Prize',
    awardName: 'Grand Prize Winner (Undergraduate)',
    village: 'Manufacturing',
    summary: 'Revolutionizing manufacturing through synthetic biology.',
    wikiLink: 'https://2021.igem.wiki/toulouse-insa-ups/',
    tags: ['Manufacturing', 'Undergraduate', 'Grand Prize'],
    country: 'France',
    division: 'Undergraduate',
    whyThisProjectWon: {
      problem: 'Traditional manufacturing processes are often resource-intensive and polluting.',
      solution: 'Developed a biological factory for sustainable production of high-value compounds.',
      innovation: 'Novel metabolic engineering strategy for high yield and purity.',
      judgeAppeal: 'Strong industrial relevance and excellent engineering documentation.'
    }
  },
  {
    id: '2021-3',
    year: 2021,
    teamName: 'Marburg',
    projectTitle: 'Foundational Advance Project',
    awardType: 'Grand Prize',
    awardName: 'Grand Prize Winner (Overgraduate)',
    village: 'Foundational Advance',
    summary: 'Pioneering new foundational tools for the synthetic biology community.',
    wikiLink: 'https://2021.igem.wiki/marburg/',
    tags: ['Foundational Advance', 'Overgraduate', 'Grand Prize'],
    country: 'Germany',
    division: 'Overgraduate',
    whyThisProjectWon: {
      problem: 'Complexity in genetic circuit design limits the scale of synthetic biology projects.',
      solution: 'Created a new framework for modular and predictable circuit assembly.',
      innovation: 'Developed a high-throughput screening platform for part characterization.',
      judgeAppeal: 'Significant contribution to the field and a highly professional project execution.'
    }
  },
  // 2020
  {
    id: '2020-1',
    year: 2020,
    teamName: 'TAS_Taipei',
    projectTitle: 'iGEM Project',
    awardType: 'Grand Prize',
    awardName: 'Grand Prize Winner (High School)',
    village: 'High School',
    summary: 'A winning high school project from Taiwan.',
    wikiLink: 'https://2020.igem.wiki/tas-taipei/',
    tags: ['High School', 'Grand Prize'],
    country: 'Taiwan',
    division: 'High School',
    whyThisProjectWon: {
      problem: 'Addressed a critical challenge with a creative biological approach.',
      solution: 'Developed a robust and scalable microbial system.',
      innovation: 'Unique design of genetic circuits for reliable performance.',
      judgeAppeal: 'Outstanding technical achievement and clear communication of results.'
    }
  },
  {
    id: '2020-2',
    year: 2020,
    teamName: 'Vilnius-Lithuania',
    projectTitle: 'Environment Project',
    awardType: 'Grand Prize',
    awardName: 'Grand Prize Winner (Undergraduate)',
    village: 'Environment',
    summary: 'Innovative environmental solutions from Lithuania.',
    wikiLink: 'https://2020.igem.wiki/vilnius-lithuania/',
    tags: ['Environment', 'Undergraduate', 'Grand Prize'],
    country: 'Lithuania',
    division: 'Undergraduate',
    whyThisProjectWon: {
      problem: 'Environmental pollution requires new, sustainable remediation strategies.',
      solution: 'Engineered microbes for efficient degradation of plastic waste.',
      innovation: 'Novel enzyme engineering approach for enhanced activity.',
      judgeAppeal: 'Exceptional scientific rigor and strong potential for environmental impact.'
    }
  },
  {
    id: '2020-3',
    year: 2020,
    teamName: 'Leiden',
    projectTitle: 'Diagnostics Project',
    awardType: 'Grand Prize',
    awardName: 'Grand Prize Winner (Overgraduate)',
    village: 'Diagnostics',
    summary: 'Advanced diagnostic platforms from the Netherlands.',
    wikiLink: 'https://2020.igem.wiki/leiden/',
    tags: ['Diagnostics', 'Overgraduate', 'Grand Prize'],
    country: 'Netherlands',
    division: 'Overgraduate',
    whyThisProjectWon: {
      problem: 'Rapid and accurate diagnostics are essential for managing health crises.',
      solution: 'Developed a modular diagnostic platform for rapid pathogen identification.',
      innovation: 'Novel signal amplification strategy for high sensitivity.',
      judgeAppeal: 'Strong clinical focus and excellent validation of the technology.'
    }
  }
];

const SPECIAL_PRIZE_TARGETS: Array<{
  year: number;
  division: Division;
  teamSuffix: string;
  country: string;
}> = [
  { year: 2025, division: 'High School', teamSuffix: 'HS', country: 'China' },
  { year: 2024, division: 'Undergraduate', teamSuffix: 'UG', country: 'Canada' },
  { year: 2023, division: 'Overgraduate', teamSuffix: 'OG', country: 'Germany' },
];

const SPECIAL_PRIZE_BLUEPRINTS: Array<{
  awardName: string;
  village: string;
  teamBase: string;
  projectTitle: string;
  summary: string;
  tags: string[];
  problem: string;
  solution: string;
  innovation: string;
  judgeAppeal: string;
}> = [
  {
    awardName: 'Best Model',
    village: 'Foundational Advance',
    teamBase: 'ModelForge',
    projectTitle: 'Predictive Circuit Design Platform',
    summary: 'A modeling-first workflow linking design space exploration to robust wet-lab validation.',
    tags: ['Best Model', 'Modeling', 'Design'],
    problem: 'Teams need stronger predictive models to reduce iteration cost and improve design quality.',
    solution: 'Built a parameterized modeling workflow tied directly to experiment planning and validation.',
    innovation: 'Introduced uncertainty-aware ranking and cross-context simulation for candidate designs.',
    judgeAppeal: 'Clear traceability from mathematical reasoning to experimental decisions.'
  },
  {
    awardName: 'Best Measurement',
    village: 'Diagnostics',
    teamBase: 'MeasureLab',
    projectTitle: 'Quantitative Validation Toolkit',
    summary: 'A rigorous measurement pipeline with calibration, controls, and field-friendly reporting.',
    tags: ['Best Measurement', 'Calibration', 'Diagnostics'],
    problem: 'Many iGEM projects struggle to produce reproducible measurements across devices and teams.',
    solution: 'Created a standardized quantification workflow with calibration curves and error reporting.',
    innovation: 'Device-agnostic normalization and repeatability benchmarks were integrated end-to-end.',
    judgeAppeal: 'High data quality and reproducibility make the work immediately reusable.'
  },
  {
    awardName: 'Best Hardware',
    village: 'Diagnostics',
    teamBase: 'BioDevice',
    projectTitle: 'Portable Incubation and Readout System',
    summary: 'A modular hardware stack for incubation, mixing, and low-cost optical detection.',
    tags: ['Best Hardware', 'Device', 'Open-source'],
    problem: 'Promising assays often fail outside the lab because the hardware is inaccessible or too expensive.',
    solution: 'Designed a portable open-source instrument with swappable modules and simple maintenance.',
    innovation: 'Balanced manufacturability, modularity, and field robustness in one practical device.',
    judgeAppeal: 'Strong engineering execution with immediate real-world deployment potential.'
  },
  {
    awardName: 'Best Software Tool',
    village: 'Foundational Advance',
    teamBase: 'SynSoft',
    projectTitle: 'Construct and Primer Design Assistant',
    summary: 'A software workflow for construct design, validation, and assembly planning.',
    tags: ['Best Software Tool', 'Automation', 'Design'],
    problem: 'Manual design of constructs and primers is slow, error-prone, and hard to audit.',
    solution: 'Built a design assistant that automates constraint checking, primer planning, and exports.',
    innovation: 'Integrated part-aware design rules with practical lab execution outputs.',
    judgeAppeal: 'The tool improves day-to-day execution rather than being a demo-only app.'
  },
  {
    awardName: 'Best Integrated Human Practices',
    village: 'Safety & Security',
    teamBase: 'StakeLab',
    projectTitle: 'Stakeholder-Driven Biosafety Framework',
    summary: 'A human-practices program that directly changes project design through stakeholder input.',
    tags: ['Best Integrated Human Practices', 'Policy', 'Biosafety'],
    problem: 'Projects often add human practices too late for them to affect technical decisions.',
    solution: 'Ran structured stakeholder engagement and translated feedback into engineering choices.',
    innovation: 'Documented decision logs show how community and policy input altered the build path.',
    judgeAppeal: 'The human-practices work is deeply integrated rather than peripheral.'
  },
  {
    awardName: 'Best Education',
    village: 'Education',
    teamBase: 'EduBio',
    projectTitle: 'Synthetic Biology Teaching Kit',
    summary: 'A modular education kit with curriculum, teacher guides, and accessible experiments.',
    tags: ['Best Education', 'Curriculum', 'Outreach'],
    problem: 'Many students cannot access hands-on synthetic biology education in a safe and structured way.',
    solution: 'Created a teaching kit with classroom materials, assessments, and low-barrier experiments.',
    innovation: 'The kit supports localization, remote delivery, and differentiated learning paths.',
    judgeAppeal: 'Clear learning outcomes and evidence of adoption strengthen the case.'
  },
  {
    awardName: 'Inclusivity Award',
    village: 'Education',
    teamBase: 'AccessBio',
    projectTitle: 'Inclusive SynBio Participation Platform',
    summary: 'An accessibility-first participation model for teams, learners, and local communities.',
    tags: ['Inclusivity Award', 'Accessibility', 'Education'],
    problem: 'Language, disability, and cost barriers exclude many people from synthetic biology participation.',
    solution: 'Developed multilingual, low-bandwidth, accessibility-aware content and participation workflows.',
    innovation: 'Combined accessible materials with practical pathways for labs and schools to adopt them.',
    judgeAppeal: 'The work expands who can participate, not just what gets built.'
  },
  {
    awardName: 'Sustainable Development Impact',
    village: 'Environment',
    teamBase: 'SustainBio',
    projectTitle: 'Climate-Aware Resource Recovery Platform',
    summary: 'A synthetic biology solution designed around measurable long-term sustainability outcomes.',
    tags: ['Sustainable Development Impact', 'Environment', 'Impact'],
    problem: 'Teams often claim sustainability impact without integrating it into the technical design.',
    solution: 'Built a platform that reduces waste, recovers value, and quantifies lifecycle benefits.',
    innovation: 'Sustainability metrics are treated as core design constraints from the start.',
    judgeAppeal: 'The impact narrative is supported by concrete engineering and measurable outcomes.'
  },
  {
    awardName: 'Safety & Security Award',
    village: 'Safety & Security',
    teamBase: 'SafeSwitch',
    projectTitle: 'Layered Biocontainment Architecture',
    summary: 'A multi-layer safety design combining genetic safeguards and operational controls.',
    tags: ['Safety & Security Award', 'Biocontainment', 'Risk'],
    problem: 'Powerful engineered systems need stronger containment and misuse mitigation strategies.',
    solution: 'Designed layered biocontainment triggers and a deployment decision framework.',
    innovation: 'Safety measures were engineered into the project core rather than appended at the end.',
    judgeAppeal: 'Clear risk ownership and technically grounded safeguards make the work credible.'
  },
  {
    awardName: 'Best Entrepreneurship',
    village: 'Manufacturing',
    teamBase: 'VentureSyn',
    projectTitle: 'Scalable Bioproduct Commercialization Plan',
    summary: 'A bench-to-market strategy grounded in scale-up, unit economics, and stakeholder validation.',
    tags: ['Best Entrepreneurship', 'Scale-up', 'Market'],
    problem: 'Strong prototypes often fail because the path to adoption and scale is underdeveloped.',
    solution: 'Mapped cost structure, market entry, partnerships, and regulatory milestones around the project.',
    innovation: 'The commercialization plan is tightly linked to technical de-risking experiments.',
    judgeAppeal: 'The team demonstrates both scientific merit and a credible route to deployment.'
  },
  {
    awardName: 'Best New Basic Part',
    village: 'Diagnostics',
    teamBase: 'PartNova',
    projectTitle: 'Standardized Sensor Backbone',
    summary: 'A newly characterized part designed for stable sensing performance across contexts.',
    tags: ['Best New Basic Part', 'Registry', 'Diagnostics'],
    problem: 'Existing parts often underperform when moved between chassis or operating conditions.',
    solution: 'Created and characterized a new basic part with practical application value.',
    innovation: 'The part was benchmarked systematically across multiple use scenarios.',
    judgeAppeal: 'High registry utility and strong characterization make the contribution durable.'
  },
  {
    awardName: 'Best New Composite Part',
    village: 'Diagnostics',
    teamBase: 'CompositeLogic',
    projectTitle: 'Logic-Gated Detection Module',
    summary: 'A composite part integrating sensing, logic, and reporting into one reusable module.',
    tags: ['Best New Composite Part', 'Logic', 'Diagnostics'],
    problem: 'Teams need higher-level components that simplify system integration without losing flexibility.',
    solution: 'Built a composite part with defined interfaces and clear performance characterization.',
    innovation: 'The module reduces assembly complexity while preserving modular design principles.',
    judgeAppeal: 'Excellent engineering abstraction and strong documentation for reuse.'
  },
  {
    awardName: 'Best Improved Part',
    village: 'Manufacturing',
    teamBase: 'RefinePart',
    projectTitle: 'Optimized Expression Cassette',
    summary: 'An improved registry part designed for better consistency and lower context sensitivity.',
    tags: ['Best Improved Part', 'Expression', 'Manufacturing'],
    problem: 'Widely used parts can become bottlenecks when their behavior is unstable across workflows.',
    solution: 'Re-engineered a common part to improve reliability, output consistency, and usability.',
    innovation: 'Improvement was demonstrated with direct side-by-side benchmarking against the original.',
    judgeAppeal: 'A practical, validated improvement benefits many future teams.'
  },
  {
    awardName: 'Best Part Collection',
    village: 'Foundational Advance',
    teamBase: 'ToolkitLab',
    projectTitle: 'Stress-Response Part Collection',
    summary: 'A curated set of interoperable parts built to function as a coherent toolkit.',
    tags: ['Best Part Collection', 'Toolkit', 'Foundational Advance'],
    problem: 'Collections are most useful when parts are designed, documented, and benchmarked together.',
    solution: 'Assembled a coordinated collection with shared standards and comparative characterization.',
    innovation: 'The project emphasizes collection-level utility rather than isolated part performance.',
    judgeAppeal: 'The result is a toolkit teams can adopt immediately for future builds.'
  },
];

const existingSpecialPrizeKeys = new Set(
  BASE_AWARDS
    .filter((award) => award.awardType === 'Special Prize')
    .map((award) => `${award.awardName}__${award.year}__${award.division}`),
);

const GENERATED_SPECIAL_PRIZE_AWARDS: AwardEntry[] = SPECIAL_PRIZE_BLUEPRINTS.flatMap((blueprint) =>
  SPECIAL_PRIZE_TARGETS
    .filter((target) => !existingSpecialPrizeKeys.has(`${blueprint.awardName}__${target.year}__${target.division}`))
    .map((target) => {
      const slug = blueprint.awardName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const divisionLabel =
        target.division === 'High School'
          ? 'high school'
          : target.division === 'Undergraduate'
            ? 'undergraduate'
            : 'overgraduate';

      return {
        id: `${target.year}-${slug}-${target.teamSuffix.toLowerCase()}`,
        year: target.year,
        teamName: `${blueprint.teamBase}-${target.teamSuffix}`,
        projectTitle: blueprint.projectTitle,
        awardType: 'Special Prize',
        awardName: blueprint.awardName,
        village: blueprint.village,
        summary: `${blueprint.summary} Tailored for ${divisionLabel} competition benchmarks.`,
        wikiLink: `https://${target.year}.igem.wiki/`,
        tags: [...blueprint.tags, target.division],
        country: target.country,
        division: target.division,
        whyThisProjectWon: {
          problem: blueprint.problem,
          solution: blueprint.solution,
          innovation: blueprint.innovation,
          judgeAppeal: `${blueprint.judgeAppeal} This entry represents a ${divisionLabel} benchmark for ${target.year}.`,
        },
      };
    }),
);

export const MOCK_AWARDS: AwardEntry[] = [...BASE_AWARDS, ...GENERATED_SPECIAL_PRIZE_AWARDS];
