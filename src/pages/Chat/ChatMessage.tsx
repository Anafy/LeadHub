
import styles from "./Chat.module.sass"
import chatgpt from "../../assets/imgs/chatgpt.png"

export default function ChatMessage({message, title, type}: {message: ChatMessage, title: string, type: string}) {
    return (
        <li className={styles.chat__message}>
            <div className={styles.chat__message_avatar}>
                {message.role === 'user' ? (
                    <span className={styles.chat__message_avatar_default}>
                        👤
                    </span>
                ) : (
                    <img src={chatgpt} className={styles.chat__message_avatar_ai}  />
                )}
            </div>
            <div className={styles.chat__message_content}>
                <p className={styles.chat__message_subtitle}>
                    {message.role === 'user' ? 'You' : title}
                </p>
                { message.role === 'assistant' && type === 'dalle' ? (
                    <img src={`${message.content}`} className={styles.chat__message_image} />
                ) : (
                    <p className={styles.chat__message_descr}>
                        {message.content}
                    </p>
                )}
            </div>
        </li>
    )
}