import { useState, useEffect } from 'react';
import styles from './Marathon.module.sass';
import Modal from '../../components/Modal/Modal';

export default function Marathon() {

    const [openModal, setOpenModal] = useState(false)
    const [newModalCode, setNewModalCode] = useState(true)
    const [showHiddenBlock, setShowHiddenBlock] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)
    const [btnBrightness, setBtnBrightness] = useState(0.75)
    const [days, setDays] = useState(3);
    const [hours, setHours] = useState(23);
    const [minutes, setMinutes] = useState(45);

    const data = [
        { 
            image: '/assets/imgs/marathon-image1.png',
            text: 'iPhone 15 PRO'
        },
        { 
            image: '../../assets/imgs/marathon-image2.png',
            text: 'Сертификат WB на 5000₽'
        },
        { 
            image: '../../assets/imgs/marathon-image3.png',
            text: 'Сертификат OZON на 5000₽'
        },
        { 
            image: '../../assets/imgs/marathon-image4.png',
            text: 'Купоны такси на 5 поездок'
        },
        { 
            image: '../../assets/imgs/marathon-image5.png',
            text: '3000₽ на карту'
        },
        { 
            image: '../../assets/imgs/marathon-image6.png',
            text: 'Telegram Premium на 6 мес.'
        }
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            if (minutes > 0) {
                setMinutes(minutes - 1);
            } else {
                if (hours > 0) {
                    setHours(hours - 1);
                    setMinutes(59)
                } else {
                    if (days > 0) {
                        setDays(days - 1)
                        setHours(23)
                        setMinutes(59)
                    } else {
                        clearInterval(timer)
                    }
                }
            }
        }, 60000)

        return () => clearInterval(timer)
    }, [days, hours, minutes]);

    return (
        <>
            <div className={styles.marathon}>
                <div className={styles.marathon__container}>
                    <p className={styles.marathon__title}>
                        Марафон призов от BlendBot
                    </p>
                    <p className={styles.marathon__descr}>
                        Розыгрыш закончится ⏳ через: 
                    </p>
                    <div className={styles.marathon__timer}>
                        <div className={styles.marathon__time}>
                            <p className={styles.marathon__count}>
                                {days < 10 ? `0${days}` : days}
                            </p>
                            <p className={styles.marathon__date}>
                                дня
                            </p>
                        </div>
                        <p className={styles.marathon__sep}>
                            :
                        </p>
                        <div className={styles.marathon__time}>
                            <p className={styles.marathon__count}>
                                {hours < 10 ? `0${hours}` : hours}
                            </p>
                            <p className={styles.marathon__date}>
                                часа
                            </p>
                        </div>
                        <p className={styles.marathon__sep}>
                            :
                        </p>
                        <div className={styles.marathon__time}>
                            <p className={styles.marathon__count}>
                                {minutes < 10 ? `0${minutes}` : minutes}
                            </p>
                            <p className={styles.marathon__date}>
                                минут
                            </p>
                        </div>
                    </div>
                    <ul className={styles.marathon__list}>
                        {data.map((item, i) => (
                            <button 
                                key={i} 
                                className={selectedItem === i ? styles.marathon__itemSelected : styles.marathon__item} 
                                onClick={() => {
                                    setSelectedItem(i)
                                    setBtnBrightness(1)
                                }}
                            >
                                <div className={styles.marathon__img}>
                                    <img src={item.image} />
                                </div>
                                <div className={styles.marathon__info}>
                                    <p className={styles.marathon__left}>
                                        🎁
                                    </p>
                                    <p className={styles.marathon__right}>
                                        {item.text}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </ul>
                    <button 
                        type="button" 
                        className={styles.marathon__btn} 
                        style={{ filter: `brightness(${btnBrightness})` }} 
                        disabled={selectedItem === null}
                        onClick={() => {
                            setNewModalCode(false)
                            setOpenModal(true)
                            setBtnBrightness(0.75)
                        }}
                    >
                        Участвовать
                    </button>
                    <div className={showHiddenBlock ? styles.marathon__hidden : styles.marathon__hidden + ' ' + styles.hidden}>
                        <p className={styles.marathon__hidden_text}>
                            Результаты розыгрыша и дополнительные подарки от партнеров в нашем telegram-канале 👇
                        </p>
                        <button className={styles.marathon__hidden_btn}>
                            Telegram-канал "Марафон призов"
                        </button>
                    </div>
                </div>
                <Modal openModal={openModal} setOpenModal={setOpenModal} newModalCode={newModalCode} setShowHiddenBlock={setShowHiddenBlock} />
            </div>
        </>
    );
}
