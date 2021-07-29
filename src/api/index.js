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