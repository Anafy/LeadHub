import styles from './Ai.module.sass'

import Chatgpt from "../../assets/imgs/chatgpt.svg?react"
import Dalle from "../../assets/imgs/dalle.svg?react"
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav/Nav';

export default function Ai() {

    return (
        <>
            <div className={styles.ai}>
                <Nav/>
                <div className={styles.ai__container}>
                    <p className={styles.ai__title}>
                        Выберите нейросеть
                    </p>
                    <div className={styles.ai__block}>
                        <Link to='/cabinet/ai/chatgpt' className={styles.ai__content}>
                            <div className={styles.ai__gpt}>
                                <Chatgpt className={styles.ai__logo}/>
                            </div>
                            <p className={styles.ai__subtitle}>
                                ChatGPT
                            </p>
                            <p className={styles.ai__descr}>
                                Чат-бот с генеративным искусственным интеллектом, разработанный компанией OpenAI и способный работать в диалоговом режиме, поддерживающий запросы на естественных языках
                            </p>
                        </Link>
                        <Link to='/cabinet/ai/dalle' className={styles.ai__content}>
                            <div className={styles.ai__dalle}>
                                <Dalle className={styles.ai__logo}/>
                            </div>
                            <p className={styles.ai__subtitle}>
                                Dall-E
                            </p>
                            <p className={styles.ai__descr}>
                                Нейронная сеть НКО OpenAI, созданная при финансовой поддержке Microsoft, способная генерировать высококачественные изображения, исходя из текстовых описаний на английском языке.
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}