export type PrizeStatus = 'Winner' | 'Nominee';

export interface TeamPrize {
  name: string;
  status: PrizeStatus;
}

export interface TeamAwardRecord {
  id: string;
  teamName: string;
  year: number;
  division: 'High School' | 'Undergraduate' | 'Graduate' | null;
  village: string | null;
  grandPrizeLevel: string | null;
  top10: boolean;
  villageAwards: TeamPrize[];
  medal: 'Gold' | 'Silver' | 'Bronze' | null;
  specialPrizes: TeamPrize[];
  countries: string[];
}

export const TEAM_AWARD_RECORDS: TeamAwardRecord[] = [
  {
    "id": "2020-Aachen",
    "teamName": "Aachen",
    "year": 2020,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": "1st Runner-up",
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Poster",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Promotion Video",
        "status": "Winner"
      },
      {
        "name": "Track",
        "status": "Winner"
      }
    ],
    "countries": [
      "Germany"
    ]
  },
  {
    "id": "2020-Aalto-Helsinki",
    "teamName": "Aalto-Helsinki",
    "year": 2020,
    "division": "Graduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Track",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-ASTWS-China",
    "teamName": "ASTWS-China",
    "year": 2020,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Athens",
    "teamName": "Athens",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Manufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Promotion Video",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Baltimore_BioCrew",
    "teamName": "Baltimore_BioCrew",
    "year": 2020,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-BHSF",
    "teamName": "BHSF",
    "year": 2020,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Promotion Video",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-BITSPilani-Goa_India",
    "teamName": "BITSPilani-Goa_India",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Winner"
      },
      {
        "name": "Best Software Tool",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Calgary",
    "teamName": "Calgary",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-CCA_San_Diego",
    "teamName": "CCA_San_Diego",
    "year": 2020,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-CCU_Taiwan",
    "teamName": "CCU_Taiwan",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-CLS_CLSG_UK",
    "teamName": "CLS_CLSG_UK",
    "year": 2020,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      },
      {
        "name": "Best Poster",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "iGEMers Prize",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Concordia-Montreal",
    "teamName": "Concordia-Montreal",
    "year": 2020,
    "division": "Graduate",
    "village": "Software",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-CPU_CHINA",
    "teamName": "CPU_CHINA",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-CSMU_Taiwan",
    "teamName": "CSMU_Taiwan",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-DNHS_SanDiego_CA",
    "teamName": "DNHS_SanDiego_CA",
    "year": 2020,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Poster",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-DTU-Denmark",
    "teamName": "DTU-Denmark",
    "year": 2020,
    "division": "Graduate",
    "village": "Manufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Winner"
      },
      {
        "name": "Best Part Collection",
        "status": "Winner"
      },
      {
        "name": "Best Poster",
        "status": "Nominee"
      },
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Edinburgh",
    "teamName": "Edinburgh",
    "year": 2020,
    "division": "Graduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Evry_Paris-Saclay",
    "teamName": "Evry_Paris-Saclay",
    "year": 2020,
    "division": "Graduate",
    "village": "New Application",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Track",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-FCB-UANL",
    "teamName": "FCB-UANL",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Fudan",
    "teamName": "Fudan",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-GreatBay_SCIE",
    "teamName": "GreatBay_SCIE",
    "year": 2020,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "1st Runner-up",
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Winner"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Winner"
      },
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Winner"
      },
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Poster",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Winner"
      }
    ],
    "countries": [
      "China"
    ]
  },
  {
    "id": "2020-GreatBay_SZ",
    "teamName": "GreatBay_SZ",
    "year": 2020,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Poster",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Grenoble_Alpes",
    "teamName": "Grenoble_Alpes",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Groningen",
    "teamName": "Groningen",
    "year": 2020,
    "division": "Graduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "Track",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-GunnVistaPingry_US",
    "teamName": "GunnVistaPingry_US",
    "year": 2020,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-GZ_HFI",
    "teamName": "GZ_HFI",
    "year": 2020,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Hainan_China",
    "teamName": "Hainan_China",
    "year": 2020,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [
      {
        "name": "Best Promotion Video",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Hannover",
    "teamName": "Hannover",
    "year": 2020,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Harvard",
    "teamName": "Harvard",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-IISER-Pune-India",
    "teamName": "IISER-Pune-India",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "iGEMers Prize",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-KCL_UK",
    "teamName": "KCL_UK",
    "year": 2020,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      },
      {
        "name": "Track",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-KEYSTONE",
    "teamName": "KEYSTONE",
    "year": 2020,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Korea_HS",
    "teamName": "Korea_HS",
    "year": 2020,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "iGEMers Prize",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-KU_ISTANBUL",
    "teamName": "KU_ISTANBUL",
    "year": 2020,
    "division": "Undergraduate",
    "village": "New Application",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Lambert_GA",
    "teamName": "Lambert_GA",
    "year": 2020,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Leiden",
    "teamName": "Leiden",
    "year": 2020,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": "Grand Prize Winner",
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Winner"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Poster",
        "status": "Nominee"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Winner"
      },
      {
        "name": "Track",
        "status": "Winner"
      }
    ],
    "countries": [
      "Netherlands"
    ]
  },
  {
    "id": "2020-Lethbridge_HS",
    "teamName": "Lethbridge_HS",
    "year": 2020,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-LINKS_China",
    "teamName": "LINKS_China",
    "year": 2020,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Manchester",
    "teamName": "Manchester",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Mingdao",
    "teamName": "Mingdao",
    "year": 2020,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-NCKU_Tainan",
    "teamName": "NCKU_Tainan",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Winner"
      },
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Poster",
        "status": "Nominee"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-NCTU_Formosa",
    "teamName": "NCTU_Formosa",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Nottingham",
    "teamName": "Nottingham",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-OhioState",
    "teamName": "OhioState",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-OUC-China",
    "teamName": "OUC-China",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Information Processing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Paris_Bettencourt",
    "teamName": "Paris_Bettencourt",
    "year": 2020,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [
      {
        "name": "Best Poster",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-PYMS_GZ_China",
    "teamName": "PYMS_GZ_China",
    "year": 2020,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-QHFZ-China",
    "teamName": "QHFZ-China",
    "year": 2020,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Queens_Canada",
    "teamName": "Queens_Canada",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Rochester",
    "teamName": "Rochester",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Inclusivity Award",
        "status": "Winner"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-SDU-Denmark",
    "teamName": "SDU-Denmark",
    "year": 2020,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Hardware",
        "status": "Winner"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Winner"
      },
      {
        "name": "Track",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Shanghai_SFLS_SPBS",
    "teamName": "Shanghai_SFLS_SPBS",
    "year": 2020,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-SHSBNU_China",
    "teamName": "SHSBNU_China",
    "year": 2020,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Poster",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-SMS_Shenzhen",
    "teamName": "SMS_Shenzhen",
    "year": 2020,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Sorbonne_U_Paris",
    "teamName": "Sorbonne_U_Paris",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Plant Synthetic Biology",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Stanford",
    "teamName": "Stanford",
    "year": 2020,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Track",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Stockholm",
    "teamName": "Stockholm",
    "year": 2020,
    "division": "Graduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Track",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-SZ-SHD",
    "teamName": "SZ-SHD",
    "year": 2020,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-TAS_Taipei",
    "teamName": "TAS_Taipei",
    "year": 2020,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Grand Prize Winner",
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Winner"
      },
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Measurement",
        "status": "Winner"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best New Basic Part",
        "status": "Winner"
      },
      {
        "name": "Best New Composite Part",
        "status": "Winner"
      },
      {
        "name": "Best Part Collection",
        "status": "Winner"
      },
      {
        "name": "Best Poster",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Winner"
      },
      {
        "name": "Best Software Tool",
        "status": "Winner"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": [
      "Taiwan"
    ]
  },
  {
    "id": "2020-TAU_Israel",
    "teamName": "TAU_Israel",
    "year": 2020,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Software Tool",
        "status": "Winner"
      },
      {
        "name": "Track",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Technion-Israel",
    "teamName": "Technion-Israel",
    "year": 2020,
    "division": "Graduate",
    "village": "New Application",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Toulouse_INSA-UPS",
    "teamName": "Toulouse_INSA-UPS",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": "1st Runner-up",
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Poster",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": [
      "France"
    ]
  },
  {
    "id": "2020-TU_Darmstadt",
    "teamName": "TU_Darmstadt",
    "year": 2020,
    "division": "Graduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Sustainable Development Impact",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "Track",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-TU_Kaiserslautern",
    "teamName": "TU_Kaiserslautern",
    "year": 2020,
    "division": "Graduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Track",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-TUDelft",
    "teamName": "TUDelft",
    "year": 2020,
    "division": "Graduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Winner"
      },
      {
        "name": "Best New Basic Part",
        "status": "Winner"
      },
      {
        "name": "Best New Composite Part",
        "status": "Winner"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Poster",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Winner"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "iGEMers Prize",
        "status": "Winner"
      },
      {
        "name": "Safety Commendation",
        "status": "Winner"
      },
      {
        "name": "Track",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-UCopenhagen",
    "teamName": "UCopenhagen",
    "year": 2020,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Winner"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-UCSC",
    "teamName": "UCSC",
    "year": 2020,
    "division": "Graduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Track",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-UiOslo_Norway",
    "teamName": "UiOslo_Norway",
    "year": 2020,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-UNILausanne",
    "teamName": "UNILausanne",
    "year": 2020,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Measurement",
        "status": "Winner"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-UNSW_Australia",
    "teamName": "UNSW_Australia",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Winner"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Winner"
      },
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-UofUppsala",
    "teamName": "UofUppsala",
    "year": 2020,
    "division": "Graduate",
    "village": "New Application",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Track",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-UPF_Barcelona",
    "teamName": "UPF_Barcelona",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Winner"
      },
      {
        "name": "Best Poster",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-UZurich",
    "teamName": "UZurich",
    "year": 2020,
    "division": "Undergraduate",
    "village": "New Application",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Vilnius-Lithuania",
    "teamName": "Vilnius-Lithuania",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Environment",
    "grandPrizeLevel": "Grand Prize Winner",
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Measurement",
        "status": "Winner"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Poster",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": [
      "Lithuania"
    ]
  },
  {
    "id": "2020-Waseda",
    "teamName": "Waseda",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Information Processing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-Waterloo",
    "teamName": "Waterloo",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Manufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-William_and_Mary",
    "teamName": "William_and_Mary",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Winner"
      },
      {
        "name": "Best Poster",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2020-XMU-China",
    "teamName": "XMU-China",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": "2nd Runner-up",
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": [
      "China"
    ]
  },
  {
    "id": "2020-ZJUT_China_B",
    "teamName": "ZJUT_China_B",
    "year": 2020,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Aachen",
    "teamName": "Aachen",
    "year": 2021,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Foundational Advance Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Winner"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Aboa",
    "teamName": "Aboa",
    "year": 2021,
    "division": "Graduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Bielefeld-CeBiTec",
    "teamName": "Bielefeld-CeBiTec",
    "year": 2021,
    "division": "Graduate",
    "village": "New Application",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best New Application Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-BJEA_China",
    "teamName": "BJEA_China",
    "year": 2021,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-BNU-China",
    "teamName": "BNU-China",
    "year": 2021,
    "division": "Graduate",
    "village": "Manufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-BOKU-Vienna",
    "teamName": "BOKU-Vienna",
    "year": 2021,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Bolivia",
    "teamName": "Bolivia",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Environment Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Inclusivity Award",
        "status": "Winner"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-British_Columbia",
    "teamName": "British_Columbia",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2021-Calgary",
    "teamName": "Calgary",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Environment Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-CCA_San_Diego",
    "teamName": "CCA_San_Diego",
    "year": 2021,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Winner"
      },
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-CCU_Taiwan",
    "teamName": "CCU_Taiwan",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-CHINA-FAFU",
    "teamName": "CHINA-FAFU",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Sustainable Development",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-City_of_London_UK",
    "teamName": "City_of_London_UK",
    "year": 2021,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Concordia-Montreal",
    "teamName": "Concordia-Montreal",
    "year": 2021,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-CPU_CHINA",
    "teamName": "CPU_CHINA",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-CSMU_Taiwan",
    "teamName": "CSMU_Taiwan",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-CSU_CHINA",
    "teamName": "CSU_CHINA",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-DTU-Denmark",
    "teamName": "DTU-Denmark",
    "year": 2021,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Foundational Advance Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-DUT_China",
    "teamName": "DUT_China",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Environment Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Ecuador",
    "teamName": "Ecuador",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Food & Nutrition Project",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Winner"
      },
      {
        "name": "Best New Composite Part",
        "status": "Winner"
      },
      {
        "name": "Best Sustainable Development",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-EPFL",
    "teamName": "EPFL",
    "year": 2021,
    "division": "Graduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Environment Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Wiki",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Evry_Paris-Saclay",
    "teamName": "Evry_Paris-Saclay",
    "year": 2021,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-FCB-UANL",
    "teamName": "FCB-UANL",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Environment",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Environment Project",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Safety & Security",
        "status": "Nominee"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Fudan",
    "teamName": "Fudan",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      },
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Fujian_United",
    "teamName": "Fujian_United",
    "year": 2021,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Gifu",
    "teamName": "Gifu",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-GO_Paris-Saclay",
    "teamName": "GO_Paris-Saclay",
    "year": 2021,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-GreatBay_SZ",
    "teamName": "GreatBay_SZ",
    "year": 2021,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-GreatBay_United",
    "teamName": "GreatBay_United",
    "year": 2021,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Groningen",
    "teamName": "Groningen",
    "year": 2021,
    "division": "Graduate",
    "village": "Environment",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Environment Project",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Heidelberg",
    "teamName": "Heidelberg",
    "year": 2021,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-HK_SSC",
    "teamName": "HK_SSC",
    "year": 2021,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Humboldt_Berlin",
    "teamName": "Humboldt_Berlin",
    "year": 2021,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-HZAU-China",
    "teamName": "HZAU-China",
    "year": 2021,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Diagnostics Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Winner"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-iBowu-China",
    "teamName": "iBowu-China",
    "year": 2021,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-IISER_Berhampur",
    "teamName": "IISER_Berhampur",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2021-IISER_Kolkata",
    "teamName": "IISER_Kolkata",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-IISER-Pune-India",
    "teamName": "IISER-Pune-India",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Manufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-IISER-Tirupati_India",
    "teamName": "IISER-Tirupati_India",
    "year": 2021,
    "division": "Undergraduate",
    "village": "New Application",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best New Application Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Safety & Security",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Ionis_Paris",
    "teamName": "Ionis_Paris",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2021-IvyMaker-China",
    "teamName": "IvyMaker-China",
    "year": 2021,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-KCL_UK",
    "teamName": "KCL_UK",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Winner"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Korea_HS",
    "teamName": "Korea_HS",
    "year": 2021,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Kyoto",
    "teamName": "Kyoto",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Lambert_GA",
    "teamName": "Lambert_GA",
    "year": 2021,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Winner"
      },
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Safety & Security",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Leiden",
    "teamName": "Leiden",
    "year": 2021,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Safety & Security",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Lethbridge_HS",
    "teamName": "Lethbridge_HS",
    "year": 2021,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Linkoping_Sweden",
    "teamName": "Linkoping_Sweden",
    "year": 2021,
    "division": "Graduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Environment Project",
        "status": "Nominee"
      }
    ],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2021-LINKS_China",
    "teamName": "LINKS_China",
    "year": 2021,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Grand Prize Winner",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best New Basic Part",
        "status": "Winner"
      },
      {
        "name": "Best New Composite Part",
        "status": "Winner"
      },
      {
        "name": "Best Part Collection",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Winner"
      },
      {
        "name": "Best Sustainable Development",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Winner"
      }
    ],
    "countries": [
      "China"
    ]
  },
  {
    "id": "2021-LMSU",
    "teamName": "LMSU",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Food & Nutrition Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2021-Marburg",
    "teamName": "Marburg",
    "year": 2021,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": "Grand Prize Winner",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Foundational Advance Project",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Winner"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Winner"
      },
      {
        "name": "Best Measurement",
        "status": "Winner"
      },
      {
        "name": "Best New Basic Part",
        "status": "Winner"
      },
      {
        "name": "Best New Composite Part",
        "status": "Winner"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Plant Synthetic Biology",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Winner"
      },
      {
        "name": "Best Safety & Security",
        "status": "Winner"
      },
      {
        "name": "Best Software Tool",
        "status": "Winner"
      },
      {
        "name": "Best Sustainable Development",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": [
      "Germany"
    ]
  },
  {
    "id": "2021-MiamiU_OH",
    "teamName": "MiamiU_OH",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Food & Nutrition Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Plant Synthetic Biology",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Mingdao",
    "teamName": "Mingdao",
    "year": 2021,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Measurement",
        "status": "Winner"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-NCKU_Tainan",
    "teamName": "NCKU_Tainan",
    "year": 2021,
    "division": "Graduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-NCTU_Formosa",
    "teamName": "NCTU_Formosa",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-NDNF_China",
    "teamName": "NDNF_China",
    "year": 2021,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Safety & Security",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-NEFU_China",
    "teamName": "NEFU_China",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics Project",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-NJMU-China",
    "teamName": "NJMU-China",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-NMU_China",
    "teamName": "NMU_China",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-NTU-Singapore",
    "teamName": "NTU-Singapore",
    "year": 2021,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-NU_Kazakhstan",
    "teamName": "NU_Kazakhstan",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Environment",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Environment Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-NUDT_CHINA",
    "teamName": "NUDT_CHINA",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Foundational Advance Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-NUS_Singapore",
    "teamName": "NUS_Singapore",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Manufacturing",
    "grandPrizeLevel": "1st Runner-up",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing Project",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Winner"
      }
    ],
    "countries": [
      "Singapore"
    ]
  },
  {
    "id": "2021-NYCU-Taipei",
    "teamName": "NYCU-Taipei",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Paris_Bettencourt",
    "teamName": "Paris_Bettencourt",
    "year": 2021,
    "division": "Graduate",
    "village": "Manufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing Project",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Patras",
    "teamName": "Patras",
    "year": 2021,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Purdue",
    "teamName": "Purdue",
    "year": 2021,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics Project",
        "status": "Nominee"
      }
    ],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2021-Rochester",
    "teamName": "Rochester",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Hardware",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-SDU-Denmark",
    "teamName": "SDU-Denmark",
    "year": 2021,
    "division": "Graduate",
    "village": "Manufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-ShanghaiTech_China",
    "teamName": "ShanghaiTech_China",
    "year": 2021,
    "division": "Undergraduate",
    "village": "New Application",
    "grandPrizeLevel": "2nd Runner-up",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best New Application Project",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Winner"
      },
      {
        "name": "Best Sustainable Development",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": [
      "China"
    ]
  },
  {
    "id": "2021-SHSBNU_China",
    "teamName": "SHSBNU_China",
    "year": 2021,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-SHSID",
    "teamName": "SHSID",
    "year": 2021,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-SJTang",
    "teamName": "SJTang",
    "year": 2021,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-SJTU-Software",
    "teamName": "SJTU-Software",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Software",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Software Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2021-SMS_Shenzhen",
    "teamName": "SMS_Shenzhen",
    "year": 2021,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-SZ_SHD",
    "teamName": "SZ_SHD",
    "year": 2021,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "1st Runner-up",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": [
      "China"
    ]
  },
  {
    "id": "2021-SZPT-CHINA",
    "teamName": "SZPT-CHINA",
    "year": 2021,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics Project",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-SZU-China",
    "teamName": "SZU-China",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Manufacturing",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-TAS_Taipei",
    "teamName": "TAS_Taipei",
    "year": 2021,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Winner"
      },
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Tec-Monterrey",
    "teamName": "Tec-Monterrey",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Thessaly",
    "teamName": "Thessaly",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Food & Nutrition Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2021-Tianjin",
    "teamName": "Tianjin",
    "year": 2021,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Tongji_Software",
    "teamName": "Tongji_Software",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Software",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Software Project",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2021-Toulouse_INSA-UPS",
    "teamName": "Toulouse_INSA-UPS",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Manufacturing",
    "grandPrizeLevel": "Grand Prize Winner",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": [
      "France"
    ]
  },
  {
    "id": "2021-TU_Darmstadt",
    "teamName": "TU_Darmstadt",
    "year": 2021,
    "division": "Graduate",
    "village": "New Application",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best New Application Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      },
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-TU_Kaiserslautern",
    "teamName": "TU_Kaiserslautern",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Foundational Advance Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2021-TU-Eindhoven",
    "teamName": "TU-Eindhoven",
    "year": 2021,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-TUDelft",
    "teamName": "TUDelft",
    "year": 2021,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": "1st Runner-up",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Diagnostics Project",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Safety & Security",
        "status": "Nominee"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Winner"
      },
      {
        "name": "Best Sustainable Development",
        "status": "Nominee"
      }
    ],
    "countries": [
      "Netherlands"
    ]
  },
  {
    "id": "2021-UESTC-China",
    "teamName": "UESTC-China",
    "year": 2021,
    "division": "Undergraduate",
    "village": "New Application",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best New Application Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-ULaval",
    "teamName": "ULaval",
    "year": 2021,
    "division": "Graduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Food & Nutrition Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-UNILA_LatAm",
    "teamName": "UNILA_LatAm",
    "year": 2021,
    "division": "Graduate",
    "village": "New Application",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best New Application Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-UNILausanne",
    "teamName": "UNILausanne",
    "year": 2021,
    "division": "Graduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Food & Nutrition Project",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-UParis_BME",
    "teamName": "UParis_BME",
    "year": 2021,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-UPenn",
    "teamName": "UPenn",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Foundational Advance Project",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Uppsala",
    "teamName": "Uppsala",
    "year": 2021,
    "division": "Graduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-USP-Brazil",
    "teamName": "USP-Brazil",
    "year": 2021,
    "division": "Graduate",
    "village": "Environment",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Environment Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Plant Synthetic Biology",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-UZurich",
    "teamName": "UZurich",
    "year": 2021,
    "division": "Graduate",
    "village": "New Application",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best New Application Project",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Plant Synthetic Biology",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Vilnius-Lithuania",
    "teamName": "Vilnius-Lithuania",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Winner"
      },
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      },
      {
        "name": "Best Measurement",
        "status": "Winner"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Wageningen_UR",
    "teamName": "Wageningen_UR",
    "year": 2021,
    "division": "Graduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Environment Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-Warwick",
    "teamName": "Warwick",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-WHU-China",
    "teamName": "WHU-China",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-William_and_Mary",
    "teamName": "William_and_Mary",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Foundational Advance Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2021-Worldshaper-Nanjing",
    "teamName": "Worldshaper-Nanjing",
    "year": 2021,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-XMU-China",
    "teamName": "XMU-China",
    "year": 2021,
    "division": "Undergraduate",
    "village": "New Application",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best New Application Project",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2021-ZJU-China",
    "teamName": "ZJU-China",
    "year": 2021,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Therapeutics Project",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best New Basic Part",
        "status": "Winner"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Safety & Security",
        "status": "Winner"
      },
      {
        "name": "Best Software Tool",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Aachen",
    "teamName": "Aachen",
    "year": 2022,
    "division": "Graduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Environment",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-AFCM-Egypt",
    "teamName": "AFCM-Egypt",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Safety and Security Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Athens",
    "teamName": "Athens",
    "year": 2022,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Safety and Security Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Austin_UTexas",
    "teamName": "Austin_UTexas",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Foundational Advance",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-BFSU-ICUnited",
    "teamName": "BFSU-ICUnited",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Bio-Brussels",
    "teamName": "Bio-Brussels",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-BJEA_China",
    "teamName": "BJEA_China",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-BostonU_HW",
    "teamName": "BostonU_HW",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Environment",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2022-BS_United_China",
    "teamName": "BS_United_China",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Calgary",
    "teamName": "Calgary",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Sustainable Development Impact",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Cambridge",
    "teamName": "Cambridge",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-CAU_China",
    "teamName": "CAU_China",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Chalmers-Gothenburg",
    "teamName": "Chalmers-Gothenburg",
    "year": 2022,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-City_of_London_UK",
    "teamName": "City_of_London_UK",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-CPU_CHINA",
    "teamName": "CPU_CHINA",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2022-CU-Boulder",
    "teamName": "CU-Boulder",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [
      {
        "name": "Best Plant Synthetic Biology",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-DUT_China",
    "teamName": "DUT_China",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Foundational Advance",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Edinburgh-UHAs_Ghana",
    "teamName": "Edinburgh-UHAs_Ghana",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Environment",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2022-EPFL",
    "teamName": "EPFL",
    "year": 2022,
    "division": "Graduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Estonia_TUIT",
    "teamName": "Estonia_TUIT",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Evry_Paris-Saclay",
    "teamName": "Evry_Paris-Saclay",
    "year": 2022,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Exeter",
    "teamName": "Exeter",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Inclusivity Award",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Freiburg",
    "teamName": "Freiburg",
    "year": 2022,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Foundational Advance",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2022-Fudan",
    "teamName": "Fudan",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Winner"
      },
      {
        "name": "Best New Basic Part",
        "status": "Winner"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Winner"
      },
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Fujian_United",
    "teamName": "Fujian_United",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-GEMS_Taiwan",
    "teamName": "GEMS_Taiwan",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Winner"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "Safety and Security Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-GreatBay_SCIE",
    "teamName": "GreatBay_SCIE",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Groningen",
    "teamName": "Groningen",
    "year": 2022,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Safety and Security Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-HKUST",
    "teamName": "HKUST",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": "2nd Runner-up",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Food & Nutrition",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "Safety and Security Award",
        "status": "Winner"
      }
    ],
    "countries": [
      "Hong Kong"
    ]
  },
  {
    "id": "2022-Hopkins",
    "teamName": "Hopkins",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Plant Synthetic Biology",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-ICJFLS",
    "teamName": "ICJFLS",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-IISc-Bengaluru",
    "teamName": "IISc-Bengaluru",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Climate Crisis",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Climate Crisis",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2022-IISER_Mohali",
    "teamName": "IISER_Mohali",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Foundational Advance",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-IISER_TVM",
    "teamName": "IISER_TVM",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Safety and Security Award",
        "status": "Nominee"
      },
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-IISER-Pune2_India",
    "teamName": "IISER-Pune2_India",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      },
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-IISER-Tirupati_India",
    "teamName": "IISER-Tirupati_India",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2022-Imperial_College_London",
    "teamName": "Imperial_College_London",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Food & Nutrition",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-INSA_Lyon1",
    "teamName": "INSA_Lyon1",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": "1st Runner-up",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Food & Nutrition",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Winner"
      },
      {
        "name": "Best Hardware",
        "status": "Winner"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Winner"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Winner"
      },
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Winner"
      }
    ],
    "countries": [
      "France"
    ]
  },
  {
    "id": "2022-Ionis_Paris",
    "teamName": "Ionis_Paris",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Climate Crisis",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Climate Crisis",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-KEYSTONE",
    "teamName": "KEYSTONE",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Korea_HS",
    "teamName": "Korea_HS",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Lambert_GA",
    "teamName": "Lambert_GA",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Grand Prize Winner",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Winner"
      },
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": [
      "United States"
    ]
  },
  {
    "id": "2022-Leiden",
    "teamName": "Leiden",
    "year": 2022,
    "division": "Graduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Winner"
      },
      {
        "name": "Safety and Security Award",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Linkoping_Sweden",
    "teamName": "Linkoping_Sweden",
    "year": 2022,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2022-LINKS_China",
    "teamName": "LINKS_China",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Winner"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Winner"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Lund",
    "teamName": "Lund",
    "year": 2022,
    "division": "Graduate",
    "village": "Conservation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Safety and Security Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-LZU-CHINA",
    "teamName": "LZU-CHINA",
    "year": 2022,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Winner"
      },
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-McGill",
    "teamName": "McGill",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Mingdao",
    "teamName": "Mingdao",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Winner"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "Safety and Security Award",
        "status": "Winner"
      },
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-MIT_MAHE",
    "teamName": "MIT_MAHE",
    "year": 2022,
    "division": "Graduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Food & Nutrition",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Montpellier",
    "teamName": "Montpellier",
    "year": 2022,
    "division": "Graduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": "1st Runner-up",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Food & Nutrition",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": [
      "France"
    ]
  },
  {
    "id": "2022-Munich",
    "teamName": "Munich",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Software Tool",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Nanjing_NFLS",
    "teamName": "Nanjing_NFLS",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Nanjing-China",
    "teamName": "Nanjing-China",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Climate Crisis",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Climate Crisis",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      },
      {
        "name": "Safety and Security Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-NMU_China",
    "teamName": "NMU_China",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-NU_Kazakhstan",
    "teamName": "NU_Kazakhstan",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-NYC_Empire_State",
    "teamName": "NYC_Empire_State",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-NYCU_Formosa",
    "teamName": "NYCU_Formosa",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2022-Paris_Bettencourt",
    "teamName": "Paris_Bettencourt",
    "year": 2022,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Foundational Advance",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2022-Patras_Medicine",
    "teamName": "Patras_Medicine",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Wiki",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-PuiChing_Macau",
    "teamName": "PuiChing_Macau",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "1st Runner-up",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Winner"
      }
    ],
    "countries": [
      "Macao"
    ]
  },
  {
    "id": "2022-RDFZ-CHINA",
    "teamName": "RDFZ-CHINA",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Safety and Security Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-REC-CHENNAI",
    "teamName": "REC-CHENNAI",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Environment",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2022-Rochester",
    "teamName": "Rochester",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-RUM-UPRM",
    "teamName": "RUM-UPRM",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Seoul_Korea",
    "teamName": "Seoul_Korea",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Winner"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Winner"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      },
      {
        "name": "Safety and Security Award",
        "status": "Nominee"
      },
      {
        "name": "Inclusivity Award",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Sesame_Shenzhen",
    "teamName": "Sesame_Shenzhen",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Sheffield",
    "teamName": "Sheffield",
    "year": 2022,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-SHSBNU_China",
    "teamName": "SHSBNU_China",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Shym_BIL_NIS",
    "teamName": "Shym_BIL_NIS",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Sogang_Korea",
    "teamName": "Sogang_Korea",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Sorbonne_U_Paris",
    "teamName": "Sorbonne_U_Paris",
    "year": 2022,
    "division": "Graduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Plant Synthetic Biology",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Stockholm",
    "teamName": "Stockholm",
    "year": 2022,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-SubCat_China",
    "teamName": "SubCat_China",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-SZPT-CHINA",
    "teamName": "SZPT-CHINA",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-SZU-China",
    "teamName": "SZU-China",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-TAU_Israel",
    "teamName": "TAU_Israel",
    "year": 2022,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Winner"
      },
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Tec-Chihuahua",
    "teamName": "Tec-Chihuahua",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Technion-Israel",
    "teamName": "Technion-Israel",
    "year": 2022,
    "division": "Graduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Measurement",
        "status": "Winner"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Thailand_RIS",
    "teamName": "Thailand_RIS",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Thessaloniki",
    "teamName": "Thessaloniki",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Thessaloniki_Meta",
    "teamName": "Thessaloniki_Meta",
    "year": 2022,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Thessaly",
    "teamName": "Thessaly",
    "year": 2022,
    "division": "Graduate",
    "village": "Environment",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Environment",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-THINKER_CHINA",
    "teamName": "THINKER_CHINA",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Toronto",
    "teamName": "Toronto",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Conservation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Conservation",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2022-Toulouse_INSA-UPS",
    "teamName": "Toulouse_INSA-UPS",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Tsinghua",
    "teamName": "Tsinghua",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-TU_Dresden",
    "teamName": "TU_Dresden",
    "year": 2022,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-TU-Eindhoven",
    "teamName": "TU-Eindhoven",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": "Grand Prize Winner",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Winner"
      },
      {
        "name": "Best Model",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Winner"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": [
      "Netherlands"
    ]
  },
  {
    "id": "2022-TUDelft",
    "teamName": "TUDelft",
    "year": 2022,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Supporting Entrepreneurship",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      },
      {
        "name": "Safety and Security Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Tuebingen",
    "teamName": "Tuebingen",
    "year": 2022,
    "division": "Graduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Environment",
        "status": "Nominee"
      }
    ],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2022-UBC-Okanagan",
    "teamName": "UBC-Okanagan",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Climate Crisis",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-UCL",
    "teamName": "UCL",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Climate Crisis",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Climate Crisis",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-UCopenhagen",
    "teamName": "UCopenhagen",
    "year": 2022,
    "division": "Graduate",
    "village": "Conservation",
    "grandPrizeLevel": "Grand Prize Winner",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Conservation",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Winner"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Winner"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Winner"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "Inclusivity Award",
        "status": "Winner"
      }
    ],
    "countries": [
      "Denmark"
    ]
  },
  {
    "id": "2022-UCSC",
    "teamName": "UCSC",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2022-UESTC-BioTech",
    "teamName": "UESTC-BioTech",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Climate Crisis",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Plant Synthetic Biology",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-UFMG_UFV_Brazil",
    "teamName": "UFMG_UFV_Brazil",
    "year": 2022,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Winner"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      },
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-UNILausanne",
    "teamName": "UNILausanne",
    "year": 2022,
    "division": "Graduate",
    "village": "Environment",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Environment",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-UniofBath",
    "teamName": "UniofBath",
    "year": 2022,
    "division": "Graduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-UTokyo",
    "teamName": "UTokyo",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Foundational Advance",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-UZurich",
    "teamName": "UZurich",
    "year": 2022,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best New Basic Part",
        "status": "Winner"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Vilnius-Lithuania",
    "teamName": "Vilnius-Lithuania",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Environment",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2022-Virginia",
    "teamName": "Virginia",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2022-Wageningen_UR",
    "teamName": "Wageningen_UR",
    "year": 2022,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-Warwick",
    "teamName": "Warwick",
    "year": 2022,
    "division": "Graduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Environment",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2022-Waseda_Tokyo",
    "teamName": "Waseda_Tokyo",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Foundational Advance",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2022-Wego_Taipei",
    "teamName": "Wego_Taipei",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "Safety and Security Award",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-William_and_Mary",
    "teamName": "William_and_Mary",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Software & AI",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Software & AI",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-WWU_Muenster",
    "teamName": "WWU_Muenster",
    "year": 2022,
    "division": "Graduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Software Tool",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-XJTLU-CHINA",
    "teamName": "XJTLU-CHINA",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Environment",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2022-XMU-China",
    "teamName": "XMU-China",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-YkPaO",
    "teamName": "YkPaO",
    "year": 2022,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2022-ZJU-China",
    "teamName": "ZJU-China",
    "year": 2022,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Safety and Security Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Aachen",
    "teamName": "Aachen",
    "year": 2023,
    "division": "Graduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Aalto-Helsinki",
    "teamName": "Aalto-Helsinki",
    "year": 2023,
    "division": "Graduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Environment",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-AFCM-Egypt",
    "teamName": "AFCM-Egypt",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-AIS-China",
    "teamName": "AIS-China",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Improved Part",
        "status": "Winner"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Alma",
    "teamName": "Alma",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Bioremediation",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2023-ASIJ-Tokyo",
    "teamName": "ASIJ-Tokyo",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Austin-UTexas",
    "teamName": "Austin-UTexas",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Agriculture",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-BAID-China",
    "teamName": "BAID-China",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Barcelona-UB",
    "teamName": "Barcelona-UB",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Bioremediation",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2023-BASIS-China",
    "teamName": "BASIS-China",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "1st Runner-up",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Safety and Security Award",
        "status": "Winner"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Winner"
      }
    ],
    "countries": [
      "China"
    ]
  },
  {
    "id": "2023-BJEA-China",
    "teamName": "BJEA-China",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Winner"
      },
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-BJHS",
    "teamName": "BJHS",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-BNDS-China",
    "teamName": "BNDS-China",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-BNU-China",
    "teamName": "BNU-China",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-BNUZH-China",
    "teamName": "BNUZH-China",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-BostonU-HW",
    "teamName": "BostonU-HW",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-BS-United-China",
    "teamName": "BS-United-China",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-BUCT-China",
    "teamName": "BUCT-China",
    "year": 2023,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Nominee"
      }
    ],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-BZK-SH",
    "teamName": "BZK-SH",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-CAU-China",
    "teamName": "CAU-China",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-CCU-Taiwan",
    "teamName": "CCU-Taiwan",
    "year": 2023,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2023-CPU-CHINA",
    "teamName": "CPU-CHINA",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-DTU-Denmark",
    "teamName": "DTU-Denmark",
    "year": 2023,
    "division": "Graduate",
    "village": "Environment",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Environment",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-DUT-China",
    "teamName": "DUT-China",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2023-EastCoastBioCrew",
    "teamName": "EastCoastBioCrew",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Edinburgh",
    "teamName": "Edinburgh",
    "year": 2023,
    "division": "Graduate",
    "village": "Climate Crisis",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Safety and Security Award",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-EPFL",
    "teamName": "EPFL",
    "year": 2023,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Safety and Security Award",
        "status": "Nominee"
      },
      {
        "name": "Best Education",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Estonia-TUIT",
    "teamName": "Estonia-TUIT",
    "year": 2023,
    "division": "Graduate",
    "village": "Conservation",
    "grandPrizeLevel": "Grand Prize Winner",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Conservation",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": [
      "Estonia"
    ]
  },
  {
    "id": "2023-Evry-Paris-Saclay",
    "teamName": "Evry-Paris-Saclay",
    "year": 2023,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Winner"
      },
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Freiburg",
    "teamName": "Freiburg",
    "year": 2023,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Foundational Advance",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Fudan",
    "teamName": "Fudan",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Environment",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Software Tool",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-GEMS-Taiwan",
    "teamName": "GEMS-Taiwan",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "iGEMers Prize",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-GreatBay-SCIE",
    "teamName": "GreatBay-SCIE",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Winner"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Hamburg",
    "teamName": "Hamburg",
    "year": 2023,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Hangzhou-BioX",
    "teamName": "Hangzhou-BioX",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Heidelberg",
    "teamName": "Heidelberg",
    "year": 2023,
    "division": "Graduate",
    "village": "Bioremediation",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Bioremediation",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Winner"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-HK-Joint-School",
    "teamName": "HK-Joint-School",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      },
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-HongKong-JSS",
    "teamName": "HongKong-JSS",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-HUST-China",
    "teamName": "HUST-China",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Climate Crisis",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Climate Crisis",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Winner"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "iGEMers Prize",
        "status": "Winner"
      },
      {
        "name": "Best Promotion Video",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-IISER-Pune-India",
    "teamName": "IISER-Pune-India",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Climate Crisis",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Climate Crisis",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Education",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-IISER-TVM",
    "teamName": "IISER-TVM",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-IIT-Roorkee",
    "teamName": "IIT-Roorkee",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2023-INSAENSLyon1",
    "teamName": "INSAENSLyon1",
    "year": 2023,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Software Tool",
        "status": "Winner"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Japan-United",
    "teamName": "Japan-United",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Grand Prize Winner",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Entrepreneurship",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "Best Education",
        "status": "Winner"
      }
    ],
    "countries": [
      "Japan"
    ]
  },
  {
    "id": "2023-JCVI-UCSD",
    "teamName": "JCVI-UCSD",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Climate Crisis",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Korea-HS",
    "teamName": "Korea-HS",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Winner"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-KUAS-SEOUL",
    "teamName": "KUAS-SEOUL",
    "year": 2023,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2023-Kyoto",
    "teamName": "Kyoto",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Agriculture",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Lambert-GA",
    "teamName": "Lambert-GA",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Latvia-Riga",
    "teamName": "Latvia-Riga",
    "year": 2023,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Leiden",
    "teamName": "Leiden",
    "year": 2023,
    "division": "Graduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": "1st Runner-up",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Entrepreneurship",
        "status": "Winner"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Winner"
      }
    ],
    "countries": [
      "Netherlands"
    ]
  },
  {
    "id": "2023-LINKS-China",
    "teamName": "LINKS-China",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Marburg",
    "teamName": "Marburg",
    "year": 2023,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Plant Synthetic Biology",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-McGill",
    "teamName": "McGill",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": "Grand Prize Winner",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": [
      "Canada"
    ]
  },
  {
    "id": "2023-Michigan",
    "teamName": "Michigan",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2023-MSP-Maastricht",
    "teamName": "MSP-Maastricht",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-MunichBioinformatics",
    "teamName": "MunichBioinformatics",
    "year": 2023,
    "division": "Graduate",
    "village": "Software & AI",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Software & AI",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Nanjing-SDG",
    "teamName": "Nanjing-SDG",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best New Improved Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-NAU-CHINA",
    "teamName": "NAU-CHINA",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Food & Nutrition",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-NavarraBG",
    "teamName": "NavarraBG",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-NIS-Kazakhstan",
    "teamName": "NIS-Kazakhstan",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Winner"
      },
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Promotion Video",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-NJTech-China-A",
    "teamName": "NJTech-China-A",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Improved Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-NJTech-China-B",
    "teamName": "NJTech-China-B",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Improved Part",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-NJU-China",
    "teamName": "NJU-China",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-NMU-China",
    "teamName": "NMU-China",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Safety and Security Award",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-NNU-CHINA",
    "teamName": "NNU-CHINA",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Bioremediation",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-NUDT-CHINA",
    "teamName": "NUDT-CHINA",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2023-NUS-Singapore",
    "teamName": "NUS-Singapore",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": "2nd Runner-up",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Foundational Advance",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": [
      "Singapore"
    ]
  },
  {
    "id": "2023-OTIA-Hangzhou",
    "teamName": "OTIA-Hangzhou",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Oxford",
    "teamName": "Oxford",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Safety and Security Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-PuiChing-Macau",
    "teamName": "PuiChing-Macau",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-RDFZ-CHINA",
    "teamName": "RDFZ-CHINA",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Safety and Security Award",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Rochester",
    "teamName": "Rochester",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2023-SCU-China",
    "teamName": "SCU-China",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Environment",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2023-SDU-Denmark",
    "teamName": "SDU-Denmark",
    "year": 2023,
    "division": "Graduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Bioremediation",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Winner"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Shanghai-SDG",
    "teamName": "Shanghai-SDG",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-ShanghaiTech-China",
    "teamName": "ShanghaiTech-China",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Climate Crisis",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Climate Crisis",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Sheffield",
    "teamName": "Sheffield",
    "year": 2023,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-SHSID-China",
    "teamName": "SHSID-China",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Improved Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-SJTU-software",
    "teamName": "SJTU-software",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Software & AI",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Software & AI",
        "status": "Winner"
      }
    ],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2023-Squirrel-Beijing-I",
    "teamName": "Squirrel-Beijing-I",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Stanford",
    "teamName": "Stanford",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Environment",
        "status": "Nominee"
      }
    ],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-SZ-SHD",
    "teamName": "SZ-SHD",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Winner"
      },
      {
        "name": "Best Plant Synthetic Biology",
        "status": "Winner"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-SZU-China",
    "teamName": "SZU-China",
    "year": 2023,
    "division": "Graduate",
    "village": "Agriculture",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Agriculture",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Winner"
      },
      {
        "name": "Best Part Collection",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Taipei-KCISLK-V1",
    "teamName": "Taipei-KCISLK-V1",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-TAU-Israel",
    "teamName": "TAU-Israel",
    "year": 2023,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Tec-Chihuahua",
    "teamName": "Tec-Chihuahua",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Food & Nutrition",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Entrepreneurship",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Technion-Israel",
    "teamName": "Technion-Israel",
    "year": 2023,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-TecMonterreyGDL",
    "teamName": "TecMonterreyGDL",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Thailand-RIS",
    "teamName": "Thailand-RIS",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-thessaloniki",
    "teamName": "thessaloniki",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Conservation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Sustainable Development Impact",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Thessaly",
    "teamName": "Thessaly",
    "year": 2023,
    "division": "Graduate",
    "village": "Bioremediation",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Bioremediation",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Thinker-Guangdong",
    "teamName": "Thinker-Guangdong",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-TJUSLS-China",
    "teamName": "TJUSLS-China",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Bioremediation",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2023-Toronto",
    "teamName": "Toronto",
    "year": 2023,
    "division": "Graduate",
    "village": "Climate Crisis",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Climate Crisis",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Winner"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Toulouse-INSA-UPS",
    "teamName": "Toulouse-INSA-UPS",
    "year": 2023,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Tsinghua",
    "teamName": "Tsinghua",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Tsinghua-TFL",
    "teamName": "Tsinghua-TFL",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Plant Synthetic Biology",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-TU-Braunschweig",
    "teamName": "TU-Braunschweig",
    "year": 2023,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-TU-Dresden",
    "teamName": "TU-Dresden",
    "year": 2023,
    "division": "Graduate",
    "village": "Bioremediation",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Bioremediation",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-TU-Eindhoven",
    "teamName": "TU-Eindhoven",
    "year": 2023,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-UBC-Okanagan",
    "teamName": "UBC-Okanagan",
    "year": 2023,
    "division": "Graduate",
    "village": "Conservation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Conservation",
        "status": "Nominee"
      }
    ],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-UCAS-China",
    "teamName": "UCAS-China",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Foundational Advance",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Winner"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-UCSC",
    "teamName": "UCSC",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-UGM-Indonesia",
    "teamName": "UGM-Indonesia",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-UiOslo-Norway",
    "teamName": "UiOslo-Norway",
    "year": 2023,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-UManitoba",
    "teamName": "UManitoba",
    "year": 2023,
    "division": "Graduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Uni-Padua-IT",
    "teamName": "Uni-Padua-IT",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2023-UNILausanne",
    "teamName": "UNILausanne",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-UniMuenster",
    "teamName": "UniMuenster",
    "year": 2023,
    "division": "Graduate",
    "village": "Conservation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-UOregon",
    "teamName": "UOregon",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-USAFA",
    "teamName": "USAFA",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Safety and Security Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-UTokyo",
    "teamName": "UTokyo",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-UZurich",
    "teamName": "UZurich",
    "year": 2023,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-Vilnius-Lithuania",
    "teamName": "Vilnius-Lithuania",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": "1st Runner-up",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": [
      "Lithuania"
    ]
  },
  {
    "id": "2023-VITVellore",
    "teamName": "VITVellore",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-WageningenUR",
    "teamName": "WageningenUR",
    "year": 2023,
    "division": "Graduate",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Agriculture",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2023-Westlake-China",
    "teamName": "Westlake-China",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-WHU-China",
    "teamName": "WHU-China",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Foundational Advance",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-William-and-Mary",
    "teamName": "William-and-Mary",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Foundational Advance",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Winner"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-WIST",
    "teamName": "WIST",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": null,
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-WrightState-OH",
    "teamName": "WrightState-OH",
    "year": 2023,
    "division": "Graduate",
    "village": "Environment",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Environment",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-XHD-WuHan-China",
    "teamName": "XHD-WuHan-China",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-XMU-China",
    "teamName": "XMU-China",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-ZJFH-Nanjing",
    "teamName": "ZJFH-Nanjing",
    "year": 2023,
    "division": "High School",
    "village": "High School",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2023-ZJU-China",
    "teamName": "ZJU-China",
    "year": 2023,
    "division": "Undergraduate",
    "village": "Agriculture",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Agriculture",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Winner"
      },
      {
        "name": "Best Plant Synthetic Biology",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Aachen",
    "teamName": "Aachen",
    "year": 2024,
    "division": "Graduate",
    "village": "Oncology",
    "grandPrizeLevel": "1st Runner-up",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Oncology",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Hardware",
        "status": "Winner"
      },
      {
        "name": "Best Education",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": [
      "Germany"
    ]
  },
  {
    "id": "2024-Aalto-Helsinki",
    "teamName": "Aalto-Helsinki",
    "year": 2024,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-ABOA",
    "teamName": "ABOA",
    "year": 2024,
    "division": "Graduate",
    "village": "Space",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-AFCM-Egypt",
    "teamName": "AFCM-Egypt",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      },
      {
        "name": "Safety and Security Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-AFMU-China",
    "teamName": "AFMU-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-AIS-China",
    "teamName": "AIS-China",
    "year": 2024,
    "division": "High School",
    "village": "Infectious Diseases",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Aix-Marseille",
    "teamName": "Aix-Marseille",
    "year": 2024,
    "division": "Graduate",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Alma",
    "teamName": "Alma",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Conservation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Anatolia-College",
    "teamName": "Anatolia-College",
    "year": 2024,
    "division": "High School",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-ANU",
    "teamName": "ANU",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Conservation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-AshesiGhana",
    "teamName": "AshesiGhana",
    "year": 2024,
    "division": "Graduate",
    "village": "Conservation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-ASU",
    "teamName": "ASU",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Athens",
    "teamName": "Athens",
    "year": 2024,
    "division": "Graduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Austin-utexas",
    "teamName": "Austin-utexas",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Food & Nutrition",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-BAID-China",
    "teamName": "BAID-China",
    "year": 2024,
    "division": "High School",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Bangkok-NMH",
    "teamName": "Bangkok-NMH",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Software & AI",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Barcelona-UB",
    "teamName": "Barcelona-UB",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-BASIS-China",
    "teamName": "BASIS-China",
    "year": 2024,
    "division": "High School",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Promotion Video",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Beijing-HS",
    "teamName": "Beijing-HS",
    "year": 2024,
    "division": "High School",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-BGI-MammothEdu-East",
    "teamName": "BGI-MammothEdu-East",
    "year": 2024,
    "division": "High School",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-BGI-MammothEdu-South",
    "teamName": "BGI-MammothEdu-South",
    "year": 2024,
    "division": "High School",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Bielefeld-CeBiTec",
    "teamName": "Bielefeld-CeBiTec",
    "year": 2024,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Safety and Security Award",
        "status": "Winner"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Bioplus-China",
    "teamName": "Bioplus-China",
    "year": 2024,
    "division": "High School",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Bioplus-Shanghai",
    "teamName": "Bioplus-Shanghai",
    "year": 2024,
    "division": "High School",
    "village": null,
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": null,
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-BIT",
    "teamName": "BIT",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Conservation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-BIT-China",
    "teamName": "BIT-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Bioremediation",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-BJWZ-3-China",
    "teamName": "BJWZ-3-China",
    "year": 2024,
    "division": "High School",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-BKEA",
    "teamName": "BKEA",
    "year": 2024,
    "division": "High School",
    "village": "Therapeutics",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Software Tool",
        "status": "Winner"
      },
      {
        "name": "Best Entrepreneurship",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-BNDS-China",
    "teamName": "BNDS-China",
    "year": 2024,
    "division": "High School",
    "village": "Therapeutics",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-BNU-China",
    "teamName": "BNU-China",
    "year": 2024,
    "division": "Graduate",
    "village": "Infectious Diseases",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-BNUZH-China",
    "teamName": "BNUZH-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Bioremediation",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-BOKU-Vienna",
    "teamName": "BOKU-Vienna",
    "year": 2024,
    "division": "Graduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Bolivia",
    "teamName": "Bolivia",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Climate Crisis",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Boston-BOSLab",
    "teamName": "Boston-BOSLab",
    "year": 2024,
    "division": "High School",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-BostonU",
    "teamName": "BostonU",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-BUCT",
    "teamName": "BUCT",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-BUCT-China",
    "teamName": "BUCT-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-BWYA",
    "teamName": "BWYA",
    "year": 2024,
    "division": "High School",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-BYU-Provo",
    "teamName": "BYU-Provo",
    "year": 2024,
    "division": "Graduate",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-BZK-SH",
    "teamName": "BZK-SH",
    "year": 2024,
    "division": "High School",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Cambridge",
    "teamName": "Cambridge",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-CAU-China",
    "teamName": "CAU-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Food & Nutrition",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-CCA-San-Diego",
    "teamName": "CCA-San-Diego",
    "year": 2024,
    "division": "High School",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-CCU-Taiwan",
    "teamName": "CCU-Taiwan",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Chalmers-Gothenburg",
    "teamName": "Chalmers-Gothenburg",
    "year": 2024,
    "division": "Graduate",
    "village": "Infectious Diseases",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-CHINA-FUZHOU",
    "teamName": "CHINA-FUZHOU",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-CHINA-HUBU-WUHAN",
    "teamName": "CHINA-HUBU-WUHAN",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-City-of-London-UK",
    "teamName": "City-of-London-UK",
    "year": 2024,
    "division": "High School",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-CityU-HongKong",
    "teamName": "CityU-HongKong",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-CJUH-JLU-China",
    "teamName": "CJUH-JLU-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-CNPEM-BRAZIL",
    "teamName": "CNPEM-BRAZIL",
    "year": 2024,
    "division": "Graduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Bioremediation",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Concordia-Shanghai",
    "teamName": "Concordia-Shanghai",
    "year": 2024,
    "division": "High School",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Cornell",
    "teamName": "Cornell",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-CSMU-NCHU-Taiwan",
    "teamName": "CSMU-NCHU-Taiwan",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-CSU-CHINA",
    "teamName": "CSU-CHINA",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-CSW-UD",
    "teamName": "CSW-UD",
    "year": 2024,
    "division": "High School",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-CUG-China",
    "teamName": "CUG-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-CUHK-HongKong-SBS",
    "teamName": "CUHK-HongKong-SBS",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-DBHS-CA",
    "teamName": "DBHS-CA",
    "year": 2024,
    "division": "High School",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-DelNorte-SD",
    "teamName": "DelNorte-SD",
    "year": 2024,
    "division": null,
    "village": null,
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": null,
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-DKU",
    "teamName": "DKU",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-DNHS-SanDiego-CA",
    "teamName": "DNHS-SanDiego-CA",
    "year": 2024,
    "division": "High School",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-DTU-Denmark",
    "teamName": "DTU-Denmark",
    "year": 2024,
    "division": "Graduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Bioremediation",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-DUESSELDORF",
    "teamName": "DUESSELDORF",
    "year": 2024,
    "division": "Graduate",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": null,
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Duke",
    "teamName": "Duke",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-DUT",
    "teamName": "DUT",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-DUT-China",
    "teamName": "DUT-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-East-Coast-Biocrew",
    "teamName": "East-Coast-Biocrew",
    "year": 2024,
    "division": "High School",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-ECIB-PKU",
    "teamName": "ECIB-PKU",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Space",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-ECUST",
    "teamName": "ECUST",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-EHSBNU",
    "teamName": "EHSBNU",
    "year": 2024,
    "division": "High School",
    "village": "Conservation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-EPFL",
    "teamName": "EPFL",
    "year": 2024,
    "division": "Graduate",
    "village": "Bioremediation",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Bioremediation",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-ETH-Zurich",
    "teamName": "ETH-Zurich",
    "year": 2024,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Evry-Paris-Saclay",
    "teamName": "Evry-Paris-Saclay",
    "year": 2024,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Foundational Advance",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Exeter",
    "teamName": "Exeter",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-FDfzSH",
    "teamName": "FDfzSH",
    "year": 2024,
    "division": "High School",
    "village": "Climate Crisis",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-FHS-NB-ZJ-China",
    "teamName": "FHS-NB-ZJ-China",
    "year": 2024,
    "division": "High School",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Formosa",
    "teamName": "Formosa",
    "year": 2024,
    "division": "High School",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Promotion Video",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "iGEMers Prize",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Formosa101",
    "teamName": "Formosa101",
    "year": 2024,
    "division": "High School",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Foshan-GreatBay",
    "teamName": "Foshan-GreatBay",
    "year": 2024,
    "division": "High School",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Freiburg",
    "teamName": "Freiburg",
    "year": 2024,
    "division": "Graduate",
    "village": "Infectious Diseases",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Infectious Diseases",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-FSU",
    "teamName": "FSU",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Fudan",
    "teamName": "Fudan",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Bioremediation",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-GCM-KY",
    "teamName": "GCM-KY",
    "year": 2024,
    "division": "High School",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-GEC-Beijing",
    "teamName": "GEC-Beijing",
    "year": 2024,
    "division": "High School",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Improved Part",
        "status": "Winner"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-GEC-Guangzhou",
    "teamName": "GEC-Guangzhou",
    "year": 2024,
    "division": "High School",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-GEMS-Taiwan",
    "teamName": "GEMS-Taiwan",
    "year": 2024,
    "division": "High School",
    "village": "Infectious Diseases",
    "grandPrizeLevel": "Grand Prize Winner",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Winner"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Promotion Video",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Winner"
      }
    ],
    "countries": [
      "Taiwan"
    ]
  },
  {
    "id": "2024-GreatBay-SCIE",
    "teamName": "GreatBay-SCIE",
    "year": 2024,
    "division": "High School",
    "village": "Agriculture",
    "grandPrizeLevel": "1st Runner-up",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": [
      "China"
    ]
  },
  {
    "id": "2024-GSLZ-A",
    "teamName": "GSLZ-A",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-GU-Frankfurt",
    "teamName": "GU-Frankfurt",
    "year": 2024,
    "division": "Graduate",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Fashion & Cosmetics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Guangxi-U-China",
    "teamName": "Guangxi-U-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": null,
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": null,
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Guelph",
    "teamName": "Guelph",
    "year": 2024,
    "division": "Graduate",
    "village": "Conservation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-HainanU-China",
    "teamName": "HainanU-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Hamburg",
    "teamName": "Hamburg",
    "year": 2024,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Hangzhou-BioX",
    "teamName": "Hangzhou-BioX",
    "year": 2024,
    "division": "High School",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Hangzhou-MedX",
    "teamName": "Hangzhou-MedX",
    "year": 2024,
    "division": "High School",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Hangzhou-SDG",
    "teamName": "Hangzhou-SDG",
    "year": 2024,
    "division": "High School",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Hannover",
    "teamName": "Hannover",
    "year": 2024,
    "division": "Graduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-HBMU-Taihe",
    "teamName": "HBMU-Taihe",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-HBUT-China",
    "teamName": "HBUT-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Winner"
      },
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-HBUT-Wuhan",
    "teamName": "HBUT-Wuhan",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Heidelberg",
    "teamName": "Heidelberg",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": "Grand Prize Winner",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Foundational Advance",
        "status": "Winner"
      }
    ],
    "medal": null,
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Winner"
      },
      {
        "name": "Best Model",
        "status": "Winner"
      },
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Winner"
      }
    ],
    "countries": [
      "Germany"
    ]
  },
  {
    "id": "2024-HiZJU-China",
    "teamName": "HiZJU-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Measurement",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-HK-Joint-School",
    "teamName": "HK-Joint-School",
    "year": 2024,
    "division": "High School",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-HK-United",
    "teamName": "HK-United",
    "year": 2024,
    "division": "High School",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-HKPOLYU",
    "teamName": "HKPOLYU",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Oncology",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Oncology",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-HKSSC",
    "teamName": "HKSSC",
    "year": 2024,
    "division": "High School",
    "village": null,
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": null,
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-HKU-HongKong",
    "teamName": "HKU-HongKong",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-HKUST",
    "teamName": "HKUST",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-HKUST-GZ",
    "teamName": "HKUST-GZ",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Conservation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-HongKong-CUHK",
    "teamName": "HongKong-CUHK",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Infectious Diseases",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-HongKong-JSS",
    "teamName": "HongKong-JSS",
    "year": 2024,
    "division": "High School",
    "village": "Bioremediation",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-HongKong-UCCKE",
    "teamName": "HongKong-UCCKE",
    "year": 2024,
    "division": "High School",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Winner"
      },
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Hopkins",
    "teamName": "Hopkins",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-HS-Alpha",
    "teamName": "HS-Alpha",
    "year": 2024,
    "division": "High School",
    "village": "Conservation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-HS-Beta",
    "teamName": "HS-Beta",
    "year": 2024,
    "division": "High School",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-HUBU-4-CHN",
    "teamName": "HUBU-4-CHN",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-HUBU-China",
    "teamName": "HUBU-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-HUBU-WUCHANG-CHINA",
    "teamName": "HUBU-WUCHANG-CHINA",
    "year": 2024,
    "division": "Graduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-HunanU",
    "teamName": "HunanU",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-HUST-China",
    "teamName": "HUST-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "iGEMers Prize",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-HUST-UEVE-UPSaclay",
    "teamName": "HUST-UEVE-UPSaclay",
    "year": 2024,
    "division": "Graduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-HW-ShanghaiUnited",
    "teamName": "HW-ShanghaiUnited",
    "year": 2024,
    "division": "High School",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-HWFLA-Beijing",
    "teamName": "HWFLA-Beijing",
    "year": 2024,
    "division": "High School",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-HZAU-China",
    "teamName": "HZAU-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-ICJFLS",
    "teamName": "ICJFLS",
    "year": 2024,
    "division": "High School",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-IEA",
    "teamName": "IEA",
    "year": 2024,
    "division": "High School",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Winner"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-IISc-Bengaluru",
    "teamName": "IISc-Bengaluru",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-IISc-Software",
    "teamName": "IISc-Software",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Software & AI",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-IISER-Kolkata",
    "teamName": "IISER-Kolkata",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Fashion & Cosmetics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-IISER-TVM",
    "teamName": "IISER-TVM",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Fashion & Cosmetics",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Promotion Video",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-IIT-Bombay",
    "teamName": "IIT-Bombay",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Climate Crisis",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Climate Crisis",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-IIT-Madras",
    "teamName": "IIT-Madras",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Space",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-IIT-ROORKEE",
    "teamName": "IIT-ROORKEE",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-IM-PANAMA",
    "teamName": "IM-PANAMA",
    "year": 2024,
    "division": "High School",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Imperial-College",
    "teamName": "Imperial-College",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Institut-Le-Rosey",
    "teamName": "Institut-Le-Rosey",
    "year": 2024,
    "division": "High School",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-IOANNINA",
    "teamName": "IOANNINA",
    "year": 2024,
    "division": "Graduate",
    "village": "Infectious Diseases",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Infectious Diseases",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      },
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Ionis-Paris",
    "teamName": "Ionis-Paris",
    "year": 2024,
    "division": "Graduate",
    "village": "Agriculture",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Agriculture",
        "status": "Nominee"
      }
    ],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-iZJU-China",
    "teamName": "iZJU-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Fashion & Cosmetics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Jiangnan-China",
    "teamName": "Jiangnan-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-JIASHU-China",
    "teamName": "JIASHU-China",
    "year": 2024,
    "division": "High School",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-JIASHU-Shanghai",
    "teamName": "JIASHU-Shanghai",
    "year": 2024,
    "division": "High School",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-JIASHU-SouthChina",
    "teamName": "JIASHU-SouthChina",
    "year": 2024,
    "division": "High School",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Jilin-China",
    "teamName": "Jilin-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-jky-wuhan-china",
    "teamName": "jky-wuhan-china",
    "year": 2024,
    "division": "High School",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-JLU-CP",
    "teamName": "JLU-CP",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-JLU-NBBMS",
    "teamName": "JLU-NBBMS",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-JU-Krakow",
    "teamName": "JU-Krakow",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Conservation",
    "grandPrizeLevel": "1st Runner-up",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Conservation",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Winner"
      }
    ],
    "countries": [
      "Poland"
    ]
  },
  {
    "id": "2024-KCIS-Xiugang-Taipei",
    "teamName": "KCIS-Xiugang-Taipei",
    "year": 2024,
    "division": "High School",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Keystone",
    "teamName": "Keystone",
    "year": 2024,
    "division": "High School",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Winner"
      },
      {
        "name": "Best Education",
        "status": "Winner"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-KFUPM-Saudi-Arabia",
    "teamName": "KFUPM-Saudi-Arabia",
    "year": 2024,
    "division": "Graduate",
    "village": "Infectious Diseases",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-KhanLabSchool",
    "teamName": "KhanLabSchool",
    "year": 2024,
    "division": "High School",
    "village": "Climate Crisis",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Korea-HS",
    "teamName": "Korea-HS",
    "year": 2024,
    "division": "High School",
    "village": "Climate Crisis",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-KULeuven",
    "teamName": "KULeuven",
    "year": 2024,
    "division": "Graduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Winner"
      },
      {
        "name": "Inclusivity Award",
        "status": "Winner"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Kyoto",
    "teamName": "Kyoto",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Agriculture",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Lambert-GA",
    "teamName": "Lambert-GA",
    "year": 2024,
    "division": "High School",
    "village": "Therapeutics",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Latvia-Riga",
    "teamName": "Latvia-Riga",
    "year": 2024,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-LCG-China",
    "teamName": "LCG-China",
    "year": 2024,
    "division": "High School",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-LCG-Global",
    "teamName": "LCG-Global",
    "year": 2024,
    "division": "High School",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Leiden",
    "teamName": "Leiden",
    "year": 2024,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-LethbridgeHS",
    "teamName": "LethbridgeHS",
    "year": 2024,
    "division": "High School",
    "village": null,
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": null,
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Linkoping",
    "teamName": "Linkoping",
    "year": 2024,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-LINKS-China",
    "teamName": "LINKS-China",
    "year": 2024,
    "division": "High School",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-LIUAN-Nanjing",
    "teamName": "LIUAN-Nanjing",
    "year": 2024,
    "division": "High School",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Lund",
    "teamName": "Lund",
    "year": 2024,
    "division": "Graduate",
    "village": "Climate Crisis",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Climate Crisis",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-LZU-China",
    "teamName": "LZU-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-LZU-MEDICINE-CHINA",
    "teamName": "LZU-MEDICINE-CHINA",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-MacquarieUni",
    "teamName": "MacquarieUni",
    "year": 2024,
    "division": "Graduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Madrid-UCM",
    "teamName": "Madrid-UCM",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Manchester",
    "teamName": "Manchester",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Marburg",
    "teamName": "Marburg",
    "year": 2024,
    "division": "Graduate",
    "village": "Agriculture",
    "grandPrizeLevel": "Grand Prize Winner",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Agriculture",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Winner"
      },
      {
        "name": "Best Plant Synthetic Biology",
        "status": "Winner"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Winner"
      }
    ],
    "countries": [
      "Germany"
    ]
  },
  {
    "id": "2024-McGill",
    "teamName": "McGill",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-McMaster-Canada",
    "teamName": "McMaster-Canada",
    "year": 2024,
    "division": "Graduate",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-McMasterU",
    "teamName": "McMasterU",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Mexico",
    "teamName": "Mexico",
    "year": 2024,
    "division": "Graduate",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Michigan",
    "teamName": "Michigan",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-MichiganState",
    "teamName": "MichiganState",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Mingdao",
    "teamName": "Mingdao",
    "year": 2024,
    "division": "High School",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-MIT",
    "teamName": "MIT",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-MSP-Maastricht",
    "teamName": "MSP-Maastricht",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Munich",
    "teamName": "Munich",
    "year": 2024,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-NAIS",
    "teamName": "NAIS",
    "year": 2024,
    "division": "High School",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Nanjing-BioX",
    "teamName": "Nanjing-BioX",
    "year": 2024,
    "division": "High School",
    "village": null,
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": null,
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Nanjing-China",
    "teamName": "Nanjing-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Space",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Space",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-NANJING-NFLSUNITED",
    "teamName": "NANJING-NFLSUNITED",
    "year": 2024,
    "division": "High School",
    "village": null,
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": null,
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-NASSZ",
    "teamName": "NASSZ",
    "year": 2024,
    "division": "High School",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-NAU-CHINA",
    "teamName": "NAU-CHINA",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-NEFU-China",
    "teamName": "NEFU-China",
    "year": 2024,
    "division": "Graduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-NENU-China",
    "teamName": "NENU-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-NJMU-CHINA",
    "teamName": "NJMU-CHINA",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-NJTech-China",
    "teamName": "NJTech-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Improved Part",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-NJTECH-CHINA-A",
    "teamName": "NJTECH-CHINA-A",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-NJU-China",
    "teamName": "NJU-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Software & AI",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Software & AI",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-NMU-China",
    "teamName": "NMU-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Space",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Safety and Security Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-NNHS",
    "teamName": "NNHS",
    "year": 2024,
    "division": "High School",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-NNU-CHINA",
    "teamName": "NNU-CHINA",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Northeastern-Boston",
    "teamName": "Northeastern-Boston",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-NPU-CHINA",
    "teamName": "NPU-CHINA",
    "year": 2024,
    "division": "Undergraduate",
    "village": null,
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": null,
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-NTHU-Taiwan",
    "teamName": "NTHU-Taiwan",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Infectious Diseases",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-NTU-Singapore",
    "teamName": "NTU-Singapore",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-NTU-Taiwan",
    "teamName": "NTU-Taiwan",
    "year": 2024,
    "division": "Graduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-NU-Kazakhstan",
    "teamName": "NU-Kazakhstan",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Oncology",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-NUDT-CHINA",
    "teamName": "NUDT-CHINA",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-NWU-CHINA-A",
    "teamName": "NWU-CHINA-A",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-NYC-Empire-State",
    "teamName": "NYC-Empire-State",
    "year": 2024,
    "division": "High School",
    "village": "Infectious Diseases",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-NYCU-Formosa",
    "teamName": "NYCU-Formosa",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-NYU-Abu-Dhabi",
    "teamName": "NYU-Abu-Dhabi",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Conservation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Conservation",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-NYU-New-York",
    "teamName": "NYU-New-York",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-OhioState",
    "teamName": "OhioState",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-OKstate",
    "teamName": "OKstate",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Infectious Diseases",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Oneonta",
    "teamName": "Oneonta",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-OTIA-Hangzhou",
    "teamName": "OTIA-Hangzhou",
    "year": 2024,
    "division": "High School",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-OUC-Haide",
    "teamName": "OUC-Haide",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Outaouais",
    "teamName": "Outaouais",
    "year": 2024,
    "division": "High School",
    "village": "Climate Crisis",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": null,
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Oxford",
    "teamName": "Oxford",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Infectious Diseases",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Infectious Diseases",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Patras",
    "teamName": "Patras",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Patras-Med",
    "teamName": "Patras-Med",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Peking",
    "teamName": "Peking",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-PekingHSC",
    "teamName": "PekingHSC",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Oncology",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-PennState",
    "teamName": "PennState",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-PINGHE-MCA",
    "teamName": "PINGHE-MCA",
    "year": 2024,
    "division": "High School",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Pisa-IT",
    "teamName": "Pisa-IT",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-PLKLFC",
    "teamName": "PLKLFC",
    "year": 2024,
    "division": "High School",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-PLKNPL-HK",
    "teamName": "PLKNPL-HK",
    "year": 2024,
    "division": "High School",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Princeton",
    "teamName": "Princeton",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-PuiChing-Macau",
    "teamName": "PuiChing-Macau",
    "year": 2024,
    "division": null,
    "village": null,
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": null,
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Queens-Canada",
    "teamName": "Queens-Canada",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Radboud-University",
    "teamName": "Radboud-University",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-RainsACA-China",
    "teamName": "RainsACA-China",
    "year": 2024,
    "division": "High School",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Plant Synthetic Biology",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-RDFZ-CHINA",
    "teamName": "RDFZ-CHINA",
    "year": 2024,
    "division": "High School",
    "village": "Conservation",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-REC-CHENNAI",
    "teamName": "REC-CHENNAI",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Conservation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Rio-UFRJ-Brazil",
    "teamName": "Rio-UFRJ-Brazil",
    "year": 2024,
    "division": "Graduate",
    "village": null,
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": null,
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Rochester",
    "teamName": "Rochester",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Climate Crisis",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-SCU-China",
    "teamName": "SCU-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Foundational Advance",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Plant Synthetic Biology",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-SCUT-China-A",
    "teamName": "SCUT-China-A",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-SCUT-China-B",
    "teamName": "SCUT-China-B",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-SCUT-China-S",
    "teamName": "SCUT-China-S",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Climate Crisis",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-SDU-CHINA",
    "teamName": "SDU-CHINA",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-SDU-Denmark",
    "teamName": "SDU-Denmark",
    "year": 2024,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-SFLS-Hangzhou",
    "teamName": "SFLS-Hangzhou",
    "year": 2024,
    "division": "High School",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Shanghai-BioX",
    "teamName": "Shanghai-BioX",
    "year": 2024,
    "division": "High School",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": null,
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Shanghai-city",
    "teamName": "Shanghai-city",
    "year": 2024,
    "division": null,
    "village": null,
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": null,
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Shanghai-HS",
    "teamName": "Shanghai-HS",
    "year": 2024,
    "division": "High School",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Shanghaitech-China",
    "teamName": "Shanghaitech-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Sheffield",
    "teamName": "Sheffield",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-SHSBNU-China",
    "teamName": "SHSBNU-China",
    "year": 2024,
    "division": "High School",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-SHSD",
    "teamName": "SHSD",
    "year": 2024,
    "division": null,
    "village": null,
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": null,
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-SHSID-China",
    "teamName": "SHSID-China",
    "year": 2024,
    "division": "High School",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-SJTU-BioX-Shanghai",
    "teamName": "SJTU-BioX-Shanghai",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-SJTU-Software",
    "teamName": "SJTU-Software",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Software & AI",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-SMS-Shenzhen",
    "teamName": "SMS-Shenzhen",
    "year": 2024,
    "division": "High School",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-SMU-GDMU-CHINA",
    "teamName": "SMU-GDMU-CHINA",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Songshan-Lake",
    "teamName": "Songshan-Lake",
    "year": 2024,
    "division": "High School",
    "village": "Conservation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Improved Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Sorbonne-U-Paris",
    "teamName": "Sorbonne-U-Paris",
    "year": 2024,
    "division": "Graduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Squirrel-Beijing-I",
    "teamName": "Squirrel-Beijing-I",
    "year": 2024,
    "division": "High School",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Squirrel-CHN",
    "teamName": "Squirrel-CHN",
    "year": 2024,
    "division": "High School",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Squirrel-CHN-II",
    "teamName": "Squirrel-CHN-II",
    "year": 2024,
    "division": "High School",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Squirrel-Guangzhou",
    "teamName": "Squirrel-Guangzhou",
    "year": 2024,
    "division": "High School",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Squirrel-Shanghai",
    "teamName": "Squirrel-Shanghai",
    "year": 2024,
    "division": "High School",
    "village": "Infectious Diseases",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Squirrel-Shenzhen",
    "teamName": "Squirrel-Shenzhen",
    "year": 2024,
    "division": "High School",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-SRE-China",
    "teamName": "SRE-China",
    "year": 2024,
    "division": "High School",
    "village": "Software & AI",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Stanford",
    "teamName": "Stanford",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Stockholm",
    "teamName": "Stockholm",
    "year": 2024,
    "division": "Graduate",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Stony-Brook",
    "teamName": "Stony-Brook",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-SubCat-China",
    "teamName": "SubCat-China",
    "year": 2024,
    "division": "High School",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-SubCat-GreatBay",
    "teamName": "SubCat-GreatBay",
    "year": 2024,
    "division": "High School",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-SubCat-HS",
    "teamName": "SubCat-HS",
    "year": 2024,
    "division": "High School",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-SubCat-Peking",
    "teamName": "SubCat-Peking",
    "year": 2024,
    "division": "High School",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-SubCat-Shanghai",
    "teamName": "SubCat-Shanghai",
    "year": 2024,
    "division": "High School",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-SubCat-Union",
    "teamName": "SubCat-Union",
    "year": 2024,
    "division": "High School",
    "village": "Infectious Diseases",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Sustech-Med",
    "teamName": "Sustech-Med",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Infectious Diseases",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-SUSTechOCEAN",
    "teamName": "SUSTechOCEAN",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Climate Crisis",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-SVCE-CHENNAI",
    "teamName": "SVCE-CHENNAI",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Sydney-Australia",
    "teamName": "Sydney-Australia",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": "2nd Runner-up",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": [
      "Australia"
    ]
  },
  {
    "id": "2024-SYPHU-China",
    "teamName": "SYPHU-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-SZ-SHD",
    "teamName": "SZ-SHD",
    "year": 2024,
    "division": "High School",
    "village": "Space",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-SZPU-China",
    "teamName": "SZPU-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Infectious Diseases",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-SZSAIS-Shenzhen",
    "teamName": "SZSAIS-Shenzhen",
    "year": 2024,
    "division": "High School",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-SZU-China",
    "teamName": "SZU-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Taipei-KCISLK-V2",
    "teamName": "Taipei-KCISLK-V2",
    "year": 2024,
    "division": "High School",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-TAU-Israel",
    "teamName": "TAU-Israel",
    "year": 2024,
    "division": "Graduate",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Tec-Chihuahua",
    "teamName": "Tec-Chihuahua",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Food & Nutrition",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-TecCEM",
    "teamName": "TecCEM",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-TecMonterreyGDL",
    "teamName": "TecMonterreyGDL",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-TERMOSZ-Selye-HUN",
    "teamName": "TERMOSZ-Selye-HUN",
    "year": 2024,
    "division": "High School",
    "village": null,
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": null,
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-TestDaily-I-Beijing",
    "teamName": "TestDaily-I-Beijing",
    "year": 2024,
    "division": "High School",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Thailand-RIS",
    "teamName": "Thailand-RIS",
    "year": 2024,
    "division": "High School",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Inclusivity Award",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-thessaloniki",
    "teamName": "thessaloniki",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Thessaly",
    "teamName": "Thessaly",
    "year": 2024,
    "division": "Graduate",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Agriculture",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Winner"
      },
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-THISDL-United",
    "teamName": "THISDL-United",
    "year": 2024,
    "division": "High School",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Tianjin",
    "teamName": "Tianjin",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Space",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-TJI-Seoul",
    "teamName": "TJI-Seoul",
    "year": 2024,
    "division": "High School",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-TJUSLS-China",
    "teamName": "TJUSLS-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Improved Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-TJUSX",
    "teamName": "TJUSX",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-TokyoTech",
    "teamName": "TokyoTech",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Tongji-China",
    "teamName": "Tongji-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Tongji-Software",
    "teamName": "Tongji-Software",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Software & AI",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Toulouse-INSA-UPS",
    "teamName": "Toulouse-INSA-UPS",
    "year": 2024,
    "division": "Graduate",
    "village": "Space",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Space",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Winner"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Tsinghua",
    "teamName": "Tsinghua",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Tsinghua-M",
    "teamName": "Tsinghua-M",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-TU-Delft",
    "teamName": "TU-Delft",
    "year": 2024,
    "division": "Graduate",
    "village": null,
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": null,
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-TU-Dresden",
    "teamName": "TU-Dresden",
    "year": 2024,
    "division": "Graduate",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Fashion & Cosmetics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-TU-Eindhoven",
    "teamName": "TU-Eindhoven",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Oncology",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-TUDarmstadt",
    "teamName": "TUDarmstadt",
    "year": 2024,
    "division": "Graduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Bioremediation",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Tuebingen",
    "teamName": "Tuebingen",
    "year": 2024,
    "division": "Graduate",
    "village": null,
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": null,
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-TUM-Straubing",
    "teamName": "TUM-Straubing",
    "year": 2024,
    "division": "Graduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-TUPLS-Japan",
    "teamName": "TUPLS-Japan",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-UAlberta",
    "teamName": "UAlberta",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-UBC-Vancouver",
    "teamName": "UBC-Vancouver",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Winner"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-UCalgary",
    "teamName": "UCalgary",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      },
      {
        "name": "Safety and Security Award",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-UCAS-China",
    "teamName": "UCAS-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-UChicago",
    "teamName": "UChicago",
    "year": 2024,
    "division": "Graduate",
    "village": "Infectious Diseases",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Infectious Diseases",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-ucl",
    "teamName": "ucl",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-UCNZ",
    "teamName": "UCNZ",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Infectious Diseases",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-UCopenhagen",
    "teamName": "UCopenhagen",
    "year": 2024,
    "division": "Graduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Food & Nutrition",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-UCSC",
    "teamName": "UCSC",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-UESTC-China",
    "teamName": "UESTC-China",
    "year": 2024,
    "division": "Graduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-UFlorida",
    "teamName": "UFlorida",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-UiOslo-Norway",
    "teamName": "UiOslo-Norway",
    "year": 2024,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-ULaval",
    "teamName": "ULaval",
    "year": 2024,
    "division": "Graduate",
    "village": null,
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": null,
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-ULC",
    "teamName": "ULC",
    "year": 2024,
    "division": "High School",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-ULethbridge",
    "teamName": "ULethbridge",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Ulink-SZ",
    "teamName": "Ulink-SZ",
    "year": 2024,
    "division": "High School",
    "village": "Bioremediation",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-UM-Macau",
    "teamName": "UM-Macau",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-UMA-MALAGA",
    "teamName": "UMA-MALAGA",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-UManitoba",
    "teamName": "UManitoba",
    "year": 2024,
    "division": "Graduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-UMaryland",
    "teamName": "UMaryland",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-UNC-ChapelHill",
    "teamName": "UNC-ChapelHill",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Uni-Padua-IT",
    "teamName": "Uni-Padua-IT",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Bioremediation",
        "status": "Nominee"
      }
    ],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Entrepreneurship",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-UNILausanne",
    "teamName": "UNILausanne",
    "year": 2024,
    "division": "Graduate",
    "village": "Conservation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Conservation",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-UniMuenster",
    "teamName": "UniMuenster",
    "year": 2024,
    "division": "Graduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Software Tool",
        "status": "Winner"
      },
      {
        "name": "Best Plant Synthetic Biology",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-UnivLyon1-INSALyon",
    "teamName": "UnivLyon1-INSALyon",
    "year": 2024,
    "division": "Graduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-UOregon",
    "teamName": "UOregon",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Infectious Diseases",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-uOttawa",
    "teamName": "uOttawa",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Plant Synthetic Biology",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-UPF-Barcelona",
    "teamName": "UPF-Barcelona",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Infectious Diseases",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-UppsalaUniversity",
    "teamName": "UppsalaUniversity",
    "year": 2024,
    "division": "Graduate",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-USAFA",
    "teamName": "USAFA",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-USP-Brazil",
    "teamName": "USP-Brazil",
    "year": 2024,
    "division": null,
    "village": null,
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": null,
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-USP-EEL-Brazil",
    "teamName": "USP-EEL-Brazil",
    "year": 2024,
    "division": "Graduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-UTokyo",
    "teamName": "UTokyo",
    "year": 2024,
    "division": null,
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-UToronto",
    "teamName": "UToronto",
    "year": 2024,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Foundational Advance",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Winner"
      },
      {
        "name": "Best Entrepreneurship",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-UVU-Utah-2",
    "teamName": "UVU-Utah-2",
    "year": 2024,
    "division": "Graduate",
    "village": "Conservation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-UZurich",
    "teamName": "UZurich",
    "year": 2024,
    "division": "Graduate",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Agriculture",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Sustainable Development Impact",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Vilnius-Lithuania",
    "teamName": "Vilnius-Lithuania",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Software Tool",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Virginia",
    "teamName": "Virginia",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-VIT-V",
    "teamName": "VIT-V",
    "year": 2024,
    "division": "Undergraduate",
    "village": null,
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": null,
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-WageningenUR",
    "teamName": "WageningenUR",
    "year": 2024,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Warwick",
    "teamName": "Warwick",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Waseda-Tokyo",
    "teamName": "Waseda-Tokyo",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Bioremediation",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Winner"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-Washington",
    "teamName": "Washington",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Westlake",
    "teamName": "Westlake",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Westview-SanDiego",
    "teamName": "Westview-SanDiego",
    "year": 2024,
    "division": "High School",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-WFL-HangzhouBay",
    "teamName": "WFL-HangzhouBay",
    "year": 2024,
    "division": "High School",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Improved Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-WHU-China",
    "teamName": "WHU-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-William-and-Mary",
    "teamName": "William-and-Mary",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Foundational Advance",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-WLSA-ShanghaiAcademy",
    "teamName": "WLSA-ShanghaiAcademy",
    "year": 2024,
    "division": "High School",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-WUXI-DSAS",
    "teamName": "WUXI-DSAS",
    "year": 2024,
    "division": "High School",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-XJTLU-CHINA",
    "teamName": "XJTLU-CHINA",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-XJTLU-Software",
    "teamName": "XJTLU-Software",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Software & AI",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-XJU-China",
    "teamName": "XJU-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-XMU-China",
    "teamName": "XMU-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Climate Crisis",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Climate Crisis",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2024-YiYe-China",
    "teamName": "YiYe-China",
    "year": 2024,
    "division": "High School",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-YiYe-Wuhan",
    "teamName": "YiYe-Wuhan",
    "year": 2024,
    "division": "High School",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-Zhejiang-United",
    "teamName": "Zhejiang-United",
    "year": 2024,
    "division": "High School",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-ZJU-China",
    "teamName": "ZJU-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-ZJUT-China",
    "teamName": "ZJUT-China",
    "year": 2024,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2024-ZQT-Nanjing",
    "teamName": "ZQT-Nanjing",
    "year": 2024,
    "division": "High School",
    "village": "Therapeutics",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Aachen",
    "teamName": "Aachen",
    "year": 2025,
    "division": "Graduate",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Agriculture",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Aalto-Helsinki",
    "teamName": "Aalto-Helsinki",
    "year": 2025,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Winner"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-AFCM-Egypt",
    "teamName": "AFCM-Egypt",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-AIS-China",
    "teamName": "AIS-China",
    "year": 2025,
    "division": "High School",
    "village": "Conservation",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best HS Village (Climate/Conservation/Bioremediation)",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Improved Part",
        "status": "Winner"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-AshesiGhana",
    "teamName": "AshesiGhana",
    "year": 2025,
    "division": "Graduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Bioremediation",
        "status": "Nominee"
      }
    ],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Austin-UTexas",
    "teamName": "Austin-UTexas",
    "year": 2025,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-BANZ-SZA",
    "teamName": "BANZ-SZA",
    "year": 2025,
    "division": "High School",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Barcelona-UB",
    "teamName": "Barcelona-UB",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Foundational Advance",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Bioplus-Shanghai",
    "teamName": "Bioplus-Shanghai",
    "year": 2025,
    "division": "High School",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-BIT-China",
    "teamName": "BIT-China",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Fashion & Cosmetics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Software Tool",
        "status": "Winner"
      },
      {
        "name": "Best Hardware",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-BNDS-China",
    "teamName": "BNDS-China",
    "year": 2025,
    "division": "High School",
    "village": "Therapeutics",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best HS Village (Infectious/Therapeutics/Diagnostics/Oncology)",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Winner"
      },
      {
        "name": "Best Measurement",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-BNU-China",
    "teamName": "BNU-China",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-BohemiaBio",
    "teamName": "BohemiaBio",
    "year": 2025,
    "division": "Graduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Boston-BOSLab",
    "teamName": "Boston-BOSLab",
    "year": 2025,
    "division": "High School",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best HS Village (Climate/Conservation/Bioremediation)",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Winner"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Brno-Czech-Republic",
    "teamName": "Brno Czech Republic",
    "year": 2025,
    "division": "Graduate",
    "village": "Agriculture",
    "grandPrizeLevel": "Grand Prize Winner",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Agriculture",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Plant Synthetic Biology",
        "status": "Winner"
      },
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": [
      "Czech Republic"
    ]
  },
  {
    "id": "2025-BUCT",
    "teamName": "BUCT",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Bioremediation",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-BUCT-China",
    "teamName": "BUCT-China",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Measurement",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-CAU-China",
    "teamName": "CAU-China",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Agriculture",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2025-CJUH-JLU-China",
    "teamName": "CJUH-JLU-China",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Concordia-Shanghai",
    "teamName": "Concordia-Shanghai",
    "year": 2025,
    "division": "High School",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best HS Village (Climate/Conservation/Bioremediation)",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2025-Cornell",
    "teamName": "Cornell",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Space",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Space",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-DBHS-CA",
    "teamName": "DBHS-CA",
    "year": 2025,
    "division": "High School",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-DTU-Denmark",
    "teamName": "DTU-Denmark",
    "year": 2025,
    "division": "Graduate",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Fashion & Cosmetics",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-DUESSELDORF",
    "teamName": "DUESSELDORF",
    "year": 2025,
    "division": "Graduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2025-Duke",
    "teamName": "Duke",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Infectious Diseases",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Ecuador",
    "teamName": "Ecuador",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-EPFL",
    "teamName": "EPFL",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Climate Crisis",
    "grandPrizeLevel": "1st Runner-up",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Climate Crisis",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Winner"
      },
      {
        "name": "Best Software Tool",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Winner"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Winner"
      }
    ],
    "countries": [
      "Switzerland"
    ]
  },
  {
    "id": "2025-Estonia-TUBI",
    "teamName": "Estonia-TUBI",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Climate Crisis",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Climate Crisis",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-ETH-Zurich",
    "teamName": "ETH-Zurich",
    "year": 2025,
    "division": "Graduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Evry-Paris-Saclay",
    "teamName": "Evry-Paris-Saclay",
    "year": 2025,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Freiburg",
    "teamName": "Freiburg",
    "year": 2025,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Foundational Advance",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Fudan",
    "teamName": "Fudan",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-GCGS",
    "teamName": "GCGS",
    "year": 2025,
    "division": "High School",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best HS Village (Space/Foundational/Software/Biomanufacturing)",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-GEC-Guangzhou",
    "teamName": "GEC-Guangzhou",
    "year": 2025,
    "division": "High School",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Winner"
      },
      {
        "name": "Best Hardware",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-GEMS-Taiwan",
    "teamName": "GEMS-Taiwan",
    "year": 2025,
    "division": "High School",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best HS Village (Agriculture/Food/Fashion/Art)",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-GHCIS",
    "teamName": "GHCIS",
    "year": 2025,
    "division": "High School",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-GreatBay-SCIE",
    "teamName": "GreatBay-SCIE",
    "year": 2025,
    "division": "High School",
    "village": "Infectious Diseases",
    "grandPrizeLevel": "Grand Prize Winner",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best HS Village (Infectious/Therapeutics/Diagnostics/Oncology)",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Winner"
      },
      {
        "name": "Best Education",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Winner"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Winner"
      }
    ],
    "countries": [
      "China"
    ]
  },
  {
    "id": "2025-Groningen",
    "teamName": "Groningen",
    "year": 2025,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Measurement",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-GU-Frankfurt",
    "teamName": "GU-Frankfurt",
    "year": 2025,
    "division": "Graduate",
    "village": "Agriculture",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Agriculture",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Safety and Security Award",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-GYHS",
    "teamName": "GYHS",
    "year": 2025,
    "division": "High School",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Safety and Security Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Hamburg",
    "teamName": "Hamburg",
    "year": 2025,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2025-Hangzhou-MedX",
    "teamName": "Hangzhou-MedX",
    "year": 2025,
    "division": "High School",
    "village": "Conservation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Hangzhou-PET",
    "teamName": "Hangzhou-PET",
    "year": 2025,
    "division": "High School",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best HS Village (Climate/Conservation/Bioremediation)",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Heidelberg",
    "teamName": "Heidelberg",
    "year": 2025,
    "division": "Graduate",
    "village": "Oncology",
    "grandPrizeLevel": "1st Runner-up",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Oncology",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Winner"
      },
      {
        "name": "Best Model",
        "status": "Winner"
      },
      {
        "name": "Best Education",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": [
      "Germany"
    ]
  },
  {
    "id": "2025-HG-Tokyo",
    "teamName": "HG-Tokyo",
    "year": 2025,
    "division": "High School",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best HS Village (Infectious/Therapeutics/Diagnostics/Oncology)",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-HiZJU-China",
    "teamName": "HiZJU-China",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Safety and Security Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-HK-Joint-School",
    "teamName": "HK-Joint-School",
    "year": 2025,
    "division": "High School",
    "village": "Food & Nutrition",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best HS Village (Agriculture/Food/Fashion/Art)",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-HKSSC",
    "teamName": "HKSSC",
    "year": 2025,
    "division": "High School",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-HongKong-JSS",
    "teamName": "HongKong-JSS",
    "year": 2025,
    "division": "High School",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Hongwen-School",
    "teamName": "Hongwen School",
    "year": 2025,
    "division": "High School",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Winner"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-HPI-Potsdam",
    "teamName": "HPI-Potsdam",
    "year": 2025,
    "division": "Graduate",
    "village": "Software & AI",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Software & AI",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Safety and Security Award",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-HSID",
    "teamName": "HSID",
    "year": 2025,
    "division": "High School",
    "village": "HS Village (Climate/Conservation/Bioremediation)",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best HS Village (Climate/Conservation/Bioremediation)",
        "status": "Nominee"
      }
    ],
    "medal": null,
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2025-HUST-China",
    "teamName": "HUST-China",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "iGEMers Prize",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-HWFLA-Beijing",
    "teamName": "HWFLA-Beijing",
    "year": 2025,
    "division": "High School",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-HZAU-China",
    "teamName": "HZAU-China",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-IISc-Bengaluru",
    "teamName": "IISc-Bengaluru",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-ISBICS",
    "teamName": "ISBICS",
    "year": 2025,
    "division": "High School",
    "village": null,
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": null,
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-IZJU-China",
    "teamName": "IZJU-China",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Infectious Diseases",
    "grandPrizeLevel": "2nd Runner-up",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Infectious Diseases",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Winner"
      },
      {
        "name": "Best Model",
        "status": "Nominee"
      }
    ],
    "countries": [
      "China"
    ]
  },
  {
    "id": "2025-Jiashu-China",
    "teamName": "Jiashu-China",
    "year": 2025,
    "division": "High School",
    "village": "Space",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best HS Village (Space/Foundational/Software/Biomanufacturing)",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2025-JLU-CP",
    "teamName": "JLU-CP",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Space",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-JLU-NBBMS",
    "teamName": "JLU-NBBMS",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Keystone",
    "teamName": "Keystone",
    "year": 2025,
    "division": "High School",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-KhanLab-BayArea",
    "teamName": "KhanLab-BayArea",
    "year": 2025,
    "division": "High School",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best HS Village (Space/Foundational/Software/Biomanufacturing)",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2025-KIS-BKK",
    "teamName": "KIS-BKK",
    "year": 2025,
    "division": "High School",
    "village": null,
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": null,
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Lambert-GA",
    "teamName": "Lambert-GA",
    "year": 2025,
    "division": "High School",
    "village": "Infectious Diseases",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best HS Village (Infectious/Therapeutics/Diagnostics/Oncology)",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Software Tool",
        "status": "Winner"
      },
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Leiden",
    "teamName": "Leiden",
    "year": 2025,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-LINKS-China",
    "teamName": "LINKS-China",
    "year": 2025,
    "division": "High School",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Lund",
    "teamName": "Lund",
    "year": 2025,
    "division": "Graduate",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Fashion & Cosmetics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-LYON",
    "teamName": "LYON",
    "year": 2025,
    "division": "Graduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Bioremediation",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Marburg",
    "teamName": "Marburg",
    "year": 2025,
    "division": "Graduate",
    "village": "Infectious Diseases",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Infectious Diseases",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Winner"
      },
      {
        "name": "Best Software Tool",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-MBG-DUTh",
    "teamName": "MBG-DUTh",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Bioremediation",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2025-McGill",
    "teamName": "McGill",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": "Grand Prize Winner",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Foundational Advance",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": [
      "Canada"
    ]
  },
  {
    "id": "2025-McMaster-Canada",
    "teamName": "McMaster-Canada",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-MIT-MAHE",
    "teamName": "MIT-MAHE",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Agriculture",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2025-MPA-USA",
    "teamName": "MPA-USA",
    "year": 2025,
    "division": "High School",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-MSP-Maastricht",
    "teamName": "MSP-Maastricht",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Climate Crisis",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Climate Crisis",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Munich",
    "teamName": "Munich",
    "year": 2025,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Software Tool",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Winner"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-NAIS",
    "teamName": "NAIS",
    "year": 2025,
    "division": "High School",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Plant Synthetic Biology",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-NJTech-China",
    "teamName": "NJTech-China",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Improved Part",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-NJTECH-CHINA-A",
    "teamName": "NJTECH-CHINA-A",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-NJU-China",
    "teamName": "NJU-China",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Software & AI",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Software & AI",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-NU-Boston",
    "teamName": "NU Boston",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Conservation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Conservation",
        "status": "Winner"
      }
    ],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2025-NU-Kazakhstan",
    "teamName": "NU-Kazakhstan",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-NUDT-CHINA",
    "teamName": "NUDT-CHINA",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Education",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-NUS-Singapore",
    "teamName": "NUS-Singapore",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Food & Nutrition",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-NYCU-Formosa",
    "teamName": "NYCU-Formosa",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Foundational Advance",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-NYU-Abu-Dhabi",
    "teamName": "NYU-Abu-Dhabi",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Patras-Med",
    "teamName": "Patras-Med",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-PCA-Korea",
    "teamName": "PCA Korea",
    "year": 2025,
    "division": "High School",
    "village": "Biomanufacturing",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best HS Village (Space/Foundational/Software/Biomanufacturing)",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Peking",
    "teamName": "Peking",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Infectious Diseases",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Infectious Diseases",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Winner"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-PekingHSC",
    "teamName": "PekingHSC",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-PuiChing-Macau",
    "teamName": "PuiChing-Macau",
    "year": 2025,
    "division": "High School",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Queens-Canada",
    "teamName": "Queens-Canada",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-RDFZ-CHINA",
    "teamName": "RDFZ-CHINA",
    "year": 2025,
    "division": "High School",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-REC-CHENNAI",
    "teamName": "REC-CHENNAI",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Food & Nutrition",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2025-Rochester",
    "teamName": "Rochester",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Space",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Space",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-RUM-UPRM",
    "teamName": "RUM-UPRM",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Safety and Security Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-SCU-China",
    "teamName": "SCU-China",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Bioremediation",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Shanghai-SDG",
    "teamName": "Shanghai-SDG",
    "year": 2025,
    "division": "High School",
    "village": "Agriculture",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best HS Village (Agriculture/Food/Fashion/Art)",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Shanghaitech-China",
    "teamName": "Shanghaitech-China",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Foundational Advance",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-SHSBNU-China",
    "teamName": "SHSBNU-China",
    "year": 2025,
    "division": "High School",
    "village": "Space",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best HS Village (Space/Foundational/Software/Biomanufacturing)",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-SHSID",
    "teamName": "SHSID",
    "year": 2025,
    "division": "High School",
    "village": "Bioremediation",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Hardware",
        "status": "Winner"
      },
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-SMS-Shenzhen",
    "teamName": "SMS-Shenzhen",
    "year": 2025,
    "division": "High School",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-SMU-Union-China",
    "teamName": "SMU-Union-China",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Infectious Diseases",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Infectious Diseases",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-SR-China",
    "teamName": "SR-China",
    "year": 2025,
    "division": "High School",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best HS Village (Agriculture/Food/Fashion/Art)",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-SR-Shenzhen",
    "teamName": "SR-Shenzhen",
    "year": 2025,
    "division": "High School",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Promotion Video",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Stanford",
    "teamName": "Stanford",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Oncology",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2025-Stuttgart",
    "teamName": "Stuttgart",
    "year": 2025,
    "division": "Graduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-SubCat-Greatbay",
    "teamName": "SubCat-Greatbay",
    "year": 2025,
    "division": "High School",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-SUIS-PINGHE",
    "teamName": "SUIS-PINGHE",
    "year": 2025,
    "division": "High School",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Entrepreneurship",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-SUSTech-BIO",
    "teamName": "SUSTech-BIO",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Infectious Diseases",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Infectious Diseases",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "Inclusivity Award",
        "status": "Winner"
      },
      {
        "name": "Best Entrepreneurship",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-SZU-China",
    "teamName": "SZU-China",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Conservation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Conservation",
        "status": "Nominee"
      }
    ],
    "medal": "Silver",
    "specialPrizes": [
      {
        "name": "Best Promotion Video",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Taipei-KCISLK-V3",
    "teamName": "Taipei-KCISLK-V3",
    "year": 2025,
    "division": "High School",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-TAU-Israel",
    "teamName": "TAU-Israel",
    "year": 2025,
    "division": "Graduate",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Oncology",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Technion-Israel",
    "teamName": "Technion-Israel",
    "year": 2025,
    "division": "Graduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Thailand-RIS",
    "teamName": "Thailand-RIS",
    "year": 2025,
    "division": "High School",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Thessaloniki",
    "teamName": "Thessaloniki",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Oncology",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Inclusivity Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Thessaly",
    "teamName": "Thessaly",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Oncology",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Tianjin",
    "teamName": "Tianjin",
    "year": 2025,
    "division": "Graduate",
    "village": "Fashion & Cosmetics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": null,
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Toronto",
    "teamName": "Toronto",
    "year": 2025,
    "division": "Graduate",
    "village": "Therapeutics",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Therapeutics",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Model",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Tsinghua",
    "teamName": "Tsinghua",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Bioremediation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Sustainable Development Impact",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Tsukuba",
    "teamName": "Tsukuba",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Software & AI",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Safety and Security Award",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-TU-Dresden",
    "teamName": "TU-Dresden",
    "year": 2025,
    "division": "Graduate",
    "village": "Foundational Advance",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-TU-Eindhoven",
    "teamName": "TU-Eindhoven",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Diagnostics",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-TUDarmstadt",
    "teamName": "TUDarmstadt",
    "year": 2025,
    "division": "Graduate",
    "village": "Space",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Space",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Hardware",
        "status": "Winner"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-UBC-Vancouver",
    "teamName": "UBC-Vancouver",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Space",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Space",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Software Tool",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-UCalgary",
    "teamName": "UCalgary",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Infectious Diseases",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Safety and Security Award",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-UCS-A",
    "teamName": "UCS-A",
    "year": 2025,
    "division": "High School",
    "village": "Therapeutics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Hardware",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-UiOslo-Norway",
    "teamName": "UiOslo-Norway",
    "year": 2025,
    "division": "Graduate",
    "village": "Diagnostics",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Basic Part",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-UNICAMP-Brazil",
    "teamName": "UNICAMP-Brazil",
    "year": 2025,
    "division": "Graduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Food & Nutrition",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Best Entrepreneurship",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-UNILausanne",
    "teamName": "UNILausanne",
    "year": 2025,
    "division": "Graduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "Best Entrepreneurship",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-UniMuenster",
    "teamName": "UniMuenster",
    "year": 2025,
    "division": "Graduate",
    "village": "Infectious Diseases",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Education",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-UOttawa",
    "teamName": "UOttawa",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Infectious Diseases",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Infectious Diseases",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-Uprize-I",
    "teamName": "Uprize-I",
    "year": 2025,
    "division": "High School",
    "village": "Agriculture",
    "grandPrizeLevel": "1st Runner-up",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best HS Village (Agriculture/Food/Fashion/Art)",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Measurement",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      },
      {
        "name": "Safety and Security Award",
        "status": "Winner"
      },
      {
        "name": "iGEMers Prize",
        "status": "Winner"
      }
    ],
    "countries": [
      "China"
    ]
  },
  {
    "id": "2025-USherbrooke",
    "teamName": "USherbrooke",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Climate Crisis",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [],
    "medal": "Bronze",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-USP-Brazil",
    "teamName": "USP-Brazil",
    "year": 2025,
    "division": "Graduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Inclusivity Award",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-UTDallas",
    "teamName": "UTDallas",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2025-WageningenUR",
    "teamName": "WageningenUR",
    "year": 2025,
    "division": "Graduate",
    "village": "Biomanufacturing",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Biomanufacturing",
        "status": "Winner"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Part Collection",
        "status": "Nominee"
      },
      {
        "name": "Best Presentation",
        "status": "Nominee"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Winner"
      },
      {
        "name": "Best Entrepreneurship",
        "status": "Winner"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-WLSA-ShanghaiAcademy",
    "teamName": "WLSA-ShanghaiAcademy",
    "year": 2025,
    "division": "High School",
    "village": "Therapeutics",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best HS Village (Infectious/Therapeutics/Diagnostics/Oncology)",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Nominee"
      },
      {
        "name": "Best Integrated Human Practices",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-XJTLU-CHINA",
    "teamName": "XJTLU-CHINA",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Conservation",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Conservation",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2025-XJTLU-Science-China",
    "teamName": "XJTLU-Science-China",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Oncology",
    "grandPrizeLevel": "Top 10",
    "top10": true,
    "villageAwards": [
      {
        "name": "Best Oncology",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best New Composite Part",
        "status": "Winner"
      },
      {
        "name": "Best Wiki",
        "status": "Nominee"
      }
    ],
    "countries": []
  },
  {
    "id": "2025-XJTLU-Software",
    "teamName": "XJTLU-Software",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Software & AI",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Software & AI",
        "status": "Nominee"
      }
    ],
    "medal": "Silver",
    "specialPrizes": [],
    "countries": []
  },
  {
    "id": "2025-XMU-China",
    "teamName": "XMU-China",
    "year": 2025,
    "division": "Undergraduate",
    "village": "Food & Nutrition",
    "grandPrizeLevel": null,
    "top10": false,
    "villageAwards": [
      {
        "name": "Best Food & Nutrition",
        "status": "Nominee"
      }
    ],
    "medal": "Gold",
    "specialPrizes": [
      {
        "name": "Best Presentation",
        "status": "Nominee"
      }
    ],
    "countries": []
  }
];
