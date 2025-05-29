import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface TemperatureChartProps {
  history: { value: number; time: string }[];
  color?: string;
  label?: string;
}

export default function TemperatureChart({ history, color = "#EF4444", label = "Temperature (°C)" }: TemperatureChartProps) {
  const data = {
    labels: history.map((h) => h.time),
    datasets: [
      {
        label: label,
        data: history.map((h) => h.value),
        borderColor: color,
        backgroundColor: color,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
} 