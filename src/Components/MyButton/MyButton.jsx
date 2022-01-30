import classes from "./MyButton.module.css";
import {Link} from 'react-router-dom';

const MyButton = ({search}) => {
    const handleClick = () => {
        console.log('handle click')
        search()
    }
    return (
        <div>
            <button className={classes.confirm} onClick={handleClick}><Link to="/weather">Enter</Link></button>
        </div>
    );
};

export default MyButton;