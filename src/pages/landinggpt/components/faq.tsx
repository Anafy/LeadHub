import styles from './faq.module.sass';
import Open from './../../../assets/imgs/landing-open.svg?react';
import Yes from './../../../assets/imgs/landing-yes.svg?react';
import No from './../../../assets/imgs/landing-no.svg?react';
import { useRef, useState } from 'react';

export interface FAQItemType {
    title: string
    descr: string
}

interface FAQItemProps {
    item: FAQItemType
}

export default function FAQItem({ item }: FAQItemProps) {

    const accRef = useRef<HTMLDivElement>(null)
    const [open, setOpen] = useState(false)

    return (
        <li className={styles.landing__faq_item}>
            <label
                className={styles.landing__faq_label}
                onClick={() => setOpen((value) => !value)}>
                <Open
                    className={styles.landing__faq_open}
                    style={{
                        transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                    }}
                />
                {item.title}
            </label>
            <div
                ref={accRef}
                className={styles.landing__faq_block}
                style={{
                    height: open ? `${accRef.current?.scrollHeight}px` : '0',
                }}>
                <p className={styles.landing__faq_descr}>
                    {item.descr}
                </p>
                <div className={styles.landing__faq_feel}>
                    <p className={styles.landing__faq_opinion}>
                        Были ли этот ответ полезен?
                    </p>
                    <button className={styles.landing__faq_btn}>
                        <Yes className={styles.landing__faq_icon}/>
                    </button>
                    <button className={styles.landing__faq_btn}>
                        <No className={styles.landing__faq_icon}/>
                    </button>
                </div>
            </div>
        </li>
    );
}
