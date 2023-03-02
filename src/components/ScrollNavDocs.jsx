import styles from '@styles/ScrollNavDocs.module.scss';
import Image from 'next/image';

import iconPDocs from '@icons/iconPDocs.png';
import iconBitacoras from '@icons/iconBitacoras.png';
import iconRActividades from '@icons/iconRActividades.png';
import iconBJobs from '@icons/iconBJobs.png';
import { useRouter } from 'next/router';

const ScrollNavDocs = () => {
    const router = useRouter();

    return (
        <aside className={styles.ScrollNavDocs}>
            <button className={styles.optionItem} onClick={() => router.push('/documentos/#Documentos-Semanales')}>
                <Image className={styles.iconOption} src={iconPDocs} alt={'icon principal docs'} />
                <span>Docs Semanales</span>
            </button>
            <button className={styles.optionItem} onClick={() => router.push('/documentos/#Bitacoras')}>
                <Image className={styles.iconOption} src={iconBitacoras} alt={'icon bitacoras'} />
                <span>Bitácoras</span>
            </button>
            <button className={styles.optionItem} onClick={() => router.push('/documentos/#Resumenes-De-actividades')}>
                <Image className={styles.iconOption} src={iconRActividades} alt={'icon activity resum'} />
                <span>Resumenes</span>
            </button>
            <button className={styles.optionItem} onClick={() => router.push('/documentos/#Cuadernos-De-trabajo')}>
                <Image className={styles.iconOption} src={iconBJobs} alt={'icon job books'} />
                <span>Cuadernos</span>
            </button>
        </aside>
    );
};

export default ScrollNavDocs;

