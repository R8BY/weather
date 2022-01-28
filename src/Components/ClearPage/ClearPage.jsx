import React from 'react';
import '../../App.css';
import classes from "./ClearPage.module.css"
import ClearImg from "../../img/clearpage.png"
import MyButton from "../MyButton/MyButton";
import Switch from "../Switch/Switch"

const ClearPage = (props) => {
    return (
        <div className={"items"}>
            <div className={classes.image}>
                <img src={ClearImg} alt="default-img"/>
            </div>
            <span>Enter a ZipCode</span>
        </div>
    );
};

export default ClearPage;