import { useState } from 'react';
import Select from 'react-select';
import fullYears from '../../utils/Years';
import Countries from '../../utils/Countries';

const Form = ({ submitSearch }) => {
    const [countries, setСountries] = useState([
        { value: 'chocolate', label: 'ffChocodfgdflate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ]);

    const [location, setLocation] = useState('');
    const [year, setYear] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(Countries());
        // проверка
        submitSearch(location);
    };

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
                options={fullYears(1990)}
                onChange={(e) => setYear(e.value)}
            ></Select>

            <button type='submit' onClick={onSubmit}>
                submit
            </button>
        </form>
    );
};

export default Form;
