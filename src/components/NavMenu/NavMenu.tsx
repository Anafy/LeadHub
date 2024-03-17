import styles from './NavMenu.module.sass'

import Logo from "../../assets/imgs/logo.svg?react"
import { Link } from 'react-router-dom'
import { useUserContext } from '../../context/useUserContext';

export default function NavMenu() {

    const { user } = useUserContext();

    return (
        <div className={styles.menu}>
            <nav className={styles.menu__nav}>
                <Link to='/cabinet' className={styles.menu__logo_link}>
                    <Logo className={styles.menu__logo}/>
                </Link>
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
                <Link to='/cabinet/main' className={styles.menu__link}>
                    <span className={styles.menu__icon}>
                        🚀
                    </span>
                    Главная
                </Link>
                <Link to='/cabinet/ai' className={styles.menu__link}>
                    <span className={styles.menu__icon}>
                        👾
                    </span>
                    Нейросети
                </Link>
                <Link to='/cabinet/marathon' className={styles.menu__link}>
                    <span className={styles.menu__icon}>
                        🎁
                    </span>
                    Марафон призов
                </Link>
                <Link to='/cabinet/profile' className={styles.menu__link}>
                    <span className={styles.menu__icon}>
                        👤
                    </span>
                    Профиль
                </Link>
                <Link to='/cabinet/support' className={styles.menu__link}>
                    <span className={styles.menu__icon}>
                        ⚙️
                    </span>
                    Тех. поддержка
                </Link>
                <Link to='/cabinet/partners' className={styles.menu__link}>
                    <span className={styles.menu__icon}>
                        🤝
                    </span>
                    Партнерская программа
                </Link>
            </nav>
        </div>
    )
}