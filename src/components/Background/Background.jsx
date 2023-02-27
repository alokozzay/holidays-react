import style from './style.module.css';

const Background = () => {
    return (
        <div className={style.background_animation}>
            <div className={style.ball_one}></div>
            <div className={style.ball_two}></div>
            <div className={style.ball_three}></div>
        </div>
    );
};

export default Background;
