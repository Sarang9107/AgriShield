import { Search, Bell, User } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      {/* Top green stripe */}
      <div className="w-full h-0.5 bg-gradient-to-r from-orange-500 via-white to-green-600" />
      <div className="flex items-center justify-between px-6 py-3">
        {/* Search */}
        <div className={`relative flex items-center transition-all duration-300 ${searchFocused ? 'w-[420px]' : 'w-[340px]'}`}>
          <Search size={16} className="absolute left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search regions or crop types..."
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/20 transition-all"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2.5 rounded-xl hover:bg-gray-100 transition-colors group">
            <Bell size={18} className="text-gray-500 group-hover:text-gray-700" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white" />
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
            <div className="text-right hidden sm:block">
              <p className="text-[13px] font-semibold text-gray-800">Dr. Elena Fisher</p>
              <p className="text-[11px] text-gray-500">Chief Agronomist</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
