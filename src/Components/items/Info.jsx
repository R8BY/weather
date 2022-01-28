import React, {useState} from 'react';
import classes from './Info.module.css'
import Switch from "../Switch/Switch";
import Temperature from "./TempInfo/Temperature";
import MyButton from "../MyButton/MyButton";
import Header from "../Header/Header"
import {fetchWeather, forecast} from "../../api/fetchWeather";

const Info = (props) => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState(null);

    console.log(weather);

    return (
        <section className={"container"}>
            <div className={classes.items}>
                <Header setQuery={setQuery} setWeather={setWeather} query={query}/>
                <div className={classes.preview}>
                    {weather ? <span className={classes.uppercase}>{weather.name},{weather.sys.country}</span>: null}
                </div>
                {weather ? <Temperature status={weather.weather[0].description} lowtemp={Math.round(weather.main.temp_min)} hightemp={Math.round(weather.main.temp_max)} currentTemperature={Math.round(weather.main.temp)}/> : null}
                <MyButton/>
                <Switch/>
            </div>
        </section>
    );
};

export default Info;