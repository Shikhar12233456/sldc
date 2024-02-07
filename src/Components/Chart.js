import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

import {labels, dataList} from "../Const/Const";

const LineGraph = () => {
    const data = [
        { name: "A", x: 30, y: 70 },
        { name: "B", x: 12, y: 88 },
        { name: "C", x: 15, y: 85 },
        { name: "D", x: 35, y: 65 },
        { name: "E", x: 54, y: 46 },
        { name: "F", x: 72, y: 28 },
        { name: "G", x: 32, y: 68 },
    ];
 
    return (
        <AreaChart width={500} height={700} data={dataList}>
            <CartesianGrid />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
                dataKey="x"
                stackId="1"
                stroke="green"
                fill="green"
            />
            <Area
                dataKey="y"
                stackId="1"
                stroke="blue"
                fill="blue"
            />
        </AreaChart>
    );
};

export default LineGraph;