import React, {useEffect} from 'react';
import classes from "./MyButton.module.css";
import Forecast from "../Forecast/Forecast"
import axios from "axios";

const MyButton = (props) => {

    return (
        <div>
            <button className={classes.confirm}><a href={props.link}>Enter</a></button>
        </div>
    );
};

export default MyButton;