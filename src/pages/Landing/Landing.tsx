import { useEffect } from 'react';
import './style.css'; // Импорт вашего CSS файла

import Logo1 from "./assets/imgs/lg2.svg?react"
import faq from './assets/jsons/faq.json'
import FAQItem from './components/FAQ';


const Landing = () => {

    useEffect(() => {
        const root = document.getElementById('root');
        if (root) {
          root.style.display = 'block';
          root.style.backgroundColor = '#0D1524';
          root.style.textAlign = 'left'
        }
    
        return () => {
          if (root) {
            root.style.display = '';
          }
        };
      }, []);

    return (
        <>
            <section className="main" style={{
                height: 'auto !important'
            }}>
                <div className="main-circle"/>
                <div className="container2" style={{
                    height: 'auto !important'
                }}>
                    <div className="main__row row">
                        <div className="main__left">
                            <Logo1/>
                        </div>
                        <div className="main__right">
                            <h1>
                                CHAT-GURU:<div className="main__descr">ChatGPT и DALL-E по подписке за 1₽</div>
                            </h1>
                            <div className="main__text">
                                <strong>Доступ к CHAT-GURU на русском языке открыт!</strong>
                                <p>Пользуйтесь нейронной сетью от OpenAI совершенно бесплатно и без регистрации. CHAT-GURU — это чат-бот с применением искусственного интеллекта. Он может вам написать тексты любой сложности и тематики, сделает рефераты и доклады, сочинит забавный рассказ или предложит идеи для новых проектов.</p>
                            </div>
                            <div className="main__bottom" style={{
                                height: 'auto !important'
                            }}>
                                <div className="main__bottom__buttons row">
                                    <a className="btn try" href="https://chat-guru.ru/activate">Попробуйте CHAT-GURU</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text">
                <div className="container2">
                    <h2>
                        Что есть в CHAT-GURU?
                    </h2>

                    <p>
                        1. ChatGPT – это чат-бот с искусственным интеллектом от компании OpenAI, один из основателей которой – Илон Маск. Чат-бот работает в режиме диалога: то есть пользователь задает боту вопросы, а бот выдает развернутые ответы. Общение при этом ведётся на естественном языке (например, на русском).
                    </p>
                    <p>
                        2. DALL-E - это инновационный алгоритм, который использует нейросеть, основанную на преобразователе, для генерации изображений. Такой подход является разновидностью машинного обучения, которое способно понимать контекст и обрабатывать последовательности, чтобы создавать новые изображения на основе текстовых подсказок.
                    </p>
                </div>
            </section>
            <section className="text">
                <div className="container2">
                    <h2>Что умеет CHAT-GURU?</h2>
                    <p>CHAT-GURU - это универсальный инструмент искусственного интеллекта, который может применяться во многих практических областях. Он способен отвечать на вопросы, генерировать изображения, создавать истории, кратко излагать сюжеты книг, помогать в программировании и многое другое. Если вам нужна информация, творческая работа, перевод текста или техническая поддержка, ChatGPT сможет подстроиться под ваши нужды и оказать неоценимую помощь.</p>
                </div>
            </section>
            <section className="howto">
                <div className="container2">
                    <h2 className="gradtitle">Как пользоваться CHAT-GURU?</h2>
                    <div className="howto__grid">
                        <div className="howto__item row">
                            <div className="howto__num">1</div>
                            <div className="howto__right">
                                <span>
                                    Зарегистрируйтесь в CHAT-GURU
                                </span>
                                <p>
                                    Перейдите на страницу оплаты, оплатите подписку за 1₽ и получите пароль для входа
                                </p>
                            </div>
                        </div>
                        <div className="howto__item row">
                            <div className="howto__num">2</div>
                            <div className="howto__right">
                                <span>
                                    Напишите вопрос
                                </span>
                                <p>
                                    Спросите бота о чем угодно, напишите ему что-нибудь: это может быть вопрос, поисковый запрос, утверждение, заявление, задание. В общем, любые слова.
                                </p>
                            </div>
                        </div>
                        <div className="howto__item row">
                            <div className="howto__num">3</div>
                            <div className="howto__right">
                                <span>
                                    Сгенерируйте ответ
                                </span>
                                <p>
                                    После ввода запроса нажмите кнопку отправки и немного подождите, пока CHAT-GURU сгенерирует ответ.
                                </p>
                            </div>
                        </div>
                        <div className="howto__item row">
                            <div className="howto__num">4</div>
                            <div className="howto__right">
                                <span>
                                    Продолжайте общаться
                                </span>
                                <p>
                                    Продолжайте задавать вопросы по интересующей вас теме, уделяйте столько времени, сколько нужно для уточнения деталей. Или попробуйте пообщаться с CHAT-GURU на новые темы, чтобы оценить все его возможности.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="howto__bottom row">
                        <a className="btn try" href="https://chat-guru.ru/activate">Попробуйте CHAT-GURU</a>
                    </div>
                </div>
            </section>
            <section className="faq-slider prem-faq" id="sec3">
                <div className="container2">
                    <h2 className="gradtitle">FAQ</h2>
                    <div className="faq__wrapper">
                        {faq.map((x, i) => {
                            return (
                                <FAQItem key={i} title={x.title} descr={x.descr} />
                            )
                        })}
                    </div>
                </div>
            </section>
            <footer>
                <div className="container2">
                    <div className="footer__top row">
                        <strong>Chat-guru.ru © 2024</strong>
                        <a href="https://chat-guru.ru/agreement">Политика конфиденциальности</a>           
                        <a href="https://chat-guru.ru/rules">Условия пользования</a>
                    </div>
                    <p>
                        Chat-guru.ru использует официальный API ChatGPT, но не является частью OpenAI.
                    </p>
                </div>
                <div className="bottom-circle"/>
            </footer>
        </>
    )
}

export default Landing