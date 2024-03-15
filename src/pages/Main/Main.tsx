import styles from './Main.module.sass'

import { Link, useNavigate } from 'react-router-dom'

export default function Main() {

    return (
        <>
            <div className={styles.main}>
                <div className={styles.main__container}>
                    <p className={styles.main__title}>
                        Используй нейросети без ограничений!
                    </p>
                    <p className={styles.main__descr}>
                        CHATGURU делает передовые технологии доступными каждому, обеспечивая плавное взаимодействие и мгновенные результаты. Наша платформа адаптирована для тех, кто ищет эффективные решения без излишних сложностей, предлагая интуитивно понятный интерфейс и поддержку на русском языке. 
                    </p>
                    <div className={styles.main__btns}>
                        <button className={styles.main__btn}>
                            Марафон призов 🔥
                        </button>
                        <button className={styles.main__btn}>
                            Перейти
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}