import styles from './StartIphone.module.sass'

import { Link, useLocation } from 'react-router-dom'
import Icon from "../../assets/imgs/click.svg?react"
import { useEffect } from 'react';

export default function StartIphone() {

    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        let clickId = params.get('click_id') || '11111111';
        if (!clickId || clickId === '') {
            clickId = '11111111';
        }
        localStorage.setItem('click_id', clickId);
    }, [location]);

    return (
        <>
            <div className={styles.start}>
                <div className={styles.start__container}>
                    <div className={styles.start__block}/>
                    <div className={styles.start__content}>
                        <p className={styles.start__title}>
                            Марафон призов от ChatGuru
                        </p>
                        <p className={styles.start__descr}>
                            Остался один шаг! 🔥
                        </p>
                        <Link to="/activate" className={styles.start__btn}>
                            <Icon className={styles.start__btn_svg}/>
                            Получить
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}