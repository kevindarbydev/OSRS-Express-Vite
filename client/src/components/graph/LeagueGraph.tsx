import * as d3 from "d3";
import { useEffect, createRef, useRef } from "react";
import dataCsv from "./leaguestats.csv";

interface IProps {
  data?: number[];
}

const LeagueGraph: IProps = ({ data }) => {
    const d3Container = useRef(null);

 useEffect(() =>{
        const svg = d3.select(d3Container.current);

        // Bind D3 data
        const update = svg.append("g").selectAll("text").data(data);

        // Enter new D3 elements
        update
          .enter()
          .append("text")
          .attr("x", (d, i) => i * 25)
          .attr("y", 40)
          .style("font-size", 24)
          .text((d: number) => d);

        // Update existing D3 elements
        update.attr("x", (d, i) => i * 40).text((d: number) => d);

        // Remove old D3 elements
        update.exit().remove();
    // // read from csv and format variables
    // const csv = d3.csv(dataCsv);
    // const parseTime = d3.timeParse("%m-%d-%Y");
    // csv.forEach((line: { date: string; value: number }) => {
    //   line.date = parseTime(line.date);
    //   line.value = +line.value;
    // });
    //  const margin = { top: 20, right: 20, bottom: 50, left: 70 },
    //    width = 960 - margin.left - margin.right,
    //    height = 500 - margin.top - margin.bottom;
    //  // append the svg object to the body of the page
    //  const svg = d3
    //    .select(d3Container.current)
    //    .append("svg")
    //    .attr("width", width + margin.left + margin.right)
    //    .attr("height", height + margin.top + margin.bottom)
    //    .append("g")
    //    .attr("transform", `translate(${margin.left},     ${margin.top})`);

    //       const x = d3.scaleTime().range([0, width]);
    //       const y = d3.scaleLinear().range([height, 0]);
    //       x.domain(
    //         d3.extent(data, (d) => {
    //           return d.date;
    //         })
    //       );
    //       y.domain([
    //         0,
    //         d3.max(data, (d) => {
    //           return d.value;
    //         }),
    //       ]);
    //       svg
    //         .append("g")
    //         .attr("transform", `translate(0, ${height})`)
    //         .call(d3.axisBottom(x));
    //       svg.append("g").call(d3.axisLeft(y));

    //          const valueLine = d3
    //            .line()
    //            .x((d) => {
    //              return x(d.date);
    //            })
    //            .y((d) => {
    //              return y(d.value);
    //            });
    //          svg
    //            .append("path")
    //            .data([data])
    //            .attr("class", "line")
    //            .attr("fill", "none")
    //            .attr("stroke", "steelblue")
    //            .attr("stroke-width", 1.5)
    //            .attr("d", valueLine);
            }, [data, d3Container.current])


     return (
       <svg
         className="d3-component"
         width={400}
         height={200}
         ref={d3Container}
       />
     );

};
export default LeagueGraph;
