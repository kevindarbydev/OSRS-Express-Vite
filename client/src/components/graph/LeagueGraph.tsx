import * as d3 from "d3";
import { useEffect, useRef } from "react";

interface IProps {
  data: { date: string; value: number }[];
}

const LeagueGraph: React.FC<IProps> = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 400;
    const height = 200;
    const margin = { top: 20, right: 20, bottom: 20, left: 40 };

     const parseDate = d3.timeParse("%m/%d/%Y");
     data.forEach((d) => {
       d.date = parseDate(d.date);
       d.value = +d.value; // Convert to numeric value
     });

    const xScale = d3.scaleLinear()
      .domain([1,7])
      .range([margin.left, width - margin.right]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([height - margin.bottom, margin.top]);

      //line generator
    const line = d3.line()
      .x(d => xScale(d.date))
      .y(d => yScale(d.value));

       svg
         .select(".line")
         .datum(data)
         .attr("fill", "none")
         .attr("stroke", "steelblue")
         .attr("stroke-width", 2)
         .attr("d", line);

       // Draw the axes (you can customize this part based on your needs)
       svg
         .select(".x-axis")
         .attr("transform", `translate(0, ${height - margin.bottom})`)
         .call(d3.axisBottom(xScale));

       svg
         .select(".y-axis")
         .attr("transform", `translate(${margin.left}, 0)`)
         .call(d3.axisLeft(yScale));
  }, [data]);

  return (
    <svg ref={svgRef} width={400} height={200}>
      <g className="line" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
};
export default LeagueGraph;
