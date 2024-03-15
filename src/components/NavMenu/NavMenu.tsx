import { Link, useLocation } from "react-router-dom"

import styles from './NavMenu.module.sass'

import Logo from "../../assets/imgs/logo.svg?react"
import Avatar from "../../assets/imgs/avatar.svg?react"
import Icon1 from "../../assets/imgs/menu-svg1.svg?react"
import Icon2 from "../../assets/imgs/menu-svg2.svg?react"
import Icon3 from "../../assets/imgs/menu-svg3.svg?react"
import Icon4 from "../../assets/imgs/menu-svg4.svg?react"
import Icon5 from "../../assets/imgs/menu-svg5.svg?react"
import Icon6 from "../../assets/imgs/menu-svg6.svg?react"

export default function NavMenu() {

    // const location = useLocation().pathname;

    return (
        <div className={styles.menu}>
            <nav className={styles.menu__nav}>
                <div className={styles.menu__logo_link}>
                    <Logo className={styles.menu__logo}/>
                </div>
                <Avatar className={styles.menu__avatar}/>
                {/* <div className={styles.menu__avatar}>

                </div> */}
                <p className={styles.menu__name}>
                    Арина Миллер
                </p>
                <p className={styles.menu__email}>
                    taisia.lihoscherst@yandex.ru
                </p>
                <p className={styles.menu__id}>
                    ID: 111111111111
                </p>
                <div className={styles.menu__link}>
                    <Icon1 className={styles.menu__icon}/>
                    Главная
                </div>
                <div className={styles.menu__link}>
                    <Icon2 className={styles.menu__icon}/>
                    Нейросети
                </div>
                <div className={styles.menu__link}>
                    <Icon3 className={styles.menu__icon}/>
                    Марафон призов
                </div>
                <div className={styles.menu__link}>
                    <Icon4 className={styles.menu__icon}/>
                    Профиль
                </div>
                <div className={styles.menu__link}>
                    <Icon5 className={styles.menu__icon}/>
                    Тех. поддержка
                </div>
                <div className={styles.menu__link}>
                    <Icon6 className={styles.menu__icon}/>
                    Партнерская программа
                </div>
                {/* <Link to='/' className={styles.menu__link} style={{
                    background: location === '/invest' && 'linear-gradient(233deg, rgba(252, 162, 10, 0.20) -8.29%, rgba(244, 196, 27, 0.20) 109.41%)',
                    borderLeft: location === '/invest' && '4px solid #FCA20A'
                }} >
                    Главная
                </Link>
                <Link to='/' className={styles.menu__link} style={{
                    background: location === '/invest' && 'linear-gradient(233deg, rgba(252, 162, 10, 0.20) -8.29%, rgba(244, 196, 27, 0.20) 109.41%)',
                    borderLeft: location === '/invest' && '4px solid #FCA20A'
                }} >
                    Нейросети
                </Link>
                <Link to='/' className={styles.menu__link} style={{
                    background: location === '/invest' && 'linear-gradient(233deg, rgba(252, 162, 10, 0.20) -8.29%, rgba(244, 196, 27, 0.20) 109.41%)',
                    borderLeft: location === '/invest' && '4px solid #FCA20A'
                }} >
                    Марафон призов
                </Link>
                <Link to='/' className={styles.menu__link} style={{
                    background: location === '/invest' && 'linear-gradient(233deg, rgba(252, 162, 10, 0.20) -8.29%, rgba(244, 196, 27, 0.20) 109.41%)',
                    borderLeft: location === '/invest' && '4px solid #FCA20A'
                }} >
                    Профиль
                </Link>
                <Link to='/' className={styles.menu__link} style={{
                    background: location === '/invest' && 'linear-gradient(233deg, rgba(252, 162, 10, 0.20) -8.29%, rgba(244, 196, 27, 0.20) 109.41%)',
                    borderLeft: location === '/invest' && '4px solid #FCA20A'
                }} >
                    Тех. поддержка
                </Link> */}
            </nav>
        </div>
    )
}