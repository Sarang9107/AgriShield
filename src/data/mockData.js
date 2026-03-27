export const dashboardMetrics = {
  cri: 75,
  criStatus: 'CRITICAL',
  overallRisk: 'HIGH',
  heatwaveRisk: {
    level: 'HIGH',
    detail: 'Projected +4.2°C above average for upcoming week.',
    trend: [45, 52, 58, 62, 71, 75, 78]
  },
  rainfallProjection: {
    anomaly: '-12%',
    level: 'ANOMALY',
    detail: 'Significant deficit predicted in southern basins.',
    confidence: 88
  },
  droughtIndex: {
    level: 'MODERATE',
    detail: 'Soil moisture levels at 0.42 PDSI.',
    progress: 42
  }
};

export const alertsData = [
  {
    id: 1,
    type: 'CRITICAL ALERT',
    severity: 'critical',
    title: 'High heatwave risk next week',
    description: 'Temperatures predicted to exceed 42°C in central regions for 5 consecutive days.',
    time: '3m ago',
    isNew: true
  },
  {
    id: 2,
    type: 'ANOMALY DETECTED',
    severity: 'warning',
    title: 'Rainfall anomaly detected',
    description: '15% reduction in monsoon intensity forecasted for western coastal belt.',
    time: '1h ago',
    isNew: true
  },
  {
    id: 3,
    type: 'ADVISORY',
    severity: 'info',
    title: 'Irrigation Schedule Update',
    description: 'Recommended shift to night irrigation for Nashik, Pune, and Satara districts.',
    time: '4h ago',
    isNew: true
  },
  {
    id: 4,
    type: 'WEATHER UPDATE',
    severity: 'warning',
    title: 'Cyclone formation probable',
    description: 'Low-pressure system developing over Arabian Sea. Coastal districts on alert.',
    time: '6h ago',
    isNew: false
  },
  {
    id: 5,
    type: 'CROP ALERT',
    severity: 'critical',
    title: 'Cotton crop failure risk',
    description: 'Vidarbha region cotton crops showing 60% stress indicators due to drought.',
    time: '8h ago',
    isNew: false
  },
  {
    id: 6,
    type: 'FINANCIAL',
    severity: 'info',
    title: 'Insurance claim window open',
    description: 'PMFBY claims now being accepted for drought-affected regions in Marathwada.',
    time: '12h ago',
    isNew: false
  }
];

export const forecastData = {
  temperature: [
    { month: 'Jan', actual: 28, predicted: 27, normal: 26 },
    { month: 'Feb', actual: 30, predicted: 29, normal: 28 },
    { month: 'Mar', actual: 34, predicted: 33, normal: 32 },
    { month: 'Apr', actual: 38, predicted: 37, normal: 36 },
    { month: 'May', actual: 42, predicted: 41, normal: 39 },
    { month: 'Jun', actual: 36, predicted: 35, normal: 34 },
    { month: 'Jul', actual: 32, predicted: 31, normal: 30 },
    { month: 'Aug', actual: 31, predicted: 30, normal: 29 },
    { month: 'Sep', actual: 32, predicted: 31, normal: 30 },
    { month: 'Oct', actual: 33, predicted: 32, normal: 31 },
    { month: 'Nov', actual: 30, predicted: 29, normal: 28 },
    { month: 'Dec', actual: 27, predicted: 26, normal: 25 }
  ],
  rainfall: [
    { month: 'Jan', actual: 5, predicted: 4, normal: 3 },
    { month: 'Feb', actual: 3, predicted: 2, normal: 2 },
    { month: 'Mar', actual: 8, predicted: 6, normal: 5 },
    { month: 'Apr', actual: 15, predicted: 12, normal: 10 },
    { month: 'May', actual: 45, predicted: 40, normal: 42 },
    { month: 'Jun', actual: 180, predicted: 170, normal: 185 },
    { month: 'Jul', actual: 280, predicted: 260, normal: 290 },
    { month: 'Aug', actual: 250, predicted: 240, normal: 265 },
    { month: 'Sep', actual: 170, predicted: 160, normal: 175 },
    { month: 'Oct', actual: 80, predicted: 75, normal: 85 },
    { month: 'Nov', actual: 20, predicted: 18, normal: 22 },
    { month: 'Dec', actual: 8, predicted: 6, normal: 5 }
  ]
};

