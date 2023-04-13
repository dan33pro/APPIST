import styles from '@styles/AsideDocsContainer.module.scss';
import AppContext from '@context/AppContext';
import { useContext, useState } from 'react';
import Image from 'next/image';

import arrow from '@icons/flecha.png';
import lupa from '@icons/lupa.png';
import DocItem from '@components/DocItem';
const removeAccents = require('remove-accents');


const AsideDocsContainer = () => {
  const { state, toggleDocAside } = useContext(AppContext);
  const [listSDoc, setListSDoc] = useState(state.listDocs);

  function searchDocs () {
    const classNameI = '.'+styles.inputB;
    const input = document.querySelector(classNameI);

    const value = removeAccents(input.value.toLowerCase());
    if ( value ) {
        const rs = state.listDocs.filter( doc => {
            const rValue = removeAccents(doc.description.toLowerCase());
            if (rValue.includes(value)) {
                return doc;
            }
        });
        setListSDoc(rs);
    } else {
      setListSDoc(state.listDocs);
    }
}

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
        listSDoc?.map( doc => <DocItem infoDoc={doc} key={doc.id+'-'+doc.nombre} /> )
      }</article>
      <section className={styles['container-bottom']}>
        <div className={styles['panel-busqueda']}>
          <input className={styles.inputB} type="text" id="busqueda" name="busqueda" onKeyUp={searchDocs} />
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
