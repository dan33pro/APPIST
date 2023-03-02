import styles from '@styles/ButtomTopScroll.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';

import iconFlecha from '@icons/iconFlechaUp.png';

const ButtonTopScroll = (props) => {
    const router = useRouter();
    const { ruta } = props;

    return (
        <button className={styles.ButtonTopScroll} onClick={() => router.push(ruta)}>
            <Image className={styles.inconArrow} src={iconFlecha} alt={'icono de flecha para subir'} />
        </button>
    );
};

export default ButtonTopScroll;