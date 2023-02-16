import styles from '@styles/DocsContainer.module.scss';

import imgBitacora from '@images/bitacora.jpg';
import imgActaInit from '@images/actaInit.jpg';
import imgScript from '@images/script.jpg';
import imgActaMeet from '@images/actaMeet.jpg';
import imgLogBugs from '@images/logBugs.jpg';
import imgDocMaster from '@images/docMaster.jpg';
import imgControlAsig from '@images/controlAsig.jpg';
import DocCard from '@components/DocCard';

const DocsContainer = () => {
    const docs = [
        {
            id: 1,
            nombre: 'Acta de iniciación',
            description: 'Conformación del equipo, objetivos, definición general del proyecto.',
            img: imgActaInit,
            path: 'https://docs.google.com/document/d/1olOzDqBN70rY9PJxmrWA9P6k3CbT10ho/edit?usp=sharing&ouid=114130291230236195537&rtpof=true&sd=true',
        },
        {
            id: 2,
            nombre: 'Script',
            description: 'Objetivo, criterios de entrada, entradas, actividades, salidas, criterios de salida.',
            img: imgScript,
            path: 'https://docs.google.com/document/d/14jSI6WtKGUEvQNJFtyudhQCN6QUTcayq/edit?usp=sharing&ouid=116060602621844401144&rtpof=true&sd=true',
        },
        {
            id: 3,
            nombre: 'Acta de reunión - 10/02/2023',
            description: 'Información general sobre la planificación de una reunión',
            img: imgActaMeet,
            path: 'https://docs.google.com/document/d/1LpShPly0m48Qx5BGzPekj-XZc-J-rDCr/edit?usp=sharing&ouid=116060602621844401144&rtpof=true&sd=true',
        },
        {
            id: 4,
            nombre: 'Log de defectos - 15/02/2023',
            description: 'Log de registro de defectos presentados',
            img: imgLogBugs,
            path: 'https://docs.google.com/document/d/1qp8wBitKZ5mcHW_CMLix8KDa2youndt_/edit?usp=sharing&ouid=116060602621844401144&rtpof=true&sd=true',
        },
        {
            id: 5,
            nombre: 'Documento maestro',
            description: 'Documento maestro, versión, URL, fecha de modificación y creación',
            img: imgDocMaster,
            path: 'https://docs.google.com/document/d/1tlNIGe01F7oX9B1qrS_JjN9qAlDI_BfS/edit?usp=sharing&ouid=116060602621844401144&rtpof=true&sd=true',
        },
        {
            id: 6,
            nombre: 'Control de asiganciones',
            description: 'Asiganción de tareas, tiempo estimado, tiempo real, diferencia, fecha de entrega',
            img: imgControlAsig,
            path: 'https://docs.google.com/spreadsheets/d/1AqpSFXZVNXXd1CPJgbjEHIF5isPrrAKy/edit?usp=sharing&ouid=116060602621844401144&rtpof=true&sd=true',
        },
    ];

    const bitacoras = [
        {
            id: 1,
            nombre: 'Bitácora de tiempos - LD',
            description: 'Registro de tiempos lider de desarrollo',
            img: imgBitacora,
            path: 'https://docs.google.com/document/d/1VPJesK555dKiYrA0SVKoIjZSiKFBxhRV/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
        },
        {
            id: 2,
            nombre: 'Bitácora de tiempos - LE',
            description: 'Registro de tiempos lider de equipo',
            img: imgBitacora,
            path: 'https://docs.google.com/document/d/1sAR4-R0OMFOED_MCCcu-9LR06_a6wgx8kIWIF9ngPrc/edit?usp=share_link',
        },
        {
            id: 3,
            nombre: 'Bitácora de tiempos - LC',
            description: 'Registro de tiempos lider de calidad',
            img: imgBitacora,
            path: '/',
        },
        {
            id: 4,
            nombre: 'Bitácora de tiempos - LA',
            description: 'Registro de tiempos lider de arquitectura',
            img: imgBitacora,
            path: 'https://docs.google.com/document/d/1h1EvfyVgmJU3w6Di50zogYSyzxZ1Nwcj/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
        },
        {
            id: 5,
            nombre: 'Bitácora de tiempos - LS',
            description: 'Registro de tiempos lider de soporte',
            img: imgBitacora,
            path: 'https://docs.google.com/document/d/17QlPhaiiPuB0yHltoGKEcQ-mrf9EpmWc/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
        },
        {
            id: 6,
            nombre: 'Bitácora de tiempos - LP',
            description: 'Registro de tiempos lider de planeación',
            img: imgBitacora,
            path: 'https://docs.google.com/document/d/19-eGmevjQSqgd2XZH8YYfbi7AEbtW0sb/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
        },
    ];

    return (
        <main className={styles.DocsContainer}>
            <DocCard infoDoc={docs[0]} />
            <DocCard infoDoc={docs[1]} />
            <DocCard infoDoc={docs[2]} />
            <DocCard infoDoc={docs[3]} />
            <DocCard infoDoc={docs[4]} />
            <DocCard infoDoc={docs[5]} />

            <DocCard infoDoc={bitacoras[0]} />
            <DocCard infoDoc={bitacoras[1]} />
            <DocCard infoDoc={bitacoras[2]} />
            <DocCard infoDoc={bitacoras[3]} />
            <DocCard infoDoc={bitacoras[4]} />
            <DocCard infoDoc={bitacoras[5]} />
        </main>
    );
};

export default DocsContainer;