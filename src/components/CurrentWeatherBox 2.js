import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getWeather } from "../utils/API";
import { mountains } from "../data/mountains";

export default function CurrentWeatherBox() {
  const [weatherData, setWeatherData] = useState(null);
  const { mountainName } = useParams();

  useEffect(() => {
    // Find the selected mountain based on the URL parameter
    const selectedMountain = mountains.find(
      (mountain) => mountain.id === mountainName
    );

    if (selectedMountain) {
      // Make the API call using the correct structure
      getWeather(selectedMountain.lat, selectedMountain.long)
        .then((response) => setWeatherData(response.data))
        .catch((error) => console.error(error));
    }
  }, [mountainName]); // The effect will re-run whenever the URL parameter changes

  console.log(weatherData);

  return (
    <div className="container" id="current-weather">
      {weatherData && (
        <>
          <h3>
            <span id="city">{mountainName} Hello</span>{" "}
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
