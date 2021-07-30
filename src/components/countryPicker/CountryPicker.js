import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'
import classNames from 'classnames';
import classes from '../../assets/css/countryPicker/CountryPicker.module.css';

import { fetchCountriesData } from '../../api';

const CountryPicker = (props) =>{

    const [fetchCountries, setFetchCountries] = useState([]);

    useEffect(()=> {
        const fetchAllCountries = async()=> {
            setFetchCountries(await fetchCountriesData());
        }

        
        fetchAllCountries();
    }, [setFetchCountries])

    const onCountryChangehandler = (event)=> {
        event.preventDefault();
        props.countryChangeHandler(event.target.value); 
    };
    
    
    return (
        <FormControl className={classes.formControl}>
            <NativeSelect defaultValue="" onChange={onCountryChangehandler}>
                <option value=''>Global</option>
                {fetchCountries.map((country, i)=> <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker; 