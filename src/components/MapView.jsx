import { MapContainer, TileLayer, Circle, Popup, Tooltip, useMap } from 'react-leaflet';
import { districtData, getRiskColor, getCRIColor } from '../data/mapData';
import { useEffect } from 'react';

function MapUpdater({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, { duration: 1.5 });
  }, [center, zoom, map]);
  return null;
}

export default function MapView({ filter, onDistrictSelect, selectedDistrict, mini = false }) {
  const centerIndia = [19.5, 75.5];
  const defaultZoom = mini ? 6 : 7;

  const getFilteredRisk = (district) => {
    switch (filter) {
      case 'flood': return district.floodRisk;
      case 'heat': return district.heatRisk;
      case 'drought': return district.droughtRisk;
      case 'cri': return district.cri >= 80 ? 'High' : district.cri >= 60 ? 'Medium' : 'Low';
      default: return district.cri >= 80 ? 'High' : district.cri >= 60 ? 'Medium' : 'Low';
    }
  };

  const getCircleColor = (district) => {
    const risk = getFilteredRisk(district);
    return getRiskColor(risk);
  };

  const getCircleRadius = (district) => {
    if (filter === 'cri') return 8000 + (district.cri * 200);
    return mini ? 12000 : 22000;
  };

  return (
    <MapContainer
      center={centerIndia}
      zoom={defaultZoom}
      className="w-full h-full rounded-xl"
      zoomControl={!mini}
      scrollWheelZoom={!mini}
      dragging={!mini}
      style={{ minHeight: mini ? '200px' : '500px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {selectedDistrict && !mini && (
        <MapUpdater center={[selectedDistrict.lat, selectedDistrict.lon]} zoom={9} />
      )}

      {districtData.map((district) => {
        const isSelected = selectedDistrict?.name === district.name;
        const circleColor = getCircleColor(district);

        return (
          <Circle
            key={district.name}
            center={[district.lat, district.lon]}
            radius={getCircleRadius(district)}
            pathOptions={{
              color: circleColor,
              fillColor: circleColor,
              fillOpacity: isSelected ? 0.45 : 0.25,
              weight: isSelected ? 3 : 1.5,
              opacity: isSelected ? 1 : 0.7
            }}
            eventHandlers={{
              click: () => !mini && onDistrictSelect && onDistrictSelect(district),
            }}
          >
            {!mini && (
              <>
                <Tooltip direction="top" offset={[0, -10]} sticky>
                  <div className="text-center">
                    <div className="font-semibold text-gray-800">{district.name}</div>
                    <div className="text-xs font-medium" style={{ color: circleColor }}>
                      {filter === 'cri' ? `CRI: ${district.cri}` : `${getFilteredRisk(district)} Risk`}
                    </div>
                  </div>
                </Tooltip>
                <Popup>
                  <div className="min-w-[200px]">
                    <h3 className="text-base font-bold text-gray-800 mb-2 flex items-center gap-1.5">
                      📍 {district.name}
                    </h3>
                    <div className="space-y-1.5 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Flood Risk:</span>
                        <span className="font-semibold" style={{ color: getRiskColor(district.floodRisk) }}>{district.floodRisk}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Heat Risk:</span>
                        <span className="font-semibold" style={{ color: getRiskColor(district.heatRisk) }}>{district.heatRisk}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Drought Risk:</span>
                        <span className="font-semibold" style={{ color: getRiskColor(district.droughtRisk) }}>{district.droughtRisk}</span>
                      </div>
                      <div className="pt-1.5 mt-1.5 border-t border-gray-200 flex justify-between">
                        <span className="text-gray-500">Overall CRI:</span>
                        <span className="font-bold text-base" style={{ color: getCRIColor(district.cri) }}>{district.cri}</span>
                      </div>
                    </div>
                  </div>
                </Popup>
              </>
            )}
          </Circle>
        );
      })}
    </MapContainer>
  );
}
