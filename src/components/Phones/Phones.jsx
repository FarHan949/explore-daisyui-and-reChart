import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart as LChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { BarChart, Bar } from 'recharts';


const Phones = () => {

    const [ phones, setPhones] = useState([])
    
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then( data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then( data => {
            const phonesData = data.data.data;
            const FakePhonesData = phonesData.map(phone => {
                const obj = {
                    name : phone.phone_name,
                    price : parseInt(phone.slug.split('-')[1])
                }
                return obj
            })
            // console.log(FakePhonesData)
            setPhones(FakePhonesData)
        })
    },[])
   

    return (
        <div>
            <h2 className="text-5xl">Phones : {phones.length}</h2>
            <LChart width={700} height={400} data={phones}>
            <YAxis dataKey="price"/>  
            <XAxis dataKey="price"/>
                <Line dataKey={'price'} stroke="#8884d8"></Line>
            </LChart> 

            <BarChart width={1200} height={500} data={phones}>
                <YAxis dataKey={'price'}></YAxis>
                <XAxis dataKey={'price'}></XAxis>
                <Tooltip></Tooltip>
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
            
        </div>
    );
};

export default Phones;