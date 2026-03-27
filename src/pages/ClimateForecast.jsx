import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Area, AreaChart, Cell } from 'recharts';
import { forecastData } from '../data/mockData';
import { Thermometer, CloudRain, TrendingUp, Calendar, AlertCircle } from 'lucide-react';
import { useState } from 'react';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-lg">
        <p className="text-sm font-semibold text-gray-800 mb-2">{label}</p>
        {payload.map((entry, i) => (
          <p key={i} className="text-xs" style={{ color: entry.color }}>
            {entry.name}: {entry.value}{entry.name.includes('Temp') ? '°C' : ' mm'}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function ClimateForecast() {
  const [activeTab, setActiveTab] = useState('temperature');

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <p className="text-xs text-green-700 font-semibold uppercase tracking-wider mb-1">Predictive Analytics</p>
        <h1 className="text-2xl font-bold text-gray-800">Climate Forecast</h1>
        <p className="text-sm text-gray-500 mt-1">12-month temperature and rainfall projections with anomaly detection</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Thermometer, label: 'Peak Temp Forecast', value: '42°C', color: 'red', bg: 'bg-red-50' },
          { icon: CloudRain, label: 'Total Rainfall', value: '1,064 mm', color: 'blue', bg: 'bg-blue-50' },
          { icon: TrendingUp, label: 'Anomaly Index', value: '+2.3σ', color: 'amber', bg: 'bg-amber-50' },
          { icon: Calendar, label: 'Monsoon Onset', value: 'Jun 8', color: 'purple', bg: 'bg-purple-50' },
        ].map(s => (
          <div key={s.label} className="gov-card p-4 flex items-center gap-3">
            <div className={`p-2.5 rounded-xl ${s.bg}`}><s.icon size={20} className={`text-${s.color}-500`} /></div>
            <div>
              <p className="text-xs text-gray-500">{s.label}</p>
              <p className={`text-lg font-bold text-${s.color}-600`}>{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <button onClick={() => setActiveTab('temperature')}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeTab === 'temperature' ? 'bg-red-50 text-red-600 ring-1 ring-red-200' : 'text-gray-500 hover:bg-gray-100'}`}>
          <span className="flex items-center gap-2"><Thermometer size={14} />Temperature</span>
        </button>
        <button onClick={() => setActiveTab('rainfall')}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeTab === 'rainfall' ? 'bg-blue-50 text-blue-600 ring-1 ring-blue-200' : 'text-gray-500 hover:bg-gray-100'}`}>
          <span className="flex items-center gap-2"><CloudRain size={14} />Rainfall</span>
        </button>
      </div>

      {activeTab === 'temperature' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="gov-card p-5">
            <h3 className="text-sm font-bold text-gray-800 mb-1">Temperature Trends</h3>
            <p className="text-xs text-gray-500 mb-4">Actual vs Predicted vs Normal (°C)</p>
            <div className="h-[340px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={forecastData.temperature}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={{ stroke: '#e5e7eb' }} />
                  <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={{ stroke: '#e5e7eb' }} domain={[20, 45]} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Line type="monotone" dataKey="actual" stroke="#ef4444" strokeWidth={2.5} dot={{ r: 4, fill: '#ef4444' }} name="Actual Temp" />
                  <Line type="monotone" dataKey="predicted" stroke="#f97316" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 3 }} name="Predicted" />
                  <Line type="monotone" dataKey="normal" stroke="#9ca3af" strokeWidth={1.5} dot={false} name="Normal" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="gov-card p-5">
            <h3 className="text-sm font-bold text-gray-800 mb-1">Temperature Deviation</h3>
            <p className="text-xs text-gray-500 mb-4">Deviation from normal baseline (°C)</p>
            <div className="h-[340px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={forecastData.temperature.map(d => ({ ...d, deviation: d.actual - d.normal }))}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={{ stroke: '#e5e7eb' }} />
                  <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={{ stroke: '#e5e7eb' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="deviation" name="Deviation" radius={[4, 4, 0, 0]}>
                    {forecastData.temperature.map((entry, i) => (
                      <Cell key={i} fill={entry.actual - entry.normal > 2 ? '#ef4444' : entry.actual - entry.normal > 0 ? '#f97316' : '#3b82f6'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="gov-card p-5">
            <h3 className="text-sm font-bold text-gray-800 mb-1">Rainfall Patterns</h3>
            <p className="text-xs text-gray-500 mb-4">Monthly rainfall: actual vs predicted (mm)</p>
            <div className="h-[340px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={forecastData.rainfall}>
                  <defs><linearGradient id="rainGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} /><stop offset="95%" stopColor="#3b82f6" stopOpacity={0} /></linearGradient></defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={{ stroke: '#e5e7eb' }} />
                  <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={{ stroke: '#e5e7eb' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Area type="monotone" dataKey="actual" stroke="#3b82f6" strokeWidth={2.5} fill="url(#rainGrad)" name="Actual" />
                  <Line type="monotone" dataKey="predicted" stroke="#22c55e" strokeWidth={2} strokeDasharray="5 5" name="Predicted" />
                  <Line type="monotone" dataKey="normal" stroke="#9ca3af" strokeWidth={1.5} dot={false} name="Normal" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="gov-card p-5">
            <h3 className="text-sm font-bold text-gray-800 mb-1">Monthly Rainfall Comparison</h3>
            <p className="text-xs text-gray-500 mb-4">Actual vs Normal baseline (mm)</p>
            <div className="h-[340px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={forecastData.rainfall}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={{ stroke: '#e5e7eb' }} />
                  <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={{ stroke: '#e5e7eb' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Bar dataKey="actual" fill="#3b82f6" name="Actual" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="normal" fill="#bfdbfe" name="Normal" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      <div className="gov-card p-5">
        <div className="flex items-center gap-2 mb-4"><AlertCircle size={16} className="text-amber-500" /><h3 className="text-sm font-bold text-gray-800">Forecast Advisories</h3></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl bg-red-50 border border-red-200">
            <p className="text-xs font-bold text-red-600 mb-1">HEAT ALERT</p>
            <p className="text-[13px] text-gray-700">Extended heat wave predicted for May. Central districts expected to breach 42°C for 7+ days.</p>
          </div>
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
            <p className="text-xs font-bold text-blue-600 mb-1">MONSOON DELAY</p>
            <p className="text-[13px] text-gray-700">Monsoon onset likely delayed by 5-7 days. Pre-monsoon showers may be 15% below normal.</p>
          </div>
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
            <p className="text-xs font-bold text-amber-600 mb-1">DROUGHT WATCH</p>
            <p className="text-[13px] text-gray-700">Marathwada and Vidarbha regions remain under drought watch. Soil moisture critically low.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
