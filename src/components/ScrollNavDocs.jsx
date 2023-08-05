import AppContext from '@context/AppContext';
import { useContext } from 'react';

import styles from '@styles/ScrollNavDocs.module.scss';
import Image from 'next/image';

import iconPDocs from '@icons/iconPDocs.png';
import iconBitacoras from '@icons/iconBitacoras.png';
import iconRActividades from '@icons/iconRActividades.png';
import iconBJobs from '@icons/iconBJobs.png';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ScrollNavDocs = () => {
    const router = useRouter();
    const { state } = useContext(AppContext);

    return (
        <aside className={styles.ScrollNavDocs}>
            <Link className={styles.optionItem} href={"#Documentos-Semanales"} scroll={false} >
                <Image className={styles.iconOption} src={iconPDocs} alt={'icon principal docs'} />
                <div>Docs Semanales</div>
            </Link>
            <Link className={styles.optionItem} href={"#Bitacoras"} scroll={false}>
                <Image className={styles.iconOption} src={iconBitacoras} alt={'icon bitacoras'} />
                <div>Bitácoras</div>
            </Link>
            <Link className={styles.optionItem} href={"#Resumenes-De-actividades"} scroll={false}>
                <Image className={styles.iconOption} src={iconRActividades} alt={'icon activity resum'} />
                <div>Resumenes</div>
            </Link>
            <Link className={styles.optionItem} href={"#Cuadernos-De-trabajo"} scroll={false}>
                <Image className={styles.iconOption} src={iconBJobs} alt={'icon job books'} />
                <div>Cuadernos</div>
            </Link>
        </aside>
    );
};

export default ScrollNavDocs;

