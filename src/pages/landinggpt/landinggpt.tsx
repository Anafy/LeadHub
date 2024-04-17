import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';

import styles from './landinggpt.module.sass';
import Logo from "../../assets/imgs/landing-logo.svg?react";
import BenefitsSvg1 from "../../assets/imgs/landing-benefits1.svg?react";
import BenefitsSvg2 from "../../assets/imgs/landing-benefits2.svg?react";
import FunctionsSvg1 from "../../assets/imgs/landing-functions1.svg?react";
import FunctionsSvg2 from "../../assets/imgs/landing-functions2.svg?react";
import FunctionsSvg3 from "../../assets/imgs/landing-functions3.svg?react";
import FunctionsSvg4 from "../../assets/imgs/landing-functions4.svg?react";
import UsingSvg1 from "../../assets/imgs/landing-using1.svg?react";
import UsingSvg2 from "../../assets/imgs/landing-using2.svg?react";
import Footer from "../../assets/imgs/landing-footer.svg?react";
import Accept from "../../assets/imgs/landing-accept.svg?react";
import faq from './assets/jsons/faq.json'
import reviews from './assets/jsons/reviews.json'
import FAQItem, { FAQItemType } from './../landinggpt/components/faq'
import { Link } from 'react-router-dom'

export default function Landing() {

    return (
        <>
            <div className={styles.landing}>
                <div className={styles.landing__container}>
                    <nav className={styles.landing__nav}>
                        <Link to="/" className={styles.landing__link}>
                            <Logo className={styles.landing__logo}/>
                        </Link>
                        <div className={styles.landing__btns}>
                            <Link to="/auth" className={styles.landing__login}>
                                Вход
                            </Link>
                            <Link to="/activate" className={styles.landing__reg}>
                                Регистрация
                            </Link>
                        </div>
                    </nav>
                    <section className={styles.landing__hero}>
                        <div className={styles.landing__hero_light}>

                        </div>
                        <p className={styles.landing__title}> <span className={styles.landing__title_span}>ChatGuru</span> - ваш источник неограниченного доступа к передовым нейросетям</p>
                        <p className={styles.landing__subtitle}> Откройте <span className={styles.landing__subtitle_bold}> новые </span> горизонты использования <span className={styles.landing__subtitle_span}> искусственного интеллекта</span>. Сервис с <span className={styles.landing__subtitle_bold}> ChatGPT </span> и <span className={styles.landing__subtitle_bold}> DALL-E </span> на русском языке всего за  <span className={styles.landing__subtitle_bold}> 1 рубль </span>.</p>
                        <Link to="/activate" className={styles.landing__btn}>
                            Получить доступ за 1₽
                        </Link>
                    </section>
                    <section className={styles.landing__benefits}>
                        <div className={styles.landing__benefits_container}>
                            <div className={styles.landing__benefits_light}>

                            </div>
                            <div className={styles.landing__benefits_lights}>

                            </div>
                            <div className={styles.landing__benefits_content}>
                                <p className={styles.landing__benefits_title}>
                                    Пользуйтесь преимуществами <br /> искуственного интеллекта вместе с нами
                                </p>
                                <p className={styles.landing__benefits_descr}>
                                    Мы подготовили для Вас только лучшие <span className={styles.landing__benefits_boldi}>нейросети</span>, которые могут пригодиться Вам, для решения самых разнообразных задач
                                </p>
                                <div className={styles.landing__benefits_blocks}>
                                    <div className={styles.landing__benefits_block}>
                                        <BenefitsSvg1 className={styles.landing__benefits_svg}/>
                                        <p className={styles.landing__benefits_subtitle}>
                                            ChatGPT 4
                                        </p>
                                        <p className={styles.landing__benefits_info}>
                                            Текстовый помощник
                                        </p>
                                        <p className={styles.landing__benefits_about}>
                                            Откройте для себя безграничные возможности ChatGPT 4! От повседневной помощи до мозгового штурма и создания контента - изучите ряд вариантов использования, разработанных для повышения эффективности взаимодействия с искусственным интеллектом.
                                        </p>
                                    </div>
                                    <div className={styles.landing__benefits_block}>
                                        <BenefitsSvg2 className={styles.landing__benefits_svgd}/>
                                        <p className={styles.landing__benefits_subtitle}>
                                            DALL-E 2
                                        </p>
                                        <p className={styles.landing__benefits_info}>
                                            Генератор изображений
                                        </p>
                                        <p className={styles.landing__benefits_about}>
                                            Генерируй изображения без усилий с DALL-E! Превращайте идеи в захватывающие визуальные образы с помощью искусственного интеллекта! Легко создавайте потрясающие AI-изображения, которые завораживают аудиторию и выделяют ваш бренд.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={styles.landing__functions}>
                        <p className={styles.landing__functions_title}>
                            Получите доступ к лучшим функциям <br /> нейросетей прямо сейчас
                        </p>
                        <ul className={styles.landing__functions_list}>
                            <li className={styles.landing__functions_item}>
                                <FunctionsSvg1 className={styles.landing__functions_svg}/>
                                <p className={styles.landing__functions_subtitle}>
                                    Написание текста
                                </p>
                                <p className={styles.landing__functions_descr}><Accept className={styles.landing__functions_accept}/>Генерация идей</p>
                                <p className={styles.landing__functions_descr}><Accept className={styles.landing__functions_accept}/>Помощь с написанием</p>
                                <p className={styles.landing__functions_descr}><Accept className={styles.landing__functions_accept}/>Автокоррекция</p>
                                <p className={styles.landing__functions_descr}><Accept className={styles.landing__functions_accept}/>Перевод</p>
                                <p className={styles.landing__functions_descr}><Accept className={styles.landing__functions_accept}/>Генерация контента</p>
                            </li>
                            <li className={styles.landing__functions_item}>
                                <FunctionsSvg2 className={styles.landing__functions_svg}/>
                                <p className={styles.landing__functions_subtitle}>
                                    Создание контента
                                </p>
                                <p className={styles.landing__functions_descr}><Accept className={styles.landing__functions_accept}/>Мультизадачность</p>
                                <p className={styles.landing__functions_descr}><Accept className={styles.landing__functions_accept}/>Улучшение качества</p>
                                <p className={styles.landing__functions_descr}><Accept className={styles.landing__functions_accept}/>Создание новых идей</p>
                                <p className={styles.landing__functions_descr}><Accept className={styles.landing__functions_accept}/>Экономия времени</p>
                                <p className={styles.landing__functions_descr}><Accept className={styles.landing__functions_accept}/>Простота использования</p>
                            </li>
                            <li className={styles.landing__functions_item}>
                                <FunctionsSvg3 className={styles.landing__functions_svg}/>
                                <p className={styles.landing__functions_subtitle}>
                                    Поиск информации
                                </p>
                                <p className={styles.landing__functions_descr}><Accept className={styles.landing__functions_accept}/>Общий поиск</p>
                                <p className={styles.landing__functions_descr}><Accept className={styles.landing__functions_accept}/>Получение уточнений</p>
                                <p className={styles.landing__functions_descr}><Accept className={styles.landing__functions_accept}/>Анализ и интерпритация</p>
                                <p className={styles.landing__functions_descr}><Accept className={styles.landing__functions_accept}/>Инструкции и советы</p>
                                <p className={styles.landing__functions_descr}><Accept className={styles.landing__functions_accept}/>Научные запросы</p>
                            </li>
                            <li className={styles.landing__functions_item}>
                                <FunctionsSvg4 className={styles.landing__functions_svg}/>
                                <p className={styles.landing__functions_subtitle}>
                                    Учеба
                                </p>
                                <p className={styles.landing__functions_descr}><Accept className={styles.landing__functions_accept}/>Помощь в изучении</p>
                                <p className={styles.landing__functions_descr}><Accept className={styles.landing__functions_accept}/>Практика навыков</p>
                                <p className={styles.landing__functions_descr}><Accept className={styles.landing__functions_accept}/>Практика навыков</p>
                                <p className={styles.landing__functions_descr}><Accept className={styles.landing__functions_accept}/>Редактирование ошибок</p>
                                <p className={styles.landing__functions_descr}><Accept className={styles.landing__functions_accept}/>Обмен знаниями</p>
                            </li>
                        </ul>
                    </section>
                    <section className={styles.landing__reviews}>
                        <p className={styles.landing__reviews_title}>
                            Отзывы клиентов
                        </p>
                        <Swiper
                            wrapperClass={styles.landing__reviews_wrapper}
                            slidesPerView={'auto'}
                            spaceBetween={0}
                            modules={[Scrollbar]}
                            scrollbar={{
                                hide: false,
                                dragClass: `${styles.landing__reviews_scrollbar_drag}`,
                                horizontalClass: `${styles.landing__reviews_scrollbar}`,
                                draggable: true
                            }}
                            className={styles.landing__reviews}
                        >
                            {reviews.map((review, index) => (
                                <SwiperSlide key={index} className={styles.landing__reviews_item}>
                                    <div className={styles.landing__reviews_svg} style={{
                                        backgroundImage: `url(${review.img})`
                                    }} />
                                    <p className={styles.landing__reviews_subtitle}>
                                        {review.name}
                                    </p>
                                    <p className={styles.landing__reviews_ages}>
                                        {review.age}
                                    </p>
                                    <p className={styles.landing__reviews_descr}>
                                        {review.description}
                                    </p>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </section>
                    <section className={styles.landing__using}>
                        <div className={styles.landing__using_container}>
                            <p className={styles.landing__using_title}>
                                Простота использования
                            </p>
                            <p className={styles.landing__using_descrk}>
                                <span className={styles.landing__using_bold}>Простота использования нейросетей — </span> это одно из их главных преимуществ. Благодаря интуитивно понятному интерфейсу, большинство нейросетей можно использовать без специальных <span className={styles.landing__using_bold}>знаний </span> и <span className={styles.landing__using_bold}>навыков</span>.
                            </p>
                            <p className={styles.landing__using_descrr}>
                                Для применения нейросетей обычно достаточно <span className={styles.landing__using_bold}>загрузить </span> необходимые данные и <span className={styles.landing__using_bold}>задать </span> параметры работы. В результате нейросеть <span className={styles.landing__using_bold}>самостоятельно </span> обработает информацию и выдаст результат.
                            </p>
                            <p className={styles.landing__using_descrf}>
                                Простота использования делает нейросети <span className={styles.landing__using_bold}>доступными </span> для широкого круга пользователей, что способствует их <span className={styles.landing__using_bold}>распространению</span> и <span className={styles.landing__using_bold}>применению </span> в различных областях.
                            </p>
                            <div className={styles.landing__using_block}>
                                <UsingSvg1 className={styles.landing__using_svg}/>
                                <div className={styles.landing__using_right}>
                                    <p className={styles.landing__using_text}>
                                        Ответы на вопросы за 3 секунды
                                    </p>
                                    <p className={styles.landing__using_info}>
                                        <span className={styles.landing__using_boldi}>CHATGURU</span> обеспечивает мгновенный доступ к высококачественным, точным ответам на любые вопросы – от простейших до самых сложных.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.landing__using_block}>
                                <UsingSvg2 className={styles.landing__using_svg}/>
                                <div className={styles.landing__using_right}>
                                    <p className={styles.landing__using_text}>
                                        Никаких границ. Никаких ограничений.
                                    </p>
                                    <p className={styles.landing__using_info}>
                                        Мы в <span className={styles.landing__using_boldi}>CHATGURU</span> верим, что доступ к информации должен быть неограниченным, поэтому мы открыли доступ к искусственному интеллекту каждому пользователю всего за один рубль.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={styles.landing__faq}>
                        <p className={styles.landing__faq_title}>
                            Появились вопросы?
                        </p>
                        <p className={styles.landing__faq_subtitle}>
                            Собрали для вас ответы на популярные вопросы, которые чаще всего задают наши клиенты
                        </p>
                        <ul className={styles.landing__faq_list}>
                            {faq.map((item: FAQItemType, index: number) => (
                                <FAQItem key={index} item={item} />
                            ))}
                        </ul>
                    </section>
                    <section className={styles.landing__going}>
                       <p className={styles.landing__going_title}>
                            Неограниченный доступ к нейросетям всего за 1 рубль.
                       </p>
                       <p className={styles.landing__going_subtitle}>
                            Воплоти свои идеи в реальность уже сейчас!
                       </p>
                       <Link to="/activate" className={styles.landing__going_btn}>
                            Перейти на сайт
                       </Link>
                       <Footer className={styles.landing__going_footer}/>
                    </section>
                    <footer className={styles.landing__footer}>
                        <div className={styles.landing__footer_container}>
                            <p className={styles.landing__footer_left}>
                                © 2024 CHATGURU. Все правы защищены”
                            </p>
                            <div className={styles.landing__footer_right}>
                                <Link to="/agreement" className={styles.landing__footer_text}>
                                    Пользовательское соглашение
                                </Link>
                                <Link to="/rules" className={styles.landing__footer_text}>
                                    Правила платформы
                                </Link>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}