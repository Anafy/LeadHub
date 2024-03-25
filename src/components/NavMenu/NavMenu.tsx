// import { useState } from 'react';
import styles from './NavMenu.module.sass';
import Logo from "../../assets/imgs/logo.svg?react";
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/useUserContext';

export default function NavMenu() {
    const { user, isMenuOpen, setIsMenuOpen } = useUserContext();

    const handlerOnClickLink = () => {
        setIsMenuOpen(false);
    }

    return (
        <div className={styles.menu}>
            <nav className={styles.menu__nav}>
                <div className={styles.menu__top}>
                    <Link to='/cabinet' className={styles.menu__logo_link}>
                        <Logo className={styles.menu__logo}/>
                    </Link>
                    <button className={styles.menu__burger} onClick={() => setIsMenuOpen(value => !value)}>
                        <span className={styles.menu__line}/>
                    </button>
                </div>
                <div className={styles.menu__content} data-open={isMenuOpen}>
                    <div className={styles.menu__content_left}>
                        <div className={styles.menu__avatar}>
                            <span className={styles.menu__avatar_default}>
                                👤
                            </span>
                        </div>
                        <p className={styles.menu__name}>
                            {user ? user.username : 'Loading...'}
                        </p>
                        <p className={styles.menu__email}>
                            {user ? user.email : 'Loading...'}
                        </p>
                        <p className={styles.menu__id}>
                            ID: {user ? user.id : 0 }
                        </p>
                    </div>
                    <div className={styles.menu__content_right}>
                        <Link to='/cabinet/main' className={styles.menu__link} onClick={handlerOnClickLink}>
                            <span className={styles.menu__icon}>
                                🚀
                            </span>
                            Главная
                        </Link>
                        <Link to='/cabinet/ai' className={styles.menu__link} onClick={handlerOnClickLink}>
                            <span className={styles.menu__icon}>
                                👾
                            </span>
                            Нейросети
                        </Link>
                        <Link to='/cabinet/marathon' className={styles.menu__link} onClick={handlerOnClickLink}>
                            <span className={styles.menu__icon}>
                                🎁
                            </span>
                            Марафон призов
                        </Link>
                        <Link to='/cabinet/profile' className={styles.menu__link} onClick={handlerOnClickLink}>
                            <span className={styles.menu__icon}>
                                👤
                            </span>
                            Профиль
                        </Link>
                        <Link to='/cabinet/faq' className={styles.menu__link} onClick={handlerOnClickLink}>
                            <span className={styles.menu__icon}>
                                ⚙️
                            </span>
                            Тех. поддержка
                        </Link>
                        <a href='https://leadhub.partner.alanbase.com/registration?ref=1' target='_blank' rel='noreferrer noopener'  className={styles.menu__link}>
                            <span className={styles.menu__icon}>
                                🤝
                            </span>
                            Партнерская программа
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}
