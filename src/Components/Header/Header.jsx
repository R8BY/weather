import classes from './Header.module.css'

const Header = (props) => {
    return (
        <header className={classes.header}>
            <input type="text" id="zip" className={classes.input}/>
        </header>
    );
}

export default Header;