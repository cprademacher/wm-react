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
          <h3>
            <span id="city">{selectedMountain.name} Weather</span>{" "}
            {/* You can use the weatherData to display relevant information */}
          </h3>
          <p id="todays-temp">Temp: {weatherData.current.temp} F</p>
          <p id="todays-wind">Wind: {weatherData.current.wind_speed} MPH</p>
          <p id="todays-humidity">Humidity: {weatherData.current.humidity}%</p>
        </>
      )}
    </div>
  );
}
