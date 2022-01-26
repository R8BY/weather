import classes from "./Switch.module.css"

const Switch = () => {
    return (
        <div>
            <input id="s1" type="checkbox" className={classes.input}/>
                <label htmlFor="s1">Mode</label>
        </div>
    );
};

export default Switch;