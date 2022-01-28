import React from "react";
import './App.css';
import Info from "./Components/items/Info";
import CleanPage from "./Pages/CleanPage";
import Forecast from "./Components/Forecast/Forecast";

import {
    Routes,
    Route
} from "react-router-dom";

function App() {

    return (
        <div className={"container"}>
            <Routes>
                <Route path="/" element={<CleanPage/>}/>
                <Route path="/weather" element={<Info Country={"Belarus"} City={"Gomel"}/>}/>
                <Route path="/forecast" element={<Forecast />}/>
            </Routes>
        </div>
    )
}

export default App;
