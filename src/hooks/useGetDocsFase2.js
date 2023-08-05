import { useState } from 'react';

import imgBitacora from '@images/bitacora-min.jpg';
import imgResumenActividades from '@images/imgResumenActividades-min.jpg';
import imgBookJobs from '@images/imgBookJobs-min.jpg';

import imgActaInit from '@images/actaInit-min.jpg';

import imgScript from '@images/script-min.jpg';
import imgActaMeet from '@images/actaMeet-min.jpg';
import imgLogBugs from '@images/logBugs-min.jpg';
import imgDocMaster from '@images/docMaster-min.jpg';
import imgControlAsig from '@images/controlAsig-min.jpg';
import imgDocEstrat from '@images/imgDocEstrat-min.jpg';
import imgPMRiesgos from '@images/imgPMRiesgos-min.jpg';
import imgPAConfig from '@images/imgPAConfig-min.jpg';
import imgLRSemana from '@images/imgLRSemana-min.jpg';
import imgRANoPlan from '@images/imgRANPlan-min.jpg';
import imgISemanal from '@images/imgISemanal-min.jpg';
import imgLCheck from '@images/imgLCheck-min.jpg';

import imgCasoUso from '@images/imgCasoUso-min.jpg';
import imgECalidad from '@images/imgECalidad-min.jpg';
import imgMDominio from '@images/imgMDominio-min.jpg';
import imgARequerimientos from '@images/imgARequerimientos-min.jpg';
import imgListCheckReq from '@images/imgListCheckReq-min.jpg';

import imgEDT from '@images/imgEDT.jpg';
import imgPCCalidad from '@images/imgPCCalidad.jpg';
import imgVistasA from '@images/imgVistasA.jpg';
import imgModeloClases from '@images/imgModeloClases.jpg';
import imgModeloDatos from '@images/imgModeloDatos.jpg';
import imgEDSDS from '@images/imgED-SDS.jpg';
import imgEIUsuario from '@images/imgEIUsuario.jpg';
import imgACasosU from '@images/imgACasosU.jpg';
import imgDocSDS from '@images/imgDocSDS.jpg';


