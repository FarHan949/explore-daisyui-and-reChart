import React from 'react';
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

  const companies =   [
        {
          "company": "Grameenphone",
          "sector": "Telecommunications",
          "market_value": 5000,
          "revenue": 3000,
          "net_profit": 700
        },
        {
          "company": "BRAC Bank",
          "sector": "Banking",
          "market_value": 4000,
          "revenue": 2500,
          "net_profit": 600
        },
        {
          "company": "Square Pharmaceuticals",
          "sector": "Pharmaceuticals",
          "market_value": 3500,
          "revenue": 2000,
          "net_profit": 800
        },
        {
          "company": "Beximco",
          "sector": "Conglomerate",
          "market_value": 4500,
          "revenue": 2700,
          "net_profit": 750
        },
        {
          "company": "Robi Axiata",
          "sector": "Telecommunications",
          "market_value": 3800,
          "revenue": 2200,
          "net_profit": 500
        },
        {
          "company": "Apex Footwear",
          "sector": "Retail",
          "market_value": 3000,
          "revenue": 1800,
          "net_profit": 450
        },
        {
          "company": "ACI Limited",
          "sector": "Conglomerate",
          "market_value": 3200,
          "revenue": 2100,
          "net_profit": 550
        },
        {
          "company": "United Power Generation",
          "sector": "Energy",
          "market_value": 3700,
          "revenue": 2300,
          "net_profit": 650
        },
        {
          "company": "Summit Power",
          "sector": "Energy",
          "market_value": 3400,
          "revenue": 1900,
          "net_profit": 480
        },
        {
          "company": "LafargeHolcim Bangladesh",
          "sector": "Cement",
          "market_value": 3300,
          "revenue": 1700,
          "net_profit": 420
        }
      ]
      

    return (
        <div className='mt-32'>
            <LChart width={700} height={400} data={companies}>
            <YAxis dataKey="revenue"/>  
            <XAxis dataKey="revenue"/>
                <Line dataKey="revenue" stroke="#8884d8"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;