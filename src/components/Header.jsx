import Image from 'next/image';
import Link from 'next/link';
import AppContext from '@context/AppContext';
import { useContext } from 'react';

import logoApist from '@logos/logo_appist.png';
import menuIcon from '@icons/menu.png';

import styles from '@styles/Header.module.scss';

const Header = () => {
  const { state, toggleMenu, toggleDocAside } = useContext(AppContext);

  const handleMenu = () => {
    let newState = !state.isViewMenu;
    toggleMenu(newState);
    toggleDocAside(false);
    
  };

  return (
    <nav className={styles.nav}>
      <Link href="/" onClick={() => toggleMenu(false)}>
        <div className={styles.containerLogo}>
          <Image src={logoApist} alt="logo" className={styles['nav-logo']} />
        </div>
      </Link>
      <div role="button" tabIndex={0} className={styles['menu-boton']} onClick={handleMenu} onKeyDown={handleMenu}>
        <span>MENU</span>
        <Image src={menuIcon} alt="menu boton" className={styles['menu-icon']} />
      </div>
    </nav>
  );
};

export default Header;
