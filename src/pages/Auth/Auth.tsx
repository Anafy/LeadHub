import styles from './Auth.module.sass'
import { Formik, Field, Form} from "formik"
import { useContext, useState } from 'react';

import * as Yup from "yup"

import CheckmarkSvg from "../../assets/imgs/checkbox.svg?react"
import apiFetch from '../../config/api';

import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { LoaderContext } from '../../context/LoaderContext';

export default function Auth() {

    const { enqueueSnackbar } = useSnackbar();
    
    const [isChecked, setIsChecked] = useState(true);

    const navigate = useNavigate()

    const LoginFormSchema = Yup.object().shape({
        key: Yup.string()
            .matches(/^[A-Za-z0-9]{8}$/, "Invalid key")
            .required("Required"),
    })

    const { showLoading, hideLoading } = useContext(LoaderContext);

    const submitForm = async (values: {key: string}) => {
        try {
            await apiFetch('/auth/login', 'POST', {
                auth_token: values.key,
                remember: isChecked
            }, null, enqueueSnackbar, navigate, showLoading, hideLoading).then((res) => {
                if (res.status === true) {
                    navigate('/cabinet')
                }
            })
            return null
        } catch (error) {
          return 'error.submitting.form';
        }
    };

    const handleCheckboxChange = () => {
        setIsChecked(value => !value);
    };

    return (
        <>
            <div className={styles.auth}>
                <Formik
                    initialValues={{
                        key: ''
                    }}
                    validationSchema={LoginFormSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                        await submitForm(values)
                        setSubmitting(false)
                    }}
                >
                    {({ isSubmitting, errors, handleSubmit, setFieldValue }) => (
                        <Form className={styles.auth__form} onSubmit={handleSubmit}>
                            <p className={styles.auth__circle}>
                                💫
                            </p>
                            <p className={styles.auth__title}>
                                Вход в личный кабинет
                            </p>
                            <Field 
                                type="text" 
                                name="key" 
                                className={styles.auth__input} 
                                placeholder="Введите ключ доступа" 
                                autoComplete="off" 
                                style={{
                                    borderColor: errors.key && 'red'
                                }}
                                maxLength={8}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const value = e.target.value.replace(/[^A-Za-z0-9]/g, '');
                                    setFieldValue('key', value);
                                }}
                            />
                            <div className={styles.auth__block} onClick={handleCheckboxChange}>
                                <label className={styles.auth__checkbox}>
                                    <input 
                                        type="checkbox" 
                                        className={styles.auth__checkbox_input} 
                                        checked={isChecked} 
                                        onChange={handleCheckboxChange}
                                    />
                                    <span className={styles.auth__checkbox_box}>
                                        <CheckmarkSvg className={styles.auth__checkbox_mark} style={{
                                            opacity: isChecked ? 1 : 0
                                        }} />
                                    </span>
                                </label>
                                <p className={styles.auth__alert}>
                                    Запомнить меня
                                </p>
                            </div>
                            <button type="submit" disabled={isSubmitting} className={styles.auth__btn}>
                                Войти
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}