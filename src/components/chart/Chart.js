import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import classes from '../../assets/css/chart/Chart.module.css';

const Chart = () =>{
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



    return (
        <div className={classes.container}>
            {lineChart}
        </div>
    );
};

export default Chart; 