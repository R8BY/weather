import React from 'react';
import '../../App.css';
import classes from "./ClearPage.module.css"
import ClearImg from "../../img/clearpage.png"

const ClearPage = () => {
    return (
        <div className={"items"}>
            <div className={classes.image}>
                <img src={ClearImg} alt="default-img"/>
            </div>
            <span>Enter a City</span>
        </div>
    );
};

export default ClearPage;