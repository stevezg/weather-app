/*
  use input element
  convert input to geocode
  request weather forecast
  display forecast with <WeatherForecast />
*/

import React, { Component } from 'react'
import logo from './logo.svg'
import { geocode } from './api/geo.js'
import { getWeather } from './api/weather.js'
import Input from './components/Input'
import WeatherForecast from './components/WeatherForecast'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      input: '',
      lat: '',
      lng: ''
    }
  }
  fetchGeocode() {
    return geocode(this.state.input)
  }
  fetchWeather() {
    return getWeather(this.state.lat, this.state.lng)
  }

  handleInputChange = async e => {
    try {
      this.setState({ input: e.currentTarget.value })
      let result = await this.fetchGeocode()
      if (result) {
        this.setState({ lat: result.lat, lng: result.lng })
      }
    } catch (err) {
      this.setState({ error: err })
    }
  }
  render() {
    let forecast = this.fetchWeather().then(response => {
      console.log(response)
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Input
            type="text"
            style={{ width: 200 }}
            onChange={this.handleInputChange}
          />
          <WeatherForecast forecast={forecast} />
        </header>
      </div>
    )
  }
}

export default App
