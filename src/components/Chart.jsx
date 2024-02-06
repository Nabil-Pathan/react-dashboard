import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = () => {

    const salesData = [
        {
          month: 'Jan',
          sales: 1200
        },
        {
          month: 'Feb',
          sales: 1300
        },
        {
          month: 'Mar',
          sales: 1400
        },
        {
          month: 'Apr',
          sales: 1500
        },
        {
          month: 'May',
          sales: 1400
        },
        {
          month: 'Jun',
          sales: 1200
        },
        {
          month: 'Jul',
          sales: 1100
        },
        {
          month: 'Aug',
          sales: 1000
        },
        {
          month: 'Sep',
          sales: 700
        },
        {
          month: 'Oct',
          sales: 500
        },
        {
          month: 'Nov',
          sales: 400
        },
        {
          month: 'Dec',
          sales: 300
        },
      ]
  return (
    <>
     <LineChart width={600} height={300} data={salesData} margin={{top : 5 , right : 80 ,left : 40}}>
             
             <XAxis dataKey="month" />
             <Tooltip />
             <Legend />
             <Line type="monotone" dataKey="sales" strokeWidth={3} stroke="#8884d8" dot={false} />
           </LineChart>
    </>
  )
}

export default Chart