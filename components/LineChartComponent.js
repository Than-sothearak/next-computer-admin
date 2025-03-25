"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function LineChartComponent({ data }) {
  return (
    <div className='mt-4 lg:p-4 bg-slate-800 rounded-lg'>
      <h1 className="text-2xl text-slate-300">Expense & Income Trend</h1>
      <div className='mt-6'>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="expense" stroke="red" />
            <Line type="monotone" dataKey="income" stroke="green" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 