import { useState } from 'react';

import imgBitacora from '@images/bitacora.jpg';

import imgActaInit from '@images/actaInit.jpg';
import imgScript from '@images/script.jpg';
import imgActaMeet from '@images/actaMeet.jpg';
import imgLogBugs from '@images/logBugs.jpg';
import imgDocMaster from '@images/docMaster.jpg';
import imgControlAsig from '@images/controlAsig.jpg';
import imgDocEstrat from '@images/imgDocEstrat.jpg';
import imgPMRiesgos from '@images/imgPMRiesgos.jpg';
import imgPAConfig from '@images/imgPAConfig.jpg';
import imgLRSemana from '@images/imgLRSemana.jpg';
import imgRANoPlan from '@images/imgRANPlan.jpg';
import imgISemanal from '@images/imgISemanal.jpg';
import imgLCheck from '@images/imgLCheck.jpg';

// Bitacoras por rol
const btLD = [
  {
    id: 1,
    nombre: 'Bitácora de tiempos - LD',
    description: 'Semana 1',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1VPJesK555dKiYrA0SVKoIjZSiKFBxhRV/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Bitácora de tiempos - LD',
    description: 'Semana 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1fdEMerqfBZS7woHrvihOSSCc2E1p7OPF/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Bitácora de tiempos - LD',
    description: 'Semana 3',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1zSsCNP_GVsrU-do1ORSQilV0bIdDlAeU/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
];

const btLE = [
  {
    id: 1,
    nombre: 'Bitácora de tiempos - LE',
    description: 'Semana 1',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1sAR4-R0OMFOED_MCCcu-9LR06_a6wgx8kIWIF9ngPrc/edit?usp=share_link',
  },
  {
    id: 2,
    nombre: 'Bitácora de tiempos - LE',
    description: 'Semana 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1xvSCDP4g0IALuAaNey4jxe6hWNuExiICyx6IG5WFq9M/edit?usp=share_link',
  },
  {
    id: 3,
    nombre: 'Bitácora de tiempos - LE',
    description: 'Semana 3',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1YPT8n5yGstkPVeW0D4r5fBTfQo2kCpQTox3O_TolcbA/edit?usp=share_link',
  },
];

const btLC = [
  {
    id: 1,
    nombre: 'Bitácora de tiempos - LC',
    description: 'Semana 1',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1CuQoqljiwE7JAmLYyvX8_pJjOn4rFvYZ/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Bitácora de tiempos - LC',
    description: 'Semana 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/19z16aYIrkeVB6W_6GJuB_hktTexo2Ypm/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
];

const btLA = [
  {
    id: 1,
    nombre: 'Bitácora de tiempos - LA',
    description: 'Semana 1',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1O20WhyTEYXDfZow_aaZsa1bzDYpvuLHd/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Bitácora de tiempos - LA',
    description: 'Semana 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1h1EvfyVgmJU3w6Di50zogYSyzxZ1Nwcj/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
];

const btLS = [
  {
    id: 1,
    nombre: 'Bitácora de tiempos - LS',
    description: 'Semana 1',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/17QlPhaiiPuB0yHltoGKEcQ-mrf9EpmWc/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Bitácora de tiempos - LS',
    description: 'Semana 3',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1ARLs6YylWb6hpH7Yd6GOzA8IECuN8eIw/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
];

const btLP = [
  {
    id: 2,
    nombre: 'Bitácora de tiempos - LP',
    description: 'Semana 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/19-eGmevjQSqgd2XZH8YYfbi7AEbtW0sb/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Bitácora de tiempos - LP',
    description: 'Semana 3',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1S19vdggGPiejQXiyIJpZFzYxVAekrw5Z/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
];

// Doc por versiones
const scriptL = [
  {
    id: 1,
    nombre: 'Script',
    description: 'Versión 1.',
    img: imgScript,
    path: 'https://docs.google.com/document/d/14jSI6WtKGUEvQNJFtyudhQCN6QUTcayq/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Script',
    description: 'Versión 2.',
    img: imgScript,
    path: 'https://docs.google.com/document/d/1wQ4EMt4hx1NH8Zrhhgi2o8CkCUXJdVKo/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
];

const actaRL = [
  {
    id: 1,
    nombre: 'Acta de reunión',
    description: 'Fase 1',
    img: imgActaMeet,
    path: 'https://docs.google.com/document/d/1LpShPly0m48Qx5BGzPekj-XZc-J-rDCr/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Acta de reunión',
    description: 'Fase 2',
    img: imgActaMeet,
    path: 'https://docs.google.com/document/d/1WKFuoXTPYT1SoSsRWv48geAYaD6UCsd_/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
];

const informesW = [
  {
    id: 1,
    nombre: 'Informe semanal',
    description: 'Semana 1',
    img: imgISemanal,
    path: 'https://docs.google.com/document/d/1M9LDpbFKBLkNK5qJbcitYDGA7OxmBATn8TDkehfuSBA/edit?usp=share_link',
  },
];

const listsCheq = [
  {
    id: 1,
    nombre: 'Lista de chequeo',
    description: 'Fase 1',
    img: imgLCheck,
    path: 'https://docs.google.com/document/d/1GM0n9Db367S_FDpeRhMlJznX166zJLn0/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Lista de chequeo',
    description: 'Fase 2',
    img: imgLCheck,
    path: '/documentos',
  },
];

// General docs
const docs = [
  {
    id: 1,
    nombre: 'Scripts',
    description: 'Objetivo, criterios de entrada, entradas, actividades, salidas, criterios de salida.',
    img: imgScript,
    path: 'none',
    listB: scriptL,
  },
  {
    id: 2,
    nombre: 'Actas de reunión',
    description: 'Información general sobre la planificación de una reunión',
    img: imgActaMeet,
    path: 'none',
    listB: actaRL,
  },
  {
    id: 3,
    nombre: 'Log de defectos',
    description: 'Log de registro de defectos presentados',
    img: imgLogBugs,
    path: 'https://docs.google.com/document/d/1qp8wBitKZ5mcHW_CMLix8KDa2youndt_/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Documento maestro',
    description: 'Documento maestro, versión, URL, fecha de modificación y creación',
    img: imgDocMaster,
    path: 'https://docs.google.com/document/d/1tlNIGe01F7oX9B1qrS_JjN9qAlDI_BfS/edit?usp=sharing&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 5,
    nombre: 'Control de asiganciones',
    description: 'Asiganción de tareas, tiempo estimado, tiempo real, diferencia, fecha de entrega',
    img: imgControlAsig,
    path: 'https://docs.google.com/spreadsheets/d/1AqpSFXZVNXXd1CPJgbjEHIF5isPrrAKy/edit?usp=sharing&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 6,
    nombre: 'Acta de iniciación',
    description: 'Conformación del equipo, objetivos, definición general del proyecto.',
    img: imgActaInit,
    path: 'https://docs.google.com/document/d/1olOzDqBN70rY9PJxmrWA9P6k3CbT10ho/edit?usp=sharing&ouid=114130291230236195537&rtpof=true&sd=true',
  },
  {
    id: 7,
    nombre: 'Documento de estrategía',
    description: 'Objetivo, estrategía, criterios de estrategía, etc.',
    img: imgDocEstrat,
    path: 'https://docs.google.com/document/d/122sPOVfQ4PPq5hz_5mUkL8dq0yjnerl9/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 8,
    nombre: 'Plan de manejo de riesgos',
    description: 'Introducción, riesgos, criterios de valoración, etc.',
    img: imgPMRiesgos,
    path: 'https://docs.google.com/document/d/1-bt_JF9xrTdHnij0UOzmBjYjDyLwmz-m/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 9,
    nombre: 'Plan de administración de configuarción',
    description: 'Objetivo, administración de la configuración de software, etc.',
    img: imgPAConfig,
    path: 'https://docs.google.com/document/d/16LlmpstYGVRMBeWP2dF_PXxyuNYGCXOx/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 10,
    nombre: 'Listado de reuniones semanales',
    description: 'Fecha, Inicio, Fin, Duración y descripción.',
    img: imgLRSemana,
    path: 'https://docs.google.com/document/d/1pfm5j6S_vS9YjJjLnNhIpEM4t9Yhvl3I/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 11,
    nombre: 'Registro de actividades no planeadas',
    description: 'Fecha, Hora, Fin, Actividad y Tipo.',
    img: imgRANoPlan,
    path: 'https://docs.google.com/document/d/1VlCsBJAQEQiIADwmweUnyU_JxoS1oNrH/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 12,
    nombre: 'Informes semanales',
    description: 'Descripción del rendimieto semanal.',
    img: imgISemanal,
    path: 'none',
    listB: informesW,
  },
  {
    id: 13,
    nombre: 'Listas de chequeo',
    description: 'Documento, Descripción, Fecha de entrega, etc.',
    img: imgLCheck,
    path: 'none',
    listB: listsCheq,
  },
];

const bitacoras = [
  {
    id: 1,
    nombre: 'Bitácora de tiempos - LD',
    description: 'Registro de tiempos lider de desarrollo',
    img: imgBitacora,
    path: 'none',
    listB: btLD,
  },
  {
    id: 2,
    nombre: 'Bitácora de tiempos - LE',
    description: 'Registro de tiempos lider de equipo',
    img: imgBitacora,
    path: 'none',
    listB: btLE,
  },
  {
    id: 3,
    nombre: 'Bitácora de tiempos - LC',
    description: 'Registro de tiempos lider de calidad',
    img: imgBitacora,
    path: 'none',
    listB: btLC,
  },
  {
    id: 4,
    nombre: 'Bitácora de tiempos - LA',
    description: 'Registro de tiempos lider de arquitectura',
    img: imgBitacora,
    path: 'none',
    listB: btLA,
  },
  {
    id: 5,
    nombre: 'Bitácora de tiempos - LS',
    description: 'Registro de tiempos lider de soporte',
    img: imgBitacora,
    path: 'none',
    listB: btLS,
  },
  {
    id: 6,
    nombre: 'Bitácora de tiempos - LP',
    description: 'Registro de tiempos lider de planeación',
    img: imgBitacora,
    path: 'none',
    listB: btLP,
  },
];

const useGetDocs = () => {
  const [PDocs, setPDocs] = useState(docs);
  const [bitac, setBitac] = useState(bitacoras);

  function reStartPD() {
    setPDocs(docs);
  }

  function reStartB() {
    setBitac(bitacoras);
  }

  return {
    PDocs,
    bitac,
    reStartPD,
    reStartB,
  };
};

export default useGetDocs;
