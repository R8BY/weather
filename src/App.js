import React from "react";
import './App.css';
import Info from "./Components/items/Info";
import CleanPage from "./Pages/CleanPage";
import Forecast from "./Components/Forecast/Forecast";

import {
    Routes,
    Route
} from "react-router-dom";

function App(props) {

    return (
        <div className={"container"}>
            <Routes>
                <Route path="/" element={<CleanPage />}/>
                <Route path="/weather" element={<Info city={props.city} />}/>
                <Route path="/forecast" element={<Forecast />}/>
            </Routes>
        </div>
    )
}

export default App;
