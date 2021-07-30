import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import classes from '../../assets/css/chart/Chart.module.css';

const Chart = () =>{
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
      const fetchMyAPI = async () => {
        const initialDailyData = await fetchDailyData();
        
        setDailyData(initialDailyData);
      };
  
    //   console.log(dailyData);
      fetchMyAPI();
    }, [dailyData]);

    // console.log(dailyData);


    // const lineChart = (
    //     dailyData[0]
    //     ? (<Line 
    //         data={{
    //             labels: '',
    //             datasets: [{}, {}]
    //         }}
    //     />) 
    //     : null
    // );



    return (
        <div></div>
    );
};

export default Chart; 