import style from './style.module.css';

const ItemHolidays = ({ data }) => {
    let date = data.date;

    let parts = date.split('-');
    let year = parts[0];
    let month = parts[1];
    let day = parts[2];

    let fullDate = new Date(year, month - 1, day);
    let options = { day: 'numeric', month: 'long', year: 'numeric' };
    let formattedDate = fullDate.toLocaleDateString('en-US', options);

    return (
        <div className={style.card_wrapper}>
            <p className={style.title}>
                <span className={style.code_location}>{data.countryCode}</span>
                {data.localName}
            </p>
            <p className={style.name}>{data.name}</p>
            <p className={style.date}>Сelebrated: {formattedDate}</p>
            <p className={style.type}>Type: {data.types[0]}</p>
        </div>
    );
};

export default ItemHolidays;
