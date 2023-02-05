import Image from 'next/image';
import Link from 'next/link';

import logoApist from '@logos/logo_appist.png';

import styles from '@styles/Header.module.scss';

const Header = () => {
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <div className={styles.containerLogo}>
                    <Image src={logoApist} alt="logo" className={styles['nav-logo']} />
                </div>
            </Link>
            <ul>
                <li>
                    <Link href="/" className={styles['item-nav']}>Inicio</Link>
                </li>
                <li>
                    <Link href="#" className={styles['item-nav']}>Proyectos</Link>
                </li>
                <li>
                    <Link href="#" className={styles['item-nav']}>Contactanos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;