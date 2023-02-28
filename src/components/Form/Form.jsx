import { useEffect, useState } from 'react';
import Select from 'react-select';
import Years from '../../utils/Years';
import Countries from '../../utils/Countries';
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

    // console.log(countries);

    return (
        <form onSubmit={onSubmit}>
            <p>
                To display all holidays, enter your country, as well as the year
                you need.
            </p>

            <Select
                className='select-form'
                isClearable={true}
                isSearchable={true}
                options={countries}
                onChange={(e) => setLocation(e.value)}
            ></Select>

            <Select
                className='select-form'
                isClearable={true}
                isSearchable={true}
                options={years}
                onChange={(e) => setYear(e.value)}
            ></Select>

            <button type='submit' onClick={onSubmit}>
                submit
            </button>
        </form>
    );
};

export default Form;
