import styles from './Start.module.sass'

import { Link, useLocation } from 'react-router-dom'
import Icon from "../../assets/imgs/click.svg?react"
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Start({color, image, adaptiveImage}: {color: string, image: string, adaptiveImage: string}) {

    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        let clickId = params.get('click_id') || '11111111';
        if (!clickId || clickId === '') {
            clickId = '11111111';
        }
        localStorage.setItem('click_id', clickId);
    }, [location]);

    const isMobile = useMediaQuery({ query: '(max-width: 639px)' });
    const [backgroundImage, setBackgroundImage] = useState(image);

    useEffect(() => {
        setBackgroundImage(isMobile ? adaptiveImage : image);
    }, [isMobile, image, adaptiveImage]);

    return (
        <>
            <div className={styles.start}>
                <div className={styles.start__container}>
                    <div className={styles.start__block} style={{
                        backgroundImage: `url(${backgroundImage})`
                    }}/>
                    <div className={styles.start__content}>
                        {/* <p className={styles.start__title}>
                            Марафон призов от ChatGuru
                        </p> */}
                        <p className={styles.start__descr}>
                            Остался один шаг! 🔥
                        </p>
                        <Link to="/activate" className={styles.start__btn} style={{
                            backgroundColor: color,
                            boxShadow: `0px 3px 16px ${color}b3`
                        }}>
                            <Icon className={styles.start__btn_svg}/>
                            Получить
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}