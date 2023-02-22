import AppContext from '@context/AppContext';
import { useContext } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import styles from '@styles/DocCard.module.scss';


const DocCard = (props) => {
  const { state, toggleDocAside, changeSelectDoc  } = useContext(AppContext);
  const { infoDoc } = props;

  function handlerAside() {
    if (!state.isViewDocAside) {
      toggleDocAside(true, infoDoc);
    } else {
      changeSelectDoc(infoDoc);
    }
  }

  function getBoton(path) {
    if(path === 'none'){
      return <span role={'button'} tabIndex={0} className={styles.link} onClick={handlerAside} onKeyDown={handlerAside}>Archivos</span>;
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
