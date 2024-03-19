import { useEffect, useState } from 'react';
import styles from './ModalFreeze.module.sass';

interface ModalProps {
    openModal: boolean
    setOpenModal: (open: boolean) => void
}

export default function Modal({ openModal, setOpenModal }: ModalProps) {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(openModal)
    }, [openModal])

    useEffect(() => {
        if (!open) {
            const timer = setTimeout(() => {
                setOpenModal(false)
            }, 300)
            return () => clearTimeout(timer)
        }
    }, [open, setOpenModal]);

    const handleContinue = () => {
        setOpen(false)
        setOpenModal(false)
    };

    if (!openModal) return null;

    return (
        <div className={styles.modal} style={{ opacity: open ? 1 : 0 }}>
            <div
                className={styles.modal__container}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <p className={styles.modal__top}>
                    ❔
                </p>
                <p className={styles.modal__bottom}>
                    Вы точно хотите заморозить подписку?
                </p>
                <div className={styles.modal__btns}>
                    <button className={styles.modal__btn} onClick={handleContinue}>
                        Нет
                    </button>
                    <button className={styles.modal__btn} onClick={handleContinue}>
                        Да
                    </button>
                </div>
            </div>
        </div>
    );
}
