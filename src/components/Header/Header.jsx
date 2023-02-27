import style from './style.module.css';

const Header = () => {
    return (
        <div className={style.header}>
            <p className={style.logo}>Holiday</p>
            <nav>
                <ul className={style.nav}>
                    <li className={style.nav_item}>Home</li>
                    <li className={style.nav_item}>One Day</li>
                    <li className={style.nav_item}>Contacts</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
