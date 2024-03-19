import { useState } from 'react';
import ModalChange from '../../components/Modal/ModalChange';
import ModalFreeze from '../../components/Modal/ModalFreeze';
import styles from './Profile.module.sass';

export default function Profile() {

    const [openModalChange, setOpenModalChange] = useState(false)
    const [openModalFreeze, setOpenModalFreeze] = useState(false)

    return (
        <div className={styles.profile}>
            <div className={styles.profile__container}>
                <p className={styles.profile__title}>
                    Профиль
                </p>
                <form action="" className={styles.profile__form}>
                    <input 
                        type="text" 
                        name="key" 
                        className={styles.profile__input} 
                        placeholder="Имя*" 
                        autoComplete="off"
                    />
                    <button className={styles.profile__form_btn}>
                        Сохранить
                    </button>
                </form>
                <div className={styles.profile__block}>
                    <p className={styles.profile__descr}>
                        Дней с нами: <span className={styles.profile__descr_bold}>6</span> дней
                    </p>
                    <p className={styles.profile__descr}>
                        Подписка: <span className={styles.profile__descr_green}>Активная</span> 
                    </p>
                </div>
                <button className={styles.profile__btn} onClick={() => setOpenModalChange(true)}>
                    Сменить токен для входа
                </button>
                <button className={styles.profile__btn} onClick={() => setOpenModalFreeze(true)}>
                    Заморозить подписку
                </button>
                <button className={styles.profile__btn}>
                    Выйти из аккаунта
                </button>
            </div>
            <ModalChange openModal={openModalChange} setOpenModal={setOpenModalChange} />
            <ModalFreeze openModal={openModalFreeze} setOpenModal={setOpenModalFreeze} />
        </div>
    );
}
