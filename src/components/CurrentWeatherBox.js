import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getWeather } from "../api/weather";
import mountains from "../db/mountains.json";
import "./CurrentWeatherBox.css";

export default function CurrentWeatherBox() {
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

  return (
    <div className="container" id="current-weather">
      {weatherData && selectedMountain && (
        <>
          <div className="whole">
            <div className="left">
              <div id="current-weather-header">
                <h3>
                  <span id="city">{selectedMountain.name}</span>{" "}
                  {/* You can use the weatherData to display relevant information */}
                </h3>
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.daily[0].weather[0].icon}.png`}
                  id="todayWeatherIcon"
                  alt="today's weather icon"
                />
              </div>
              <div id="current-weather-info">
                <p>Current Temp: {weatherData.current.temp} F</p>
                <p id="todays-high">High: {weatherData.daily[0].temp.max} F</p>
                <p id="todays-low">Low: {weatherData.daily[0].temp.min} F</p>
                <p id="todays-description">
                  Conditions: {weatherData.daily[0].weather[0].description}
                </p>
              </div>
            </div>
            <div className="right">
              <h3>Mountain Description</h3>
              <p className="mountain-description">
                {selectedMountain.description}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
