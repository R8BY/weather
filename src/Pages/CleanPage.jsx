import React from 'react';
import '../App.css'
import {ClearPage} from "../Components/ClearPage"
import {MyButton} from "../Components/MyButton/";

const CleanPage = ({search, modalActive, setModalActive}) => {
    return (
        <div className="items">
            <ClearPage/>
            <MyButton search={search} modalActive={modalActive} setModalActive={setModalActive}/>
        </div>
    );
};

export {CleanPage};