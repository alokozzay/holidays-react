import { useState } from 'react';

const useHolidays = () => {
    const [isError, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [holidays, setHolidays] = useState(false);

    const submitRequest = (value) => {
        // console.log(value);
    };

    return { isError, isLoading, holidays, submitRequest };
};

export default useHolidays;