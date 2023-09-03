import React, { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

const Barplot = ({ width, height, data }) => {

    
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom-120;

  const allNames = data.map((d) => d.name);

  // Y axis
  const max = d3.max(data, (d) => d.value) || 0;
  const yScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, max])
      .range([boundsHeight, 0]);
  }, [data, height]);

  // X axis
  const xScale = useMemo(() => {
    return d3
      .scaleBand()
      .domain(allNames)
      .range([0, boundsWidth])
      .padding(0.05);
  }, [data, width]);

  // Color Scale
  var colorScale = d3
    .scaleOrdinal()
    .domain(allNames)
    .range(["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"]);

  // Render the X and Y axis using d3.js, not react
  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll("*").remove();
    const xAxisGenerator = d3.axisBottom(xScale);
    svgElement
      .append("g")
      .attr("transform", `translate(0,${boundsHeight})`)
      .call(xAxisGenerator)
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "end");

    const yAxisGenerator = d3.axisLeft(yScale);
    svgElement.append("g").call(yAxisGenerator);
  }, [xScale, yScale, boundsHeight]);

  const bars = data.map((d, i) => (
    <rect
      key={i}
      x={xScale(d.name)}
      y={yScale(d.value)}
      height={boundsHeight - yScale(d.value)}
      width={xScale.bandwidth()}
      fill={colorScale(d.name)}
      opacity={0.9}
    ></rect>
  ));

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {bars}
        </g>
        <g
          width={boundsWidth}
          height={boundsHeight}
          ref={axesRef}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        />
      </svg>
    </div>
  );
};

export default Barplot;
