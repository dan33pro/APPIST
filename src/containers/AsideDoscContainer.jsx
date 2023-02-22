import styles from '@styles/AsideDocsContainer.module.scss';
import AppContext from '@context/AppContext';
import { useContext } from 'react';
import Image from 'next/image';

import arrow from '@icons/flecha.png';
import lupa from '@icons/lupa.png';
import DocItem from '@components/DocItem';

const AsideDocsContainer = () => {
  const { state, toggleDocAside } = useContext(AppContext);

  function closeAside() {
    toggleDocAside(false, undefined);
  }

  return (
    <aside className={styles.AsideDocsContainer}>
      <div role={'button'} tabIndex={0} className={styles.cabecera} onClick={closeAside} onKeyDown={closeAside}>
        <Image className={styles['icono-flecha']} src={arrow} alt={'icono flecha'} />
        <span>{state.selectDoc?.nombre}</span>
      </div>
      <article className={styles['doc-item-container']}>{
        state.listDocs?.map( doc => <DocItem infoDoc={doc} key={doc.id+'-'+doc.nombre} /> )
      }</article>
      <section className={styles['container-bottom']}>
        <div className={styles['panel-busqueda']}>
          <input className={styles.inputB} type="text" id="busqueda" name="busqueda" />
        </div>
        <button className={styles['principal-button']}>
          <span>Buscar</span>
          <Image className={styles.iconLupa} src={lupa} alt={'icono lupa'} />
        </button>
      </section>
    </aside>
  );
};

export default AsideDocsContainer;
