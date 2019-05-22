import React, { Component } from 'react'

export default class WeatherForecast extends Component {
  render() {
    if (!this.props.forecast) {
      return null
    }
    if (!this.props.forecast.list) {
      return null
    }
    return (
      <div>
        {this.props.forecast.list.map((entry) => {
          return (
            <div>
              <span>{new Date(entry.dt_txt).toLocaleString()}</span>
              <br/>
              <span>{Math.round(entry.main.temp - 271)}℃</span>
            </div>
          );
        })}
      </div>
    );
  }
}
