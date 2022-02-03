import axios from "axios";

const API_key = "4f06dc23d84f10a7515fd641c25cbca3";
const URL = "https://api.openweathermap.org/data/2.5/weather";
export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: "metric",
            APPID: API_key,
        }
    });

    return data;
}