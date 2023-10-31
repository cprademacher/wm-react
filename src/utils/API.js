import axios from "axios";

const apiKey = "484da9db5d4a9dce2a111a2bc5be9943";
const country = "US";

const getWeatherByCity = () =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${paramId},${country}&appid=${apiKey}&units=imperial`
  );

const getForecastByCity = () =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${paramId},${country}&appid=${apiKey}&units=imperial`
  );

export default {
  getWeatherByCity,
  getForecastByCity,
};
