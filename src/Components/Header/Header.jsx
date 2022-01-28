import classes from './Header.module.css'

const Header = (props) => {
    return (
        <header className={classes.header}>
            <input type="number" id="zip" onInput={(e) => e.target.value = e.target.value.slice(0, 5)} placeholder="ZipCode"/>
        </header>
    );
}

export default Header;