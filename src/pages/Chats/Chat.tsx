import Send from "../../assets/imgs/send.svg?react"

import styles from "./Chat.module.sass"

import chatgpt from "../../assets/imgs/chatgpt.png"
import ChatMessage from "./ChatMessage"

export default function Chat({ai, title} : ChatProps) {

    console.log(ai)

    const dataDalle: ChatMessage[] = [
        {
            role: 'user',
            content: 'Draw a cat, please'   
        },
        {
            role: 'assistant',
            content: [
                'https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg?w=2000&t=st=1710491710~exp=1710492310~hmac=481043aac638b8b84d79ff4dc5cc26c86aaba672da39101cbde25cbf05cf9ab9',
                'https://img.freepik.com/free-photo/cute-domestic-cat-looking-camera-feline-whisker-generative-ai_188544-9200.jpg?w=2000&t=st=1710491695~exp=1710492295~hmac=d112ba69f2d05a8c47fa2bf707e535fb367d6bab16583da5f3fc37165616beea',
                'https://img.freepik.com/free-photo/cute-kitten-sitting-outdoors-looking-camera-surrounded-by-snow-generated-by-artificial-intelligence_188544-84910.jpg?w=2000&t=st=1710491725~exp=1710492325~hmac=8737168c64f8d301ee5ecd2d4f531ac6134a58115f58acfb3e15441922cb1c8c',
                'https://img.freepik.com/free-photo/beautiful-domestic-cat-laying-fence_181624-43207.jpg?w=2000&t=st=1710491737~exp=1710492337~hmac=55e96889226a4f88356ec521b1851e59ee471fb42f63b97432ddffee252b0446'
            ]
        }
    ]

    const dataGPT: ChatMessage[] = [
        {
            role: 'user',
            content: 'Hi! How are you?'
        },
        {
            role: 'assistant',
            content: 'I am fine, thank you! How can I help you today?'
        }
    ]

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
                <div className={styles.chat__bottom}>
                    <ul className={styles.chat__messages}>
                        {(ai === 'gpt' ? dataGPT : dataDalle).map((item: ChatMessage, index: number) => (
                            <ChatMessage key={index} message={item} title={title} />
                        ))}
                    </ul>
                    <form action="" className={styles.chat__form}>
                        <input className={styles.chat__input} type="text" name="text" placeholder="Отправьте сообщение"/>
                        <button type="submit" className={styles.chat__submit}>
                            <Send className={styles.chat__submit_svg}/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}