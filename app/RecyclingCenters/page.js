"use client";

import React, { useEffect, useState } from 'react';
import L from 'leaflet';

const MapComponent = () => {
  const [map, setMap] = useState(null);
  const [infrastructureData, setInfrastructureData] = useState([]);

  useEffect(() => {
    // Initialize the map only once
    const initializedMap = L.map('map').setView([7.733333, 6.733333], 8);

    // Add the OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
    }).addTo(initializedMap);

    setMap(initializedMap); // Store the map instance

    // Infrastructure data including hospitals, schools, roads, and Z-scores
    const infrastructure = [
      // Hospitals
      { name: "Kogi State General Hospital", type: "hospital", coordinates: [7.55, 6.75], description: "A major healthcare center serving the central area of Kogi State." },
      { name: "Kabba General Hospital", type: "hospital", coordinates: [7.82, 6.07], description: "The largest hospital in the Kabba-Bunu region, crucial for healthcare in western Kogi." },
      { name: "Ajaokuta Steel Hospital", type: "hospital", coordinates: [7.5537, 6.6586], description: "Serves workers and families in the Ajaokuta steel industry, a vital industrial health facility." },
      // Schools
      { name: "Lokoja Primary School", type: "school", coordinates: [7.8, 6.73], description: "A well-established primary school providing foundational education in the state capital." },
      { name: "Federal University Lokoja", type: "school", coordinates: [7.7961, 6.7406], description: "One of the major tertiary institutions in Kogi State, contributing to higher education in the region." },
      { name: "Kabba Science College", type: "school", coordinates: [7.8352, 6.0745], description: "Focuses on science and technology education for secondary students in Kabba." },
      // Roads and Z-Score data from study
      { name: "Lokoja Urban Centre", type: "road", coordinates: [7.7961, 6.7406], zscore: 3.85, description: "Lokoja is the most privileged urban centre in terms of road infrastructure, with a Z-Score of 3.85." },
      { name: "Okenne Urban Centre", type: "road", coordinates: [7.5833, 6.2333], zscore: 2.85, description: "Okenne ranks second in road infrastructure, with a Z-Score of 2.85." },
      { name: "Ankpa Urban Centre", type: "road", coordinates: [7.3751, 7.6317], zscore: 1.81, description: "Ankpa has a Z-Score of 1.81, reflecting moderate development in road infrastructure." },
      { name: "Dekinna Urban Centre", type: "road", coordinates: [7.4816, 7.145], zscore: 0.83, description: "Dekinna ranks fourth in road infrastructure, indicating average conditions with a Z-Score of 0.83." },
      { name: "Ajaokuta Urban Centre", type: "road", coordinates: [7.5537, 6.6586], zscore: 0.77, description: "Ajaokuta, home to Nigeria's largest steel plant, has a Z-Score of 0.77. Improved infrastructure is needed for better accessibility." },
      { name: "Bassa-Oguma Urban Centre", type: "road", coordinates: [7.0162, 6.7397], zscore: -0.27, description: "Bassa-Oguma has limited road infrastructure with a Z-Score of -0.27." },
      { name: "Mopa-Amuro Urban Centre", type: "road", coordinates: [8.0377, 5.915], zscore: -0.28, description: "Mopa-Amuro has the lowest Z-Score (-0.28), indicating very poor road conditions." },
      { name: "Kabba-Bunu Urban Centre", type: "road", coordinates: [7.8352, 6.0745], zscore: -0.82, description: "Kabba-Bunu ranks last in road infrastructure, with a Z-Score of -0.82." }
    ];

    setInfrastructureData(infrastructure);

    // Cleanup map on component unmount
    return () => {
      initializedMap.remove();
    };
  }, []);

  useEffect(() => {
    if (map && infrastructureData.length) {
      // Add markers for each infrastructure point
      infrastructureData.forEach((point) => {
        const marker = L.marker(point.coordinates).addTo(map);

        // Determine the popup content based on the infrastructure type
        const popupContent = `
          <b>${point.name}</b><br>
          ${point.type === 'road' ? 'Z-Score: ' + point.zscore + '<br>' + point.description : point.description}
        `;
        marker.bindPopup(popupContent);
      });
    }
  }, [map, infrastructureData]);

  return (
    <div>
      <h1>Interactive Map of Kogi State Infrastructure</h1>
      <p>Explore key infrastructure such as hospitals, schools, and roads across Kogi State.</p>

      <div style={{ width: '100%', height: '500px', overflow: 'hidden', border: '1px solid #ddd' }}>
        <div id="map" style={{ width: '100%', height: '100%' }}></div>
      </div>

      <div>
        <h3>Infrastructure Challenges and Opportunities in Kogi State</h3>
        <p>Kogi State faces a significant disparity in infrastructure development, with urban centers like Lokoja benefiting from advanced road networks, while rural areas like Mopa-Amuro and Kabba-Bunu face serious challenges. The Z-Score analysis helps highlight these disparities.</p>
        <h4>Key Insights</h4>
        <ul>
          <li><b>Lokoja:</b> The state capital has a high Z-Score of 3.85, reflecting well-developed infrastructure.</li>
          <li><b>Mopa-Amuro and Kabba-Bunu:</b> These regions require urgent government attention due to their low Z-Scores.</li>
          <li><b>Healthcare and Education Access:</b> Poor infrastructure impacts access to essential services in many areas.</li>
        </ul>
        <p>To improve the state's infrastructure, targeted investment in roads and service facilities is essential, particularly in rural regions.</p>
      </div>
    </div>
  );
};

export default MapComponent;
