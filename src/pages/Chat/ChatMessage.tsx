
import styles from "./Chat.module.sass"
import chatgpt from "../../assets/imgs/chatgpt.png"

export default function ChatMessage({message, title}: {message: ChatMessage, title: string}) {
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
                {Array.isArray(message.content) ? (
                    <ul className={styles.chat__message_images}>
                        {message.content.map((content: string, index: number) => (
                            <li key={index} className={styles.chat__message_image} style={{
                                backgroundImage: `url(${content})`
                            }} />
                        ))}
                    </ul>
                ) : (
                    <p className={styles.chat__message_descr}>
                        {message.content}
                    </p>
                )}
            </div>
        </li>
    )
}