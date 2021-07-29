import React from "react";

import Cards from "./components/cards/Cards";
import Chart from "./components/chart/Chart";
import CountryPicker from "./components/countryPicker/CountryPicker";

import classes from './assets/css/App.module.css';

import { fetchData } from './api';

class App extends React.Component {

  state = {
    data: {},
  }

  async componentDidMount() {
    const covidData = await fetchData();
    this.setState({data: covidData});

    // console.log(data);
  }
  render() {
    const { data } = this.state;

    return (
      <div className={classes.container}>
        <Cards data={data}/>
        <CountryPicker />
        <Chart />
        hola
      </div>
    );
  }
}

export default App;
