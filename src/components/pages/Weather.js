import React from "react";
import Navbar from "../Navbar";
import CurrentWeatherBox from "../CurrentWeatherBox";
import FutureWeatherForecast from "../FutureWeatherBox";

function Weather() {
  return (
    <div>
      <Navbar />
      <div className="col-9 red vh-100">
        <CurrentWeatherBox />
        <FutureWeatherForecast />
      </div>
    </div>
  );
}

export default Weather;
