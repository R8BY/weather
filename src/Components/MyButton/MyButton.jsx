import classes from "./MyButton.module.css";
import { Link } from 'react-router-dom';

const MyButton = () => {

    return (
        <div>
            <button className={classes.confirm}><Link to="/weather">Enter</Link></button>
        </div>
    );
};

export default MyButton;