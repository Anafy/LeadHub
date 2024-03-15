import styles from './Chats.module.sass'

// import Chats from "./Chats";

import Send from "../../assets/imgs/send.svg?react"

export default function Dalle() {

    return (
            <div className={styles.chat}>
                <div className={styles.chat__container}>
                    <div className={styles.chat__top}>
                        <p className={styles.chat__logo}>
                            DALL-E
                        </p>
                    </div>
                    <div className={styles.chat__content}>
                        <div className={styles.chat__block}>
                            <div className={styles.chat__right}>
                                <p className={styles.chat__subtitle}>
                                    ChatGPT
                                </p>
                                <p className={styles.chat__descr}>
                                    Hi! How can I help you today?
                                </p>
                            </div>
                        </div>
                        <div className={styles.chat__block}>
                            <div className={styles.chat__right}>
                                <p className={styles.chat__subtitle}>
                                    You
                                </p>
                                <p className={styles.chat__descr}>
                                    Do you have any questions do I need help?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.chat__content}>
                        <div className={styles.chat__block}>
                            <div className={styles.chat__right}>
                                <p className={styles.chat__subtitle}>
                                    You
                                </p>
                                <p className={styles.chat__descr}>
                                    Do you have any questions do I need help?
                                </p>
                            </div>
                        </div>
                        <div className={styles.chat__block}>
                            <div className={styles.chat__right}>
                                <p className={styles.chat__subtitle}>
                                    ChatGPT
                                </p>
                                <p className={styles.chat__descr}>
                                    Hi! How can I help you today?
                                </p>
                            </div>
                        </div>
                    </div>
                    <label className={styles.chat__bottom}>
                        <input className={styles.chat__input} type="text" name="text" placeholder="Отправьте сообщение"/>
                        <button type="submit" className={styles.chat__btn}>
                            {/* <Send className={styles.chat__btn_svg}/> */}
                        </button>
                    </label>
                </div>
            </div>
    )
}