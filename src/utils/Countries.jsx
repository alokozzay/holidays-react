import axios from 'axios';

const Countries = async () => {
    try {
        const response = await axios(
            'https://date.nager.at/api/v3/AvailableCountries'
        );
        const data = await response.data;
        return data;
    } catch (e) {
        console.log(e);
    }
};

export default Countries;