// Bitacoras por rol
const btLD = [
  {
    id: 1,
    nombre: 'Bitácora de tiempos - LD',
    description: 'Semana 1 - Ciclo 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1YhE3fGIhE0urVa8RVk_r2yOYPXkQWkwj/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Bitácora de tiempos - LD',
    description: 'Semana 2 - Ciclo 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1oB10zSSlWtAH95YwETfSDniwrnsVplMb/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Bitácora de tiempos - LD',
    description: 'Semana 3 - Ciclo 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1oFIhxvPbSGg558iporQdNLDDoAWUDDqG/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Bitácora de tiempos - LD',
    description: 'Semana 4 - Ciclo 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1Fw9wZUnDJ4hVbH2EN1dArPom7oQweayy/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  
];

const btLE = [
  {
    id: 1,
    nombre: 'Bitácora de tiempos - LE',
    description: 'Semana 1 - Ciclo 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1T4FTLWQjkNVyMGqRBC4vntce3RBRmNYS/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Bitácora de tiempos - LE',
    description: 'Semana 2 - Ciclo 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1h86y3NOakUcqucjTnuYV3gqkgMhgOruj/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Bitácora de tiempos - LE',
    description: 'Semana 3 - Ciclo 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1Iwl28T5U7SIeUI4nwEtBXRbLL7eRiIqt/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Bitácora de tiempos - LE',
    description: 'Semana 4 - Ciclo 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1GDp7NTxqH4wVV8zl3KCnyyL3qukg2qaH/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 5,
    nombre: 'Bitácora de tiempos - LE',
    description: 'Semana 5 - Ciclo 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1IiFwLJn_xE_Wo2couw7jsZPzznsMEGVy/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },

];

const btLC = [
  {
    id: 1,
    nombre: 'Bitácora de tiempos - LC',
    description: 'Semana 1 - Ciclo 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1oHD4IoeWQaRjdDsyIZaza6xaVXzi6h0D/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Bitácora de tiempos - LC',
    description: 'Semana 2 - Ciclo 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1GiqSDPnF8ppcorRShsAlOeV7gJtO3Uv7/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Bitácora de tiempos - LC',
    description: 'Semana 3 - Ciclo 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1sheXsOFsS7N0Kap6r2dOBJnniUFnzrTK/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  
];

const btLA = [
  {
    id: 1,
    nombre: 'Bitácora de tiempos - LA',
    description: 'Semana 1 - Ciclo 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1sHS5QOM1KzrTMfCw6Ub2ESfxYD2_3t8c/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
 
];

const btLS = [
  {
    id: 1,
    nombre: 'Bitácora de tiempos - LS',
    description: 'Semana 1 - Ciclo 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/16wFi3RLl5VflaW9dYjHtEkXDYor1pIrH/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Bitácora de tiempos - LS',
    description: 'Semana 2 - Ciclo 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1Qu4XEwZMM-txlXL66BNXd32pQhHNberM/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Bitácora de tiempos - LS',
    description: 'Semana 3 - Ciclo 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1VkqNzMr1PHARPjyRdOVJp-FmaCnQO9Eo/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  
];

const btLP = [
  {
    id: 1,
    nombre: 'Bitácora de tiempos - LP',
    description: 'Semana 1 - Ciclo 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1a0ifZQNXbBi8GMmDlvriu88z-pZ9xeFl/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Bitácora de tiempos - LP',
    description: 'Semana 2 - Ciclo 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1ceKGDYp8IPqIebcwrwHeL3pCnbrTZz1U/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Bitácora de tiempos - LP',
    description: 'Semana 3 - Ciclo 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1I27X-tRVDRXJevZGRohDDQ2kF2-M3Lew/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
    {
    id: 4,
    nombre: 'Bitácora de tiempos - LP',
    description: 'Semana 4 - Ciclo 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1YVspNi6RxvpIzYIJ1i1vqQeYzX_NM98S/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  
];

// Resumen de actividades por rol
const RActividadesLD = [
  {
    id: 1,
    nombre: 'Resumen de actividades - LD',
    description: 'Semana - Ciclo 2',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/1R646DzgoxDhlNS_gO7v7RlWEzXlferA4/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
 
];

const RActividadesLE = [
  {
    id: 1,
    nombre: 'Resumen de actividades - LE',
    description: 'Semana 1 - Ciclo 2',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/1o0_7XBKXlFeOStPxQ94ZeGjtq0JHAUK3/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Resumen de actividades - LE',
    description: 'Semana 2 - Ciclo 2',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/1VT7UgvYsKXUhm6eAxVaedlxXBPBUe0zT/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Resumen de actividades - LE',
    description: 'Semana 3 - Ciclo 2',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/1Mb3hBQ5c3k0rZVFeVSpW_Cce4w-rMB29/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Resumen de actividades - LE',
    description: 'Semana 4 - Ciclo 2',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/1wuckHMSXJNg2rAyWD9MQQSZKCKBJABeY/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 5,
    nombre: 'Resumen de actividades - LE',
    description: 'Semana 5 - Ciclo 2',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/17UZaXW1AIjBSbBxc8HcIzNg4YGLZFJJy/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
];

const RActividadesLC = [
  {
    id: 1,
    nombre: 'Resumen de actividades - LC',
    description: 'Semana  - Ciclo 2',
    img: imgResumenActividades,
    path: 'https://docs.google.com/spreadsheets/d/1tg5Z7OR4uoIl7iIvVzSu78HS9lulnCLMxZ77AlCfuLY/edit?usp=share_link',
  },
  
];

const RActividadesLA = [
  {
    id: 1,
    nombre: 'Resumen de actividades - LA',
    description: 'Semana 3',
    img: imgResumenActividades,
    path: 'none',
  },
  {
    id: 2,
    nombre: 'Resumen de actividades - LA',
    description: 'Semana 4',
    img: imgResumenActividades,
    path: 'none',
  },
  {
    id: 3,
    nombre: 'Resumen de actividades - LA',
    description: 'Semana 5',
    img: imgResumenActividades,
    path: 'none',
  },
  {
    id: 4,
    nombre: 'Resumen de actividades - LA',
    description: 'Semana 6',
    img: imgResumenActividades,
    path: 'none',
  },
  {
    id: 5,
    nombre: 'Resumen de actividades - LA',
    description: 'Semana 7',
    img: imgResumenActividades,
    path: 'none',
  },
];

const RActividadesLS = [
  {
    id: 1,
    nombre: 'Resumen de actividades - LS',
    description: 'Semana - Ciclo 2',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/1BZH1K0axtzHtW5hK9fOqqYQkHXS58u67/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  
];

const RActividadesLP = [
  {
    id: 1,
    nombre: 'Resumen de actividades - LP',
    description: 'Semana - Ciclo 2',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/1eRpiNVy2VIRc8aT064Bam85vvM3Y5TUt/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Resumen de actividades - LP',
    description: 'Semana - Ciclo 2',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/1mIa98yhYefiGzNJcGL3ACFuij_VnkIWO/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Resumen de actividades - LP',
    description: 'Semana - Ciclo 2',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/155k1cQQLtlL8sxngDeqBNth4NITwdmk3/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
];

// Doc por versiones
const scriptL = [
  {
    id: 1,
    nombre: 'Script - Ciclo 2',
    description: 'Versión 1.',
    img: imgScript,
    path: 'https://docs.google.com/document/d/1p_EiIaXLRTP-FVluzL4SzhDQIRulR69r/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Script - Ciclo 2',
    description: 'Versión 2.',
    img: imgScript,
    path: 'https://docs.google.com/document/d/1S8c_chB33GL82CIWZ5vJvJSjyuzEkdps/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Script - Ciclo 2',
    description: 'Versión 3.',
    img: imgScript,
    path: 'https://docs.google.com/document/d/1OQZR5H7LOhnEFejIoOp1vvG47nW6Rkxs/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Script - Ciclo 2',
    description: 'Versión 4.',
    img: imgScript,
    path: 'https://docs.google.com/document/d/1Y3bTYNPMIKUDnCXG8WWMS9bfK4wJCP2T/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  
];

const actaRL = [
  {
    id: 1,
    nombre: 'Acta de reunión - Ciclo 2',
    description: 'Fase 1',
    img: imgActaMeet,
    path: 'https://docs.google.com/document/d/1zBl0qRik2Q6vl4AupR3RjvVQlQvFf69D/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Acta de reunión - Ciclo 2',
    description: 'Fase 2',
    img: imgActaMeet,
    path: 'https://docs.google.com/document/d/1RCEqTrLr7s6WjA1tbX9dN97cDw8cgcyl/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Acta de reunión - Ciclo 2',
    description: 'Fase 3',
    img: imgActaMeet,
    path: 'https://docs.google.com/document/d/194tNrAnolkQCcMgd3WvG1Wb8oajEnmDy/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Acta de reunión - Ciclo 2',
    description: 'Fase 4',
    img: imgActaMeet,
    path: 'https://docs.google.com/document/d/1W5D_BDEddPAI7ZItA7CFCjRFK7R6geau/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 5,
    nombre: 'Acta de reunión - Ciclo 2',
    description: 'Fase 5',
    img: imgActaMeet,
    path: 'https://docs.google.com/document/d/1V-8EdXTmEWw_MT-Yu1If0BA2BeXWGiH2/edit?usp=sharing&ouid=109380757462002703170&rtpof=true&sd=true',
  },
];

const actividadesNPL = [
  {
    id: 1,
    nombre: 'Registro de actividades no planeadas - Ciclo 2',
    description: 'Fase 1.',
    img: imgRANoPlan,
    path: 'https://docs.google.com/document/d/1xcQCZMmpKMMPXATTSHBF7r5ruVz7UM23/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  
];

const informesW = [
  {
    id: 1,
    nombre: 'Informe semanal - Ciclo 2',
    description: 'Semana 1',
    img: imgISemanal,
    path: 'https://docs.google.com/document/d/1Ry-RPSI_SQEFVi2OkfgtGBn9xEovrpcWhKYU-ivm6GI/edit?usp=share_link',
  },
  {
    id: 2,
    nombre: 'Informe semanal - Ciclo 2',
    description: 'Semana 2',
    img: imgISemanal,
    path: 'https://docs.google.com/document/d/1cqwFePZcBwQ36fhfzQPdji3i9fREKsrecFQ1C10ZUDs/edit?usp=share_link',
  },
  {
    id: 3,
    nombre: 'Informe semanal - Ciclo 2',
    description: 'Semana 3',
    img: imgISemanal,
    path: 'https://docs.google.com/document/d/1B9Qm-zj6ekV32TUGW4IB0gQaO0BZLsBL19j8rwn9I5I/edit?usp=share_link',
  },
  {
    id: 4,
    nombre: 'Informe semanal - Ciclo 2',
    description: 'Semana 4',
    img: imgISemanal,
    path: 'https://docs.google.com/document/d/1dULSJIspDdoJT1Q1a6R3Nb-VbkORjz5DY27RaduM21w/edit?usp=share_link',
  },
];

const listsCheq = [
  {
    id: 1,
    nombre: 'Lista de chequeo - Ciclo 2',
    description: 'Fase 1 y 2',
    img: imgLCheck,
    path: 'https://docs.google.com/document/d/1MLKUGR1UD-B6AK75WfhghcCs9EgFsvWA/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Lista de chequeo - Ciclo 2',
    description: 'Fase 3',
    img: imgLCheck,
    path: 'https://docs.google.com/document/d/1W4K05CJvEBkaqjSbkSHgt119vBvl-GpO/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
];

const listLogDefect = [
  {
    id: 1,
    nombre: 'Log de defectos - Ciclo 2',
    description: 'Fase 1',
    img: imgLogBugs,
    path: 'https://docs.google.com/document/d/1G8BRm5FFyYozFCwkrjV_jCzsRZpGJ6Ib/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Log de defectos - Ciclo 2',
    description: 'Fase 2',
    img: imgLogBugs,
    path: 'https://docs.google.com/document/d/1uEpi-BCBxNQiIhDilJCt6cDvviixmdQi/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Log de defectos - Ciclo 2',
    description: 'Fase 3',
    img: imgLogBugs,
    path: 'https://docs.google.com/document/d/1dlRX2DlLahMtTvcizzKHuA89dbIl3bLb/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
];

const listRSemanales = [
  {
    id: 1,
    nombre: 'Listado de reuniones semanales - Ciclo 2',
    description: 'Listado de Reuniones Semanales',
    img: imgLRSemana,
    path: 'https://docs.google.com/document/d/1ddWC027P3iZ41uvqsmUnBVqDkfoyO-4C/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
];

const docsMaestroList = [
  {
    id: 1,
    nombre: 'Documento maestro - Ciclo 2',
    description: 'Versión 1',
    img: imgDocMaster,
    path: 'https://docs.google.com/document/d/1d1tFCQHU74QSsaKiopN3Y--rKqyNXIVt/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Documento maestro - Ciclo 2',
    description: 'Versión 2',
    img: imgDocMaster,
    path: 'https://docs.google.com/document/d/1BoyHt4n3igRHNNuoIWkoSF10fly3T4qP/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Documento maestro - Ciclo 2',
    description: 'Versión 3',
    img: imgDocMaster,
    path: 'https://docs.google.com/document/d/1PrDrjXYKsS0fonjRxHfvWLjOlMkMy3cV/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Documento maestro - Ciclo 2',
    description: 'Versión 4',
    img: imgDocMaster,
    path: 'https://docs.google.com/document/d/1xJoB5e3teuFlN0ymrayXTzj5bLtMZdhq/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
];

// Docs por fase Ciclo2
const escenariosCL = [
  {
    id: 1,
    nombre: 'Escenarios de Calidad Fase 2',
    description: 'Escenario Desempeño',
    img: imgECalidad,
    path: 'https://docs.google.com/document/d/1dGuKfXz33kaXzdzDU2f5YzFx36rWUNG8/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Escenarios de Calidad Fase 2',
    description: 'Escenario Disponibilidad',
    img: imgECalidad,
    path: 'https://docs.google.com/document/d/1TjsO3HzE5hDnlrq8-I4fgiZKh8Re0YvI/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Escenarios de Calidad Fase 2',
    description: 'Escenario Escalabilidad',
    img: imgECalidad,
    path: 'https://docs.google.com/document/d/1mL1r8Vazi71_UsmqadIEEw-HZJFgcPG6/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Escenarios de Calidad Fase 2',
    description: 'Escenario Modificabilidad',
    img: imgECalidad,
    path: 'https://docs.google.com/document/d/18SK7DyeYIVQgFKdbal0PgIIoJblNU37x/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 5,
    nombre: 'Escenarios de Calidad Fase 2',
    description: 'Escenario Usabilidad',
    img: imgECalidad,
    path: 'https://docs.google.com/document/d/1tM4RTZBIxBv7gNIhGoy09rVrsbJJQzWs/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
];

const docsLRequerimientos = [
  {
    id: 1,
    nombre: 'Listas de chequeo y requerimientos',
    description: 'Lista de Chequeo de impacto',
    img: imgListCheckReq,
    path: 'https://docs.google.com/document/d/1JBDMTQlnLHpixGIFr905KvYHNeDsriHaEQn1lZlspSI/edit?usp=share_link',
  },
  {
    id: 2,
    nombre: 'Listas de chequeo y requerimientos',
    description: 'Lista de Chequeo de requerimientos',
    img: imgListCheckReq,
    path: 'https://docs.google.com/document/d/1Bd5RGap4WhDaM_dyoL1cFdUAk40Cq_e_BojpJku-0BM/edit?usp=share_link',
  },
  {
    id: 3,
    nombre: 'Listas de chequeo y requerimientos',
    description: 'Lista de Requerimientos Funcionales',
    img: imgListCheckReq,
    path: 'https://docs.google.com/document/d/1-F83o80aX10Bxv10cwnIL3BxFoiY9VBeb1JTEtcufdE/edit?usp=share_link',
  },
  {
    id: 4,
    nombre: 'Listas de chequeo y requerimientos Fase 2',
    description: 'Lista de Requerimientos Funcionales',
    img: imgListCheckReq,
    path: 'https://docs.google.com/document/d/1oqNI5jLVqwH5ynYQ1HgXsEamkzdOGp9iA8KtBwMLENc/edit?usp=share_link',
  },
  
];

const vistasAL = [
  {
    id: 1,
    nombre: 'Vista de Contexto Fase 2',
    description: 'Diagrama de la vista de contexto.',
    img: imgVistasA,
    path: 'https://drive.google.com/file/d/1aCd6c-ZNTsXzdLwAHdJjLNRiNkwrmLVr/view?usp=share_link',
  },
  {
    id: 2,
    nombre: 'Vista de Despliegue Fase 2',
    description: 'Diagrama de la vista de despliegue.',
    img: imgVistasA,
    path: 'https://drive.google.com/file/d/1AO-YLV9HWhs-2EKhxzlQBPX3jECsZLWe/view?usp=share_link',
  },
  {
    id: 3,
    nombre: 'Vista de Desarrollo Fase 2',
    description: 'Diagrama de la vista de desarrollo.',
    img: imgVistasA,
    path: 'https://drive.google.com/file/d/1nBHTnac0yOGHiVOyV9tGpi9NC9_Cnron/view?usp=share_link',
  },
  {
    id: 4,
    nombre: 'Vista de Funcional Fase 2',
    description: 'Diagrama de la vista de funcional.',
    img: imgVistasA,
    path: 'https://drive.google.com/file/d/1NLUqiykgao7_4XCv_N-3t_9SYmjlNlLC/view?usp=share_link',
  },
  {
    id: 5,
    nombre: 'Vista de Información Fase 2',
    description: 'Diagrama de la vista de funcional.',
    img: imgVistasA,
    path: 'https://drive.google.com/file/d/1l4cMag6rLiXycM2rYUCO4nHFSroTJwyX/view?usp=share_link',
  },
  {
    id: 6,
    nombre: 'Vista de Componentes Fase 2',
    description: 'Diagrama de la vista de componentes',
    img: imgVistasA,
    path: 'https://drive.google.com/file/d/1qptFX95BFw0HiHBFDkobRUT3LI6zJ6kB/view?usp=share_link',
  },
];

const vistaDecisionArquitectura = [

  {
    id: 1,
    nombre: 'Adptabilidad Fase 2',
    description: 'Documento de Adaptabilidad',
    img: imgVistasA,
    path: 'https://docs.google.com/document/d/1Gvpdx2379-wYmpma5HDMb9LFeHdUXv-6/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Agilidad Fase 2',
    description: 'Documento de Agilidad',
    img: imgVistasA,
    path: 'https://docs.google.com/document/d/1v9Or6Ae77Ce2dlYQhB3YmIHJ3cHfA8az/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Archivos de Configuracion Fase 2',
    description: 'Documento de Archivos de Configuracion',
    img: imgVistasA,
    path: 'https://docs.google.com/document/d/1kQbTzOGwwWrC4QEiW2DRlXl_K8S4q1ns/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Funcionalidad Completa Fase 2',
    description: 'Documento de Funcionalidad Completa',
    img: imgVistasA,
    path: 'https://docs.google.com/document/d/19VskdJac5AqCYFkamgt09-eT28PT2SUg/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 5,
    nombre: 'Mantenimiento Operativo y Correctivo - Fase 2',
    description: 'Diagrama Mantenimiento Operativo y Correctivo',
    img: imgVistasA,
    path: 'https://docs.google.com/document/d/1u8zeKGL26pCX0KBEQBTn-RMpzR48nBGA/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 6,
    nombre: 'Seguridad de la Informacion - Fase 2',
    description: 'Documento Seguridad de la Informacion',
    img: imgVistasA,
    path: 'https://docs.google.com/document/d/1mCMnSilZWoZuzuXYj9E-GyD1M8DAJT_A/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 7,
    nombre: 'Velocidad en la ejecucion - Fase 2',
    description: 'Documento de velocidad en la ejecucion',
    img: imgVistasA,
    path: 'https://docs.google.com/document/d/1GAwRgWheLUFn7vmZ9mOSdLGKri_jBwGR/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },


]; 

const detalleCasosPrueba = [
  {
    id: 1,
    nombre: 'Detalle de Caso de Prueba 1 - Fase 2',
    description: 'Registro tipo de señalización',
    img: imgACasosU,
    path: 'https://docs.google.com/document/d/1ixfcMC7ywY-kgtt4o7-l8CYZlgQqxBs1/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Detalle de Caso de Prueba 2 - Fase 2',
    description: 'Registro tipo de incidente',
    img: imgACasosU,
    path: 'https://docs.google.com/document/d/1dNvcMBkCluJBS7mdSOx4VHS_WFT0KTI0/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Detalle de Caso de Prueba 3 - Fase 2',
    description: 'Registro prioridad',
    img: imgACasosU,
    path: 'https://docs.google.com/document/d/13_Mf9r4V18pwkzYNrKVVcFHOu5UXdch9/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Detalle de Caso de Prueba 4 - Fase 2',
    description: 'Registro Localidad',
    img: imgACasosU,
    path: 'https://docs.google.com/document/d/1TE6nvAhOi8pJo-cDEJ3MlXLrw7C4ChN7/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 5,
    nombre: 'Detalle de Caso de Prueba 5 - Fase 2',
    description: 'Registro Incidente',
    img: imgACasosU,
    path: 'https://docs.google.com/document/d/1rF7KpZ1RtGbj5m2WX59iZNbp3IKNY3fd/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 6,
    nombre: 'Detalle de Caso de Prueba 6 - Fase 2',
    description: 'Registro Estado de Incidente',
    img: imgACasosU,
    path: 'https://docs.google.com/document/d/1dhSe3YD-epSMkBEYY-yRMZngyFJwB75D/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 7,
    nombre: 'Detalle de Caso de Prueba 7 - Fase 2',
    description: 'Registro Eliminar Usuario',
    img: imgACasosU,
    path: 'https://docs.google.com/document/d/104ZDu5n8MGLfHkc4kjr_ZP7trx1ZIXf0/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 8,
    nombre: 'Detalle de Caso de Prueba 8 - Fase 2',
    description: 'Registro Barrio',
    img: imgACasosU,
    path: 'https://docs.google.com/document/d/1dbgq2iN8uSIUPFSBMJhLxuDRMbmqHzqL/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 9,
    nombre: 'Detalle de Caso de Prueba 9 - Fase 2',
    description: 'Registro Posible solución',
    img: imgACasosU,
    path: 'https://docs.google.com/document/d/1qiEiak2bdvFyGOdb6RGzoLVnUWNLuiW9/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 10,
    nombre: 'Detalle de Caso de Prueba 10 - Fase 2',
    description: 'Registro Usuario',
    img: imgACasosU,
    path: 'https://docs.google.com/document/d/1Zas62TU3hnDiGLzjWAnTZJuI0BFxwvuH/edit?usp=sharing&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 11,
    nombre: 'Detalle de Caso de Prueba 11 - Fase 2',
    description: 'Recuperar Password',
    img: imgACasosU,
    path: 'https://docs.google.com/document/d/1dyKuh0LuN_dHSrdRiu8SQCrSHjJ2AC_o/edit?usp=sharing&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 12,
    nombre: 'Detalle de Caso de Prueba 12 - Fase 2',
    description: 'Iniciar Sesión',
    img: imgACasosU,
    path: 'https://docs.google.com/document/d/1sH_D2cweKJLW1zcfg0SSJ2dlqhtHu_VB/edit?usp=sharing&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 13,
    nombre: 'Detalle de Caso de Prueba 13 - Fase 2',
    description: 'Editar Usuario',
    img: imgACasosU,
    path: 'https://docs.google.com/document/d/1ChJtiY0eDy2_w4A5v5vkrz2nk0_oXvwu/edit?usp=sharing&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 14,
    nombre: 'Detalle de Caso de Prueba 14 - Fase 2',
    description: 'Detalle de Incidente',
    img: imgACasosU,
    path: 'https://docs.google.com/document/d/1QhGnbIpek7nHt08t9wHJasjsZkD2H_4T/edit?usp=sharing&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 15,
    nombre: 'Detalle de Caso de Prueba 15 - Fase 2',
    description: 'Consulta listado de Incidentes',
    img: imgACasosU,
    path: 'https://docs.google.com/document/d/1zkfSn8JAdw8wxdm0VppETU1VoAWijW9f/edit?usp=sharing&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 16,
    nombre: 'Detalle de Caso de Prueba 16 - Fase 2',
    description: 'Cerrar Sesión',
    img: imgACasosU,
    path: 'https://docs.google.com/document/d/1xohPgRrS5sqdi3hvD_37CeNXMMs6Pgs4/edit?usp=sharing&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 17,
    nombre: 'Detalle de Caso de Prueba 17 - Fase 2',
    description: 'Asignación solución',
    img: imgACasosU,
    path: 'https://docs.google.com/document/d/1Tx3ppFcmwW42mHDL2wjKA5O4WOniopgA/edit?usp=sharing&ouid=116060602621844401144&rtpof=true&sd=true',
  },
];

const vistaLaboratorios = [
{
    id: 1,
    nombre: 'JMeter Disponibilidad Fase 2',
    description: 'Documento Excel JMeter Disponibilidad',
    img: imgVistasA,
    path: 'https://docs.google.com/spreadsheets/d/1PiVhs7gBMSFRx1sqUaG9liQ6dDYKgge_/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Laboratorio Disponibilidad Fase 2',
    description: 'Documento de Disponibilidad JMeter',
    img: imgVistasA,
    path: 'https://docs.google.com/document/d/1G1FeoqEancVFxMZx1RvKjwdAO3UgWGrWMtlOCFc8ffk/edit?usp=share_link',
  },
  {
    id: 3,
    nombre: 'Laboratorio Escalabilidad y Desempeño Fase 2',
    description: 'Documento de Escalabilidad y Desempeño',
    img: imgVistasA,
    path: 'https://docs.google.com/spreadsheets/d/1LyWmWMrrx5si1oeqBeUtIAWRdMi2gJe-/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },


]; 

const postMordem = [

  {
    id: 1,
    nombre: 'PostMordem por Roles Ciclo 2',
    description: 'Detalle de Postmordem por Roles',
    img: imgVistasA,
    path: 'https://docs.google.com/presentation/d/1tk1tpOUJI6sDWTsifPq1s2UuU8XrpXr6OGktzWTAF50/edit?usp=share_link',
  },
  {
    id: 2,
    nombre: 'PostMordem Grupal Ciclo 2 ',
    description: 'Detalle PostMordem General',
    img: imgVistasA,
    path: 'https://docs.google.com/presentation/d/1ZuGtOH9SIROYL0PzK0IOSK-zonchg7XD16YMvLv0KQg/edit?usp=share_link',
  },
  {
    id: 3,
    nombre: 'Informe Postmordem Ciclo 2',
    description: 'Detalle PostMordem Ciclo 2 - Informe',
    img: imgVistasA,
    path: 'https://docs.google.com/document/d/1Wc0nt3gbn1jpz_X0TGMk01Fgg8hjESK6lurhO5-oJnU/edit?usp=share_link',
  },
];

const docsFase1 = [
  {
    id: 1,
    nombre: 'Acta de iniciación Fase 2',
    description: 'Conformación del equipo, objetivos, definición general del proyecto.',
    img: imgActaInit,
    path: 'https://docs.google.com/document/d/1olOzDqBN70rY9PJxmrWA9P6k3CbT10ho/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },

];
const docsFase2 = [
  {
    id: 1,
    nombre: 'Documento de estrategía Fase 2',
    description: 'Objetivo, estrategía, criterios de estrategía, etc.',
    img: imgDocEstrat,
    path: 'https://docs.google.com/document/d/1F3PFQWIsxDDbiLNj3EQSFSPp1W9GhgLB/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Plan de manejo de riesgos Fase 2',
    description: 'Introducción, riesgos, criterios de valoración, etc.',
    img: imgPMRiesgos,
    path: 'https://docs.google.com/document/d/1aii1sjxktsG4jxLs73M4R0CQJL2_FvwH/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Plan administración de configuración Fase 2',
    description: 'Objetivo, administración de la configuración de software, etc.',
    img: imgPAConfig,
    path: 'https://docs.google.com/document/d/1m1Jwdbd03Y2RoAhaUiVoUAjQ1CHNDjI8/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Plantilla de Estimaciones - Fase 2',
    description: 'Plan de Estimaciones COCOMO',
    img: imgPAConfig,
    path: 'https://docs.google.com/document/d/1rUyh30cFbkz9nGcJUQIXX2wKye87cNOKB1jraumyfSw/edit?usp=share_link',
  },
  {
    id: 5,
    nombre: 'Informe Gestion Riesgos - Fase 2',
    description: 'Plantilla de gestion de riesgos por fase',
    img: imgPAConfig,
    path: 'https://docs.google.com/spreadsheets/d/1jyMxW-JMapuPAjS0KG3bKhPv5izevWa_/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 6,
    nombre: 'Documento Estrategia - Fase 2',
    description: 'Plan definicio de estrategia',
    img: imgPAConfig,
    path: 'https://docs.google.com/document/d/1FI05NhNb-m-bZnNqnPxUPOscRXetzjCXO1b7Y5g62E4/edit?usp=share_link',
  },
   {
    id: 7,
    nombre: 'Estimacion de Esfuerzo - Fase 2',
    description: 'En este documento se define la Estimacion de Esfuerzo',
    img: imgPAConfig,
    path: 'https://docs.google.com/document/d/1HXM57H2PjqPCBKhzhLFszjxXuD_Zlc-I6KX4L7kes-k/edit?usp=share_link',
  },

];
const docsFase3 = [
  {
    id: 1,
    nombre: 'Plan detalle casos de uso Fase 2',
    description: 'Especificaciones de casos de uso, etc.',
    img: imgCasoUso,
    path: 'https://docs.google.com/document/d/14_x86dZfOWgfMN0XqG_mwCi20Ltmxzzn/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Escenarios de Calidad Fase 2',
    description: 'Especificaciones de escenarios de calidad, etc.',
    img: imgECalidad,
    path: 'none',
    listB: escenariosCL,
  },
  {
    id: 3,
    nombre: 'Modelo de dominio Fase 2',
    description: 'Plantilla de modelo de mominio, etc.',
    img: imgMDominio,
    path: 'https://docs.google.com/document/d/10OcO3xpMQ3-ZN0pBRZlzlKAp2P45ytWG2S4w7ZJMjR0/edit?usp=share_link',
  },
  {
    id: 4,
    nombre: 'Administración de requerimientos Fase 2',
    description: 'Objetivo, alcance, etc.',
    img: imgARequerimientos,
    path: 'https://docs.google.com/document/d/1sw7I6tyoUGPS8pIRaD7G3pUBHYnp66PXUwpqp_SWZq8/edit?usp=share_link',
  },
  {
    id: 5,
    nombre: 'Listas de chequeo y requerimientos Fase 2',
    description: 'Chequeo de impacto y de requerimientos, etc.',
    img: imgListCheckReq,
    path: 'none',
    listB: docsLRequerimientos,
  },
  {
    id: 6,
    nombre: 'Especificacion de requerimientos Fase 2',
    description: 'Especificacion de Escenarios de Calidad',
    img: imgARequerimientos,
    path: 'https://docs.google.com/document/d/1rO7-JxYU2uvMcBuKKE8RJtuBUQORkbOGxZ9KqrtUuYo/edit?usp=share_link',
  },
  {
    id: 7,
    nombre: 'Lista de chequeo de impacto Fase 2',
    description: 'Chequeo de impacto de cambios porupuestos',
    img: imgListCheckReq,
    path: 'https://docs.google.com/document/d/1rO7-JxYU2uvMcBuKKE8RJtuBUQORkbOGxZ9KqrtUuYo/edit?usp=share_link',
  },
  {
    id: 8,
    nombre: 'Requerimientos Funcionales Fase 2',
    description: 'Requerimientos Funcionales de la Aplicacion',
    img: imgARequerimientos,
    path: 'https://docs.google.com/document/d/17Uli2og5R44-EQ1Ju-ZX5sTcAEljQIOD3xFnodgvc8g/edit?usp=share_link',
  },
];
const docsFase4 = [
  {
    id: 1,
    nombre: 'Especificación Detallada de Tareas Fase 2',
    description: 'Sub división de tareas por artefacto, estimaciones tamaño y tiempo, etc.',
    img: imgEDT,
    path: 'https://docs.google.com/document/d/1gj_Cus5OTiXvs7uVn6s4OS-0NdgxVqZ3ckyjyB9jHrQ/edit?usp=share_link',
  },
  {
    id: 2,
    nombre: 'Plan de Calidad Fase 2',
    description: 'Alcance, audiencia, principios, actividades, etc.',
    img: imgPCCalidad,
    path: 'https://docs.google.com/document/d/1rE84rFbh0PalCsezRYVgi2pF_FzymYrm/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  
];
const docsFase5 = [
  {
    id: 1,
    nombre: 'Estilos Arquitectura Fase 2',
    description: 'Componenetes de presentación, modelo de negocio, persistencia, etc.',
    img: imgDocSDS,
    path: 'https://docs.google.com/document/d/11jgTBUgG1cTUsctYCilKb05CpCNIBmKyu6lyg9nGhLA/edit?usp=share_link',
  },
  {
    id: 2,
    nombre: 'Modelo de Datos Fase 2',
    description: 'Diagramas del modelo de datos.',
    img: imgModeloDatos,
    path: 'https://drive.google.com/file/d/1oMoiBgyC_hc5Lh_31YjPa1Qh6ysPOGzO/view?usp=share_link',
  },
  {
    id: 3,
    nombre: 'Modelo de Clases Fase 2',
    description: 'Diagramas del modelo de clases.',
    img: imgModeloClases,
    path: 'https://drive.google.com/file/d/1xPVyP_DM_MVGTBIPRHSMb8sPzVwhXIm2/view?usp=share_link',
  },
  {
    id: 4,
    nombre: 'Especificación de interfaz de usuario Fase 2',
    description: 'Mockups de prioridad del incidente.',
    img: imgEIUsuario,
    path: 'https://drive.google.com/file/d/1dVaO-1_CjwLHmhd6C0QmrntlM6Xhk_Z-/view?usp=share_link',
  },
  {
    id: 5,
    nombre: 'Vistas de Arquitectura - Fase 2',
    description: 'Diagramas de las vistas de arquitectura.',
    img: imgVistasA,
    path: 'none',
    listB: vistasAL,
  },
  {
    id: 6,
    nombre: 'Asiganación Casos de uso a componetes - Fase 2',
    description: 'Se asiganan los casos de uso a los componenetes por ciclo.',
    img: imgACasosU,
    path: 'https://docs.google.com/document/d/19MoxdEGHs0FsPwQ1-QWgjhj6BCn5ChX6/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 7,
    nombre: 'Especificación de diseño SDS Fase 2',
    description: 'Introducción, arquitectura de software, diseño detallado.',
    img: imgEDSDS,
    path: 'https://docs.google.com/document/d/18r0bpJqmdW4JGD7VHwTvDcD42-_Kgo7luc2_GAT24y0/edit?usp=share_link',
  },
  {
    id: 8,
    nombre: 'Decisiones de Arquitectura Fase 2',
    description: 'Se definen componentes de decision',
    img: imgBookJobs,
    path: 'none',
    listB: vistaDecisionArquitectura,

  },
];
const docsFase6 = [
  {
    id: 1,
    nombre: 'Plan de implementación Fase 2',
    description: 'Estandares de iplementación, planeación,.',
    img: imgModeloDatos,
    path: 'https://docs.google.com/document/d/1ffoiV8R6DuYZcc-Nj1m9khbQXvqJsK_z_fY1dfNAF3I/edit?usp=share_link',
  },
   {
    id: 2,
    nombre: 'Codificacion Git Hub - Integrantes ',
    description: 'Uso de los commit en la codificacion del proyecto',
    img: imgModeloDatos,
    path: 'https://docs.google.com/document/d/1jWaEmVfX203UZ2SH6XRj9T5xRQUaURoj4zt1rXavUvE/edit?usp=sharing',
  },
  {
    id: 3,
    nombre: 'Pruebas JUnit ',
    description: 'Especificacion de pruebas JUnit por cada modulo',
    img: imgModeloDatos,
    path: 'https://docs.google.com/spreadsheets/d/1i5SsxZaOtchPcfzsf4IGHccrc-og9O8X/edit?usp=sharing&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  
];
const docsFase7 = [
  {
    id: 1,
    nombre: 'Plan de pruebas Fase 2',
    description: 'Objetivo, Plan de pruebas de integración, etc.',
    img: imgDocSDS,
    path: 'https://docs.google.com/document/d/1W39SSH8-3M1enNoVYV4HE0azNl3wEuV0/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Pruebas de integración Fase 2',
    description: 'Casos de escenario, elementos a probar, criterios de aceptación o rechazo, etc.',
    img: imgModeloDatos,
    path: 'https://docs.google.com/document/d/1MuD9HaZwD_K6SE_2n7Je1RoEro6fIWRN/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Log de pruebas casos de prueba Fase 2',
    description: 'Log de registro de defectos para los casos de prueba',
    img: imgLCheck,
    path: 'https://docs.google.com/document/d/1syUbG8CgpZ85GUx1f6X-v0iS6hDVWEfX/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Detalle de Casos de Prueba Fase 2',
    description: 'Fecha, Pre-requisitos, acción usuario, respuesta, resultados, etc.',
    img: imgACasosU,
    path: 'none',
    listB: detalleCasosPrueba,
  },
  {
    id: 5,
    nombre: 'Pruebas Atributos de Calidad',
    description: 'JMETER Disponibilidad, Usabilidad, Escalabilidad y Desempeño',
    img: imgDocSDS,
    path: 'none',
    listB: vistaLaboratorios,
  },
  {
    id: 6,
    nombre: 'Pruebas de Usabilidad',
    description: 'Informe de pruebas de aceptacion',
    img: imgModeloDatos,
    path: 'https://docs.google.com/spreadsheets/d/1sY1KczTw9KsbpAaueozH48be8g5W8M7n7AtRk4vKWSg/edit?usp=sharing',
  },
   {
    id: 7,
    nombre: 'Manual de Usuario',
    description: 'Se especifica el manual de Usuario',
    img: imgDocSDS,
    path: 'https://docs.google.com/document/d/125G650MndOesz_I7v3_23GvnHGOsGHPloDqQ88hyKwc/edit?usp=sharing',
  },
   {
    id: 8,
    nombre: 'Manual Tecnico',
    description: 'Se especifica el manual tecnico',
    img: imgDocSDS,
    path: 'https://docs.google.com/document/d/1hMh9eURjneMmrcwsFncn9_Tn-MqGX9p6cuDWc7p3U30/edit?usp=sharing',
  },{
    id: 9,
    nombre: 'Pruebas Aceptacion',
    description: 'Se especifica el manual de Usuario',
    img: imgDocSDS,
    path: 'https://docs.google.com/document/d/1gjuiGPBxOsxbFommsESCd_sx7CbMmBpjrhNUfY_-ehg/edit?usp=drive_link',
  },
   {
    id: 10,
    nombre: 'Pruebas Atributos de Calidad 2',
    description: 'Se especifica el manual tecnico',
    img: imgDocSDS,
    path: 'https://docs.google.com/document/d/1XMikKI88uK7o4RAzk4ZhcxQdmsnxeZquIpdp75v3A7Q/edit?usp=drive_link',
  },
  
  
];

const docsFase8 = [

  {
    id: 1,
    nombre: 'Plantilla de COCOMO - Fase 2',
    description: 'Estimacion FP, Estimacion Basada en LOC, puntos de funcion, puntos casos de uso, y Estimacion de esfuerzo(Persona mes)',
    img: imgDocSDS,
    path: 'https://docs.google.com/spreadsheets/d/1YilfGSJ-QGWB16HFGTVx5ZD2BqjB42DM/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },

];

const docsFase9 = [

  {
    id: 1,
    nombre: 'PostMordem',
    description: 'Documentos de postMordem General y por Rol',
    img: imgDocSDS,
    path: 'none',
    listB: postMordem,
  },

];
// General docs
const docsW = [
  {
    id: 1,
    nombre: 'Scripts - Fase 2',
    description: 'Objetivo, criterios de entrada, entradas, actividades, salidas, criterios de salida.',
    img: imgScript,
    path: 'none',
    listB: scriptL,
  },
  {
    id: 2,
    nombre: 'Actas de reunión Fase 2',
    description: 'Información general sobre la planificación de una reunión',
    img: imgActaMeet,
    path: 'none',
    listB: actaRL,
  },
  {
    id: 3,
    nombre: 'Logs de defectos - Fase 2',
    description: 'Log de registro de defectos presentados',
    img: imgLogBugs,
    path: 'none',
    listB: listLogDefect,
  },
  {
    id: 4,
    nombre: 'Documentos maestro - Fase 2',
    description: 'Documento maestro, versión, URL, fecha de modificación y creación',
    img: imgDocMaster,
    path: 'none',
    listB: docsMaestroList,
  },
  {
    id: 5,
    nombre: 'Control de asiganciones - Fase 2',
    description: 'Asiganción de tareas, tiempo estimado, tiempo real, diferencia, fecha de entrega',
    img: imgControlAsig,
    path: 'https://docs.google.com/spreadsheets/d/11ZlihEAR1eEhT_5FYeKgYsW64HPbofwT/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
    // Aqui
  {
    id: 6,
    nombre: 'Listado de reuniones semanales - Fase 2',
    description: 'Fecha, Inicio, Fin, Duración y descripción.',
    img: imgLRSemana,
    path: 'none',
    listB: listRSemanales,
  },
  {
    id: 7,
    nombre: 'Registro de actividades no planeadas - Fase 2',
    description: 'Fecha, Hora, Fin, Actividad y Tipo.',
    img: imgRANoPlan,
    path: 'none',
    listB: actividadesNPL,
  },
  {
    id: 8,
    nombre: 'Informes semanales - Fase 2',
    description: 'Descripción del rendimieto semanal.',
    img: imgISemanal,
    path: 'none',
    listB: informesW,
  },
  {
    id: 9,
    nombre: 'Listas de chequeo - Fase 2',
    description: 'Documento, Descripción, Fecha de entrega, etc.',
    img: imgLCheck,
    path: 'none',
    listB: listsCheq,
  },
];

const bitacoras = [
  {
    id: 1,
    nombre: 'Bitácora de tiempos - LD - Ciclo 2',
    description: 'Registro de tiempos lider de desarrollo',
    img: imgBitacora,
    path: 'none',
    listB: btLD,
  },
  {
    id: 2,
    nombre: 'Bitácora de tiempos - LE - Ciclo 2',
    description: 'Registro de tiempos lider de equipo',
    img: imgBitacora,
    path: 'none',
    listB: btLE,
  },
  {
    id: 3,
    nombre: 'Bitácora de tiempos - LC - Ciclo 2',
    description: 'Registro de tiempos lider de calidad',
    img: imgBitacora,
    path: 'none',
    listB: btLC,
  },
  {
    id: 4,
    nombre: 'Bitácora de tiempos - LA - Ciclo 2',
    description: 'Registro de tiempos lider de arquitectura',
    img: imgBitacora,
    path: 'none',
    listB: btLA,
  },
  {
    id: 5,
    nombre: 'Bitácora de tiempos - LS - Ciclo 2',
    description: 'Registro de tiempos lider de soporte',
    img: imgBitacora,
    path: 'none',
    listB: btLS,
  },
  {
    id: 6,
    nombre: 'Bitácora de tiempos - LP - Ciclo 2',
    description: 'Registro de tiempos lider de planeación',
    img: imgBitacora,
    path: 'none',
    listB: btLP,
  },
];

const resumenesActividades = [
  {
    id: 1,
    nombre: 'Resumen de actividades - LD - Ciclo 2',
    description: 'Registro de actividades semanales lider de desarrollo',
    img: imgResumenActividades,
    path: 'none',
    listB: RActividadesLD,
  },
  {
    id: 2,
    nombre: 'Resumen de actividades - LE - Ciclo 2',
    description: 'Registro de actividades semanales lider de equipo',
    img: imgResumenActividades,
    path: 'none',
    listB: RActividadesLE,
  },
  {
    id: 3,
    nombre: 'Resumen de actividades - LC - Ciclo 2',
    description: 'Registro de actividades semanales lider de calidad',
    img: imgResumenActividades,
    path: 'none',
    listB: RActividadesLC,
  },
  {
    id: 4,
    nombre: 'Resumen de actividades - LA - Ciclo 2',
    description: 'Registro de actividades semanales lider de arquitectura',
    img: imgResumenActividades,
    path: 'none',
    listB: RActividadesLA,
  },
  {
    id: 5,
    nombre: 'Resumen de actividades - LS - Ciclo 2',
    description: 'Registro de actividades semanales lider de soporte',
    img: imgResumenActividades,
    path: 'none',
    listB: RActividadesLS,
  },
  {
    id: 6,
    nombre: 'Resumen de actividades - LP - Ciclo 2',
    description: 'Registro de actividades semanales lider de planeación',
    img: imgResumenActividades,
    path: 'none',
    listB: RActividadesLP,
  },
];

const cuadernoTrabajosLE = [

   {
    id: 1,
    nombre: 'Cuadernos de trabajos - LE',
    description: 'Fase 1 - Ciclo 2',
    img: imgBookJobs,
    path: 'https://docs.google.com/document/d/1Yi_UfRoMAPC0IJos2QtBbgaotqGk36bs/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Cuadernos de trabajos - LE',
    description: 'Fase 2 - Ciclo 2',
    img: imgBookJobs,
    path: 'https://docs.google.com/document/d/1nPdBg9wfpZrDH0GLL6Hlg18HKdzbaOCO/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Cuadernos de trabajos - LE',
    description: 'Fase 3 - Ciclo 2',
    img: imgBookJobs,
    path: 'https://docs.google.com/document/d/1RrrXP9rGyQIsHkpCu5NKXZpRUy3mBMsz/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Cuadernos de trabajos - LE',
    description: 'Fase 4 - Ciclo 2',
    img: imgBookJobs,
    path: 'https://docs.google.com/document/d/13cjIDkgSa3CZPjLeU1Jk177Au9JuFVBB/edit?usp=sharing&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 5,
    nombre: 'Cuadernos de trabajos - LE',
    description: 'Fase 5 - Ciclo 2',
    img: imgBookJobs,
    path: 'https://docs.google.com/document/d/1_JAL9ruOMZkP5uDlQQ4SNranQWLm1Kmu/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },

]; 

const cuadernosDeTrabajos = [
  {
    id: 1,
    nombre: 'Cuaderno de trabajos - LD - Ciclo 2',
    description: 'Cuaderno de trabajos del lider de desarrollo',
    img: imgBookJobs,
    path: 'https://docs.google.com/document/d/1vnLql7PbhBSWeC9I3RAaBsLNGSXxjxUd/edit?usp=sharing&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Cuaderno de trabajos - LE - Ciclo 2',
    description: 'Cuaderno de trabajos del lider de equipo',
    img: imgBookJobs,
    path: 'none',
    listB: cuadernoTrabajosLE,
  },
  {
    id: 3,
    nombre: 'Cuaderno de trabajos - LC - Ciclo 2',
    description: 'Cuaderno de trabajos del lider de calidad',
    img: imgBookJobs,
    path: 'https://docs.google.com/document/d/1Xo8GNak6B2pDDv6LnLP4hZphuhH5vTZG/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Cuaderno de trabajos - LA - Ciclo 2',
    description: 'Cuaderno de trabajos del lider de arquitectura',
    img: imgBookJobs,
    path: 'https://docs.google.com/document/d/1pqksoGviJCrIJvA3352LyfCTXKDVzfO4/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 5,
    nombre: 'Cuaderno de trabajos - LS - Ciclo 2',
    description: 'Cuaderno de trabajos del lider de soporte',
    img: imgBookJobs,
    path: 'https://docs.google.com/document/d/1vSRoyyniTTG55FfSMhvJyUQCdLx3t1OV/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
  {
    id: 6,
    nombre: 'Cuadernos de trabajos - LP - Ciclo 2',
    description: 'Cuadernos de trabajos del lider de planeación',
    img: imgBookJobs,
    path: 'https://docs.google.com/document/d/14pCMyar7MMrQonaNmvlxjF7fhtLlRhyC/edit?usp=share_link&ouid=109380757462002703170&rtpof=true&sd=true',
  },
];

const useGetDocs = () => {
  const [DocsF1, setDocsF1] = useState(docsFase1);
  const [DocsF2, setDocsF2] = useState(docsFase2);
  const [DocsF3, setDocsF3] = useState(docsFase3);
  const [DocsF4, setDocsF4] = useState(docsFase4);
  const [DocsF5, setDocsF5] = useState(docsFase5);
  const [DocsF6, setDocsF6] = useState(docsFase6);
  const [DocsF7, setDocsF7] = useState(docsFase7);
  const [DocsF8, setDocsF8] = useState(docsFase8);
  const [DocsF9, setDocsF9] = useState(docsFase9); 
  const [WDocs, setWDocs] = useState(docsW);
  const [bitac, setBitac] = useState(bitacoras);
  const [RActividades, setRActividades] = useState(resumenesActividades);
  const [booksJobs, setBooksJobs] = useState(cuadernosDeTrabajos);

  function reStartDocsF1() {
    setDocsF1(docsFase1);
  }

  function reStartDocsF2() {
    setDocsF2(docsFase2);
  }

  function reStartDocsF3() {
    setDocsF3(docsFase3);
  }

  function reStartDocsF4() {
    setDocsF4(docsFase4);
  }

  function reStartDocsF5() {
    setDocsF5(docsFase5);
  }

  function reStartDocsF6() {
    setDocsF6(docsFase6);
  }

  function reStartDocsF7() {
    setDocsF7(docsFase7);
  }

  function reStartDocsF8(){
    setDocsF8(docsFase8); 
  }

  function reStartDocsF9(){
    setDocsF9(docsFase9); 
  }

  function reStartWD() {
    setWDocs(docsW);
  }

  function reStartB() {
    setBitac(bitacoras);
  }

  function reStartRA() {
    setRActividades(resumenesActividades);
  }

  function reStartBJ() {
    setBooksJobs(cuadernosDeTrabajos);
  }

  return {
    DocsF1,
    DocsF2,
    DocsF3,
    DocsF4,
    DocsF5,
    DocsF6,
    DocsF7,
    DocsF8,
    DocsF9,
    WDocs,
    bitac,
    RActividades,
    booksJobs,
    reStartDocsF1,
    reStartDocsF2,
    reStartDocsF3,
    reStartDocsF4,
    reStartDocsF5,
    reStartDocsF6,
    reStartDocsF7,
    reStartDocsF8,
    reStartDocsF9, 
    reStartWD,
    reStartB,
    reStartRA,
    reStartBJ,
  };
};

export default useGetDocs;
