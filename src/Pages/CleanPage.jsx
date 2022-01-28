import React, {useState} from 'react';
import Header from "../Components/Header/Header"
import ClearPage from "../Components/ClearPage/ClearPage"
import '../App.css'
import MyButton from "../Components/MyButton/MyButton";
import Switch from "../Components/Switch/Switch";


const CleanPage = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState(null);
    return (
        <div className={"container"}>
            <div className={"items"}>
                <Header setQuery={setQuery} setWeather={setWeather} query={query}/>
                <ClearPage />
                <MyButton link={"/weather"}/>
                <Switch/>
            </div>
        </div>
    );
};

export default CleanPage;