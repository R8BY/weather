import React, {useEffect, useState} from 'react';
import classes from './Header.module.css'
import {fetchWeather} from "../../api/fetchWeather";
import "../../App.css"
import { Outlet } from "react-router-dom";

const Header = ({setQuery}) => {

    return (
        <header className={classes.header}>
            <input
                type="text"
                id="zip"
                className="search"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
            />

            <Outlet/>
        </header>
    );

}

export default Header;
