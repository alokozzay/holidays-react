import { Link } from 'react-router-dom';
import { WavyLink } from 'react-wavy-transitions';
import style from './style.module.css';

const Header = () => {
    return (
        <div className={style.header}>
            <p className={style.logo}>Holiday</p>
            <nav>
                <ul className={style.nav}>
                    <WavyLink
                        color='#ffffff'
                        duration={2000}
                        direction='up'
                        to='/'
                    >
                        <li className={style.nav_item}>Home</li>
                    </WavyLink>
                    <WavyLink color='#ffffff' duration={2000} to='/contacts'>
                        <li className={style.nav_item}>Contacts</li>
                    </WavyLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
