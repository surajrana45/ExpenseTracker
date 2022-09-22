import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointsArr = props.dataPoints.map((datapoint) => datapoint.value);
  const maxDataVal = Math.max(...dataPointsArr);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxDataVal}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};
export default Chart;
