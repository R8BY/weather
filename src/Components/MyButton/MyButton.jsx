import classes from "./MyButton.module.css";
import {Link} from 'react-router-dom';

const MyButton = ({search, modalActive, setModalActive}) => {
    const handleClick = () => {
        try{
            console.clear();
            search();
        }
        catch (error){
            const MyError = new Error('Please select other country!');
            console.log(MyError.message);
        }
    }
    return (
        <div>
            <button className={classes.confirm} onClick={handleClick}><Link to={'/weather'}>Enter</Link></button>
        </div>
    );
};
//{() => setModalActive(true)}

export default MyButton;