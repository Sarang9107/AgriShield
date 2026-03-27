import { alertsData } from '../data/mockData';
import { Bell, AlertTriangle, AlertCircle, Info } from 'lucide-react';
import { useState } from 'react';

const getSeverityStyle = (severity) => {
  switch (severity) {
    case 'critical': return { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-600', icon: AlertTriangle };
    case 'warning': return { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600', icon: AlertCircle };
    case 'info': return { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', icon: Info };
    default: return { bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-600', icon: Info };
  }
};

export default function Alerts() {
  const [filterSeverity, setFilterSeverity] = useState('all');

  const filtered = filterSeverity === 'all' ? alertsData : alertsData.filter(a => a.severity === filterSeverity);
  const criticalCount = alertsData.filter(a => a.severity === 'critical').length;
  const warningCount = alertsData.filter(a => a.severity === 'warning').length;
  const newCount = alertsData.filter(a => a.isNew).length;

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <p className="text-xs text-green-700 font-semibold uppercase tracking-wider mb-1">Notification Center</p>
        <h1 className="text-2xl font-bold text-gray-800">System Alerts</h1>
        <p className="text-sm text-gray-500 mt-1">Real-time alerts from climate monitoring systems</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="gov-card p-4 flex items-center gap-3"><div className="p-2.5 rounded-xl bg-red-50"><AlertTriangle size={20} className="text-red-500" /></div><div><p className="text-xs text-gray-500">Critical</p><p className="text-lg font-bold text-red-600">{criticalCount}</p></div></div>
        <div className="gov-card p-4 flex items-center gap-3"><div className="p-2.5 rounded-xl bg-amber-50"><AlertCircle size={20} className="text-amber-500" /></div><div><p className="text-xs text-gray-500">Warnings</p><p className="text-lg font-bold text-amber-600">{warningCount}</p></div></div>
        <div className="gov-card p-4 flex items-center gap-3"><div className="p-2.5 rounded-xl bg-green-50"><Bell size={20} className="text-green-600" /></div><div><p className="text-xs text-gray-500">Unread</p><p className="text-lg font-bold text-green-600">{newCount}</p></div></div>
      </div>

      <div className="flex gap-2">
        {['all', 'critical', 'warning', 'info'].map(sev => (
          <button key={sev} onClick={() => setFilterSeverity(sev)}
            className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all ${
              filterSeverity === sev ? 'bg-green-50 text-green-700 ring-1 ring-green-200' : 'text-gray-500 hover:bg-gray-100'
            }`}>{sev}</button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((alert, i) => {
          const style = getSeverityStyle(alert.severity);
          const Icon = style.icon;
          return (
            <div key={alert.id} className={`gov-card p-5 ${style.bg} border ${style.border} transition-all hover:shadow-md cursor-pointer`}>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-xl bg-white/80 mt-0.5"><Icon size={18} className={style.text} /></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${style.text}`}>{alert.type}</span>
                      {alert.isNew && <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />}
                    </div>
                    <span className="text-[11px] text-gray-400">{alert.time}</span>
                  </div>
                  <p className="text-[15px] font-semibold text-gray-800 mb-1">{alert.title}</p>
                  <p className="text-[13px] text-gray-600 leading-relaxed">{alert.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
