import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useContext, useState } from 'react';
import ModalChange from '../../components/Modal/ModalChange';
import ModalFreeze from '../../components/Modal/ModalFreeze';
import styles from './Profile.module.sass';
import apiFetch from '../../config/api';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { LoaderContext } from '../../context/LoaderContext';
import { useUserContext } from '../../context/useUserContext';

export default function Profile() {

    const [openModalChange, setOpenModalChange] = useState(false)
    const [openModalFreeze, setOpenModalFreeze] = useState(false)

    const { updateUser, user } = useUserContext();

    const navigate = useNavigate()

    const { showLoading, hideLoading } = useContext(LoaderContext);

    const validationSchema = Yup.object({
        username: Yup.string()
          .matches(/^[a-zA-ZА-Яа-я0-9]{1,12}$/, 'Неверный формат')
          .required('Обязательное поле'),
    });

    const submitForm = async (values: {username: string}) => {
        try {
            await apiFetch('/user/change_username', 'POST', {
                username: values.username,
            }, null, enqueueSnackbar, navigate, showLoading, hideLoading).then(async (res) => {
                console.log(res.status)
                if (res.status == true) {
                    await updateUser();
                }
                return null
            })
            return null
        } catch (error) {
          console.error('Error submitting form:', error);
          return 'error.submitting.form';
        }
    };

    const logoutFetch = async () => {
        await apiFetch(`/auth/logout`, 'POST', null, 'cabinet', enqueueSnackbar, navigate, showLoading, hideLoading).then((res) => {
            if (res.status === true) {
                navigate('/auth')
            }
        })
    }

    const getSubscriptionStatus = (subscription: string | undefined) => {
        switch (subscription) {
            case 'available': return { text: 'Активная', color: '#14AE5C' };
            case 'freezed': return { text: 'Заморожена', color: '#2F3647' };
            case 'canceled': return { text: 'Отменена', color: '#DD1922' };
            default: return { text: 'Загрузка', color: '#2F3647' };
        }
    }

    const getDaysSinceRegistration = (registered: Date | undefined) => {
        if (!registered) return '0';
    
        const registeredDate = new Date(registered);
        const currentDate = new Date();
    
        const differenceInTime = currentDate.getTime() - registeredDate.getTime();
        const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    
        return differenceInDays;
    }

    return (
        <div className={styles.profile}>
            <div className={styles.profile__container}>
                <p className={styles.profile__title}>
                    Профиль
                </p>
                <Formik
                    initialValues={{ username: '' }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                        await submitForm(values)
                        setSubmitting(false)
                    }}
                >
                    {({ isSubmitting, errors, handleSubmit }) => (
                        <Form className={styles.profile__form} onSubmit={handleSubmit}>
                            <Field 
                                type="text" 
                                name="username" 
                                className={styles.profile__input} 
                                placeholder="Имя*" 
                                autoComplete="off"
                                style={{
                                    borderColor: errors.username && 'red'
                                }}
                            />
                            <button type="submit" disabled={isSubmitting} className={styles.profile__form_btn}>
                                Сохранить
                            </button>
                        </Form>
                    )}
                </Formik>
                <div className={styles.profile__block}>
                    <p className={styles.profile__descr}>
                        Дней с нами: <span className={styles.profile__descr_bold}>{getDaysSinceRegistration(user?.registered)}</span> дней
                    </p>
                    <p className={styles.profile__descr}>
                        Подписка: <span className={styles.profile__descr_green} style={{ color: getSubscriptionStatus(user?.subscription).color }}>
                            {getSubscriptionStatus(user?.subscription).text}
                        </span> 
                    </p>
                </div>
                <button className={styles.profile__btn} onClick={() => setOpenModalChange(true)}>
                    Сменить токен для входа
                </button>
                {user != null && user.subscription !== 'canceled' && (
                    <button className={styles.profile__btn} onClick={() => setOpenModalFreeze(true)}>
                        {user.subscription === 'available' ? 'Заморозить подписку' : 'Отменить подписку'}
                    </button>
                )}
                <button className={styles.profile__btn} onClick={logoutFetch}>
                    Выйти из аккаунта
                </button>
            </div>
            <ModalChange openModal={openModalChange} setOpenModal={setOpenModalChange} />
            <ModalFreeze openModal={openModalFreeze} setOpenModal={setOpenModalFreeze} />
        </div>
    );
}
