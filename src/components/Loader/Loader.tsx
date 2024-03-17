// Loader.tsx
import { useContext } from 'react';
import styles from './Loader.module.sass';
import { LoaderContext } from '../../context/LoaderContext';

export default function Loader() {
    const { isLoading } = useContext(LoaderContext);

    console.log(isLoading)

    if (!isLoading) {
        return null;
    }

    return (
        <div className={styles.loader}>
            <div className={styles.loader__spinner}/>
        </div>
    );
}