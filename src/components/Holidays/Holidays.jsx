import { forwardRef, useEffect } from 'react';
import ItemHolidays from '../ItemHolidays/ItemHolidays';
import style from './style.module.css';

const Holidays = ({ holidays, signalRenderer }, ref) => {
    useEffect(() => {
        // подаем сигнал что компонент зарендирился
        signalRenderer(true);
    }, []);

    return (
        <div className={style.main}>
            <h2 ref={ref} className={style.title}>
                All holidays in the country
            </h2>
            <div className={style.wrapper}>
                {holidays.map((item, index) => {
                    return <ItemHolidays key={index} data={item} />;
                })}
            </div>
        </div>
    );
};

export default forwardRef(Holidays);
