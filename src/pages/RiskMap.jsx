import { useState } from 'react';
import MapView from '../components/MapView';
import RiskLegend from '../components/RiskLegend';
import FilterPanel from '../components/FilterPanel';
import DistrictSidebar from '../components/DistrictSidebar';
import { districtData } from '../data/mapData';
import { MapPin, AlertTriangle, BarChart3 } from 'lucide-react';

export default function RiskMap() {
  const [filter, setFilter] = useState('cri');
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const highRiskCount = districtData.filter(d => d.cri >= 80).length;
  const avgCRI = Math.round(districtData.reduce((a, b) => a + b.cri, 0) / districtData.length);

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs text-green-700 font-semibold uppercase tracking-wider mb-1">Geospatial Analysis</p>
          <h1 className="text-2xl font-bold text-gray-800">Climate Risk Map</h1>
          <p className="text-sm text-gray-500 mt-1">Interactive hazard visualization across monitored districts</p>
        </div>
        <div className="flex gap-3">
          <div className="gov-card px-4 py-2.5 flex items-center gap-2.5">
            <AlertTriangle size={15} className="text-red-500" />
            <div>
              <p className="text-xs text-gray-500">High Risk</p>
              <p className="text-sm font-bold text-red-600">{highRiskCount} Districts</p>
            </div>
          </div>
          <div className="gov-card px-4 py-2.5 flex items-center gap-2.5">
            <BarChart3 size={15} className="text-amber-500" />
            <div>
              <p className="text-xs text-gray-500">Avg CRI</p>
              <p className="text-sm font-bold text-amber-600">{avgCRI}</p>
            </div>
          </div>
          <div className="gov-card px-4 py-2.5 flex items-center gap-2.5">
            <MapPin size={15} className="text-green-600" />
            <div>
              <p className="text-xs text-gray-500">Monitoring</p>
              <p className="text-sm font-bold text-green-700">{districtData.length} Districts</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative gov-card overflow-hidden" style={{ height: 'calc(100vh - 220px)' }}>
        <FilterPanel filter={filter} onFilterChange={setFilter} />
        <RiskLegend />
        <MapView filter={filter} selectedDistrict={selectedDistrict} onDistrictSelect={setSelectedDistrict} />
        <DistrictSidebar district={selectedDistrict} onClose={() => setSelectedDistrict(null)} />
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
        {districtData.map(district => {
          const isSelected = selectedDistrict?.name === district.name;
          const criColor = district.cri >= 80 ? 'text-red-600' : district.cri >= 60 ? 'text-amber-600' : 'text-green-600';
          return (
            <button key={district.name} onClick={() => setSelectedDistrict(district)}
              className={`gov-card p-3 text-left transition-all duration-200 gov-card-hover ${isSelected ? 'ring-2 ring-green-500 bg-green-50' : ''}`}>
              <p className="text-[13px] font-semibold text-gray-700 truncate">{district.name}</p>
              <p className={`text-lg font-bold ${criColor}`}>{district.cri}</p>
              <p className="text-[11px] text-gray-400">CRI Score</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
