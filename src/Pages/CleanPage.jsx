import React, {useState} from 'react';
import ClearPage from "../Components/ClearPage/ClearPage"
import '../App.css'
import MyButton from "../Components/MyButton/MyButton";
import Switch from "../Components/Switch/Switch";
import ModalError from "../Components/ModalError/ModalError";


const CleanPage = ({search}) => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className="items">
            <ModalError active={modalActive} setActive={setModalActive} children={"Please select other country!"}/>
            <ClearPage/>
            <MyButton link={"/weather"} search={search} />
            <Switch/>
            <button onClick={() => setModalActive(true)}>Help Me</button>
        </div>
    );
};

export default CleanPage;