import React, {useState} from 'react';
import classes from './Info.module.css'
import Switch from "../Switch/Switch";
import Temperature from "./TempInfo/Temperature";
import MyButton from "../MyButton/MyButton";
import Header from "../Header/Header"
import Forecast from "../Forecast/Forecast"
import {fetchWeather} from "../../api/fetchWeather";
// import { Header } from "../Header";


const Info = (props) => {
    return (
        <section className={"container"}>
            <div className={classes.items}>
                <Header/>
                <div className={classes.preview}>
                    <span className={classes.uppercase}>{props.City},{props.Country}</span>
                </div>
                <Temperature status="Clearly" lowtemp = "20" hightemp="42" currentTemperature="32"/>
                {/*<Forecast/>*/}
                {/*<button className={classes.confirm}>Enter</button>*/}
                <MyButton/>
                <Switch/>
            </div>
        </section>
    );
};

export default Info;