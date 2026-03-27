import { Filter, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const filterOptions = [
  { value: 'cri', label: 'Combined CRI' },
  { value: 'flood', label: 'Flood Risk' },
  { value: 'heat', label: 'Heat Risk' },
  { value: 'drought', label: 'Drought Risk' },
];

export default function FilterPanel({ filter, onFilterChange }) {
  const [open, setOpen] = useState(false);
  const current = filterOptions.find(o => o.value === filter);

  return (
    <div className="absolute top-4 left-4 z-[1000]">
      <div className="gov-card">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-medium text-gray-700 hover:text-gray-900 transition-colors"
        >
          <Filter size={15} className="text-green-700" />
          <span>{current?.label || 'Filter'}</span>
          <ChevronDown size={14} className={`text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>

        {open && (
          <div className="border-t border-gray-100 py-1 animate-fade-in">
            {filterOptions.map(option => (
              <button
                key={option.value}
                onClick={() => { onFilterChange(option.value); setOpen(false); }}
                className={`w-full text-left px-4 py-2 text-[13px] transition-colors ${
                  filter === option.value
                    ? 'text-green-700 bg-green-50 font-semibold'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
