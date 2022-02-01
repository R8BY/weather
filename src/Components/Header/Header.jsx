import React from 'react';
import classes from './Header.module.css'
import "../../App.css"
import {Outlet} from "react-router-dom";

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

export {Header};
