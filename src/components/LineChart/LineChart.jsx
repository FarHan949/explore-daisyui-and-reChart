import React, { useEffect, useState } from 'react';
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
      
      const [companies , setCompanies] = useState([])

      useEffect(()=>{
        fetch('companies.json')
        .then( res => res.json())
        .then( data => setCompanies(data))
      },[])
   
     const {revenue, market_value, net_profit} = companies

    return (
        <div className='mt-32'>
            <LChart width={700} height={400} data={companies}>
            <YAxis dataKey="net_profit"/>  
            <XAxis dataKey="net_profit"/>
                <Line dataKey={'net_profit'} stroke="#8884d8"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;