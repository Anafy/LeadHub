import styles from './FAQ.module.sass';
import Open from '../../assets/imgs/open.svg?react';
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
        <li className={styles.faq__item}>
            <label
                className={styles.faq__label}
                onClick={() => setOpen((value) => !value)}>
                <Open
                    className={styles.faq__open}
                    style={{
                        transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                    }}
                />
                {item.title}
            </label>
            <div
                ref={accRef}
                className={styles.faq__block}
                style={{
                    height: open ? `${accRef.current?.scrollHeight}px` : '0',
                }}>
                <p className={styles.faq__descr}>
                    {item.descr}
                </p>
            </div>
        </li>
    );
}
