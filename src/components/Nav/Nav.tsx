import styles from './Nav.module.sass';
import Logo from "../../assets/imgs/logo.svg?react";
import { Link } from 'react-router-dom'

export default function Nav() {
    

    return (
        <div className={styles.nav}>
            <div className={styles.nav__container}>
                <Link to='/cabinet' className={styles.nav__link}>
                    <Logo className={styles.nav__logo}/>
                </Link>
                <button className={styles.nav__btn} onClick={() => {}}>
                    <span className={styles.nav__line}/>
                </button>
            </div>
        </div>
    );
}
