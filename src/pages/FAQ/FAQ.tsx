import styles from './FAQ.module.sass'

import faq from '../../jsons/faq.json'
import FAQItem, { FAQItemType } from './FAQItem'

export default function FAQ() {

    return (
        <div className={styles.faq}>
            <div className={styles.faq__container}>
                <p className={styles.faq__main_title}>
                    Техническая поддержка
                </p>
                <div className={styles.faq__content}>
                    <p className={styles.faq__content_left}>
                        💌
                    </p>
                    <div className={styles.faq__content_right}>
                        <p className={styles.faq__main_descr}>
                            Почта поддержки:
                        </p>
                        <a className={styles.faq__main_bold} href="mailto:help@chat-guru.ru">
                            help@chat-guru.ru
                        </a>
                    </div>
                </div>
                <div className={styles.faq__content}>
                    <p className={styles.faq__content_left}>
                        🤖️
                    </p>
                    <div className={styles.faq__content_right}>
                        <p className={styles.faq__main_descr}>
                            Телеграм-бот:
                        </p>
                        <a href="https://t.me/leadhubsupportbot" className={styles.faq__main_bold}>
                            t.me/leadhubsupportbot
                        </a>
                    </div>
                </div>
                <div className={styles.faq__content}>
                    <p className={styles.faq__content_left}>
                        💜
                    </p>
                    <div className={styles.faq__content_right}>
                        <p className={styles.faq__main_descr}>
                            Мы ответим Вам в течение
                        </p>
                        <p className={styles.faq__main_bold}>
                            12 часов
                        </p>
                    </div>
                </div>
                <p className={styles.faq__main_subtitle}>
                    Часто задаваемые вопросы
                </p>
                <ul className={styles.faq__list}>
                    {faq.map((item: FAQItemType, index: number) => (
                        <FAQItem key={index} item={item} />
                    ))}
                </ul>
            </div>
        </div>
    )
}