import classes from './Header.module.css'

const Header = (props) => {
    return (
        <header className={classes.header}>
            <input type="text" id="zip" maxlength="5" placeholder="ZipCode"/>
        </header>
    );
}

export default Header;