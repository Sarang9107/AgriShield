import { cropData } from '../data/mockData';
import { Sprout, AlertTriangle, Activity, ShieldCheck, ChevronRight, Search } from 'lucide-react';
import { useState } from 'react';

const getRiskBadge = (risk) => {
  const colors = {
    Critical: 'bg-red-50 text-red-600 border border-red-200',
    High: 'bg-orange-50 text-orange-600 border border-orange-200',
    Medium: 'bg-amber-50 text-amber-600 border border-amber-200',
    Low: 'bg-green-50 text-green-600 border border-green-200'
  };
  return colors[risk] || colors.Medium;
};

const getHealthColor = (health) => {
  if (health >= 70) return 'text-green-600';
  if (health >= 50) return 'text-amber-600';
  return 'text-red-600';
};

const getHealthBar = (health) => {
  if (health >= 70) return 'from-green-500 to-green-400';
  if (health >= 50) return 'from-amber-500 to-amber-400';
  return 'from-red-500 to-red-400';
};

export default function CropIntelligence() {
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = cropData.filter(c =>
    c.crop.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.district.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const criticalCount = cropData.filter(c => c.risk === 'Critical').length;
  const highCount = cropData.filter(c => c.risk === 'High').length;
  const avgHealth = Math.round(cropData.reduce((a, b) => a + b.health, 0) / cropData.length);

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <p className="text-xs text-green-700 font-semibold uppercase tracking-wider mb-1">Agricultural Intelligence</p>
        <h1 className="text-2xl font-bold text-gray-800">Crop Intelligence</h1>
        <p className="text-sm text-gray-500 mt-1">Real-time crop health monitoring and risk assessment</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="gov-card p-4 flex items-center gap-3"><div className="p-2.5 rounded-xl bg-green-50"><Sprout size={20} className="text-green-600" /></div><div><p className="text-xs text-gray-500">Crops Monitored</p><p className="text-lg font-bold text-gray-800">{cropData.length}</p></div></div>
        <div className="gov-card p-4 flex items-center gap-3"><div className="p-2.5 rounded-xl bg-red-50"><AlertTriangle size={20} className="text-red-500" /></div><div><p className="text-xs text-gray-500">Critical Risk</p><p className="text-lg font-bold text-red-600">{criticalCount}</p></div></div>
        <div className="gov-card p-4 flex items-center gap-3"><div className="p-2.5 rounded-xl bg-amber-50"><Activity size={20} className="text-amber-500" /></div><div><p className="text-xs text-gray-500">Avg Health Score</p><p className="text-lg font-bold text-amber-600">{avgHealth}%</p></div></div>
        <div className="gov-card p-4 flex items-center gap-3"><div className="p-2.5 rounded-xl bg-orange-50"><ShieldCheck size={20} className="text-orange-500" /></div><div><p className="text-xs text-gray-500">High Risk</p><p className="text-lg font-bold text-orange-600">{highCount}</p></div></div>
      </div>

      <div className="relative w-full max-w-md">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input type="text" placeholder="Search crops or districts..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/20 transition-all" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filtered.map(crop => (
          <button key={crop.crop + crop.district} onClick={() => setSelectedCrop(selectedCrop?.crop === crop.crop ? null : crop)}
            className={`gov-card p-5 text-left transition-all duration-200 gov-card-hover ${selectedCrop?.crop === crop.crop ? 'ring-2 ring-green-500 bg-green-50' : ''}`}>
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">{crop.crop}<ChevronRight size={14} className="text-gray-400" /></h3>
                <p className="text-xs text-gray-500 mt-0.5">{crop.district} • {crop.area}</p>
              </div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${getRiskBadge(crop.risk)}`}>{crop.risk}</span>
            </div>
            <div className="flex items-center gap-4 mb-3">
              <div>
                <p className="text-xs text-gray-500">Health Score</p>
                <p className={`text-2xl font-extrabold ${getHealthColor(crop.health)}`}>{crop.health}%</p>
              </div>
              <div className="flex-1">
                <div className="w-full h-2.5 rounded-full bg-gray-100 overflow-hidden">
                  <div className={`h-full rounded-full bg-gradient-to-r ${getHealthBar(crop.health)} transition-all duration-1000`} style={{ width: `${crop.health}%` }} />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 mb-2">
              <AlertTriangle size={12} className="text-amber-500" />
              <span className="text-xs text-amber-600 font-semibold">Primary Threat: {crop.threat}</span>
            </div>
            {selectedCrop?.crop === crop.crop && (
              <div className="mt-3 p-3 rounded-xl bg-green-50 border border-green-200 animate-fade-in">
                <p className="text-xs font-bold text-green-700 mb-1">RECOMMENDATION</p>
                <p className="text-[13px] text-gray-700 leading-relaxed">{crop.recommendation}</p>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
