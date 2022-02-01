import React from 'react';
import {ClearPage} from "../Components/ClearPage"
import '../App.css'
import {MyButton} from "../Components/MyButton/";
import {Switch} from "../Components/Switch";
import {ModalError} from "../Components/ModalError/";


const CleanPage = ({search, modalActive, setModalActive}) => {
    return (
        <div className="items">
            <ClearPage/>
            <MyButton search={search} modalActive={modalActive} setModalActive={setModalActive}/>
            <Switch/>
            <ModalError modalActive={modalActive} setModalActive={setModalActive}
                        children={"Please , select  other  country ! Or check internet connection"}/>
            <button onClick={() => setModalActive(true)}>Help Me</button>
        </div>
    );
};

export {CleanPage};