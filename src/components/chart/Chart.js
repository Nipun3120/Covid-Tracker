import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import classes from '../../assets/css/chart/Chart.module.css';

const Chart = (props) =>{
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {

        const fetchMyAPI = async () => {
          const initialDailyData = await fetchDailyData();
            setDailyData(initialDailyData);
        };
     
        console.log(dailyData)
        fetchMyAPI();
      }, []);

    // console.log(dailyData);


    const lineChart = (
        dailyData.length
        ? (<Line 
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [{
                    data: dailyData.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: 'rgba(0,255,0, 0.5)',
                    fill: true
                }, {
                    data: dailyData.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    backgroundColor: 'rgba(0,0,255, 0.5)',
                    fill: true 
                }]
            }}
        />) 
        : null
    );

    console.log(props.data.confirmed)
    console.log(props.data.recovered)
    console.log(props.data.deaths)

    const barChart = (
        props.data.confirmed 
        ? (
            <Bar 
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(0,255,0,0.5)', 'rgba(255,0,0,0.5)', 'rgba(0,0,255,0.5)'],
                        data: [props.data.confirmed.value, props.data.recovered.value, props.data.deaths.value]
                    }]

                }}
                options={{
                    legend: {display:false},
                    title: {display:true, text:`Current state in ${props.country}`}
                }} 
            />
        ) : null
    );


    return (
        <div className={classes.container}>
            {props.country ? barChart : lineChart}
        </div>
    );
};

export default Chart; 