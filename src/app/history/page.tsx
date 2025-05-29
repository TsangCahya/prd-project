"use client";
import { useEffect, useState } from "react";
import TemperatureChart from "../TemperatureChart";
import PHChart from "../PHChart";
import Navbar from "../components/Navbar";

function useSoilTemperatureHistory() {
  const [history, setHistory] = useState<{ value: number; time: string }[]>([]);

  useEffect(() => {
    async function fetchTemperature() {
      try {
        // Simulated soil temperature data - replace with actual sensor data
        const simulatedTemp = 25 + Math.random() * 2;
        setHistory((prev) => {
          const now = new Date();
          const hourKey = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}-${now.getHours()}`;
          if (prev.length === 0 || prev[prev.length - 1].time !== hourKey) {
            return [
              ...prev.slice(-23),
              { value: simulatedTemp, time: hourKey }
            ];
          }
          return prev;
        });
      } catch {
        // Handle error
      }
    }
    fetchTemperature();
    const interval = setInterval(fetchTemperature, 60000);
    return () => clearInterval(interval);
  }, []);
  return { history };
}

function useSoilPHHistory() {
  const [history, setHistory] = useState<{ value: number; time: string }[]>([]);

  useEffect(() => {
    async function fetchPH() {
      try {
        // Simulated soil pH data - replace with actual sensor data
        const simulatedPH = 6.5 + Math.random() * 0.5;
        setHistory((prev) => {
          const now = new Date();
          const hourKey = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}-${now.getHours()}`;
          if (prev.length === 0 || prev[prev.length - 1].time !== hourKey) {
            return [
              ...prev.slice(-23),
              { value: simulatedPH, time: hourKey }
            ];
          }
          return prev;
        });
      } catch {
        // Handle error
      }
    }
    fetchPH();
    const interval = setInterval(fetchPH, 60000);
    return () => clearInterval(interval);
  }, []);
  return { history };
}

function useSoilMoistureHistory() {
  const [history, setHistory] = useState<{ value: number; time: string }[]>([]);

  useEffect(() => {
    async function fetchMoisture() {
      try {
        // Simulated soil moisture data - replace with actual sensor data
        const simulatedMoisture = 65 + Math.random() * 10;
        setHistory((prev) => {
          const now = new Date();
          const hourKey = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}-${now.getHours()}`;
          if (prev.length === 0 || prev[prev.length - 1].time !== hourKey) {
            return [
              ...prev.slice(-23),
              { value: simulatedMoisture, time: hourKey }
            ];
          }
          return prev;
        });
      } catch {
        // Handle error
      }
    }
    fetchMoisture();
    const interval = setInterval(fetchMoisture, 60000);
    return () => clearInterval(interval);
  }, []);
  return { history };
}

function useIrrigationPHHistory() {
  const [history, setHistory] = useState<{ value: number; time: string }[]>([]);

  useEffect(() => {
    async function fetchPH() {
      try {
        // Simulated irrigation water pH data - replace with actual sensor data
        const simulatedPH = 7.0 + Math.random() * 0.3;
        setHistory((prev) => {
          const now = new Date();
          const hourKey = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}-${now.getHours()}`;
          if (prev.length === 0 || prev[prev.length - 1].time !== hourKey) {
            return [
              ...prev.slice(-23),
              { value: simulatedPH, time: hourKey }
            ];
          }
          return prev;
        });
      } catch {
        // Handle error
      }
    }
    fetchPH();
    const interval = setInterval(fetchPH, 60000);
    return () => clearInterval(interval);
  }, []);
  return { history };
}

export default function HistoryPage() {
  const { history: soilTempHistory } = useSoilTemperatureHistory();
  const { history: soilPHHistory } = useSoilPHHistory();
  const { history: soilMoistureHistory } = useSoilMoistureHistory();
  const { history: irrigationPHHistory } = useIrrigationPHHistory();

  return (
    <div className="min-h-screen w-full bg-[#F5F7FA] flex flex-col">
      <Navbar />
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-[#484848] mb-8">Detailed History</h1>
          
          <div className="grid gap-8">
            <div className="bg-[#F8FAFC] rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-semibold text-red-800 mb-4">Temperature History</h2>
              <div className="h-64">
                <TemperatureChart 
                  history={soilTempHistory}
                  label="Temperature (°C)"
                />
              </div>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">Soil pH History</h2>
              <div className="h-64">
                <PHChart 
                  history={soilPHHistory}
                  label="Soil pH Level"
                />
              </div>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-semibold text-green-800 mb-4">Soil Moisture History</h2>
              <div className="h-64">
                <TemperatureChart 
                  history={soilMoistureHistory}
                  color="#4CAF50"
                  label="Soil Moisture (%)"
                />
              </div>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-semibold text-purple-800 mb-4">Irrigation Water pH History</h2>
              <div className="h-64">
                <PHChart 
                  history={irrigationPHHistory}
                  color="#9C27B0"
                  label="Irrigation Water pH"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 