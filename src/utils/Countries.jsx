// import { useEffect } from 'react';

const Holidays = require('date-holidays');

const Countries = () => {
    let fullCountries = [];

    // useEffect(() => {
    let hd = new Holidays();
    const coutries = hd.getCountries();
    for (let key in coutries) {
        fullCountries.push({ value: key, label: coutries[key] });
    }
    // }, []);

    console.log('render');
    return fullCountries;
};

export default Countries;
