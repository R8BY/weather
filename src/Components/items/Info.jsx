import React, {useState} from 'react';
import classes from './Info.module.css'
import Switch from "../Switch/Switch";
import Temperature from "./TempInfo/Temperature";
import MyButton from "../MyButton/MyButton";
import Header from "../Header/Header"

const Info = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState(null);

    console.log(weather);

    return (
        <div>
            <Header setQuery={setQuery} setWeather={setWeather} query={query}/>
            <div className={classes.preview}>
                {weather ? <span className={classes.uppercase}>{weather.name},{weather.sys.country}</span> : null}
            </div>
            {weather ? <Temperature status={weather.weather[0].description} lowtemp={Math.round(weather.main.temp_min)}
                                    hightemp={Math.round(weather.main.temp_max)}
                                    currentTemperature={Math.round(weather.main.temp)}
                                    icon={weather.weather[0].icon}/> : null}
            <MyButton/>
            <Switch/>
        </div>
    );
};

export default Info;