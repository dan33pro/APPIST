import styles from '@styles/DocCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const DocCard = (props) => {
    const { infoDoc } = props;

    return (
        <section className={styles.DocCard}>
            <Image className={styles.imgDoc} src={infoDoc?.img} alt={infoDoc?.nombre} />
            <h4>{infoDoc?.nombre}</h4>
            <p>{infoDoc?.description}</p>
            <Link className={styles.link} href={infoDoc?.path} >Archivo</Link>
        </section>
    );
};

export default DocCard;