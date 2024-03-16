import styles from './Activate.module.sass'
import { Link } from 'react-router-dom'
import { Formik, Field, Form} from "formik"

import * as Yup from "yup"

import Paypal from "../../assets/imgs/paypal.svg?react"
import CheckmarkSvg from "../../assets/imgs/checkbox.svg?react"
import Visa from "../../assets/imgs/visa.svg?react"
import Applepay from "../../assets/imgs/applepay.svg?react"
import Mastercard from "../../assets/imgs/mastercard.svg?react"
import { useState } from 'react'

export default function Activate() {

    const EmailFormSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
    })

    const submitForm = async (values: {email: string}) => {
        try {
          console.log('Form submitted with values:', values);
          return null;
        } catch (error) {
          console.error('Error submitting form:', error);
          return 'error.submitting.form';
        }
    };

    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
        setIsChecked(value => !value);
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
                        onSubmit={async (values, { setSubmitting, /*setFieldError*/ }) => {
                            await submitForm(values)
                            setSubmitting(false)
                        }}
                    >
                        {({ isSubmitting, errors, handleSubmit }) => (
                            <Form className={styles.activate__form} onSubmit={handleSubmit}>
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
                                        <input 
                                            type="checkbox" 
                                            className={styles.activate__checkbox_input} 
                                            checked={isChecked} 
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className={styles.activate__checkbox_box}>
                                            <CheckmarkSvg className={styles.activate__checkbox_mark} style={{
                                                opacity: isChecked ? 1 : 0
                                            }} />
                                        </span>
                                    </label>
                                    <p className={styles.activate__alert}>
                                        Я согласен с <a href='' target='_blank' rel='noreferrer noopenner'  className={styles.activate__alert_underline}> условиями пользовательского соглашения и правилами платформы ChatGuru</a>
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