'use client';

import Image from 'next/image';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 45210,
    expense: 21440,
  },
  {
    name: 'Feb',
    income: 46890,
    expense: 22310,
  },
  {
    name: 'Mar',
    income: 46120,
    expense: 21940,
  },
  {
    name: 'Apr',
    income: 47950,
    expense: 23020,
  },
  {
    name: 'May',
    income: 48740,
    expense: 22610,
  },
  {
    name: 'Jun',
    income: 71200,
    expense: 35120,
  },
  {
    name: 'Jul',
    income: 39800,
    expense: 18140,
  },
  {
    name: 'Aug',
    income: 50890,
    expense: 24210,
  },
  {
    name: 'Sep',
    income: 42130,
    expense: 55890,
  },
  {
    name: 'Oct',
    income: 51440,
    expense: 24420,
  },
  {
    name: 'Nov',
    income: 52980,
    expense: 25210,
  },
  {
    name: 'Dec',
    income: 54320,
    expense: 26040,
  },
];

const FinanceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Finance</h1>
        <Image src='/moreDark.png' alt='' width={20} height={20} />
      </div>
      <ResponsiveContainer width='100%' height='90%'>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray='3 3' stroke='#DDD' />
          <XAxis
            dataKey='name'
            axisLine={false}
            tick={{ fill: '#D1D5DB' }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: '#D1D5DB' }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align='center'
            verticalAlign='top'
            wrapperStyle={{ paddingTop: '10px', paddingBottom: '30px' }}
          />
          <Line
            type='monotone'
            dataKey='income'
            stroke='#F9E79F'
            strokeWidth={3}
          />
          <Line
            type='monotone'
            dataKey='expense'
            stroke='#F28A8A'
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
