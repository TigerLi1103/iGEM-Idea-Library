import { AwardEntry } from '../types';

export const MOCK_AWARDS: AwardEntry[] = [
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
