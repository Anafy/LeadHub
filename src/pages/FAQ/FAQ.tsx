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
                <p className={styles.faq__main_descr}>
                    Почта поддержки: <span className={styles.faq__descr_bold}>help@chat-guru.ru</span>
                </p>
                <p className={styles.faq__main_descr}>
                    Телеграм-бот: <span className={styles.faq__descr_bold}>t.me/leadhubsupportbot</span>
                </p>
                <p className={styles.faq__main_descr}>
                    Мы ответим Вам в течение 12 часов
                </p>
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