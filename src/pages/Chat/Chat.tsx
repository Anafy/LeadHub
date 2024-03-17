import Send from "../../assets/imgs/send.svg?react"

import styles from "./Chat.module.sass"

import chatgpt from "../../assets/imgs/chatgpt.png"
import ChatMessage from "./ChatMessage"
import { useEffect, useState } from "react"
import { enqueueSnackbar } from "notistack"
import { useNavigate } from "react-router-dom"
import apiFetch from "../../config/api"
import { useUserContext } from "../../context/useUserContext"

export default function Chat({ai, title} : ChatProps) {

    const navigate = useNavigate()

    const { user } = useUserContext();

    const [data, setData] = useState<ChatMessage[] | null>(null)

    const updateMessage = async () => {
        if (user !== null) {
            await apiFetch(`/messages/${ai}`, 'GET', null, 'cabinet', enqueueSnackbar, navigate).then((res) => {
                console.log(res);
                setData(res.messages)
            });
        }
        return null;
    }

    useEffect(() => {
        updateMessage();
    }, []);

    return (
        <div className={styles.chat}>
            <div className={styles.chat__container}>
                <div className={styles.chat__top}>
                    {ai === 'gpt' && (
                        <img src={chatgpt} className={styles.chat__logo} />
                    )}
                    <p className={styles.chat__logo_descr}>
                        {title}
                    </p>
                </div>
                {/* <div className={styles.chat__outline}>
                    <span className={styles.chat__space} />
                    <span className={styles.chat__line} />
                    <p className={styles.chat__text}>
                        Today, March 12
                    </p>
                    <span className={styles.chat__line} />
                    <span className={styles.chat__space} />
                </div> */}
                <div className={styles.chat__bottom}>
                    <ul className={styles.chat__messages}>
                        {data != null && data.map((item: ChatMessage, index: number) => (
                            <ChatMessage key={index} message={item} title={title} type={ai} />
                        ))}
                    </ul>
                    <form action="" className={styles.chat__form}>
                        <input className={styles.chat__input} type="text" name="text" placeholder="Отправьте сообщение" autoComplete="off"/>
                        <button type="submit" className={styles.chat__submit}>
                            <Send className={styles.chat__submit_svg}/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}