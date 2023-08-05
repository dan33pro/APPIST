import styles from '@styles/ButtomTopScroll.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import iconFlecha from '@icons/iconFlechaUp.png';

const ButtonTopScroll = () => {

    return (
        <Link className={styles.ButtonTopScroll} href={"#top"} scroll={false}>
            <Image className={styles.inconArrow} src={iconFlecha} alt={'icono de flecha para subir'} />
        </Link>
    );
};

export default ButtonTopScroll;