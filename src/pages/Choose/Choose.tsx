import styles from './Choose.module.sass'

import { Link } from 'react-router-dom'

import Chatgpt from "../../assets/imgs/chatgpt.svg?react"
import Dalle from "../../assets/imgs/dalle.svg?react"

export default function Choose() {

    return (
        <>
            <div className={styles.choose}>
                <div className={styles.choose__container}>
                    <p className={styles.choose__title}>
                        Выберите нейросеть
                    </p>
                    <div className={styles.choose__block}>
                        <div className={styles.choose__content}>
                            <div className={styles.choose__gpt}>
                                <Chatgpt className={styles.choose__logo}/>
                            </div>
                            <p className={styles.choose__subtitle}>
                                ChatGPT
                            </p>
                            <p className={styles.choose__descr}>
                                Чат-бот с генеративным искусственным интеллектом, разработанный компанией OpenAI и способный работать в диалоговом режиме, поддерживающий запросы на естественных языках
                            </p>
                        </div>
                        <div className={styles.choose__content}>
                            <div className={styles.choose__dalle}>
                                <Dalle className={styles.choose__logo}/>
                            </div>
                            <p className={styles.choose__subtitle}>
                                Dall-E
                            </p>
                            <p className={styles.choose__descr}>
                                Нейронная сеть НКО OpenAI, созданная при финансовой поддержке Microsoft, способная генерировать высококачественные изображения, исходя из текстовых описаний на английском языке.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}