
    import React, { useMemo } from "react";
    import * as d3 from "d3";


    export const CircularPacking2LevelsDemo = ({ width = 700, height = 400,data }) => {
    if (width === 0) {
        return null;
    }

    return <CircularPacking width={width} height={height} data={data} />;
    };



    const MARGIN = 3;

    const colors = [
    "#e0ac2b",
    "#6689c6",
    "#a4c969",
    "#e85252",
    "#9a6fb0",
    "#a53253",
    "#7f7f7f",
    ];

    export const CircularPacking = ({
    width,
    height,
    data,
    }) => {
        const hierarchy = useMemo(() => {
            const hierarchyData = d3
            .hierarchy(data)
            .sum((d) => d.value)
            .sort((a, b) => b.value - a.value);
            return hierarchyData;
        }, [data]);
        

    const packGenerator = useMemo(
        () => d3.pack().size([width, height]).padding(1),
        [width, height]
    );

    const root = useMemo(() => packGenerator(hierarchy), [hierarchy, packGenerator]);

    const firstLevelGroups = useMemo(
        () => hierarchy?.children?.map((child) => child.data.name) || [],
        [hierarchy]
    );

    const colorScale = useMemo(
        () => d3.scaleOrdinal().domain(firstLevelGroups).range(colors),
        [firstLevelGroups]
    );

    const allLevel1Circles = useMemo(
        () =>
        root
            .descendants()
            .filter((node) => node.depth === 1)
            .map((node,index) => {
            const parentName = node.data.name;

            return (
                <g key={index}>
                <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.r}
                    stroke={colorScale(parentName)}
                    strokeWidth={1}
                    strokeOpacity={0.3}
                    fill={colorScale(parentName)}
                    fillOpacity={0.1}
                />
                </g>
            );
            }),
        [root, colorScale]
    );

    const allLeafCircles = useMemo(
        () =>
        root.leaves().map((leaf) => {
            const parentName = leaf.parent?.data.name;

            if (!parentName) {
            return null;
            }

            return (
            <g key={leaf.data.name}>
                <circle
                cx={leaf.x}
                cy={leaf.y}
                r={leaf.r}
                stroke={colorScale(parentName)}
                strokeWidth={2}
                fill={colorScale(parentName)}
                fillOpacity={0.2}
                />

                <text
                key={leaf.data.name}
                x={leaf.x}
                y={leaf.y}
                fontSize={14}
                fontWeight={400}
                textAnchor="middle"
                alignmentBaseline="middle"
                >
                {leaf.data.name}
                </text>
            </g>
            );
        }),
        [root, colorScale]
    );

    return (
        <svg width={width} height={height} style={{ display: "inline-block" }}>
        {allLevel1Circles}
        {allLeafCircles}
        </svg>
    );
    };

