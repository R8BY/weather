import classes from "./Switch.module.css"

const Switch = () => {
    return (
        <div className={classes.checkbox_container}>
            <input id="cb1" name="checkbox" type="checkbox" value="value"/>
            <label htmlFor="cb1">Change Theme</label>
        </div>
    );
};

export default Switch;