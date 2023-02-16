import styles from '@styles/DocCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const DocCard = (props) => {
    const { infoDoc } = props;

    return (
        <section className={styles.DocCard}>
            <div className={styles['container-img']}>
                <Image className={styles.imgDoc} src={infoDoc?.img} alt={infoDoc?.nombre} />
            </div>
            <h4>{infoDoc?.nombre}</h4>
            <p>{infoDoc?.description}</p>
            <Link className={styles.link} href={infoDoc?.path} >Archivo</Link>
        </section>
    );
};

export default DocCard;