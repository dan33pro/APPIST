import AppContext from '@context/AppContext';
import { useContext } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import styles from '@styles/DocCard.module.scss';


const DocCard = (props) => {
  const {state, toggleDocAside, changeSelectDoc, toggleMenu} = useContext(AppContext);
  const { infoDoc } = props;

  function handlerAside() {
    const isViewDocAside = state.isViewDocAside;
    if (!isViewDocAside) {
      toggleDocAside(true);
    }
    changeSelectDoc(infoDoc);
    toggleMenu(false);
  }

  function getBoton(path) {
    if(path === 'none'){
      return <span className={styles.link} role="checkbox" aria-checked="false" aria-labelledby="foo" tabindex="0" onClick={handlerAside} onKeyDown={handlerAside}>Archivos</span>;
    } else {
      return <Link className={styles.link} href={path}>Archivo</Link>;
    }
  }

  return (
    <section className={styles.DocCard}>
      <div className={styles['container-img']}>
        <Image className={styles.imgDoc} src={infoDoc?.img} alt={infoDoc?.nombre} />
      </div>
      <h4>{infoDoc?.nombre}</h4>
      <p>{infoDoc?.description}</p>
      {getBoton(infoDoc?.path)}
    </section>
  );
};

export default DocCard;
