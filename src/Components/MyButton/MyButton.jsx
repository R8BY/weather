import classes from "./MyButton.module.css";
import {Link} from 'react-router-dom';

const MyButton = ({search, msg}) => {
    return (
        <div>
            <button className={classes.confirm} onClick={() => search(msg)}><Link to="/weather">Enter</Link></button>
        </div>
    );
};

export default MyButton;