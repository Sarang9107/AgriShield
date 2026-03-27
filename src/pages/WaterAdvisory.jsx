import { waterData } from '../data/mockData';
import { Droplets, AlertTriangle, TrendingDown, TrendingUp, Minus, Waves, Gauge } from 'lucide-react';

const getStatusColor = (status) => {
  switch (status) {
    case 'Normal': return { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', bar: 'from-green-500 to-green-400' };
    case 'Warning': return { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200', bar: 'from-amber-500 to-amber-400' };
    case 'Critical': return { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200', bar: 'from-red-500 to-red-400' };
    default: return { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-200', bar: 'from-gray-500 to-gray-400' };
  }
};

const getTrendIcon = (trend) => {
  if (trend === 'Rising') return <TrendingUp size={14} className="text-green-500" />;
  if (trend === 'Stable') return <Minus size={14} className="text-gray-400" />;
  if (trend === 'Declining') return <TrendingDown size={14} className="text-amber-500" />;
  return <TrendingDown size={14} className="text-red-500" />;
};

export default function WaterAdvisory() {
  const normalCount = waterData.filter(w => w.status === 'Normal').length;
  const criticalCount = waterData.filter(w => w.status === 'Critical').length;
  const avgLevel = Math.round(waterData.reduce((a, b) => a + b.level, 0) / waterData.length);

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <p className="text-xs text-green-700 font-semibold uppercase tracking-wider mb-1">Hydrology Intelligence</p>
        <h1 className="text-2xl font-bold text-gray-800">Water Advisory</h1>
        <p className="text-sm text-gray-500 mt-1">Reservoir levels, irrigation scheduling, and water resource management</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="gov-card p-4 flex items-center gap-3"><div className="p-2.5 rounded-xl bg-blue-50"><Waves size={20} className="text-blue-500" /></div><div><p className="text-xs text-gray-500">Reservoirs Monitored</p><p className="text-lg font-bold text-gray-800">{waterData.length}</p></div></div>
        <div className="gov-card p-4 flex items-center gap-3"><div className="p-2.5 rounded-xl bg-green-50"><Gauge size={20} className="text-green-600" /></div><div><p className="text-xs text-gray-500">Avg Water Level</p><p className="text-lg font-bold text-green-600">{avgLevel}%</p></div></div>
        <div className="gov-card p-4 flex items-center gap-3"><div className="p-2.5 rounded-xl bg-amber-50"><AlertTriangle size={20} className="text-amber-500" /></div><div><p className="text-xs text-gray-500">Warning</p><p className="text-lg font-bold text-amber-600">{waterData.filter(w => w.status === 'Warning').length}</p></div></div>
        <div className="gov-card p-4 flex items-center gap-3"><div className="p-2.5 rounded-xl bg-red-50"><Droplets size={20} className="text-red-500" /></div><div><p className="text-xs text-gray-500">Critical</p><p className="text-lg font-bold text-red-600">{criticalCount}</p></div></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {waterData.map(res => {
          const colors = getStatusColor(res.status);
          return (
            <div key={res.reservoir} className="gov-card p-5 gov-card-hover">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-base font-bold text-gray-800">{res.reservoir}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{res.district} • Capacity: {res.capacity}</p>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${colors.bg} ${colors.text} ${colors.border}`}>{res.status}</span>
              </div>
              <div className="flex items-end gap-4 mb-3">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Current Level</p>
                  <p className={`text-3xl font-extrabold ${colors.text}`}>{res.level}%</p>
                </div>
                <div className="flex items-center gap-1.5 mb-1">{getTrendIcon(res.trend)}<span className="text-xs text-gray-500">{res.trend}</span></div>
              </div>
              <div className="w-full h-3 rounded-full bg-gray-100 overflow-hidden">
                <div className={`h-full rounded-full bg-gradient-to-r ${colors.bar} transition-all duration-1000`} style={{ width: `${res.level}%` }} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="gov-card p-5">
        <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2"><Droplets size={16} className="text-blue-500" />Irrigation Advisory</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl bg-green-50 border border-green-200">
            <p className="text-xs font-bold text-green-700 mb-1">OPTIMAL ZONES</p>
            <p className="text-[13px] text-gray-700">Pune, Satara, Kolhapur — Normal irrigation schedule. Water availability sufficient.</p>
          </div>
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
            <p className="text-xs font-bold text-amber-700 mb-1">RESTRICTED ZONES</p>
            <p className="text-[13px] text-gray-700">Nashik — Shift to night irrigation. Reduce frequency by 30%. Prioritize food crops.</p>
          </div>
          <div className="p-4 rounded-xl bg-red-50 border border-red-200">
            <p className="text-xs font-bold text-red-700 mb-1">CRITICAL ZONES</p>
            <p className="text-[13px] text-gray-700">Aurangabad, Solapur, Latur — Emergency water rationing. Drip irrigation only.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
