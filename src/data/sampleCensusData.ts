import { StateCensusLensData } from '../types/census';

export const CENSUS_LENS_CATEGORIES = [
  { id: 'clean_cooking_fuel', label: 'Clean Cooking Fuel Access', icon: 'Flame' },
  { id: 'drinking_water', label: 'Piped Drinking Water at Premises', icon: 'Droplets' },
  { id: 'digital_connectivity', label: 'Digital & Internet Access', icon: 'Wifi' },
  { id: 'housing_type', label: 'Permanent (Pucca) Housing', icon: 'Home' },
  { id: 'electricity_access', label: 'Household Grid Electricity', icon: 'Zap' },
];

export const DEMO_CENSUS_LENS_DATA: Record<string, StateCensusLensData> = {
  'all-india': {
    stateId: 'all-india',
    stateName: 'All-India (National Estimate)',
    metrics: {
      clean_cooking_fuel: {
        id: 'clean_cooking_fuel',
        name: 'Clean Cooking Fuel Access',
        category: 'Energy & Amenities',
        unit: '% of households',
        nationalAverage: 68.5,
        dataPoints: [
          { label: 'LPG / PNG', value: 68.5, color: '#f97316' },
          { label: 'Firewood / Biomass', value: 24.2, color: '#eab308' },
          { label: 'Biogas / Electric', value: 4.3, color: '#10b981' },
          { label: 'Kerosene / Others', value: 3.0, color: '#64748b' },
        ],
        civicInsight: 'Nationwide clean fuel adoption is estimated at 68.5%, driven by national LPG distribution initiatives.',
        civicUseCase: 'Determines last-mile LPG cylinder depot distribution and pipeline expansion in underserved rural clusters.'
      },
      drinking_water: {
        id: 'drinking_water',
        name: 'Piped Drinking Water at Premises',
        category: 'Water & Sanitation',
        unit: '% of households',
        nationalAverage: 73.2,
        dataPoints: [
          { label: 'Treated Tap Water', value: 73.2, color: '#0ea5e9' },
          { label: 'Covered Well / Handpump', value: 18.1, color: '#14b8a6' },
          { label: 'Uncovered / Surface Source', value: 8.7, color: '#f43f5e' },
        ],
        civicInsight: '73.2% of households now receive treated tap water inside or adjacent to their premises.',
        civicUseCase: 'Crucial for Jal Jeevan Mission engineering allocations and ground-water replenishment project prioritisation.'
      },
      digital_connectivity: {
        id: 'digital_connectivity',
        name: 'Digital & Internet Access',
        category: 'Digital Infrastructure',
        unit: '% of households',
        nationalAverage: 62.4,
        dataPoints: [
          { label: 'Broadband / Smartphone Active', value: 62.4, color: '#3b82f6' },
          { label: 'Feature Phone Only', value: 25.8, color: '#8b5cf6' },
          { label: 'No Active Connection', value: 11.8, color: '#94a3b8' },
        ],
        civicInsight: '62.4% of households have smartphone or broadband connectivity, enabling digital governance and self-enumeration.',
        civicUseCase: 'Identifies mobile dark spots to deploy fiber-optic BharatNet towers and set up Common Service Centers (CSCs).'
      },
      housing_type: {
        id: 'housing_type',
        name: 'Permanent (Pucca) Housing',
        category: 'Housing Infrastructure',
        unit: '% of dwellings',
        nationalAverage: 65.8,
        dataPoints: [
          { label: 'Pucca (Concrete/Brick)', value: 65.8, color: '#10b981' },
          { label: 'Semi-Pucca (Mixed)', value: 24.6, color: '#f59e0b' },
          { label: 'Kutcha (Thatch/Mud)', value: 9.6, color: '#ef4444' },
        ],
        civicInsight: 'Permanent concrete housing coverage is estimated at 65.8% across Indian urban and rural districts.',
        civicUseCase: 'Guides municipal urban planning, Pradhan Mantri Awas Yojana budget sanctioning, and disaster-resilient shelter construction.'
      },
      electricity_access: {
        id: 'electricity_access',
        name: 'Household Grid Electricity',
        category: 'Basic Utilities',
        unit: '% of households',
        nationalAverage: 96.8,
        dataPoints: [
          { label: 'Grid Electricity Connection', value: 96.8, color: '#eab308' },
          { label: 'Off-grid Solar Home System', value: 2.1, color: '#22c55e' },
          { label: 'Un-electrified', value: 1.1, color: '#f43f5e' },
        ],
        civicInsight: 'Near-universal domestic electrical connectivity reached 96.8% of inhabited habitations.',
        civicUseCase: 'Enables power distribution companies (DISCOMs) to calculate substation loads and plan smart metering.'
      }
    }
  },
  'maharashtra': {
    stateId: 'maharashtra',
    stateName: 'Maharashtra',
    metrics: {
      clean_cooking_fuel: {
        id: 'clean_cooking_fuel',
        name: 'Clean Cooking Fuel Access',
        category: 'Energy & Amenities',
        unit: '% of households',
        nationalAverage: 68.5,
        dataPoints: [
          { label: 'LPG / PNG', value: 78.4, color: '#f97316' },
          { label: 'Firewood / Biomass', value: 16.2, color: '#eab308' },
          { label: 'Biogas / Electric', value: 3.8, color: '#10b981' },
          { label: 'Kerosene / Others', value: 1.6, color: '#64748b' },
        ],
        civicInsight: 'Maharashtra exceeds national clean cooking average at 78.4%, with dense PNG networks in MMR and Pune regions.',
        civicUseCase: 'Aids city gas distribution (CGD) companies in connecting rural talukas across Marathwada and Vidarbha.'
      },
      drinking_water: {
        id: 'drinking_water',
        name: 'Piped Drinking Water at Premises',
        category: 'Water & Sanitation',
        unit: '% of households',
        nationalAverage: 73.2,
        dataPoints: [
          { label: 'Treated Tap Water', value: 79.5, color: '#0ea5e9' },
          { label: 'Covered Well / Handpump', value: 14.8, color: '#14b8a6' },
          { label: 'Uncovered / Surface Source', value: 5.7, color: '#f43f5e' },
        ],
        civicInsight: 'Piped potable water covers 79.5% of homes, with rapid expansion in water-stressed district reservoirs.',
        civicUseCase: 'Prioritizes regional drought mitigation programs and micro-irrigation feeder canals.'
      },
      digital_connectivity: {
        id: 'digital_connectivity',
        name: 'Digital & Internet Access',
        category: 'Digital Infrastructure',
        unit: '% of households',
        nationalAverage: 62.4,
        dataPoints: [
          { label: 'Broadband / Smartphone Active', value: 72.1, color: '#3b82f6' },
          { label: 'Feature Phone Only', value: 20.3, color: '#8b5cf6' },
          { label: 'No Active Connection', value: 7.6, color: '#94a3b8' },
        ],
        civicInsight: 'Strong digital adoption at 72.1% facilitates high citizen engagement in digital self-enumeration.',
        civicUseCase: 'Accelerates e-governance service rollout (MahaOnline) and digital health locker integration.'
      },
      housing_type: {
        id: 'housing_type',
        name: 'Permanent (Pucca) Housing',
        category: 'Housing Infrastructure',
        unit: '% of dwellings',
        nationalAverage: 65.8,
        dataPoints: [
          { label: 'Pucca (Concrete/Brick)', value: 74.3, color: '#10b981' },
          { label: 'Semi-Pucca (Mixed)', value: 20.1, color: '#f59e0b' },
          { label: 'Kutcha (Thatch/Mud)', value: 5.6, color: '#ef4444' },
        ],
        civicInsight: '74.3% permanent dwellings with structured municipal slum redevelopment programs.',
        civicUseCase: 'Allocates state urban housing grants and municipal fire safety zoning.'
      },
      electricity_access: {
        id: 'electricity_access',
        name: 'Household Grid Electricity',
        category: 'Basic Utilities',
        unit: '% of households',
        nationalAverage: 96.8,
        dataPoints: [
          { label: 'Grid Electricity Connection', value: 98.4, color: '#eab308' },
          { label: 'Off-grid Solar Home System', value: 1.2, color: '#22c55e' },
          { label: 'Un-electrified', value: 0.4, color: '#f43f5e' },
        ],
        civicInsight: 'Grid electrification stands at 98.4%, with solar pump feeders in agricultural belts.',
        civicUseCase: 'Helps MSEDCL plan 24x7 power stability for rural schools and primary health centers.'
      }
    }
  },
  'tamil-nadu': {
    stateId: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    metrics: {
      clean_cooking_fuel: {
        id: 'clean_cooking_fuel',
        name: 'Clean Cooking Fuel Access',
        category: 'Energy & Amenities',
        unit: '% of households',
        nationalAverage: 68.5,
        dataPoints: [
          { label: 'LPG / PNG', value: 85.2, color: '#f97316' },
          { label: 'Firewood / Biomass', value: 11.4, color: '#eab308' },
          { label: 'Biogas / Electric', value: 2.8, color: '#10b981' },
          { label: 'Kerosene / Others', value: 0.6, color: '#64748b' },
        ],
        civicInsight: 'Tamil Nadu leads with 85.2% clean cooking fuel adoption among southern states.',
        civicUseCase: 'Guides municipal biomass transition and clean energy subsidies for rural coastal hamlets.'
      },
      drinking_water: {
        id: 'drinking_water',
        name: 'Piped Drinking Water at Premises',
        category: 'Water & Sanitation',
        unit: '% of households',
        nationalAverage: 73.2,
        dataPoints: [
          { label: 'Treated Tap Water', value: 88.6, color: '#0ea5e9' },
          { label: 'Covered Well / Handpump', value: 8.2, color: '#14b8a6' },
          { label: 'Uncovered / Surface Source', value: 3.2, color: '#f43f5e' },
        ],
        civicInsight: '88.6% of households receive piped treated drinking water.',
        civicUseCase: 'Enables desalination plant capacity planning and Combined Water Supply Schemes (CWSS).'
      },
      digital_connectivity: {
        id: 'digital_connectivity',
        name: 'Digital & Internet Access',
        category: 'Digital Infrastructure',
        unit: '% of households',
        nationalAverage: 62.4,
        dataPoints: [
          { label: 'Broadband / Smartphone Active', value: 76.5, color: '#3b82f6' },
          { label: 'Feature Phone Only', value: 18.2, color: '#8b5cf6' },
          { label: 'No Active Connection', value: 5.3, color: '#94a3b8' },
        ],
        civicInsight: 'High digital connectivity at 76.5% enables seamless paperless mobile enumeration.',
        civicUseCase: 'Empowers local panchayats to establish e-Sevai citizen kiosks and smart classroom connectivity.'
      },
      housing_type: {
        id: 'housing_type',
        name: 'Permanent (Pucca) Housing',
        category: 'Housing Infrastructure',
        unit: '% of dwellings',
        nationalAverage: 65.8,
        dataPoints: [
          { label: 'Pucca (Concrete/Brick)', value: 81.2, color: '#10b981' },
          { label: 'Semi-Pucca (Mixed)', value: 14.5, color: '#f59e0b' },
          { label: 'Kutcha (Thatch/Mud)', value: 4.3, color: '#ef4444' },
        ],
        civicInsight: '81.2% permanent residential buildings, significantly above the national average.',
        civicUseCase: 'Assists disaster management authorities in flood-safe zoning in coastal delta zones.'
      },
      electricity_access: {
        id: 'electricity_access',
        name: 'Household Grid Electricity',
        category: 'Basic Utilities',
        unit: '% of households',
        nationalAverage: 96.8,
        dataPoints: [
          { label: 'Grid Electricity Connection', value: 99.2, color: '#eab308' },
          { label: 'Off-grid Solar Home System', value: 0.6, color: '#22c55e' },
          { label: 'Un-electrified', value: 0.2, color: '#f43f5e' },
        ],
        civicInsight: '99.2% full electrical grid coverage across urban and rural settlements.',
        civicUseCase: 'Powers TANGEDCO renewable integration and rooftop solar energy grid feeding.'
      }
    }
  },
  'uttar-pradesh': {
    stateId: 'uttar-pradesh',
    stateName: 'Uttar Pradesh',
    metrics: {
      clean_cooking_fuel: {
        id: 'clean_cooking_fuel',
        name: 'Clean Cooking Fuel Access',
        category: 'Energy & Amenities',
        unit: '% of households',
        nationalAverage: 68.5,
        dataPoints: [
          { label: 'LPG / PNG', value: 61.2, color: '#f97316' },
          { label: 'Firewood / Biomass', value: 32.8, color: '#eab308' },
          { label: 'Biogas / Electric', value: 3.5, color: '#10b981' },
          { label: 'Kerosene / Others', value: 2.5, color: '#64748b' },
        ],
        civicInsight: '61.2% clean fuel coverage, with high potential for targeted rural refill subsidies.',
        civicUseCase: 'Determines new Ujjwala refill centers and biomass pelletization units in Purvanchal.'
      },
      drinking_water: {
        id: 'drinking_water',
        name: 'Piped Drinking Water at Premises',
        category: 'Water & Sanitation',
        unit: '% of households',
        nationalAverage: 73.2,
        dataPoints: [
          { label: 'Treated Tap Water', value: 66.4, color: '#0ea5e9' },
          { label: 'Covered Well / Handpump', value: 26.5, color: '#14b8a6' },
          { label: 'Uncovered / Surface Source', value: 7.1, color: '#f43f5e' },
        ],
        civicInsight: 'Treated tap water access reached 66.4%, with rapid ongoing Jal Jeevan Mission tap connections.',
        civicUseCase: 'Guides water testing laboratory networks and fluoride/arsenic purification plants.'
      },
      digital_connectivity: {
        id: 'digital_connectivity',
        name: 'Digital & Internet Access',
        category: 'Digital Infrastructure',
        unit: '% of households',
        nationalAverage: 62.4,
        dataPoints: [
          { label: 'Broadband / Smartphone Active', value: 58.6, color: '#3b82f6' },
          { label: 'Feature Phone Only', value: 29.8, color: '#8b5cf6' },
          { label: 'No Active Connection', value: 11.6, color: '#94a3b8' },
        ],
        civicInsight: '58.6% of households are digitally connected via smartphones and high-speed cellular data.',
        civicUseCase: 'Directs deployment of digital literacy facilitators and mobile enumeration verification teams.'
      },
      housing_type: {
        id: 'housing_type',
        name: 'Permanent (Pucca) Housing',
        category: 'Housing Infrastructure',
        unit: '% of dwellings',
        nationalAverage: 65.8,
        dataPoints: [
          { label: 'Pucca (Concrete/Brick)', value: 62.1, color: '#10b981' },
          { label: 'Semi-Pucca (Mixed)', value: 28.3, color: '#f59e0b' },
          { label: 'Kutcha (Thatch/Mud)', value: 9.6, color: '#ef4444' },
        ],
        civicInsight: '62.1% permanent homes, reflecting major rural pucca housing conversions.',
        civicUseCase: 'Allocates rural housing targets (PMAY-G) across Bundelkhand and Terai regions.'
      },
      electricity_access: {
        id: 'electricity_access',
        name: 'Household Grid Electricity',
        category: 'Basic Utilities',
        unit: '% of households',
        nationalAverage: 96.8,
        dataPoints: [
          { label: 'Grid Electricity Connection', value: 95.8, color: '#eab308' },
          { label: 'Off-grid Solar Home System', value: 2.9, color: '#22c55e' },
          { label: 'Un-electrified', value: 1.3, color: '#f43f5e' },
        ],
        civicInsight: '95.8% domestic electrification, backed by intensive rural feeder separation.',
        civicUseCase: 'Enables planning of dedicated agricultural and domestic supply distribution lines.'
      }
    }
  },
  'west-bengal': {
    stateId: 'west-bengal',
    stateName: 'West Bengal',
    metrics: {
      clean_cooking_fuel: {
        id: 'clean_cooking_fuel',
        name: 'Clean Cooking Fuel Access',
        category: 'Energy & Amenities',
        unit: '% of households',
        nationalAverage: 68.5,
        dataPoints: [
          { label: 'LPG / PNG', value: 64.7, color: '#f97316' },
          { label: 'Firewood / Biomass', value: 28.5, color: '#eab308' },
          { label: 'Biogas / Electric', value: 4.1, color: '#10b981' },
          { label: 'Kerosene / Others', value: 2.7, color: '#64748b' },
        ],
        civicInsight: '64.7% clean cooking access, with notable rise in rural domestic gas connections.',
        civicUseCase: 'Assists in setting up decentralized clean energy distribution in Sundarbans and Jangalmahal.'
      },
      drinking_water: {
        id: 'drinking_water',
        name: 'Piped Drinking Water at Premises',
        category: 'Water & Sanitation',
        unit: '% of households',
        nationalAverage: 73.2,
        dataPoints: [
          { label: 'Treated Tap Water', value: 71.8, color: '#0ea5e9' },
          { label: 'Covered Well / Handpump', value: 22.4, color: '#14b8a6' },
          { label: 'Uncovered / Surface Source', value: 5.8, color: '#f43f5e' },
        ],
        civicInsight: 'Piped water reached 71.8% of residences, supporting safe drinking water goals.',
        civicUseCase: 'Informs surface water-based multi-village piped water schemes to combat arsenic in groundwater.'
      },
      digital_connectivity: {
        id: 'digital_connectivity',
        name: 'Digital & Internet Access',
        category: 'Digital Infrastructure',
        unit: '% of households',
        nationalAverage: 62.4,
        dataPoints: [
          { label: 'Broadband / Smartphone Active', value: 61.9, color: '#3b82f6' },
          { label: 'Feature Phone Only', value: 27.3, color: '#8b5cf6' },
          { label: 'No Active Connection', value: 10.8, color: '#94a3b8' },
        ],
        civicInsight: '61.9% households actively connect online, enabling digital self-enumeration participation.',
        civicUseCase: 'Directs installation of rural public WiFi access points and digital health kiosks.'
      },
      housing_type: {
        id: 'housing_type',
        name: 'Permanent (Pucca) Housing',
        category: 'Housing Infrastructure',
        unit: '% of dwellings',
        nationalAverage: 65.8,
        dataPoints: [
          { label: 'Pucca (Concrete/Brick)', value: 68.4, color: '#10b981' },
          { label: 'Semi-Pucca (Mixed)', value: 23.2, color: '#f59e0b' },
          { label: 'Kutcha (Thatch/Mud)', value: 8.4, color: '#ef4444' },
        ],
        civicInsight: '68.4% pucca housing, with storm-resistant construction in cyclone-prone delta zones.',
        civicUseCase: 'Guides disaster relief funding and multipurpose cyclone shelter construction.'
      },
      electricity_access: {
        id: 'electricity_access',
        name: 'Household Grid Electricity',
        category: 'Basic Utilities',
        unit: '% of households',
        nationalAverage: 96.8,
        dataPoints: [
          { label: 'Grid Electricity Connection', value: 97.2, color: '#eab308' },
          { label: 'Off-grid Solar Home System', value: 2.1, color: '#22c55e' },
          { label: 'Un-electrified', value: 0.7, color: '#f43f5e' },
        ],
        civicInsight: '97.2% grid electrical connectivity across southern plains and northern hills.',
        civicUseCase: 'Facilitates WBSEDCL microgrid installations in remote riverine islands.'
      }
    }
  }
};
