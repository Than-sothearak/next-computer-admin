"use client";
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function LineChartComponent({ data }) {
  const [opacity, setOpacity] = useState({
    uv: 1,
    pv: 1,
  });


  const handleMouseEnter = (o) => {
    const { dataKey } = o;

    setOpacity((op) => ({ ...op, [dataKey]: 0.5 }));
  };

  const handleMouseLeave = (o) => {
    const { dataKey } = o;

    setOpacity((op) => ({ ...op, [dataKey]: 1 }));
  };

  return (
       <div style={{ width: '100%', height: 400 }} className='bg-primary my-4 rounded-md'>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 40,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="totalSales"
            stroke="#8884d8"
            strokeOpacity={`${opacity.totalSales} $`}
            activeDot={{ r: 8 }}
            name="Total Sales $"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="totalItems"
            stroke="#82ca9d"
            strokeOpacity={opacity.totalItems}
            name="Total Items"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>

  );
} 