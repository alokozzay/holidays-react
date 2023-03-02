import { Fragment, useRef, useState } from 'react';
import style from './style.module.css';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import Error from '../../components/Error/Error';
import Holidays from '../../components/Holidays/Holidays';

import useHolidays from '../../hooks/useHolidays';
import Background from '../../components/Background/Background';

const Home = () => {
    const [isSignal, setSignal] = useState(false);
    const { isError, isLoading, holidays, submitRequest } = useHolidays();
    const ref = useRef('reff');

    // посылаем сигнал, если возвращает true, значит Holidays зарендирился, и можно скроллить.
    const signalRenderer = (value) => {
        setSignal(value);
    };

    // отправляем данные пользователя для получение праздников
    const submitSearch = (location, year) => {
        submitRequest(location, year);
    };

    return (
        <Fragment>
            {isSignal &&
                ref.current.scrollIntoView({
                    behavior: 'smooth',
                })}
            <Background />
            <div className={style.main}>
                <Header></Header>
                <Form submitSearch={submitSearch} />
            </div>
            {isError && <Error message={isError} />}
            {holidays && (
                <Holidays
                    holidays={holidays}
                    ref={ref}
                    signalRenderer={signalRenderer}
                />
            )}
        </Fragment>
    );
};

export default Home;
