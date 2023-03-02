import { Link } from 'react-router-dom';
import style from './style.module.css';

const Header = () => {
    return (
        <div className={style.header}>
            <p className={style.logo}>Holiday</p>
            <nav>
                <ul className={style.nav}>
                    <Link to='/'>
                        <li className={style.nav_item}>Home</li>
                    </Link>
                    <Link to='contacts'>
                        <li className={style.nav_item}>Contacts</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
