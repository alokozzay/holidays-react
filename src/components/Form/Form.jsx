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
    const [title, setTitle] = useState(
        'To display all holidays, enter your country, as well as the year you need.'
    );

    // при нажатие на кнопку, отправляем данные на для дольнейших получений праздников
    const onSubmit = (e) => {
        e.preventDefault();
        if (year && location) {
            submitSearch(location, year);
        } else setTitle('You did not enter a country or year.');
    };

    useEffect(() => {
        try {
            // реализация функции для получение список стран и годов, затем заносим в state.
            const fetchData = async (setCountries, setYears) => {
                let fullCountries = [];
                const resultCountries = await Countries();

                // проходим по массиву стран, и переделываем под Select в новый массив.
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

            // вызываем функцию для получение стран и годов.
            fetchData(setCountries, setYears);
            console.log('work effect to form');
        } catch {
            console.log('error in useEffect');
        }
    }, []);

    return (
        <form onSubmit={onSubmit}>
            <p className={style.main_text}>{title}</p>

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

            <div type='Submit' onClick={onSubmit} className={style.btn}>
                submit
            </div>
        </form>
    );
};

export default Form;
