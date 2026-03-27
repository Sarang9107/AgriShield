import { X, MapPin, Thermometer, CloudRain, Droplets, AlertTriangle, Wheat } from 'lucide-react';
import { getRiskColor, getCRIColor, getCRILevel } from '../data/mapData';

export default function DistrictSidebar({ district, onClose }) {
  if (!district) return null;

  const riskItems = [
    { label: 'Flood Risk', value: district.floodRisk, icon: CloudRain },
    { label: 'Heat Risk', value: district.heatRisk, icon: Thermometer },
    { label: 'Drought Risk', value: district.droughtRisk, icon: Droplets },
  ];

  return (
    <div className="absolute top-0 right-0 z-[1000] h-full w-[360px] animate-slide-in" style={{ maxHeight: 'calc(100vh - 120px)' }}>
      <div className="h-full overflow-y-auto bg-white border-l border-gray-200 rounded-l-xl shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-green-50">
          <div className="flex items-center gap-2.5">
            <MapPin size={18} className="text-green-700" />
            <h3 className="text-lg font-bold text-gray-800">{district.name}</h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-green-100 transition-colors">
            <X size={16} className="text-gray-500" />
          </button>
        </div>

        {/* CRI Score */}
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-500">Climate Risk Index</span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: getCRIColor(district.cri) + '15', color: getCRIColor(district.cri) }}>
              {getCRILevel(district.cri)}
            </span>
          </div>
          <div className="flex items-end gap-3">
            <span className="text-4xl font-extrabold" style={{ color: getCRIColor(district.cri) }}>{district.cri}</span>
            <span className="text-gray-400 text-sm mb-1.5">/ 100</span>
          </div>
          <div className="mt-3 w-full h-2.5 rounded-full bg-gray-100 overflow-hidden">
            <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${district.cri}%`, background: `linear-gradient(90deg, #22c55e, ${getCRIColor(district.cri)})` }} />
          </div>
        </div>

        {/* Risk Breakdown */}
        <div className="p-5 border-b border-gray-100 space-y-3">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Risk Breakdown</h4>
          {riskItems.map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex items-center justify-between py-2 px-3 rounded-lg bg-gray-50">
              <div className="flex items-center gap-2.5">
                <Icon size={15} className="text-gray-400" />
                <span className="text-[13px] text-gray-700">{label}</span>
              </div>
              <span className="text-[13px] font-bold" style={{ color: getRiskColor(value) }}>{value}</span>
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="p-5 border-b border-gray-100 space-y-3">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Details</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-gray-50">
              <p className="text-[11px] text-gray-400 mb-1">Temperature</p>
              <p className="text-sm font-semibold text-gray-800">{district.temperature}°C</p>
            </div>
            <div className="p-3 rounded-lg bg-gray-50">
              <p className="text-[11px] text-gray-400 mb-1">Rainfall</p>
              <p className="text-sm font-semibold text-gray-800">{district.rainfall} mm</p>
            </div>
            <div className="p-3 rounded-lg bg-gray-50">
              <p className="text-[11px] text-gray-400 mb-1">Humidity</p>
              <p className="text-sm font-semibold text-gray-800">{district.humidity}%</p>
            </div>
            <div className="p-3 rounded-lg bg-gray-50">
              <p className="text-[11px] text-gray-400 mb-1">Water Level</p>
              <p className="text-sm font-semibold text-gray-800">{district.waterLevel}</p>
            </div>
          </div>
        </div>

        {/* Crops Affected */}
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <Wheat size={14} className="text-amber-600" />
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Crops Affected</h4>
          </div>
          <p className="text-sm text-gray-700">{district.cropAffected}</p>
        </div>

        {/* Advisory */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle size={14} className="text-amber-600" />
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Advisory</h4>
          </div>
          <div className="p-3 rounded-lg bg-amber-50 border border-amber-200">
            <p className="text-[13px] text-amber-800 leading-relaxed">{district.advisory}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
