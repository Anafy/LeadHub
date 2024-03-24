import styles from './Main.module.sass'

import { Link } from 'react-router-dom'
import Nav from '../../components/Nav/Nav';

export default function Main() {

    return (
        <>
            <div className={styles.main}>
                <Nav/>
                <div className={styles.main__container}>
                    <p className={styles.main__title}>
                        Используй нейросети без ограничений!
                    </p>
                    <p className={styles.main__descr}>
                        CHATGURU делает передовые технологии доступными каждому, обеспечивая плавное взаимодействие и мгновенные результаты. Наша платформа адаптирована для тех, кто ищет эффективные решения без излишних сложностей, предлагая интуитивно понятный интерфейс и поддержку на русском языке. 
                    </p>
                    <div className={styles.main__btns}>
                        <Link to='/cabinet/marathon' className={styles.main__btn}>
                            Марафон призов 👉
                        </Link>
                        <Link to='/cabinet/ai' className={styles.main__btn}>
                            Перейти
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}