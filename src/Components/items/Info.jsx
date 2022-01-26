import React from 'react';
import classes from './Info.module.css'
import ava from "../../img/1.png"
import Header from "../Header/Header"
import Switch from "../Switch/Switch";
import Temperature from "./TempInfo/Temperature";

const Info = (props) => {
    return (
        <section className={"container"}>
            <div className={classes.items}>
                <Header/>
                <div className={classes.preview}>
                    <span className={classes.uppercase}>{props.City},{props.Country}</span>
                </div>
                <Temperature status="Clearly" lowtemp = "20" hightemp="42" currentTemperature="32"/>
                <button className={classes.confirm}>Enter</button>
                {/*<Switch/>*/}
            </div>
        </section>

    );
};

export default Info;