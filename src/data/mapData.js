export const districtData = [
  {
    name: "Pune",
    lat: 18.5204,
    lon: 73.8567,
    floodRisk: "Medium",
    heatRisk: "High",
    droughtRisk: "Low",
    cri: 72,
    rainfall: 722,
    temperature: 38.2,
    humidity: 65,
    cropAffected: "Sugarcane, Soybean",
    waterLevel: "Normal",
    advisory: "Monitor heat stress on crops. Irrigation recommended during peak hours."
  },
  {
    name: "Mumbai",
    lat: 19.0760,
    lon: 72.8777,
    floodRisk: "High",
    heatRisk: "Medium",
    droughtRisk: "Low",
    cri: 85,
    rainfall: 2180,
    temperature: 34.5,
    humidity: 82,
    cropAffected: "Rice, Vegetables",
    waterLevel: "High",
    advisory: "Flash flood warnings active. Move livestock to higher ground."
  },
  {
    name: "Nagpur",
    lat: 21.1458,
    lon: 79.0882,
    floodRisk: "Low",
    heatRisk: "High",
    droughtRisk: "High",
    cri: 78,
    rainfall: 312,
    temperature: 44.1,
    humidity: 28,
    cropAffected: "Oranges, Cotton",
    waterLevel: "Critical",
    advisory: "Severe heat alert. Drought conditions worsening. Emergency water rationing advised."
  },
  {
    name: "Nashik",
    lat: 19.9975,
    lon: 73.7898,
    floodRisk: "Medium",
    heatRisk: "Low",
    droughtRisk: "Medium",
    cri: 55,
    rainfall: 580,
    temperature: 32.0,
    humidity: 55,
    cropAffected: "Grapes, Onion",
    waterLevel: "Moderate",
    advisory: "Moderate drought stress. Consider drip irrigation for grape vineyards."
  },
  {
    name: "Kolhapur",
    lat: 16.7050,
    lon: 74.2433,
    floodRisk: "High",
    heatRisk: "Low",
    droughtRisk: "Low",
    cri: 68,
    rainfall: 1850,
    temperature: 30.5,
    humidity: 78,
    cropAffected: "Sugarcane, Rice",
    waterLevel: "High",
    advisory: "River levels rising. Flood risk elevated in low-lying areas."
  },
  {
    name: "Aurangabad",
    lat: 19.8762,
    lon: 75.3433,
    floodRisk: "Low",
    heatRisk: "High",
    droughtRisk: "High",
    cri: 81,
    rainfall: 280,
    temperature: 42.3,
    humidity: 25,
    cropAffected: "Cotton, Jowar",
    waterLevel: "Critical",
    advisory: "Extreme drought conditions. Request tanker water supply for villages."
  },
  {
    name: "Solapur",
    lat: 17.6599,
    lon: 75.9064,
    floodRisk: "Low",
    heatRisk: "High",
    droughtRisk: "High",
    cri: 88,
    rainfall: 195,
    temperature: 43.7,
    humidity: 22,
    cropAffected: "Pomegranate, Bajra",
    waterLevel: "Critical",
    advisory: "Highest risk zone. Crop insurance claims processing. Emergency relief needed."
  },
  {
    name: "Ratnagiri",
    lat: 16.9902,
    lon: 73.3120,
    floodRisk: "High",
    heatRisk: "Low",
    droughtRisk: "Low",
    cri: 62,
    rainfall: 3200,
    temperature: 31.2,
    humidity: 85,
    cropAffected: "Mango, Cashew",
    waterLevel: "High",
    advisory: "Heavy rainfall expected. Coastal flooding possible. Secure mango orchards."
  },
  {
    name: "Jalgaon",
    lat: 21.0077,
    lon: 75.5626,
    floodRisk: "Medium",
    heatRisk: "High",
    droughtRisk: "Medium",
    cri: 74,
    rainfall: 420,
    temperature: 41.8,
    humidity: 35,
    cropAffected: "Banana, Cotton",
    waterLevel: "Low",
    advisory: "Heat wave advisory. Banana plantations at risk. Increase mulching."
  },
  {
    name: "Satara",
    lat: 17.6805,
    lon: 74.0183,
    floodRisk: "Medium",
    heatRisk: "Medium",
    droughtRisk: "Low",
    cri: 50,
    rainfall: 920,
    temperature: 33.5,
    humidity: 62,
    cropAffected: "Strawberry, Turmeric",
    waterLevel: "Normal",
    advisory: "Conditions stable. Continue regular monitoring of water reservoirs."
  },
  {
    name: "Latur",
    lat: 18.3916,
    lon: 76.5604,
    floodRisk: "Low",
    heatRisk: "High",
    droughtRisk: "High",
    cri: 90,
    rainfall: 160,
    temperature: 44.5,
    humidity: 18,
    cropAffected: "Soybean, Tur Dal",
    waterLevel: "Critical",
    advisory: "Critical drought zone. Water trains deployed. Crop failure imminent."
  },
  {
    name: "Amravati",
    lat: 20.9320,
    lon: 77.7523,
    floodRisk: "Low",
    heatRisk: "Medium",
    droughtRisk: "High",
    cri: 76,
    rainfall: 340,
    temperature: 40.2,
    humidity: 32,
    cropAffected: "Cotton, Orange",
    waterLevel: "Low",
    advisory: "Drought spreading. Cotton crop under severe stress. Apply for relief funds."
  }
];

export const getRiskColor = (level) => {
  switch (level) {
    case 'High': return '#ef4444';
    case 'Medium': return '#eab308';
    case 'Low': return '#22c55e';
    default: return '#6b7280';
  }
};

export const getCRIColor = (cri) => {
  if (cri >= 80) return '#ef4444';
  if (cri >= 60) return '#eab308';
  return '#22c55e';
};

export const getCRILevel = (cri) => {
  if (cri >= 80) return 'Critical';
  if (cri >= 60) return 'Moderate';
  return 'Low';
};
