import styles from './Activate.module.sass'
import { Link } from 'react-router-dom'
import { Formik, Field, Form} from "formik"

import * as Yup from "yup"

import Paypal from "../../assets/imgs/paypal.svg?react"
import CheckmarkSvg from "../../assets/imgs/checkbox.svg?react"
import Visa from "../../assets/imgs/visa.svg?react"
import Applepay from "../../assets/imgs/applepay.svg?react"
import Mastercard from "../../assets/imgs/mastercard.svg?react"
import { useEffect, useState } from 'react'

declare global {
    interface Window { pay: () => void }
}

export default function Activate() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://widget.payselection.com/lib/pay-widget.js";
        script.type = 'text/javascript';
        document.body.appendChild(script);

        // Удалить скрипт при размонтировании компонента
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    const EmailFormSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
    })

    const submitForm = async (values: {email: string}) => {
        try {
            console.log('Form submitted with values:', values);

            const script = document.createElement('script');
            script.type = 'text/javascript';

            const generateRandomString = (length: number) => {
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                let result = '';
                for (let i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() * characters.length));
                }
                return result;
            };

            let clickId = localStorage.getItem('click_id');
            if (!clickId || clickId === '') {
                clickId = generateRandomString(24);;
            }

            const orderId = generateRandomString(15);

            script.innerHTML = `
                this.pay = function() {
                    var widget = new pw.PayWidget();
                    widget.pay(
                        {
                            serviceId: '23101',
                            key: '042d6661fe666479dd202dc941051edd52eed9dd9c8bf0d337fda03d828e4c5d7b3b2a02698e610a3b144dbfc939c90840c4760f041525a0197282c8c3dfb2d9ee',
                            logger: true,
                        },
                        {
                            MetaData: {
                                PaymentType: 'Pay',
                            },
                            PaymentRequest: {
                                OrderId: '${orderId}',
                                Amount: '1',
                                Currency: 'RUB',
                                Description: 'Оплата',
                                RebillFlag: true,
                                ExtraData: {
                                    WebhookUrl: 'https://payments.chat-guru.ru/',
                                    click_id: '${clickId}',
                                    offer_name: 'chatguru',
                                },
                            },
                            CustomerInfo: {
                                Email: '${values.email}',
                                ReceiptEmail: '${values.email}',
                            },
                        },
                        {
                            onSuccess: function (res) {
                                console.log('onSuccess from shop', res)
                            },
                            onError: function (res) {
                                console.log('onFail from shop', res)
                            },
                            onClose: function (res) {
                                console.log('onClose from shop', res)
                            },
                        },
                        {
                            only2Level: true,
                        }
                    )      
                };
            `;
            document.body.appendChild(script);

            // Вызов функции pay
            if (window.pay) {
                window.pay();
            } else {
                console.error('Pay function is not defined');
            }

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
                                        Я согласен с <Link to="/agreement"  className={styles.activate__alert_underline}> условиями пользовательского соглашения</Link> <Link to="/rules" className={styles.activate__alert_underline}> и правилами платформы Chat-Guru</Link>
                                    </p>
                                </div>
                                {/* <p className={styles.activate__alerts}>
                                    Нажимая кнопку "Оплатить", вы соглашаетесь с планом списания продукта. *Первые 7 дней – 1₽, далее 790₽ раз в 7 дней согласно системе списания. Отмена — в любой момент.
                                </p> */}
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