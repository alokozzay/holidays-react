import { Fragment } from 'react';
import CardContacs from '../../components/CardContacts/CardContacts';
import Header from '../../components/Header/Header';
import style from './style.module.css';

const Contacts = () => {
    return (
        <Fragment>
            <div className={style.main}>
                <Header />
                <div className={style.title}>
                    This site is made for educational purposes.
                </div>
                <CardContacs />
            </div>
        </Fragment>
    );
};

export default Contacts;
