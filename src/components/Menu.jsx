import styles from '@styles/Menu.module.scss';
import AppContext from '@context/AppContext';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import arrow from '@icons/flecha.png';
import logo from '@logos/logo_appist.png';

const Menu = () => {
  const { state, toggleMenu } = useContext(AppContext);
  const router = useRouter();

  const handleRedirigir = (i) => {
    router.push(state.options[i]);
    toggleMenu(!state.isViewMenu);
  };

  return (
    <aside className={styles.Menu}>
      <ul className={styles.list}>
      <li role={'menuitem'} onClick={() => handleRedirigir(0)} onKeyDown={handleRedirigir}>
          <Link href="/" className={styles['item-list']}>
            Inicio
          </Link>
          <Image src={arrow} alt="icono flecha" />
        </li>
        <li role={'menuitem'} onClick={() => handleRedirigir(1)} onKeyDown={handleRedirigir}>
          <Link href="/documentosFase1" className={styles['item-list']}>
            Documentos Fase 1 
          </Link>
          <Image src={arrow} alt="icono flecha" />
        </li>
        <li role={'menuitem'} onClick={() => handleRedirigir(4)} onKeyDown={handleRedirigir}>
          <Link href="/documentosFase2" className={styles['item-list']}>
            Documentos Fase 2
          </Link>
          <Image src={arrow} alt="icono flecha" />
        </li>
        <li role={'menuitem'} onClick={() => handleRedirigir(2)} onKeyDown={handleRedirigir}>
          <Link href="/proyecto" className={styles['item-list']}>
            Proyecto
          </Link>
          <Image src={arrow} alt="icono flecha" />
        </li>
        <li role={'menuitem'} onClick={() => handleRedirigir(3)} onKeyDown={handleRedirigir}>
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
