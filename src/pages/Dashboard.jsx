import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Thermometer, CloudRain, Droplets, Zap, ArrowRight } from 'lucide-react';
import { dashboardMetrics, alertsData } from '../data/mockData';
import { getCRIColor } from '../data/mapData';
import MapView from '../components/MapView';
import { useState } from 'react';

const criData = [
  { name: 'score', value: dashboardMetrics.cri },
  { name: 'remaining', value: 100 - dashboardMetrics.cri }
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [mapFilter] = useState('cri');
  const criColor = getCRIColor(dashboardMetrics.cri);

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Zap size={14} className="text-green-600" />
          <p className="text-xs text-green-700 font-semibold uppercase tracking-wider">System Status: Active Intelligence</p>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Regional Insights Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {/* CRI Gauge */}
        <div className="gov-card p-5 flex flex-col items-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-amber-500 to-red-500 opacity-50" />
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Climate Risk Index (CRI)</p>
          <div className="relative w-[160px] h-[160px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={criData} cx="50%" cy="50%" startAngle={220} endAngle={-40} innerRadius={55} outerRadius={72} paddingAngle={0} dataKey="value" strokeWidth={0}>
                  <Cell fill={criColor} />
                  <Cell fill="#e5e7eb" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-extrabold" style={{ color: criColor }}>{dashboardMetrics.cri}</span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{dashboardMetrics.criStatus}</span>
            </div>
          </div>
          <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: criColor + '15', color: criColor }}>
            Overall Climate Risk: {dashboardMetrics.overallRisk}
          </div>
        </div>

        {/* Heatwave */}
        <div className="gov-card p-5 gov-card-hover cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 rounded-lg bg-red-50"><Thermometer size={18} className="text-red-500" /></div>
            <span className="badge-critical text-xs font-bold px-2 py-0.5 rounded-full">{dashboardMetrics.heatwaveRisk.level}</span>
          </div>
          <h3 className="text-base font-bold text-gray-800 mb-1">Heatwave Risk</h3>
          <p className="text-xs text-gray-500 leading-relaxed">{dashboardMetrics.heatwaveRisk.detail}</p>
          <div className="flex gap-1 mt-4 items-end h-8">
            {dashboardMetrics.heatwaveRisk.trend.map((val, i) => (
              <div key={i} className="flex-1 rounded-sm bg-red-400" style={{ height: `${(val / 80) * 100}%` }} />
            ))}
          </div>
        </div>

        {/* Rainfall */}
        <div className="gov-card p-5 gov-card-hover cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 rounded-lg bg-blue-50"><CloudRain size={18} className="text-blue-500" /></div>
            <span className="badge-warning text-xs font-bold px-2 py-0.5 rounded-full">{dashboardMetrics.rainfallProjection.anomaly} ANOMALY</span>
          </div>
          <h3 className="text-base font-bold text-gray-800 mb-1">Rainfall Projection</h3>
          <p className="text-xs text-gray-500 leading-relaxed">{dashboardMetrics.rainfallProjection.detail}</p>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-2xl font-extrabold text-blue-600">{dashboardMetrics.rainfallProjection.confidence}%</span>
            <span className="text-xs text-gray-400">confidence</span>
          </div>
        </div>

        {/* Drought */}
        <div className="gov-card p-5 gov-card-hover cursor-pointer">
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 rounded-lg bg-amber-50"><Droplets size={18} className="text-amber-500" /></div>
            <span className="badge-warning text-xs font-bold px-2 py-0.5 rounded-full">{dashboardMetrics.droughtIndex.level}</span>
          </div>
          <h3 className="text-base font-bold text-gray-800 mb-1">Drought Index</h3>
          <p className="text-xs text-gray-500 leading-relaxed">{dashboardMetrics.droughtIndex.detail}</p>
          <div className="mt-4">
            <div className="w-full h-2.5 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-green-500 to-amber-500 transition-all duration-1000" style={{ width: `${dashboardMetrics.droughtIndex.progress}%` }} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 gov-card p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold text-gray-800">Geospatial Risk Layer</h2>
              <p className="text-xs text-gray-500 mt-0.5">Live heatmap overlay for flood and heat stressors</p>
            </div>
            <button onClick={() => navigate('/risk-map')} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-green-700 hover:bg-green-50 transition-colors border border-green-200">
              Open Full Map <ArrowRight size={13} />
            </button>
          </div>
          <div className="h-[320px] rounded-xl overflow-hidden relative">
            <MapView filter={mapFilter} mini={true} />
          </div>
        </div>

        <div className="gov-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-gray-800">System Alerts</h2>
            <span className="text-xs font-bold text-white bg-red-500 px-2 py-0.5 rounded-full">{alertsData.filter(a => a.isNew).length} NEW</span>
          </div>
          <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
            {alertsData.map((alert, i) => (
              <div key={alert.id} className={`p-3.5 rounded-xl border transition-all hover:shadow-sm cursor-pointer ${
                alert.severity === 'critical' ? 'bg-red-50 border-red-200' : alert.severity === 'warning' ? 'bg-amber-50 border-amber-200' : 'bg-blue-50 border-blue-200'
              }`}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${
                    alert.severity === 'critical' ? 'text-red-600' : alert.severity === 'warning' ? 'text-amber-600' : 'text-blue-600'
                  }`}>{alert.type}</span>
                  <span className="text-[10px] text-gray-400">{alert.time}</span>
                </div>
                <p className="text-[13px] font-semibold text-gray-800 mb-1">{alert.title}</p>
                <p className="text-[11px] text-gray-500 leading-relaxed">{alert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
