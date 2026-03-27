import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  CloudSun,
  Map,
  Sprout,
  Droplets,
  TrendingDown,
  Bell,
  Shield,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/climate-forecast', label: 'Climate Forecast', icon: CloudSun },
  { path: '/risk-map', label: 'Risk Map', icon: Map },
  { path: '/crop-intelligence', label: 'Crop Intelligence', icon: Sprout },
  { path: '/water-advisory', label: 'Water Advisory', icon: Droplets },
  { path: '/financial-risk', label: 'Financial Risk', icon: TrendingDown },
  { path: '/alerts', label: 'Alerts', icon: Bell },
];

export default function Sidebar({ collapsed, setCollapsed }) {
  const location = useLocation();

  return (
    <aside
      className={`fixed top-0 left-0 h-screen z-50 flex flex-col transition-all duration-300 ease-in-out ${
        collapsed ? 'w-[72px]' : 'w-[240px]'
      }`}
      style={{
        background: '#0f3d1e',
        borderRight: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      {/* Green stripe at top */}
      <div className="w-full h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-green-600" />

      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-white/10">
        <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
          <Shield size={20} className="text-white" />
        </div>
        {!collapsed && (
          <div className="animate-fade-in">
            <h1 className="text-[15px] font-bold text-white tracking-tight leading-none">AgriShield AI</h1>
            <p className="text-[10px] text-green-300/70 uppercase tracking-[0.15em] mt-0.5">Govt. of India</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map(({ path, label, icon: Icon }) => {
          const isActive = location.pathname === path;
          return (
            <NavLink
              key={path}
              to={path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-200 group relative ${
                isActive
                  ? 'bg-white/15 text-white'
                  : 'text-green-100/70 hover:text-white hover:bg-white/8'
              }`}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-yellow-400 rounded-r-full" />
              )}
              <Icon size={18} className={isActive ? 'text-yellow-300' : 'text-green-200/50 group-hover:text-green-100'} />
              {!collapsed && <span>{label}</span>}
              {collapsed && (
                <div className="absolute left-full ml-3 px-3 py-1.5 bg-white text-gray-800 text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-lg border border-gray-200">
                  {label}
                </div>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="mx-3 mb-4 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-green-100/60 hover:text-white hover:bg-white/8 transition-all text-[13px]"
      >
        {collapsed ? <ChevronRight size={16} /> : <><ChevronLeft size={16} /><span>Collapse</span></>}
      </button>

      {/* Footer emblem area */}
      {!collapsed && (
        <div className="px-4 pb-4">
          <div className="text-center py-2 border-t border-white/10 pt-3">
            <p className="text-[9px] text-green-200/40 uppercase tracking-wider">Ministry of Agriculture</p>
            <p className="text-[9px] text-green-200/40 uppercase tracking-wider">& Farmers Welfare</p>
          </div>
        </div>
      )}
    </aside>
  );
}
