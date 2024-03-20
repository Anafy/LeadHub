import { useEffect, useState, useRef, useContext } from 'react';
import styles from './ModalChange.module.sass';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/useUserContext';
import { LoaderContext } from '../../context/LoaderContext';
import { enqueueSnackbar } from 'notistack';
import apiFetch from '../../config/api';

interface ModalProps {
    openModal: boolean
    setOpenModal: (open: boolean) => void
}

export default function Modal({ openModal, setOpenModal }: ModalProps) {

    const [open, setOpen] = useState(false)

    const [step, setStep] = useState(false)
    const [oldToken, setOldToken] = useState('')
    const [newToken, setNewToken] = useState('')

    const modalRef = useRef(null)

    const navigate = useNavigate()

    const { updateUser, user } = useUserContext();

    const { showLoading, hideLoading } = useContext(LoaderContext);

    useEffect(() => {
        setOpen(openModal)
    }, [openModal])

    useEffect(() => {
        if (!open) {
            const timer = setTimeout(() => {
                setOpenModal(false)
                setOldToken('')
                setStep(false)
            }, 300);
            return () => clearTimeout(timer)
        }
    }, [open, setOpenModal])

    const changeTokenFetch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!step) {
            if (user != null) {
                await apiFetch(`/auth/change_token`, 'POST', {
                    auth_token: oldToken
                }, 'cabinet', enqueueSnackbar, navigate, showLoading, hideLoading).then(async (res) => {
                    if (res.status === true) {
                        await updateUser()
                        setStep(true)
                        setNewToken(res.auth_token)
                    }
                    return null
                })
            } else {
                navigate('/auth')
            }
        } else {
            navigator.clipboard.writeText(newToken);
            setOpen(false)
        }
    }

    if (!openModal) return null

    return (
        <div className={styles.modal} style={{ opacity: open ? 1 : 0 }} onClick={() => setOpen(false)} >
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
                <form action="" className={styles.modal__form} onSubmit={changeTokenFetch}> 
                    <input type="text" name="key" className={styles.modal__input} autoComplete="off" value={oldToken} onChange={(e) => {
                        setOldToken(e.target.value)
                    }} />
                    {step && (
                        <>
                            <p className={styles.modal__token}>
                                Новый токен
                            </p>
                            <p className={styles.modal__amount}>
                                {newToken}
                            </p>
                        </>
                    )}
                    <button className={styles.modal__btn} type='submit' >
                        {!step ? 'Сменить' : 'Скопировать'}
                    </button>
                </form>
            </div>
        </div>
    );
}
