import React from 'react';
import ClearPage from "../Components/ClearPage/ClearPage"
import '../App.css'
import MyButton from "../Components/MyButton/MyButton";
import Switch from "../Components/Switch/Switch";



const CleanPage = ({search}) => {
    return (
        <div className="items">
            <ClearPage/>
            <MyButton link={"/weather"} search={search} />
            <Switch/>
        </div>
    );
};

export default CleanPage;
