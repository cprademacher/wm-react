import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getWeather } from "../api/weather";
import mountains from "../db/mountains.json";
import "./ForecastWeatherBox.css";

export default function FutureWeatherForecast() {
  const [selectedMountain, setSelectedMountain] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Find the selected mountain based on the URL parameter
    const mountain = mountains.find((mountain) => mountain.id === id);

    if (mountain) {
      setSelectedMountain(mountain);
      // Make the API call using the correct structure
      getWeather(mountain.lat, mountain.long)
        .then((response) => {
          console.log("API Response:", response);
          setWeatherData(response);
        })
        .catch((error) => console.error(error));
    }
  }, [id]); // The effect will re-run whenever the URL parameter changes

  console.log(selectedMountain);
  console.log(weatherData);

  function formatDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    const month = date.getMonth() + 1; // getMonth() returns month from 0-11
    const day = date.getDate();
    return `${month}/${day}`;
  }

  return (
    <div id="five-day-forecast">
      <div id="forecast-title">
        <h3>Five Day Forecast:</h3>
      </div>
      {weatherData && selectedMountain && (
        <div className="forecast-days row">
          <div className="forecast-day col-xs-6 col-lg-2" id="day1">
            <h4 id="d1date">{formatDate(weatherData.daily[1].dt)}</h4>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.daily[1].weather[0].icon}.png`}
              id="d1weathericon"
              alt="day 1 icon"
            />
            <p id="d1high">High: {weatherData.daily[1].temp.max}F</p>
            <p id="d1low">Low: {weatherData.daily[1].temp.min}F</p>
            <p id="d1humidity">
              Description: {weatherData.daily[1].weather[0].description}
            </p>
          </div>

          <div className="forecast-day col-xs-6 col-lg-2" id="day2">
            <h4 id="d1date">{formatDate(weatherData.daily[2].dt)}</h4>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.daily[2].weather[0].icon}.png`}
              id="d1weathericon"
              alt="day 1 icon"
            />
            <p id="d1high">High: {weatherData.daily[2].temp.max}F</p>
            <p id="d1low">Low: {weatherData.daily[2].temp.min}F</p>
            <p id="d1humidity">
              Description: {weatherData.daily[2].weather[0].description}
            </p>
          </div>

          <div className="forecast-day col-xs-6 col-lg-2" id="day3">
            <h4 id="d1date">{formatDate(weatherData.daily[3].dt)}</h4>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.daily[3].weather[0].icon}.png`}
              id="d1weathericon"
              alt="day 1 icon"
            />
            <p id="d1high">High: {weatherData.daily[3].temp.max}F</p>
            <p id="d1low">Low: {weatherData.daily[3].temp.min}F</p>
            <p id="d1humidity">
              Description: {weatherData.daily[3].weather[0].description}
            </p>
          </div>

          <div className="forecast-day col-xs-6 col-lg-2" id="day4">
            <h4 id="d1date">{formatDate(weatherData.daily[4].dt)}</h4>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.daily[4].weather[0].icon}.png`}
              id="d1weathericon"
              alt="day 1 icon"
            />
            <p id="d1high">High: {weatherData.daily[4].temp.max}F</p>
            <p id="d1low">Low: {weatherData.daily[4].temp.min}F</p>
            <p id="d1humidity">
              Description: {weatherData.daily[4].weather[0].description}
            </p>
          </div>

          <div className="forecast-day col-xs-6 col-lg-2" id="day5">
            <h4 id="d1date">{formatDate(weatherData.daily[5].dt)}</h4>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.daily[5].weather[0].icon}.png`}
              id="d1weathericon"
              alt="day 1 icon"
            />
            <p id="d1high">High: {weatherData.daily[5].temp.max}F</p>
            <p id="d1low">Low: {weatherData.daily[5].temp.min}F</p>
            <p id="d1humidity">
              Description: {weatherData.daily[5].weather[0].description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
