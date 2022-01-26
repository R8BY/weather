import classes from "./Switch.module.css"

const Switch = () => {
    return (
        <div className={classes.checkbox_container}>
            <input id="cb1" type="checkbox"/>
            <label For="cb1 ">Mode</label>
        </div>
    );
};

export default Switch;