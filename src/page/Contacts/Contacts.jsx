import { Fragment } from 'react';
import Background from '../../components/Background/Background';
import CardContacs from '../../components/CardContacts/CardContacts';
import Header from '../../components/Header/Header';
import style from './style.module.css';

const Contacts = () => {
  return (
    <Fragment>
      <Background />
      <div className={style.main}>
        <Header />
        <div className={style.title}>
          This site is made for educational purposes.
        </div>
        <div className={style.sub_title}>Learn more about the developers.</div>
        <div className={style.scroll_arrow}>
          <span></span>
          <span></span>
        </div>
      </div>
      <CardContacs />
    </Fragment>
  );
};

export default Contacts;