export const cropData = [
  { crop: 'Sugarcane', risk: 'Medium', health: 72, area: '12,500 ha', district: 'Pune', threat: 'Heat Stress', recommendation: 'Increase irrigation frequency. Apply foliar spray for heat tolerance.' },
  { crop: 'Rice', risk: 'High', health: 45, area: '8,200 ha', district: 'Mumbai', threat: 'Flooding', recommendation: 'Shift to flood-resistant varieties. Prepare drainage channels.' },
  { crop: 'Cotton', risk: 'Critical', health: 28, area: '15,800 ha', district: 'Nagpur', threat: 'Drought', recommendation: 'Emergency mulching. Consider crop insurance claims.' },
  { crop: 'Grapes', risk: 'Medium', health: 68, area: '3,400 ha', district: 'Nashik', threat: 'Water Stress', recommendation: 'Optimize drip irrigation. Apply potassium for stress tolerance.' },
  { crop: 'Soybean', risk: 'High', health: 38, area: '22,000 ha', district: 'Latur', threat: 'Drought', recommendation: 'Emergency harvest if possible. Document losses for insurance.' },
  { crop: 'Banana', risk: 'Medium', health: 62, area: '5,600 ha', district: 'Jalgaon', threat: 'Heat Wave', recommendation: 'Increase mulching. Provide shade nets for young plantations.' },
  { crop: 'Mango', risk: 'Low', health: 85, area: '4,200 ha', district: 'Ratnagiri', threat: 'Heavy Rain', recommendation: 'Ensure proper drainage. Monitor for fungal infections.' },
  { crop: 'Pomegranate', risk: 'Critical', health: 22, area: '7,800 ha', district: 'Solapur', threat: 'Drought + Heat', recommendation: 'Critical intervention needed. Apply for PMFBY disaster relief.' }
];

export const waterData = [
  { reservoir: 'Khadakwasla Dam', district: 'Pune', level: 68, capacity: '1,943 MCM', status: 'Normal', trend: 'Stable' },
  { reservoir: 'Upper Vaitarna', district: 'Nashik', level: 45, capacity: '2,258 MCM', status: 'Warning', trend: 'Declining' },
  { reservoir: 'Jayakwadi Dam', district: 'Aurangabad', level: 22, capacity: '2,909 MCM', status: 'Critical', trend: 'Rapid Decline' },
  { reservoir: 'Koyna Dam', district: 'Satara', level: 82, capacity: '2,797 MCM', status: 'Normal', trend: 'Stable' },
  { reservoir: 'Ujjani Dam', district: 'Solapur', level: 18, capacity: '3,320 MCM', status: 'Critical', trend: 'Rapid Decline' },
  { reservoir: 'Gangapur Dam', district: 'Nashik', level: 55, capacity: '215 MCM', status: 'Warning', trend: 'Declining' },
  { reservoir: 'Radhanagari Dam', district: 'Kolhapur', level: 75, capacity: '563 MCM', status: 'Normal', trend: 'Rising' },
  { reservoir: 'Panshet Dam', district: 'Pune', level: 71, capacity: '300 MCM', status: 'Normal', trend: 'Stable' }
];

export const financialData = {
  totalExposure: '₹2,450 Cr',
  claimsPending: 12480,
  claimsPaid: '₹380 Cr',
  activePolicies: 185000,
  riskByCategory: [
    { category: 'Drought', value: 42, amount: '₹1,029 Cr' },
    { category: 'Flood', value: 28, amount: '₹686 Cr' },
    { category: 'Heat Wave', value: 18, amount: '₹441 Cr' },
    { category: 'Pest/Disease', value: 12, amount: '₹294 Cr' }
  ],
  monthlyTrend: [
    { month: 'Oct', claims: 2400, payouts: 180 },
    { month: 'Nov', claims: 3200, payouts: 240 },
    { month: 'Dec', claims: 4100, payouts: 310 },
    { month: 'Jan', claims: 5600, payouts: 420 },
    { month: 'Feb', claims: 8200, payouts: 580 },
    { month: 'Mar', claims: 12480, payouts: 780 }
  ]
};
