import { useContext, useEffect, useState } from 'react';
import styles from './ModalFreeze.module.sass';
import apiFetch from '../../config/api';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { LoaderContext } from '../../context/LoaderContext';
import { useUserContext } from '../../context/useUserContext';
import Close from "../../assets/imgs/close.svg?react";

interface ModalProps {
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
}

export default function Modal({ openModal, setOpenModal }: ModalProps) {
    const [open, setOpen] = useState(false)
    const [isFrozen, setIsFrozen] = useState(false)

    const navigate = useNavigate()
    const { updateUser, user } = useUserContext()
    const { showLoading, hideLoading } = useContext(LoaderContext)

    useEffect(() => {
        setOpen(openModal);
    }, [openModal]);

    useEffect(() => {
        if (!open) {
            const timer = setTimeout(() => {
                setOpenModal(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [open, setOpenModal]);

    const handleContinue = async () => {
        setOpen(false);
        setOpenModal(false);
        if (user != null) {
            await apiFetch(`/subscription`, 'POST', {
                action: user.subscription === 'available' ? 'freeze' : 'cancel'
            }, 'cabinet', enqueueSnackbar, navigate, showLoading, hideLoading).then(async (res) => {
                if (res.status === true) {
                    setIsFrozen(true)
                    await updateUser()
                }
            });
        } else {
            navigate('/auth');
        }
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
                    {isFrozen ? "Заморозив подписку, вы отказываетесь от участия в розыгрыше призов" : "Вы точно хотите заморозить подписку?"}
                </p>
                <div className={styles.modal__btns}>
                    <button className={styles.modal__btn} onClick={handleContinue}>
                        {!isFrozen ? "Нет" : "Подробнее"}
                    </button>
                    <button className={styles.modal__btn} onClick={handleContinue}>
                        {!isFrozen ? "Да" : "Заморозить"}
                    </button>
                </div>
            </div>
            <button className={styles.modal__close} onClick={() => setOpenModal(false)}>
                <Close className={styles.modal__close_svg}/>
            </button>
        </div>
    );
}