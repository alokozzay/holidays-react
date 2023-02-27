import { useEffect } from 'react';

const Years = (value) => {
    let today = new Date();
    let year = today.getFullYear();

    let fullYears = [];

    useEffect(() => {
        console.log('dfgdfg');
        for (value; value <= year; value++) {
            fullYears.push({ value: value, label: value });
        }
    }, []);

    return fullYears;
};

export default Years;
