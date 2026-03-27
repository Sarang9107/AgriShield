export default function RiskLegend() {
  return (
    <div className="absolute top-4 right-4 z-[1000] gov-card px-4 py-3 space-y-2 min-w-[140px]">
      <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Risk Level</h4>
      <div className="flex items-center gap-2.5">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="text-[13px] text-gray-700">High Risk</span>
      </div>
      <div className="flex items-center gap-2.5">
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="text-[13px] text-gray-700">Medium Risk</span>
      </div>
      <div className="flex items-center gap-2.5">
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="text-[13px] text-gray-700">Low Risk</span>
      </div>
    </div>
  );
}
