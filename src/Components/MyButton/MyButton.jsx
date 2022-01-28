import React from 'react';
import classes from "./MyButton.module.css";
import Forecast from "../Forecast/Forecast"

const MyButton = (props) => {
    return (
        <div>
            <button className={classes.confirm} onClick={Forecast}><a href={props.link}>Enter</a></button>
        </div>
    );
};

export default MyButton;