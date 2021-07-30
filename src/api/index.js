import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country)=> {
    let variableUrl = url;

    if(country ) {
        variableUrl = `${url}/countries/${country}`
    }

    try{
        const { data } = await axios.get(variableUrl); 

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
        console.log(error)
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



export const fetchCountriesData = async ()=> {
    try{
        const { data: {countries} } = await axios.get(`${url}/countries`);
        
        return countries.map((country) => country.name)

    } catch(error) {

    }
};  

