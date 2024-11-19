// data/wasteData.ts
export interface WasteLocation {
    location: string;
    percentage: number;
    coordinates: [number, number]; // Latitude and Longitude
  }
  
  export const wasteData: WasteLocation[] = [
    { location: 'Landfill A', percentage: 40, coordinates: [51.505, -0.09] },
    { location: 'Recycling Center B', percentage: 25, coordinates: [51.515, -0.1] },
    { location: 'Composting Facility C', percentage: 15, coordinates: [51.525, -0.12] },
    { location: 'Incinerator D', percentage: 20, coordinates: [51.535, -0.14] },
  ];
  