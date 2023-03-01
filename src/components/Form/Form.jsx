import { useEffect, useState } from 'react';
import Select from 'react-select';
import Years from '../../utils/Years';
import Countries from '../../utils/Countries';
import style from './style.module.css';

const Form = ({ submitSearch }) => {
    const [location, setLocation] = useState('');
    const [year, setYear] = useState('');
    const [countries, setCountries] = useState();
    const [years, setYears] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        if (year && location) submitSearch(year);
        else console.log('pusto');
    };

    useEffect(() => {
        try {
            const fetchData = async (setCountries, setYears) => {
                let fullCountries = [];
                const resultCountries = await Countries();
                resultCountries.forEach((elem) => {
                    fullCountries.push({
                        value: elem.countryCode,
                        label: elem.name,
                    });
                });
                await setCountries(fullCountries);

                const resultYears = Years(1990);
                setYears(resultYears);
            };

            fetchData(setCountries, setYears);
            console.log('work effect to form');
        } catch {
            console.log('error in useEffect');
        }
    }, []);

    return (
        <form onSubmit={onSubmit}>
            <p className={style.main_text}>
                To display all holidays, enter your country, as well as the year
                you need.
            </p>

            <Select
                className={style.input_select}
                options={countries}
                placeholder='Enter country...'
                onChange={(e) => setLocation(e.value)}
            ></Select>

            <Select
                className={style.input_select}
                options={years}
                placeholder='Enter year...'
                onChange={(e) => setYear(e.value)}
            ></Select>

            <div type='submit' onClick={onSubmit} className={style.btn}>
                submit
            </div>
        </form>
    );
};

export default Form;
