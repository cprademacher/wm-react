import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';

import API from '../../utils/API';

function Weather() {
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = setState({});

  const { mountainName } = useParams();

  const fetchWeatherData = async () => {
    const { weatherData } = await API.getWeatherByCity(mountainName);

    setWeather(weatherData);
  };

  const fetchForecastData = async () => {
    const { forecastData } = await API.getForecastByCity(mountainName);

    setForecast(forecastData);
  }


  return (
    <div>
        <Navbar />
        <div class="col-9 red vh-100">
        <div class="container" id="current-weather">
          <h3><span id="city">{mountainName}</span> <span id="date"></span> <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} id="todays-icon" alt="today's icon"/></h3>
          <p id="todays-temp">`Temp: ${weather.main.temp} F`</p>
          <p id="todays-wind">`Wind: ${weather.wind.speed} MPH`</p>
          <p id="todays-humidity">`Humidity: ${weather.main.humidity}%`</p>
        </div>

        <div id="five-day-forecast">
          <div>
            <h3>Five Day Forecast:</h3>
          </div>

          <div class="forecast-days row">
            <div class="forecast-day col-xs-6 col-lg-2" id="day1">
              <h4 id="d1date">Today's Date</h4>
              <img src="" id="d1weathericon" alt="day 1 icon"/>
              <p id="d1temp">Temp: </p>
              <p id="d1wind">Wind: </p>
              <p id="d1humidity">Humidity: </p>
            </div>

            <div class="forecast-day col-xs-6 col-lg-2" id="day2">
              <h4 id="d2date">Today's Date</h4>
              <img src="" id="d2weathericon" alt="day 2 icon"/>
              <p id="d2temp">Temp: </p>
              <p id="d2wind">Wind: </p>
              <p id="d2humidity">Humidity: </p>
            </div>

            <div class="forecast-day col-xs-6 col-lg-2" id="day3">
              <h4 id="d3date">Today's Date</h4>
              <img src="" id="d3weathericon" alt="day 3 icon"/>
              <p id="d3temp">Temp: </p>
              <p id="d3wind">Wind: </p>
              <p id="d3humidity">Humidity: </p>
            </div>

            <div class="forecast-day col-xs-6 col-lg-2" id="day4">
              <h4 id="d4date">Today's Date</h4>
              <img src="" id="d4weathericon" alt="day 4 icon"/>
              <p id="d4temp">Temp: </p>
              <p id="d4wind">Wind: </p>
              <p id="d4humidity">Humidity: </p>
            </div>

            <div class="forecast-day col-xs-6 col-lg-2" id="day5">
              <h4 id="d5date">Today's Date</h4>
              <img src="" id="d5weathericon" alt="day 5 icon"/>
              <p id="d5temp">Temp: </p>
              <p id="d5wind">Wind: </p>
              <p id="d5humidity">Humidity: </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather