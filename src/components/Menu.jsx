import styles from '@styles/Menu.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import arrow from '@icons/flecha.png';
import logo from '@logos/logo_appist.png';

const Menu = () => {
    console.log('Me veo');

    return (
        <aside className={styles.Menu}>
            <ul className={styles.list}>
                <li>
                    <Link href="/" className={styles['item-list']}>Inicio</Link>
                    <Image src={arrow} alt="icono flecha" />
                </li>
                <li>
                    <Link href="#" className={styles['item-list']}>Proyectos</Link>
                    <Image src={arrow} alt="icono flecha" />
                </li>
                <li>
                    <Link href="#" className={styles['item-list']}>Contactanos</Link>
                    <Image src={arrow} alt="icono flecha" />
                </li>
            </ul>
            <div className={styles['bottom-menu']}>
                <Image className={styles.logo} src={logo} />
                <span>Appist</span>
            </div>
        </aside>
    );
};

export default Menu;