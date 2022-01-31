import React, { useState } from "react";
import './App.css';
import Info from "./Components/items/Info";
import CleanPage from "./Pages/CleanPage";
import Header from "./Components/Header/Header";
import {
    Routes,
    Route,
} from "react-router-dom";
import {fetchWeather} from "./api/fetchWeather";

function App() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState(null);
    const helpornot = false;
    const search = async () => {
        try {
            console.clear();
            const data = await fetchWeather(query);
            setWeather(data);
            setQuery('');
        }
        catch (err){
            console.clear();
            const MyError = new Error('Please select other country!');
            console.log(MyError.message);
            }
        }
    return (
        <div className={"container"}>
            <div className={"items"}>
                <Routes>
                    <Route path={"/"} element={<Header setQuery={setQuery}/>}>
                        <Route index element={<CleanPage search={search}/>}/>
                        <Route path="weather" element={<Info weather={weather} search={search}/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default App;