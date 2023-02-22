import styles from '@styles/AsideDocsContainer.module.scss';
import AppContext from '@context/AppContext';
import { useContext } from 'react';

const AsideDocsContainer = () => {
    const {state} = useContext(AppContext);

    return (
        <aside className={styles.AsideDocsContainer}></aside>
    );
};

export default AsideDocsContainer;