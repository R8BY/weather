import React from 'react';
import ClearPage from "../Components/ClearPage/ClearPage"
import '../App.css'
import MyButton from "../Components/MyButton/MyButton";
import Switch from "../Components/Switch/Switch";
import ModalError from "../Components/ModalError/ModalError";


const CleanPage = ({search, modalActive ,setModalActive}) => {
    return (
        <div className="items">
            <ClearPage/>
            <MyButton search={search} modalActive={modalActive} setModalActive={setModalActive}/>
            <Switch/>
            <ModalError modalActive={modalActive} setModalActive={setModalActive} children={"Please select other country!"}/>
            <button onClick={() => setModalActive(true)}>Help Me</button>
        </div>
    );
};

export default CleanPage;