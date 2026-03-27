import { financialData } from '../data/mockData';
import { PieChart, Pie, Cell, ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, ComposedChart } from 'recharts';
import { IndianRupee, FileText, ShieldCheck, TrendingUp, AlertCircle } from 'lucide-react';

const COLORS = ['#ef4444', '#3b82f6', '#f97316', '#a855f7'];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-lg">
        <p className="text-sm font-semibold text-gray-800 mb-2">{label}</p>
        {payload.map((entry, i) => (
          <p key={i} className="text-xs" style={{ color: entry.color }}>{entry.name}: {typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}</p>
        ))}
      </div>
    );
  }
  return null;
};

export default function FinancialRisk() {
  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <p className="text-xs text-green-700 font-semibold uppercase tracking-wider mb-1">Financial Intelligence</p>
        <h1 className="text-2xl font-bold text-gray-800">Financial Risk</h1>
        <p className="text-sm text-gray-500 mt-1">Crop insurance exposure, claims processing, and economic impact</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="gov-card p-4 flex items-center gap-3"><div className="p-2.5 rounded-xl bg-red-50"><IndianRupee size={20} className="text-red-500" /></div><div><p className="text-xs text-gray-500">Total Exposure</p><p className="text-lg font-bold text-red-600">{financialData.totalExposure}</p></div></div>
        <div className="gov-card p-4 flex items-center gap-3"><div className="p-2.5 rounded-xl bg-amber-50"><FileText size={20} className="text-amber-500" /></div><div><p className="text-xs text-gray-500">Claims Pending</p><p className="text-lg font-bold text-amber-600">{financialData.claimsPending.toLocaleString()}</p></div></div>
        <div className="gov-card p-4 flex items-center gap-3"><div className="p-2.5 rounded-xl bg-green-50"><ShieldCheck size={20} className="text-green-600" /></div><div><p className="text-xs text-gray-500">Claims Paid</p><p className="text-lg font-bold text-green-600">{financialData.claimsPaid}</p></div></div>
        <div className="gov-card p-4 flex items-center gap-3"><div className="p-2.5 rounded-xl bg-blue-50"><TrendingUp size={20} className="text-blue-500" /></div><div><p className="text-xs text-gray-500">Active Policies</p><p className="text-lg font-bold text-blue-600">{financialData.activePolicies.toLocaleString()}</p></div></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="gov-card p-5">
          <h3 className="text-sm font-bold text-gray-800 mb-4">Exposure by Risk Category</h3>
          <div className="h-[300px] flex items-center">
            <div className="w-1/2 h-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={financialData.riskByCategory} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={3} dataKey="value" strokeWidth={0}>
                    {financialData.riskByCategory.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-1/2 space-y-3">
              {financialData.riskByCategory.map((item, i) => (
                <div key={item.category} className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full" style={{ background: COLORS[i] }} />
                  <div className="flex-1">
                    <div className="flex justify-between"><span className="text-[13px] text-gray-700">{item.category}</span><span className="text-xs font-bold text-gray-500">{item.value}%</span></div>
                    <p className="text-xs text-gray-400">{item.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="gov-card p-5">
          <h3 className="text-sm font-bold text-gray-800 mb-4">Claims & Payouts Trend</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={financialData.monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 12 }} />
                <YAxis yAxisId="left" tick={{ fill: '#6b7280', fontSize: 12 }} />
                <YAxis yAxisId="right" orientation="right" tick={{ fill: '#6b7280', fontSize: 12 }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Bar yAxisId="left" dataKey="claims" fill="#f97316" name="Claims" radius={[4,4,0,0]} />
                <Line yAxisId="right" type="monotone" dataKey="payouts" stroke="#22c55e" strokeWidth={2.5} name="Payouts (Cr)" dot={{ r: 4, fill: '#22c55e' }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="gov-card p-5">
        <div className="flex items-center gap-2 mb-4"><AlertCircle size={16} className="text-amber-500" /><h3 className="text-sm font-bold text-gray-800">Financial Risk Advisory</h3></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-4 rounded-xl bg-red-50 border border-red-200">
            <p className="text-xs font-bold text-red-600 mb-1">HIGH EXPOSURE ALERT</p>
            <p className="text-[13px] text-gray-700">Drought claims surging 420% MoM. Reserve ratio below 1.2x threshold.</p>
          </div>
          <div className="p-4 rounded-xl bg-green-50 border border-green-200">
            <p className="text-xs font-bold text-green-700 mb-1">PMFBY UPDATE</p>
            <p className="text-[13px] text-gray-700">₹200 Cr additional relief approved for Marathwada. Claims window extended to Apr 15.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
