import classes from './Header.module.css'
// import React from "react";
import {fetchWeather} from "../../api/fetchWeather";
import "../../App.css"

const Header = ({setWeather, setQuery, query}) => {

    const search = async (e) => {
        console.clear();
        if (e.key === 'Enter') {
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