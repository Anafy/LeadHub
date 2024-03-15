import styles from './Start.module.sass'

import { Link } from 'react-router-dom'
import Icon from "../../assets/imgs/click.svg?react"

export default function Start() {

    return (
        <>
            <div className={styles.start}>
                <div className={styles.start__container}>
                    <div className={styles.start__block}>

                    </div>
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
        </>
    )
}