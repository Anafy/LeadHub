import styles from './Auth.module.sass'
import { Link } from 'react-router-dom'
import { Formik, Field, Form} from "formik"

import * as Yup from "yup"

export default function Auth() {

    const LoginFormSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        password: Yup.string()
            .min(4, "Must be longer than 4 characters")
            .required("Required"),
    })

    const submitForm = async (values, setFieldError) => {
        try {
          console.log('Form submitted with values:', values);
          return null;
        } catch (error) {
          console.error('Error submitting form:', error);
          return 'error.submitting.form';
        }
      };

    return (
        <>
            <div className={styles.auth}>
                <Formik
                    initialValues={{
                    email: '',
                    password: ''
                    }}
                    validationSchema={LoginFormSchema}
                    onSubmit={async (values, { setSubmitting, setFieldError }) => {
                        const error = await submitForm(values, setFieldError)
                        if (error === 'email.already.used') {
                            setFieldError('email', 'Email already used')
                        }
                        setSubmitting(false)
                    }}
                >
                    {({ isSubmitting, errors, handleSubmit }) => (
                        <Form className={styles.auth__form} onSubmit={handleSubmit}>
                            <p className={styles.auth__circle}>
                                💫
                            </p>
                            <p className={styles.auth__title}>
                                Вход в личный кабинет
                            </p>
                            <Field type="email" name="email" className={styles.auth__input} placeholder="Email*" autoComplete="email" style={{
                                borderColor: errors.email && 'red'
                            }} />
                            <Field type="password" name="password" className={styles.auth__input} placeholder="Пароль*" autoComplete="password" style={{
                                borderColor: errors.password && 'red'
                            }} />
                            <div className={styles.auth__block}>
                                <label className={styles.auth__checkbox}>
                                    <input type="checkbox" className={styles.auth__checkbox_input}/>
                                    <span className={styles.auth__checkbox_box}></span>
                                    <span className={styles.auth__checkbox_check}></span>
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