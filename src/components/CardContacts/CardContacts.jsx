import style from './style.module.css';

const CardContacs = () => {
    return (
        <div className={style.main}>
            <h2 className={style.title}>Contacts</h2>
            <div className={style.wrapper}>
                <div className={style.card}>
                    <div className={style.card_box}>
                        <p className={style.dev}>Developer: </p>
                        <p className={style.name}>
                            <strong>
                                Mykyta <br className={style.br} /> Kornev
                            </strong>
                        </p>
                    </div>
                    <div className={style.card_box}>
                        <p>
                            <strong>Speciality: </strong>
                            FullStack dev.
                        </p>
                    </div>
                    <div className={style.social_icons}>
                        <a href='https://github.com/alokozzay' title='GitHub'>
                            <i
                                class='fa fa-github-square'
                                aria-hidden='true'
                            ></i>
                        </a>
                        <a
                            href='https://www.instagram.com/alokozzay/'
                            title='Instagram'
                        >
                            <i class='fa fa-instagram' aria-hidden='true'></i>
                        </a>
                        <a href='#' title='linkedin'>
                            <i
                                class='fa fa-linkedin-square'
                                aria-hidden='true'
                            ></i>
                        </a>
                        <a href='https://t.me/nabilllat' title='Telegram'>
                            <i class='fa fa-telegram' aria-hidden='true'></i>
                        </a>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.card_box}>
                        <p className={style.dev}>Developer: </p>
                        <p className={style.name}>
                            <strong>
                                {' '}
                                Andrii <br className={style.br} /> Mierlinov
                            </strong>
                        </p>
                    </div>
                    <div className={style.card_box}>
                        <p>
                            <strong>Speciality: </strong>
                            Frontend dev.
                        </p>
                    </div>
                    <div className={style.social_icons}>
                        <a href='https://github.com/merlinovvv' title='GitHub'>
                            <i
                                class='fa fa-github-square'
                                aria-hidden='true'
                            ></i>
                        </a>
                        <a
                            href='https://www.instagram.com/merllinovvv/'
                            title='Instagram'
                        >
                            <i class='fa fa-instagram' aria-hidden='true'></i>
                        </a>
                        <a href='#' title='linkedin'>
                            <i
                                class='fa fa-linkedin-square'
                                aria-hidden='true'
                            ></i>
                        </a>
                        <a href='https://t.me/merlinovv' title='Telegram'>
                            <i class='fa fa-telegram' aria-hidden='true'></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardContacs;
