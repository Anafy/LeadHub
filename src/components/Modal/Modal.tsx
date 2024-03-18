import { useEffect, useState } from 'react';
import styles from './Modal.module.sass';

interface ModalProps {
    openModal: boolean
    setOpenModal: (open: boolean) => void
    setShowHiddenBlock: (show: boolean) => void
}

export default function Modal({ openModal, setOpenModal, setShowHiddenBlock }: ModalProps) {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(openModal)
    }, [openModal])

    useEffect(() => {
        if (!open) {
            const timer = setTimeout(() => {
                setOpenModal(false)
                setShowHiddenBlock(true)
            }, 300)
            return () => clearTimeout(timer)
        }
    }, [open, setOpenModal, setShowHiddenBlock]);

    const handleContinue = () => {
        setOpen(false)
        setOpenModal(false)
        setShowHiddenBlock(true)
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
                    🎉
                </p>
                <p className={styles.modal__bottom}>
                    Поздравляем, вы участвуете в розыгрыше!
                </p>
                <button className={styles.modal__btn} onClick={handleContinue}>
                    Продолжить
                </button>
            </div>
        </div>
    );
}
