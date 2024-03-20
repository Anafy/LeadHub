import { useEffect, useState, useRef } from 'react';
import styles from './ModalChange.module.sass';

interface ModalProps {
    openModal: boolean
    setOpenModal: (open: boolean) => void
}

export default function Modal({ openModal, setOpenModal }: ModalProps) {

    const [open, setOpen] = useState(false)
    const modalRef = useRef(null)

    useEffect(() => {
        setOpen(openModal)
    }, [openModal])

    useEffect(() => {
        if (!open) {
            const timer = setTimeout(() => {
                setOpenModal(false)
            }, 300);
            return () => clearTimeout(timer)
        }
    }, [open, setOpenModal])

    const handleContinue = () => {
        setOpen(false)
        setOpenModal(false)
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            setOpen(false)
            setOpenModal(false)
        }
    };

    useEffect(() => {
        if (open) {
            document.addEventListener('click', handleOutsideClick)
        } else {
            document.removeEventListener('click', handleOutsideClick)
        }
        return () => {
            document.removeEventListener('click', handleOutsideClick)
        };
    }, [open]);

    if (!openModal) return null

    return (
        <div className={styles.modal} style={{ opacity: open ? 1 : 0 }}>
            <div
                ref={modalRef}
                className={styles.modal__container}
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <p className={styles.modal__top}>
                    ⭐️
                </p>
                <p className={styles.modal__bottom}>
                    Сменить токен
                </p>
                <p className={styles.modal__text}>
                    Введите Ваш старый токен
                </p>
                <form action="" className={styles.modal__form}>
                    <input type="text" name="key" className={styles.modal__input} autoComplete="off" />
                </form>
                <p className={styles.modal__token}>
                    Новый токен
                </p>
                <p className={styles.modal__amount}>
                    22222222222
                </p>
                <button className={styles.modal__btn} onClick={handleContinue}>
                    Скопировать
                </button>
            </div>
        </div>
    );
}
