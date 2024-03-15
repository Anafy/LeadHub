import styles from './NavMenu.module.sass'

import Logo from "../../assets/imgs/logo.svg?react"
// import Icon1 from "../../assets/imgs/menu-svg1.svg?react"
// import Icon2 from "../../assets/imgs/menu-svg2.svg?react"
// import Icon3 from "../../assets/imgs/menu-svg3.svg?react"
// import Icon4 from "../../assets/imgs/menu-svg4.svg?react"
// import Icon5 from "../../assets/imgs/menu-svg5.svg?react"
// import Icon6 from "../../assets/imgs/menu-svg6.svg?react"
import { Link } from 'react-router-dom'

export default function NavMenu() {

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
                    Арина Миллер
                </p>
                <p className={styles.menu__email}>
                    taisia.lihoscherst@yandex.ru
                </p>
                <p className={styles.menu__id}>
                    ID: 111111111111
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