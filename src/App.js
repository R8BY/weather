import React, {useEffect, useState} from "react";
import './App.css';

import {fetchWeather} from "./api/fetchWeather";

function App() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState(null);
    const search = async () => {
            const data = await fetchWeather(query);
            setWeather(data);
            setQuery('');
    }

    return (
        <div className={"container"}>

        </div>
    )
}

export default App;