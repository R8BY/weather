import classes from './Header.module.css'
import React, {useState} from "react";
import {fetchWeather} from "../../api/fetchWeather";

const Header = ({setWeather, setQuery, query, props}) => {

    const search = async (e) => {
        if (e.key == 'Enter') {
            const data = await fetchWeather(query);
            setWeather(data);
            setQuery('');
            console.log(data);
        }
    }
    return (

        <header className={classes.header}>
            <input
                type="text"
                id="zip"
                className="search"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                onKeyPress={search}
                />
        </header>
    );
}

export default Header;