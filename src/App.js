import React from "react";

import Cards from "./components/cards/Cards";
import Chart from "./components/chart/Chart";
import CountryPicker from "./components/countryPicker/CountryPicker";

import classes from './assets/css/App.module.css';

import { fetchData } from './api';
import { Typography } from "@material-ui/core";

class App extends React.Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const covidData = await fetchData();
    this.setState({data: covidData});
  }

  countryChangeHandler = async(country)=> {
      const fetchCountryData = await fetchData(country);
      console.log(fetchCountryData)
      this.setState({data:fetchCountryData, country: country})
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={classes.container}>
        <Typography className={classes.heading} variant='h2'>COVID-19 </Typography>
        <Cards data={data}/>
        <CountryPicker countryChangeHandler={this.countryChangeHandler}/>
        <Chart data={data} country={country}/>
      </div>
    );
  }
}

export default App;
