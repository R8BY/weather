import React from 'react';
import classes from "./Temperature.module.css"

const Temperature = (props) => {
    return (
        <div>
            <div className={classes.item}>
                <div>
                    <img src={`http://openweathermap.org/img/w/${props.icon}.png`} className={classes.weather_icon} alt={"weather_icon"}/>
                </div>
                <span className={classes.temperature}>{props.currentTemperature}℃</span>
            </div>

            <div className={classes.weather_info}>
                <span>{props.status}</span>
                <p>Low: {props.lowtemp}℃ / High: {props.hightemp}℃</p>
            </div>
        </div>
    );
};

export default Temperature;