import Plot from "react-plotly.js";
import { useEffect, useState } from "react";
import { GraphData } from "../../types";


const LeagueGraph = ({ data }: { data?: GraphData[] }) => {
  const [plotData, setPlotData] = useState<object>();
  
  useEffect(() => {
    if (data?.length != 0) {
      const dates = data.rankData.map((row) => row.date);
      const rankValues = data.rankData.map((row) => row.rank);
      const pointValues = data.pointData.map((row) => row.points);
      console.log(dates);
      const trace1 = {
        x: dates,
        y: rankValues,
        type: "scatter",
        mode: "lines+markers",
        name: "Rank",
      };

      const trace2 = {
        x: dates,
        y: pointValues,
        type: "scatter",
        mode: "lines+markers",
        name: "Points",
      };

      const chartData = [trace1, trace2];
      setPlotData(chartData);
    }
  }, [data]);

  return <Plot data={plotData} />;
};

export default LeagueGraph;
