import React, {useState} from 'react';
import Header from "../Components/Header/Header"
import ClearPage from "../Components/ClearPage/ClearPage"
import '../App.css'
import MyButton from "../Components/MyButton/MyButton";
import Switch from "../Components/Switch/Switch";
import {fetchWeather} from "../api/fetchWeather";

const CleanPage = () => {
    return (
        <div className={"container"}>
            <div className={"items"}>
                <Header />
                <ClearPage />
                <MyButton link={"/weather"} />
                <Switch/>
            </div>
        </div>
    );
};

export default CleanPage;