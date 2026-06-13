import React from 'react';
import './OfficeLocationsMap.css';
// 📁 Tumhara direct map asset jo bilkul complete hai
import WorldMapAsset from '../assets/mapSection/map.svg'; 

const OfficeLocationsMap = () => {
  return (
    <section className="office-locations-section">
      <div className="map-inner-wrapper">
        
        {/* 🗺️ Pure dynamic single image layer layout */}
        <div className="world-map-bg-graphics">
          <img src={WorldMapAsset} alt="World Map with Office Locations" className="map-actual-vector-img" />
        </div>

      </div>
    </section>
  );
};

export default OfficeLocationsMap;