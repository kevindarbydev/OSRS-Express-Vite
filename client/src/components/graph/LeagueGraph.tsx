import Plot from "react-plotly.js";
import { useEffect, useState } from "react";

interface IProps {
  data: { date: string; value: number }[];
}

const LeagueGraph: React.FC<IProps> = ({ data }) => {
  const [plotData, setPlotData] = useState<object>();
  useEffect(() => {
    if (data) {
      const dates = data.map((entry) => entry.date);
      const values = data.map((entry) => entry.value);

      const trace1 = {
        x: dates,
        y: values,
        type: "scatter",
      };
      const chartData = [trace1];
      setPlotData(chartData);

     
    }
  }, [data]);
  return <Plot data={plotData} />;
};
export default LeagueGraph;
