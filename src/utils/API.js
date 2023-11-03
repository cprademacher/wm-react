import axios from "axios";

const apiKey = "484da9db5d4a9dce2a111a2bc5be9943";
const country = "US";

const getWeatherByCity = (paramName) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=chicago,${country}&appid=${apiKey}&units=imperial`
  );

const getForecastByCity = (paramName) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=chicago,${country}&appid=${apiKey}&units=imperial`
  );

export default {
  getWeatherByCity,
  getForecastByCity,
};
