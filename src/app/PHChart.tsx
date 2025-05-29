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

interface PHChartProps {
  history: { value: number; time: string }[];
  color?: string;
  label?: string;
}

export default function PHChart({ history, color = "#3B82F6", label = "pH Level" }: PHChartProps) {
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
        max: 14,
        ticks: {
          stepSize: 2,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
} 