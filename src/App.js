import React, {useState} from "react";
import './App.css';
import Info from "./Components/items/Info";
import CleanPage from "./Pages/CleanPage";
import Forecast from "./Components/Forecast/Forecast";
import Header from "./Components/Header/Header";
import {
    Routes,
    Route,
} from "react-router-dom";


function App(props) {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState(null);
    return (
        <div className={"container"}>
            <div className={"items"}>
                <Routes>
                    <Route path={"/"} element={<Header setQuery={setQuery} setWeather={setWeather} query={query}
                                                       weather={weather}/>}>
                        <Route index element={<CleanPage/>}/>
                        <Route path="weather" element={<Info/>}/>
                        <Route path="forecast" element={<Forecast/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default App;
