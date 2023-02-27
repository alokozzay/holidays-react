import { Fragment } from 'react';
// import Background from '../../components/Background/Background';
// import style from './style.module.css';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import Error from '../../components/Error/Error';
import Loader from '../../components/Loader/Loader';
import Holidays from '../../components/Holidays/Holidays';

import useHolidays from '../../hooks/useHolidays';

const Home = () => {
    const { isError, isLoading, holidays, submitRequest } = useHolidays();

    const submitSearch = (value) => {
        submitRequest(value);
    };

    return (
        <Fragment>
            <Header></Header>

            {!isLoading && <Form submitSearch={submitSearch} />}

            {isError && <Error message={isError} />}
            {isLoading && <Loader></Loader>}
            {holidays && <Holidays></Holidays>}
        </Fragment>
    );
};

export default Home;
