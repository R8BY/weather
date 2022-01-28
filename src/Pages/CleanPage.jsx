import React from 'react';
import Header from "../Components/Header/Header"
import ClearPage from "../Components/ClearPage/ClearPage"
import '../App.css'

const CleanPage = () => {
    return (
        <div className={"container"}>
            <div className={"items"}>
                <Header />
                <ClearPage />
            </div>
        </div>
    );
};

export default CleanPage;