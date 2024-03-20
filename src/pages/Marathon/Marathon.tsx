import { useContext, useEffect, useState } from 'react';
import styles from './Marathon.module.sass';
import Modal from '../../components/Modal/Modal';
import { useUserContext } from '../../context/useUserContext';
import apiFetch from '../../config/api';
import { LoaderContext } from '../../context/LoaderContext';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

export default function Marathon() {

    const [openModal, setOpenModal] = useState(false)
    const [showHiddenBlock, setShowHiddenBlock] = useState(false)
    const [selectedItem, setSelectedItem] = useState<number | null>(null)
    const [data, setData] = useState<MarathonData | null>(null)

    const { user } = useUserContext()

    const navigate = useNavigate()

    const { showLoading, hideLoading } = useContext(LoaderContext);

    const updateMarathon = async () => {
        if (user !== null) {
            await apiFetch(`/giveaway`, 'GET', null, 'cabinet', enqueueSnackbar, navigate, showLoading, hideLoading).then((res) => {
                console.log(res);
                setData(res)
                const selectedIndex = res.formatted_main_prizes.findIndex((item: MarathonDataMainPrizes) => item.is_selected === true);
                if (selectedIndex !== -1) {
                    setShowHiddenBlock(true);
                    setSelectedItem(res.formatted_main_prizes[selectedIndex].id);
                }
            });
        }
        return null;
    }

    useEffect(() => {
        updateMarathon();
    }, [user]);

    const [timeLeft, setTimeLeft] = useState<{days: number, hours: number, minutes: number}>({days: 0, hours: 0, minutes: 0});

    useEffect(() => {
        if (data?.ends) {
            const updateCountdown = () => {
                const now = new Date();
                const ends = new Date(data.ends);
                const diff = ends.getTime() - now.getTime();

                if (diff < 0) {
                    return;
                }

                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((diff / 1000 / 60) % 60);

                setTimeLeft({days, hours, minutes});
            };

            // Обновить сразу при запуске
            updateCountdown();

            // Затем обновлять каждую секунду
            const countdown = setInterval(updateCountdown, 1000);

            return () => clearInterval(countdown);
        }
    }, [data]);

    const selectFetch = async () => {
        await apiFetch(`/giveaway/select_prize`, 'POST', {
            prize_id: selectedItem
        }, 'cabinet', enqueueSnackbar, navigate, showLoading, hideLoading).then((res) => {
            console.log(res)
            if (res.status === true) {
                setOpenModal(true)
                setShowHiddenBlock(true)
            }
            return null
        })
    }

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
                                {timeLeft.days.toString().padStart(2, '0')}
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
                                {timeLeft.hours.toString().padStart(2, '0')}
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
                                {timeLeft.minutes.toString().padStart(2, '0')}
                            </p>
                            <p className={styles.marathon__date}>
                                минут
                            </p>
                        </div>
                    </div>
                    <ul className={styles.marathon__list}>
                        {data != null && data.formatted_main_prizes.map((item, i) => (
                            <button 
                                key={i} 
                                className={styles.marathon__item}
                                data-active={selectedItem === item.id ? 'true' : 'false'}
                                onClick={() => {
                                    !showHiddenBlock && setSelectedItem(item.id)
                                }}
                                style={{
                                    filter: showHiddenBlock && selectedItem !== item.id ? 'grayscale(80%)' : 'none'
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
                                        {item.name}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </ul>
                    {!showHiddenBlock && (
                        <button 
                            type="button" 
                            className={styles.marathon__btn} 
                            disabled={selectedItem === null}
                            onClick={selectFetch}
                        >
                            Участвовать
                        </button>
                    )}
                    {showHiddenBlock && (
                        <div className={styles.marathon__hidden}>
                            <p className={styles.marathon__hidden_text}>
                                Результаты розыгрыша и дополнительные подарки от партнеров в нашем telegram-канале 👇
                            </p>
                            <button className={styles.marathon__hidden_btn}>
                                Telegram-канал "Марафон призов"
                            </button>
                        </div>
                    )}
                </div>
                <Modal openModal={openModal} setOpenModal={setOpenModal} setShowHiddenBlock={setShowHiddenBlock} />
            </div>
        </>
    );
}
