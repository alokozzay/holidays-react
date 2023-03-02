import { useState } from 'react';
import axios from 'axios';

const useHolidays = () => {
    const [isError, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [holidays, setHolidays] = useState(null);

    const BASE_URL = 'https://date.nager.at/api/v3/PublicHolidays';

    const submitRequest = async (location, year) => {
        // включаем лоадер до запроса
        setLoading(true);

        // делаем запрос на сервер, после чего вытаскиваем массив в переменную data
        const response = await axios(`${BASE_URL}/${year}/${location}`);
        const data = await response.data;

        // проверяем на ошибки, если имеются, отключаем лоадер и выводим ошибку
        if (!data) {
            setLoading(false);
            setError(response.title);
            return;
        }

        // заносим в стейт наши данные и отключаем
        setHolidays(data);
        setLoading(false);
    };

    return { isError, isLoading, holidays, submitRequest };
};

export default useHolidays;
