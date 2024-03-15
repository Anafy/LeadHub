import styles from './Activate.module.sass'
import { Link } from 'react-router-dom'
import { Formik, Field, Form} from "formik"

import * as Yup from "yup"

// import Icon from "../../assets/imgs/activate.svg?react"
import Paypal from "../../assets/imgs/paypal.svg?react"
import Visa from "../../assets/imgs/visa.svg?react"
import Applepay from "../../assets/imgs/applepay.svg?react"
import Mastercard from "../../assets/imgs/mastercard.svg?react"

export default function Activate() {

    const EmailFormSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email address")
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
            <div className={styles.activate}>
                <Link to="/auth" className={styles.activate__link}>
                    Войти
                </Link>
                <div className={styles.activate__container}>
                    <Formik
                        initialValues={{
                        email: '',
                        }}
                        validationSchema={EmailFormSchema}
                        onSubmit={async (values, { setSubmitting, setFieldError }) => {
                            const error = await submitForm(values, setFieldError)
                            if (error === 'email.already.used') {
                                setFieldError('email', 'Email already used')
                            }
                            setSubmitting(false)
                        }}
                    >
                        {({ isSubmitting, errors, handleSubmit }) => (
                            <Form className={styles.activate__form} onSubmit={handleSubmit}>
                                {/* <Icon className={styles.activate__svg}/> */}
                                <p className={styles.activate__circle}>
                                    ⭐️
                                </p>
                                <p className={styles.activate__title}>
                                    Активация аккаунта
                                </p>
                                <p className={styles.activate__descr}>
                                    Доступ к личному кабинету будет отправлен на Ваш E-mail
                                </p>
                                <Field type="email" name="email" className={styles.activate__input} placeholder="Email*" autoComplete="email" style={{
                                    borderColor: errors.email && 'red'
                                }} />
                                <div className={styles.activate__block}>
                                    <label className={styles.activate__checkbox}>
                                        <input type="checkbox" className={styles.activate__checkbox_input}/>
                                        <span className={styles.activate__checkbox_box}></span>
                                        <span className={styles.activate__checkbox_check}></span>
                                    </label>
                                    <p className={styles.activate__alert}>
                                        Я согласен с <span className={styles.activate__alert_underline}> условиями пользовательского соглашения и правилами платформы ChatGuru</span>
                                    </p>
                                </div>
                                <button type="submit" disabled={isSubmitting} className={styles.activate__btn}>
                                    Оплатить 1₽
                                </button>
                                <div className={styles.activate__methods}>
                                    <Paypal className={styles.activate__method}/>
                                    <Visa className={styles.activate__method}/>
                                    <Applepay className={styles.activate__method}/>
                                    <Mastercard className={styles.activate__method}/>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}