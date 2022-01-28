import React, {useState} from 'react';
import '../../App.css';
import {fetchWeather} from "../../api/fetchWeather"

const Forecast = () => {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState(null);

    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = await fetchWeather(query);
            setWeather(data);
            setQuery('');
            console.log(weather)
        }
    }
    return (
            <div>
                <h1>Weather info</h1>
                <input
                    type="text"
                    className="search"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={search}/>

                {weather ? <span>{weather.main.temp}</span> : null}
            </div>
    );
};

export default Forecast;