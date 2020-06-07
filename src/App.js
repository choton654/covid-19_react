import React, { Component } from 'react';
import Cards from './Card';
import Chart from './Chart';
import { fetchData } from './fetchdata';
import CountryPicker from './CountryPicker';
import image from './image/image.png';
import './App.css';

export default class App extends Component {
  state = {
    data: {},
    country: '',
  };
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
  }
  handleCountryChange = async (country) => {
    const fetchCountryData = await fetchData(country);

    this.setState({ data: fetchCountryData, country });
  };
  render() {
    return (
      <div className='container'>
        <img className='covidImage' src={image} alt='Covid-19' />
        <Cards data={this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}
