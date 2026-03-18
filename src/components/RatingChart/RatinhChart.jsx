import React from "react";

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const RatinhChart = ({ data }) => {
  return (
    <div className="w-full h-50 md:h-75 ">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical">
          <XAxis type="number" axisLine={false} tickLine={false} />
          <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
          />

          <Bar dataKey="count" fill="#FF8811" barSize={25} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatinhChart;
