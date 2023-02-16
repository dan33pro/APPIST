import styles from '@styles/Menu.module.scss';
import AppContext from '@context/AppContext';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import arrow from '@icons/flecha.png';
import logo from '@logos/logo_appist.png';

const Menu = () => {
  const { state } = useContext(AppContext);
  const router = useRouter();

  const handleRedirigir = (i) => {
    router.push(state.options[i]);
  };

  return (
    <aside className={styles.Menu}>
      <ul className={styles.list}>
        <li role={'menuitem'} onClick={() => handleRedirigir(0)} onKeyDown={this.handleRedirigir}>
          <Link href="/documentos" className={styles['item-list']}>
            Documentos
          </Link>
          <Image src={arrow} alt="icono flecha" />
        </li>
        <li role={'menuitem'} onClick={() => handleRedirigir(1)} onKeyDown={this.handleRedirigir}>
          <Link href="/proyecto" className={styles['item-list']}>
            Proyecto
          </Link>
          <Image src={arrow} alt="icono flecha" />
        </li>
        <li role={'menuitem'} onClick={() => handleRedirigir(2)} onKeyDown={this.handleRedirigir}>
          <Link href="/equipo" className={styles['item-list']}>
            Equipo
          </Link>
          <Image src={arrow} alt="icono flecha" />
        </li>
      </ul>
      <div className={styles['bottom-menu']}>
        <Image className={styles.logo} src={logo} alt={'logo appist'} />
        <span>Appist</span>
      </div>
    </aside>
  );
};

export default Menu;
