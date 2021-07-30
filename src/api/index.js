import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async ()=> {
    try{
        const { data } = await axios.get(url); 

        const modifiedApiData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }
        // const data = await response.json();
        // console.log(data);
        
        return modifiedApiData;
    } catch(error) {

    }
};


export const fetchDailyData = async ()=> {
    try{
        const { data } = await axios.get(`${url}/daily`);        
        const newDailyData =  data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));

        return newDailyData;
        // const newDailyData =  data.map(
        //     ({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date })
        //     );
    }
    catch(error) {

    }
};