import React from 'react';
import classes from './Info.module.css'
import {Switch} from "../Switch/";
import {Temperature} from "./TempInfo/";
import {MyButton} from "../MyButton/";
import {ModalError} from "../ModalError/";

const Info = ({weather, search, modalActive, setModalActive}) => {
    return (
        <div>
            <div className={classes.preview}>
                {weather ? <span className={classes.uppercase}>{weather.name},{weather.sys.country}</span> : null}
            </div>
            {weather ?
                <Temperature status={weather.weather[0].description} lowtemp={Math.round(weather.main.temp_min)}
                             hightemp={Math.round(weather.main.temp_max)}
                             currentTemperature={Math.round(weather.main.temp)}
                             wind={weather.wind.speed}
                             feels={weather.main.feels_like}
                             icon={weather.weather[0].icon}/>
                : null}
            <MyButton search={search} modalActive={modalActive} setModalActive={setModalActive}/>
            <ModalError modalActive={modalActive} setModalActive={setModalActive}
                        children={"Please change your country or check your internet connection!"}/>
            <Switch/>

        </div>
    );
};

export {Info};