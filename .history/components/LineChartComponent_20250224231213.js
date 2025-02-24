"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Monday',
    visits: 4000,
    pageViews: 2400,
    bounceRate: 2400,
  },
  {
    name: 'Tuesday',
    visits: 3000,
    pageViews: 1398,
    bounceRate: 2210,
  },
  {
    name: 'Wednesday',
    visits: 2000,
    pageViews: 9800,
    bounceRate: 2290,
  },
  {
    name: 'Thursday',
    visits: 2780,
    pageViews: 3908,
    bounceRate: 2000,
  },
  {
    name: 'Friday',
    visits: 1890,
    pageViews: 4800,
    bounceRate: 2181,
  },
  {
    name: 'Saturday',
    visits: 2390,
    pageViews: 3800,
    bounceRate: 2500,
  },
  {
    name: 'Sunday',
    visits: 3490,
    pageViews: 4300,
    bounceRate: 2100,
  },
];



export default function LineChartComponent() {
    return (
      <div className='mt-4 p-4 bg-slate-800 rounded-lg'>
        <h1 className="text-2xl text-slate-300">Last Transactions</h1>
        <div className='mt-4'>
        <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="visits" stroke="#8884d8" />
          <Line type="monotone" dataKey="pageViews" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
        </div>
      </div>
    );
  }
