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
                <span className={style.local_name}>{data.localName}</span>
            </p>
            <p className={style.name}>
                <strong>English name: </strong>
                {data.name}
            </p>
            <p className={style.date}>
                {' '}
                <strong>Сelebrated: </strong>
                {formattedDate}
            </p>
            <p className={style.type}>
                <strong>Type: </strong> {data.types[0]}
            </p>
        </div>
    );
};

export default ItemHolidays;
