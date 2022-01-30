import React from 'react';
import classes from './Info.module.css'
import Switch from "../Switch/Switch";
import Temperature from "./TempInfo/Temperature";
import MyButton from "../MyButton/MyButton";

const Info = ({weather, search}) => {


    return (
        <div>
            <div className={classes.preview}>
                {weather ? <span className={classes.uppercase}>{weather.name},{weather.sys.country}</span> : null}
            </div>
            {weather ?
                <Temperature status={weather.weather[0].description} lowtemp={Math.round(weather.main.temp_min)}
                             hightemp={Math.round(weather.main.temp_max)}
                             currentTemperature={Math.round(weather.main.temp)}
                             icon={weather.weather[0].icon}/>
                : null}
            <MyButton search={search} />
            <Switch/>

        </div>
    );
};

export default Info;