import styles from '@styles/DocItem.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const DocItem = (props) => {
    const { infoDoc } = props;

    return (
        <article className={styles.DocItem}>
            <Image className={styles.img} src={infoDoc?.img} alt={infoDoc?.nombre}/>
            <div className={styles['info-item']}>
                <span>{infoDoc?.nombre}</span>
                <span>{infoDoc?.description}</span>
            </div>
            <Link className={styles.redirect} href={infoDoc?.path}>Archivo</Link>
        </article>
    );
};

export default DocItem;