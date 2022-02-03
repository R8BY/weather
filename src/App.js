import React, {useState} from "react";
import './App.css';
import {Info} from "./Components/items/";
import {CleanPage} from "./Pages/CleanPage";
import {Header} from "./Components/Header/";
import {
    Routes,
    Route,
} from "react-router-dom";
import {fetchWeather} from "./api/fetchWeather";

function App() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState(null);
    const [modalActive, setModalActive] = useState(false);

    const search = () => {
        const successRequest = (r) => {
            setWeather(r);
            setQuery('');
            console.log(r);
        }
        const modalOpen = () => {
            setModalActive(true)
            console.clear();
            console.log('Bad request, change country or check your internet connection!');
        }
        fetchWeather(query).then(r => successRequest(r)).catch(modalOpen);
    }

    return (
        <div className={"container"}>
            <div className={"items"}>
                <Routes>
                    <Route path={"/"} element={<Header setQuery={setQuery}/>}>
                        <Route index element={<CleanPage search={search} modalActive={modalActive}
                                                         setModalActive={setModalActive}/>}/>
                        <Route path="weather"
                               element={<Info weather={weather} search={search} modalActive={modalActive}
                                              setModalActive={setModalActive}/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default App;