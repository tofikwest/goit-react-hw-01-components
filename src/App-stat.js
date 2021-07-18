import React from "react";
import Statistics from "./components/Statistics";
import statisticalData from "./JSON/statistical-data.json";

const AppStat = () => {
  return (
    <ul>
      <Statistics
        title="Upload stats"
        stats={statisticalData.map((stat) => {})}
      />
    </ul>
  );
};

export default AppStat;
