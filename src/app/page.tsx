"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

const RICE_IMAGE = "/rice-plant.png";
const PLANT_AGE_DAYS = 21;

function useSoilTemperature() {
  const [temperature, setTemperature] = useState<number | null>(null);

  useEffect(() => {
    async function fetchTemperature() {
      try {
        // Simulated soil temperature data - replace with actual sensor data
        const simulatedTemp = 25 + Math.random() * 2;
        setTemperature(simulatedTemp);
      } catch {
        setTemperature(null);
      }
    }
    fetchTemperature();
    const interval = setInterval(fetchTemperature, 60000);
    return () => clearInterval(interval);
  }, []);
  return { temperature };
}

function useSoilPH() {
  const [ph, setPH] = useState<number | null>(null);

  useEffect(() => {
    async function fetchPH() {
      try {
        // Simulated soil pH data - replace with actual sensor data
        const simulatedPH = 6.5 + Math.random() * 0.5;
        setPH(simulatedPH);
      } catch {
        setPH(null);
      }
    }
    fetchPH();
    const interval = setInterval(fetchPH, 60000);
    return () => clearInterval(interval);
  }, []);
  return { ph };
}

function useSoilMoisture() {
  const [moisture, setMoisture] = useState<number | null>(null);

  useEffect(() => {
    async function fetchMoisture() {
      try {
        // Simulated soil moisture data - replace with actual sensor data
        const simulatedMoisture = 65 + Math.random() * 10;
        setMoisture(simulatedMoisture);
      } catch {
        setMoisture(null);
      }
    }
    fetchMoisture();
    const interval = setInterval(fetchMoisture, 60000);
    return () => clearInterval(interval);
  }, []);
  return { moisture };
}

function useIrrigationPH() {
  const [ph, setPH] = useState<number | null>(null);

  useEffect(() => {
    async function fetchPH() {
      try {
        // Simulated irrigation water pH data - replace with actual sensor data
        const simulatedPH = 7.0 + Math.random() * 0.3;
        setPH(simulatedPH);
      } catch {
        setPH(null);
      }
    }
    fetchPH();
    const interval = setInterval(fetchPH, 60000);
    return () => clearInterval(interval);
  }, []);
  return { ph };
}

export default function Dashboard() {
  const { temperature: soilTemp } = useSoilTemperature();
  const { ph: soilPH } = useSoilPH();
  const { moisture: soilMoisture } = useSoilMoisture();
  const { ph: irrigationPH } = useIrrigationPH();
  const [watering, setWatering] = useState(false);

  const handleWater = () => {
    setWatering((prev) => !prev);
  };

  return (
    <div className="min-h-screen w-full bg-[#F5F7FA] relative overflow-hidden flex flex-col">
      <Navbar />
      {/* Blurred Plant Image Background */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <img
          src={RICE_IMAGE}
          alt="Rice Plant Background"
          className="w-[600px] h-[600px] object-contain blur-2xl opacity-20 select-none pointer-events-none"
          style={{ filter: 'blur(80px)' }}
        />
      </div>
      {/* Header: Plant Image, Title, Age */}
      <div className="w-full flex flex-col items-center mt-8 mb-4">
        <img src={RICE_IMAGE} alt="Rice Plant" className="w-40 h-40 object-contain rounded-2xl shadow-lg mb-2" />
        <h1 className="text-4xl font-bold text-[#484848] text-center drop-shadow mb-1">Smart Rice Plant Monitoring</h1>
        <div className="text-lg font-semibold text-[#484848] mb-2">Plant Age: <span className="font-bold">{PLANT_AGE_DAYS} days</span></div>
      </div>
      {/* Main Content: Two Columns */}
      <div className="w-full max-w-6xl flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 z-10 px-4 pb-8 mx-auto">
        {/* Left Column: Metrics Grid + Button */}
        <div className="flex flex-col gap-6 h-full">
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="bg-[#F8FAFC] rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center">
              <span className="text-lg font-semibold text-red-700">Soil Temperature</span>
              <span className="text-5xl font-bold text-red-900 my-2">{soilTemp !== null ? `${soilTemp.toFixed(1)}°C` : "-"}</span>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center">
              <span className="text-lg font-semibold text-blue-700">Soil pH Level</span>
              <span className="text-5xl font-bold text-blue-900 my-2">{soilPH !== null ? soilPH.toFixed(1) : "-"}</span>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center">
              <span className="text-lg font-semibold text-green-700">Soil Moisture</span>
              <span className="text-5xl font-bold text-green-900 my-2">{soilMoisture !== null ? `${soilMoisture.toFixed(1)}%` : "-"}</span>
            </div>
            <div className="bg-[#F8FAFC] rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center">
              <span className="text-lg font-semibold text-purple-700">Irrigation Water pH</span>
              <span className="text-5xl font-bold text-purple-900 my-2">{irrigationPH !== null ? irrigationPH.toFixed(1) : "-"}</span>
            </div>
          </div>
          <button
            onClick={handleWater}
            className={`w-full px-6 py-6 bg-gradient-to-br from-[#ACDA00] via-[#CFEA6A] to-[#ACDA00] text-white rounded-2xl font-bold shadow-xl hover:scale-105 hover:shadow-green-200 active:scale-95 transition text-lg border-2 border-[#CFEA6A] flex flex-col items-center justify-center ${watering ? 'ring-4 ring-[#CFEA6A]' : ''}`}
            style={{ boxShadow: '0 4px 24px 0 rgba(172,218,0,0.15)', backdropFilter: 'blur(8px)', backgroundBlendMode: 'overlay' }}
          >
            {watering ? "🛑 Stop" : "💧 Water the plant"}
          </button>
        </div>
        {/* Right Column: Camera */}
        <div className="flex flex-col gap-6 h-full justify-center">
          <div className="bg-[#F8FAFC] rounded-2xl shadow-xl p-6 flex flex-col items-center w-full flex-1 justify-center">
            <span className="text-green-800 font-semibold mb-2">Live Camera Feed</span>
            <img
              src="http://localhost:8080/video_feed"
              alt="Live Camera"
              className="w-full h-[400px] object-contain rounded-lg border"
              style={{ background: "#e9fcd4" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
