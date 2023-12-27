import axios from "axios";

const apiKey = "484da9db5d4a9dce2a111a2bc5be9943";

export const getWeather = (lat, long) =>
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly&cnt=6&appid=${apiKey}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      // Handle errors here
      console.error("Error fetching weather data:", error);
      throw error;
    });
