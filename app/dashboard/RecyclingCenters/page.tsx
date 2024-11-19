"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ["Adankolo", "Barracks", "Felele", "Gadumo", "Ganaja", "Jimgbe", "Kabawa", "Karaworo", "Lokongoma", "Phase II", "Serkin Noma", "Shetima", "Zango", "Zone 8"],
  datasets: [
    {
      label: "Waste Percentage",
      data: [95, 78, 70, 80, 80, 78, 98, 80, 70, 58, 89, 88, 97, 93 ], // Example percentages
      backgroundColor: [
        "#1d4ed8", 
        "#16a34a", 
        "#facc15", 
        "#dc2626", 
        "#0ea5e9",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Waste Locations in Lokoja, Kogi State (%)",
    },
  },
};

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl p-4 md:p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-xl md:text-2xl font-bold text-center mb-4">
          Waste Location Analysis
        </h1>
        <div className="relative overflow-x-auto">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

