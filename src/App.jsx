import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import RiskMap from './pages/RiskMap';
import ClimateForecast from './pages/ClimateForecast';
import CropIntelligence from './pages/CropIntelligence';
import WaterAdvisory from './pages/WaterAdvisory';
import FinancialRisk from './pages/FinancialRisk';
import Alerts from './pages/Alerts';

export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen bg-[#f0f2f5]">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <main className={`flex-1 transition-all duration-300 ${collapsed ? 'ml-[72px]' : 'ml-[240px]'}`}>
          <Header />
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/risk-map" element={<RiskMap />} />
              <Route path="/climate-forecast" element={<ClimateForecast />} />
              <Route path="/crop-intelligence" element={<CropIntelligence />} />
              <Route path="/water-advisory" element={<WaterAdvisory />} />
              <Route path="/financial-risk" element={<FinancialRisk />} />
              <Route path="/alerts" element={<Alerts />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}
