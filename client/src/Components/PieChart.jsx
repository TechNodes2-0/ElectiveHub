import React, { useMemo, useRef } from "react";
import * as d3 from "d3";
import styles from "./pie-chart.module.css";

const MARGIN_X = 150;
const MARGIN_Y = 70;
const INFLEXION_PADDING = 20; // space between donut and label inflexion point

const colors = [
  "#e0ac2b",
  "#e85252",
  "#6689c6",
  "#9a6fb0",
  "#a53253",
  "#69b3a2",
  "#3d6cb9",
  "#ef8536",
  "#8c5294",
  "#45a45d",
  "#cf543f",
  // Add more colors as needed
];

const PieChart = ({ width, height, data }) => {
  const ref = useRef(null);

  const radius = Math.min(width - 2 * MARGIN_X, height - 2 * MARGIN_Y) / 2;

  const pie = useMemo(() => {
    const pieGenerator = d3.pie().value((d) => d.value);
    return pieGenerator(data);
  }, [data]);

  const arcGenerator = d3.arc();

  const shapes = pie.map((grp, i) => {
    // First arc is for the Pie
    const sliceInfo = {
      innerRadius: 0,
      outerRadius: radius,
      startAngle: grp.startAngle,
      endAngle: grp.endAngle,
    };
    const centroid = arcGenerator.centroid(sliceInfo);
    const slicePath = arcGenerator(sliceInfo);

    // Second arc is for the legend inflexion point
    const inflexionInfo = {
      innerRadius: radius + INFLEXION_PADDING,
      outerRadius: radius + INFLEXION_PADDING,
      startAngle: grp.startAngle,
      endAngle: grp.endAngle,
    };
    const inflexionPoint = arcGenerator.centroid(inflexionInfo);

    const isRightLabel = inflexionPoint[0] > 0;
    // ...
    const labelPosX = inflexionPoint[0] + 50 * (isRightLabel ? 1 : -1); // Increased distance
    // ...

    const textAnchor = isRightLabel ? "start" : "end";
    const label = grp.data.name + " (" + grp.value + ")";

    return (
      <g
        key={i}
        className={styles.slice}
        onMouseEnter={() => {
          if (ref.current) {
            ref.current.classList.add(styles.hasHighlight);
          }
        }}
        onMouseLeave={() => {
          if (ref.current) {
            ref.current.classList.remove(styles.hasHighlight);
          }
        }}
      >
        <path d={slicePath} fill={colors[i]} />
        <circle cx={centroid[0]} cy={centroid[1]} r={2} />
        <line
          x1={centroid[0]}
          y1={centroid[1]}
          x2={inflexionPoint[0]}
          y2={inflexionPoint[1]}
          stroke={"PURPLE"}
          fill={"#FFA500"}
        />
        <line
          x1={inflexionPoint[0]}
          y1={inflexionPoint[1]}
          x2={labelPosX}
          y2={inflexionPoint[1]}
          stroke={"PURPLE"}
          fill={"#FFA500"}
        />
        <text
          x={labelPosX + (isRightLabel ? 2 : -2)}
          y={inflexionPoint[1]}
          textAnchor={textAnchor}
          dominantBaseline="middle"
          fontSize={14}
          fill="#FFA500"
        >
          {label}
        </text>
      </g>
    );
  });

  // Center the pie chart using CSS
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Adjust as needed
  };

  return (
    <div className="p-0">
      <svg width={width} height={height} style={{ display: "inline-block" }}>
        <g
          transform={`translate(${width / 2.1}, ${height / 2})`}
          
          ref={ref}
        >
          {shapes}
        </g>
      </svg>
    </div>
  );
};

export default PieChart;
