"use client";

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const MapComponent = () => {
  const [infrastructureData, setInfrastructureData] = useState([]);

  useEffect(() => {
    const infrastructure = [
      // Recycling Centers
      {
        name: "Lokoja Recycling Center",
        type: "recycling",
        coordinates: [7.8, 6.73],
        description: "A center for recycling various waste materials in the state capital."
      },
      {
        name: "Kabba Recycling Facility",
        type: "recycling",
        coordinates: [7.83, 6.07],
        description: "A facility dedicated to recycling waste materials in Kabba."
      },
      {
        name: "Ajaokuta Recycling Hub",
        type: "recycling",
        coordinates: [7.55, 6.66],
        description: "A recycling hub serving the Ajaokuta industrial area."
      },
      // Refuse Collection Points
      {
        name: "Lokoja Waste Collection Point",
        type: "refuse",
        coordinates: [7.75, 6.70],
        description: "A key refuse collection point for residential and commercial waste in Lokoja."
      },
      {
        name: "Kabba Waste Disposal Site",
        type: "refuse",
        coordinates: [7.84, 6.08],
        description: "Refuse collection and disposal site serving the Kabba community."
      },
      {
        name: "Ajaokuta Waste Management Point",
        type: "refuse",
        coordinates: [7.55, 6.65],
        description: "A waste management and refuse collection point in the Ajaokuta region."
      }
    ];

    setInfrastructureData(infrastructure);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px', color: '#333' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#2c3e50' }}>Interactive Map of Kogi State Waste Management Facilities</h1>
      <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#34495e' }}>Explore key facilities such as recycling centers and refuse collection points across Kogi State.</p>

      <div style={{ width: '100%', height: '500px', overflow: 'hidden', border: '2px solid #ddd', borderRadius: '8px', marginBottom: '20px' }}>
        <MapContainer
          center={[7.733333, 6.733333]} // Center map on Kogi State
          zoom={8}
          style={{ width: '100%', height: '100%' }} // Ensure the map fills the container
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={18}
          />

          {/* Map Markers for Infrastructure */}
          {infrastructureData.map((point, index) => (
            <Marker
              key={index}
              position={point.coordinates}
              icon={L.icon({
                iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
              })}
            >
              <Popup>
                <b>{point.name}</b><br />
                {point.description}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div style={{ padding: '20px', backgroundColor: '#ecf0f1', borderRadius: '8px' }}>
        <h3 style={{ fontSize: '1.8rem', color: '#2980b9' }}>Waste Management Infrastructure in Kogi State</h3>
        <p style={{ fontSize: '1rem', lineHeight: '1.5', color: '#2c3e50' }}>Kogi State is gradually improving its waste management facilities, with an increase in recycling centers and waste collection points. However, challenges remain in some rural and underdeveloped areas that require better access to waste disposal services.</p>

        <h4 style={{ fontSize: '1.3rem', color: '#34495e' }}>Key Insights</h4>
        <ul style={{ fontSize: '1rem', lineHeight: '1.5', color: '#7f8c8d' }}>
          <li><b>Lokoja:</b> The state capital has several well-established recycling centers and waste collection points, improving waste management efforts in urban areas.</li>
          <li><b>Kabba and Ajaokuta:</b> These regions also have recycling facilities, but more work is needed to expand coverage and improve waste collection efficiency.</li>
          <li><b>Waste Disposal Challenges:</b> Rural areas still face difficulties in waste management, highlighting the need for additional infrastructure investment and more public awareness programs.</li>
        </ul>
        <p style={{ fontSize: '1rem', lineHeight: '1.5', color: '#2c3e50' }}>To further improve waste management, the Kogi State government should continue to expand recycling facilities and waste collection infrastructure across the state, ensuring all communities have access to proper waste management services.</p>
      </div>
    </div>
  );
};

export default MapComponent;
