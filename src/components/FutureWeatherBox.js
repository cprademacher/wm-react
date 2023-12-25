import React from "react";

export default function FutureWeatherForecast() {
  return (
    <div id="five-day-forecast">
      <div>
        <h3>Five Day Forecast:</h3>
      </div>

      <div class="forecast-days row">
        <div class="forecast-day col-xs-6 col-lg-2" id="day1">
          <h4 id="d1date">Today's Date</h4>
          <img src="" id="d1weathericon" alt="day 1 icon" />
          <p id="d1temp">Temp: </p>
          <p id="d1wind">Wind: </p>
          <p id="d1humidity">Humidity: </p>
        </div>

        <div class="forecast-day col-xs-6 col-lg-2" id="day2">
          <h4 id="d2date">Today's Date</h4>
          <img src="" id="d2weathericon" alt="day 2 icon" />
          <p id="d2temp">Temp: </p>
          <p id="d2wind">Wind: </p>
          <p id="d2humidity">Humidity: </p>
        </div>

        <div class="forecast-day col-xs-6 col-lg-2" id="day3">
          <h4 id="d3date">Today's Date</h4>
          <img src="" id="d3weathericon" alt="day 3 icon" />
          <p id="d3temp">Temp: </p>
          <p id="d3wind">Wind: </p>
          <p id="d3humidity">Humidity: </p>
        </div>

        <div class="forecast-day col-xs-6 col-lg-2" id="day4">
          <h4 id="d4date">Today's Date</h4>
          <img src="" id="d4weathericon" alt="day 4 icon" />
          <p id="d4temp">Temp: </p>
          <p id="d4wind">Wind: </p>
          <p id="d4humidity">Humidity: </p>
        </div>

        <div class="forecast-day col-xs-6 col-lg-2" id="day5">
          <h4 id="d5date">Today's Date</h4>
          <img src="" id="d5weathericon" alt="day 5 icon" />
          <p id="d5temp">Temp: </p>
          <p id="d5wind">Wind: </p>
          <p id="d5humidity">Humidity: </p>
        </div>
      </div>
    </div>
  );
}
