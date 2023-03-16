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
import imgPostM from '@images/imgPostM.jpg';
import imgSUMQ from '@images/imgSUMQ.jpg';

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
  {
    id: 4,
    nombre: 'Bitácora de tiempos - LD',
    description: 'Semana 4',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/18t7moiuPjRkHV7CX0QALS77ejN60cL6g/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 5,
    nombre: 'Bitácora de tiempos - LD',
    description: 'Semana 5',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1BGmqvPEaMsoGL6cA7IZh_CeyBWF3I1LW/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 6,
    nombre: 'Bitácora de tiempos - LD',
    description: 'Semana 6',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1-Fhi1PZWXENaMYtSM9GN6gqdxXddfY6y/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
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
  {
    id: 4,
    nombre: 'Bitácora de tiempos - LE',
    description: 'Semana 4',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1jxK8P7NVkoXR9NQo-v6u0ejq_B5VUx29Ve0JJJs1skc/edit?usp=share_link',
  },
  {
    id: 5,
    nombre: 'Bitácora de tiempos - LE',
    description: 'Semana 5',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1EvSpoewGv4ogdbbgHsGPQkhRlhC6KHvohxfsJb5iq3U/edit?usp=share_link',
  },
  {
    id: 6,
    nombre: 'Bitácora de tiempos - LE',
    description: 'Semana 6',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1WpyuCC5MGiI2UW6QZBW_bBjmQavbp4813iRL7VNCroA/edit?usp=share_link',
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
  {
    id: 3,
    nombre: 'Bitácora de tiempos - LC',
    description: 'Semana 3',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/19z16aYIrkeVB6W_6GJuB_hktTexo2Ypm/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Bitácora de tiempos - LC',
    description: 'Semana 4',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/14YSegjcVUoMzdcEzOlElSrJEmPOTJhtG/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 5,
    nombre: 'Bitácora de tiempos - LC',
    description: 'Semana 5',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/16n__CqzikUyuKrGeG6jEt1fZDDlUGwAH/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 6,
    nombre: 'Bitácora de tiempos - LC',
    description: 'Semana 6',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1ViFD4xgjiQrQLjU5O0XmtrP3s_imemdj/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
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
  {
    id: 3,
    nombre: 'Bitácora de tiempos - LA',
    description: 'Semana 3',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1gpRXsC3hX1yQEhgbhcig8CujxH6rdSPD/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Bitácora de tiempos - LA',
    description: 'Semana 4',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1UoTc1cAUzNLJYEbSmR3hWDhi2b-EaBGS/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 5,
    nombre: 'Bitácora de tiempos - LA',
    description: 'Semana 5',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1tlhadBnpG7AwxCArc_zx_cuwxiHwYDDw/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 6,
    nombre: 'Bitácora de tiempos - LA',
    description: 'Semana 6',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/16VmQpvGwQhUh7sU4xrAL_WDu583MugWw/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
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
    id: 2,
    nombre: 'Bitácora de tiempos - LS',
    description: 'Semana 2',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1yNFXhD_UHkI8JVmfdR4t0kbvf_y6CQcc/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Bitácora de tiempos - LS',
    description: 'Semana 3',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1ARLs6YylWb6hpH7Yd6GOzA8IECuN8eIw/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Bitácora de tiempos - LS',
    description: 'Semana 4',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1x9GPRsWSHrt9OQPQ0zqeciuKoYiS36nG/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 5,
    nombre: 'Bitácora de tiempos - LS',
    description: 'Semana 5',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1dw62QRVVCmj2Td-HUqNYQYuIzRYvk0eq/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 6,
    nombre: 'Bitácora de tiempos - LS',
    description: 'Semana 6',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1k7LW7hMV-Lv9rIuIHzTEulhnc6u8mhkY/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
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
  {
    id: 4,
    nombre: 'Bitácora de tiempos - LP',
    description: 'Semana 4',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1nucrstN6Dc5Zqn95Mvk780CKZOVIeo1J/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 5,
    nombre: 'Bitácora de tiempos - LP',
    description: 'Semana 5',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1OlgF1rBu_42qPR9pWSpOOIcDt17YELPp/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 6,
    nombre: 'Bitácora de tiempos - LP',
    description: 'Semana 6',
    img: imgBitacora,
    path: 'https://docs.google.com/document/d/1q_gcQOKQnKywVW_olrRZ-SyJnq3bM14E/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
];

// Resumen de actividades por rol
const RActividadesLD = [
  {
    id: 1,
    nombre: 'Resumen de actividades - LD',
    description: 'Semana 3',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/1Mf-HYYkweJ3hsWcDAtTegUkffqk8jSPw/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Resumen de actividades - LD',
    description: 'Semana 4',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/1ONI2p4MdHylzuhQ4TTAMT7Z4XeZzyT8r/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Resumen de actividades - LD',
    description: 'Semana 5',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/1neZo6yeEkgjBN8pV-gipstbig8HQZtaE/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Resumen de actividades - LD',
    description: 'Semana 6',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/1lrk439d0yBzv7sujbsOAK0GAgz8-lyli/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
];

const RActividadesLE = [
  {
    id: 1,
    nombre: 'Resumen de actividades - LE',
    description: 'Semana 3',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/1W__alnxdRI14PaO22LjQ_UEHYOgHe8Jj/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
];

const RActividadesLC = [
  {
    id: 1,
    nombre: 'Resumen de actividades - LC',
    description: 'Semana 3',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/1d3xx7UoxQf0EDgrc4Zm3JnJbrteJQgl3/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Resumen de actividades - LC',
    description: 'Semana 4',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/1aq90KfqGMvSdS5f3-cGhxqjhZgXcVyYe/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Resumen de actividades - LC',
    description: 'Semana 5',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/1zV_047QkmmPoMObx8eopO9vZsWaGcwC8/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Resumen de actividades - LC',
    description: 'Semana 6',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/1DjdgNVXG4dKTG5N5yBx4qFOO-ZhaMH_p/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
];

const RActividadesLA = [
  {
    id: 1,
    nombre: 'Resumen de actividades - LA',
    description: 'Semana 3',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/1ETGfiraC17M1ZSfondTlhsN1VeFM_KZL/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Resumen de actividades - LA',
    description: 'Semana 4',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/1fwXCz9MuwtRWS_V4A-ERGSF2eSTrsaLw/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Resumen de actividades - LA',
    description: 'Semana 5',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/1e0nQvoQfUUF44FtbImlVxKgW81fk44ng/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Resumen de actividades - LA',
    description: 'Semana 6',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/1B08RWIXfFu2RvxD_c3qLK5lEY4XeEdUM/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
];

const RActividadesLS = [
  {
    id: 1,
    nombre: 'Resumen de actividades - LS',
    description: 'Semana 3',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/15GY0N2vYgrnIVc_rJ3QfqH0OCyF8GgsR/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Resumen de actividades - LS',
    description: 'Semana 4',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/1bFofj4cxV_xTShmRlwAQEow9fAv9KlsM/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Resumen de actividades - LS',
    description: 'Semana 5',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/16MMeMan6L0DUFcCLOQDqypj6vGaZRWnV/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Resumen de actividades - LS',
    description: 'Semana 6',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/19uBLsMTFz5_K-lMIKAmgAZiaUsK0p3DE/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
];

const RActividadesLP = [
  {
    id: 1,
    nombre: 'Resumen de actividades - LP',
    description: 'Semana 3',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/18l6l0nJHmMpA2YqJwvvYbxI6jJMkWMtZ/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Resumen de actividades - LP',
    description: 'Semana 4',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/18yyHSEqkHV-Lcc3MPqv-JXA7OoeMNl6A/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Resumen de actividades - LP',
    description: 'Semana 5',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/1tjQlfuX-UVECN3-B2m-ZtAAC36uuff5w/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Resumen de actividades - LP',
    description: 'Semana 6',
    img: imgResumenActividades,
    path: 'https://docs.google.com/document/d/1Q0uS_aCV9nai3XphGb8nBAVKW8XQoYHu/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
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
  {
    id: 3,
    nombre: 'Script',
    description: 'Versión 3.',
    img: imgScript,
    path: 'https://docs.google.com/document/d/1wBc93yS6qKq2Xci3wAE5QozaM5DhyYIs/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Script',
    description: 'Versión 4.',
    img: imgScript,
    path: 'https://docs.google.com/document/d/1s1VyBob8HxaNb4SxKpl_aS2a6kGbM9wI/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 5,
    nombre: 'Script',
    description: 'Versión 5.',
    img: imgScript,
    path: 'https://docs.google.com/document/d/1O46fIcTf-Zw9Qt5TO_qpkMRBgpyo7FF5/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
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
  {
    id: 3,
    nombre: 'Acta de reunión',
    description: 'Fase 3',
    img: imgActaMeet,
    path: 'https://docs.google.com/document/d/180Y0ENccz78yg5c3A-goRL-itYHVxWF1/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Acta de reunión',
    description: 'Fase 4',
    img: imgActaMeet,
    path: 'https://docs.google.com/document/d/1_p7n4KX4EY2wJXrT2HlbIUJSTOURU7XO/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 5,
    nombre: 'Acta de reunión',
    description: 'Fase 5',
    img: imgActaMeet,
    path: 'https://docs.google.com/document/d/1LB8P93kCWn9FVgjFNqdb1BYao4FexClk/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
];

const actividadesNPL = [
  {
    id: 1,
    nombre: 'Registro de actividades no planeadas',
    description: 'Fase 3.',
    img: imgRANoPlan,
    path: 'https://docs.google.com/document/d/1VlCsBJAQEQiIADwmweUnyU_JxoS1oNrH/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Registro de actividades no planeadas',
    description: 'Fase 4.',
    img: imgRANoPlan,
    path: 'https://docs.google.com/document/d/1diTr7d1hEpRlXq5Srv2Z735TW_XVOzhc/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Registro de actividades no planeadas',
    description: 'Fase 5.',
    img: imgRANoPlan,
    path: 'https://docs.google.com/document/d/1A_EyHRx_01PjPOm2r_QAp-j9BFLewcEh/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Registro de actividades no planeadas',
    description: 'Fase 6.',
    img: imgRANoPlan,
    path: 'https://docs.google.com/document/d/1uWOC4DJp_xe5OSKW2ozDs_KDLzaA9ew7/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
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
  {
    id: 2,
    nombre: 'Informe semanal',
    description: 'Semana 2',
    img: imgISemanal,
    path: 'https://docs.google.com/document/d/1V4HUPfUuTLM7CObRs7cDDnHcXnZvbAL3JVmWLnb5kTI/edit?usp=share_link',
  },
  {
    id: 3,
    nombre: 'Informe semanal',
    description: 'Semana 3',
    img: imgISemanal,
    path: 'https://docs.google.com/document/d/1lbPhXEahhHh4BFEYFwXeTF5vcGX8KTLqk9CSpvm996c/edit?usp=share_link',
  },
  {
    id: 4,
    nombre: 'Informe semanal',
    description: 'Semana 4',
    img: imgISemanal,
    path: 'https://docs.google.com/document/d/132V_bWVXiaLiLg70ds89RSimqTZYRwrqMW0n9aOt7gg/edit?usp=share_link',
  },
  {
    id: 5,
    nombre: 'Informe semanal',
    description: 'Semana 5',
    img: imgISemanal,
    path: 'https://docs.google.com/document/d/11WHUNWm_XtlurKUNJw0cyMeunyPmOWNEGLrnCXWgF5c/edit?usp=share_link',
  },
];

const listsCheq = [
  {
    id: 1,
    nombre: 'Lista de chequeo',
    description: 'Fase 1 y 2',
    img: imgLCheck,
    path: 'https://docs.google.com/document/d/1GM0n9Db367S_FDpeRhMlJznX166zJLn0/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Lista de chequeo',
    description: 'Fase 3',
    img: imgLCheck,
    path: 'https://docs.google.com/document/d/18Y7hmzk9QOs_Wi6z7fADE2yaOlqX1tYp/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Lista de chequeo',
    description: 'Fase 4',
    img: imgLCheck,
    path: 'https://docs.google.com/document/d/1GgldfCj07zTOIRB0vPfjQB22bNfd6v3F/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Lista de chequeo',
    description: 'Fase 5',
    img: imgLCheck,
    path: 'https://docs.google.com/document/d/1Z2zQ36BrN-kmsDlNrO74yh171tW2tqdO/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 5,
    nombre: 'Lista de chequeo',
    description: 'Fase 6',
    img: imgLCheck,
    path: 'https://docs.google.com/document/d/1kaDcFrqa2-3DS8DKPNzY9oJONCAqPFqU/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
];

const listLogDefect = [
  {
    id: 1,
    nombre: 'Log de defectos',
    description: 'Fase 1',
    img: imgLogBugs,
    path: 'https://docs.google.com/document/d/1qp8wBitKZ5mcHW_CMLix8KDa2youndt_/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Log de defectos',
    description: 'Fase 2',
    img: imgLogBugs,
    path: 'https://docs.google.com/document/d/1XK1OKHkWl1LuICn2TQhEBjGxfZoXUUQ3/edit?usp=sharing&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Log de defectos',
    description: 'Fase 3',
    img: imgLogBugs,
    path: 'https://docs.google.com/document/d/1eWW1KOkdJ4Bh1S0qSqWuDTZzIK7NhCZF/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Log de defectos',
    description: 'Fase 4',
    img: imgLogBugs,
    path: 'https://docs.google.com/document/d/1mYFjePY2jp2wrnUlBMz__EhfXI61HQ3U/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 5,
    nombre: 'Log de defectos',
    description: 'Fase 5',
    img: imgLogBugs,
    path: 'https://docs.google.com/document/d/142Z9ZQnOdV33hN6wjOnksvaMf85go9tm/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
];

const listRSemanales = [
  {
    id: 1,
    nombre: 'Listado de reuniones semanales',
    description: 'Semana 2',
    img: imgLRSemana,
    path: 'https://docs.google.com/document/d/1pfm5j6S_vS9YjJjLnNhIpEM4t9Yhvl3I/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Listado de reuniones semanales',
    description: 'Semana 3',
    img: imgLRSemana,
    path: 'https://docs.google.com/document/d/1waQ_IpFUk0drTbc1SkqC4C2R3f7kY5hN/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Listado de reuniones semanales',
    description: 'Semana 4',
    img: imgLRSemana,
    path: 'https://docs.google.com/document/d/1We_f3LQ82mNBbBSelBIGfagEh1gIZO6M/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Listado de reuniones semanales',
    description: 'Semana 5',
    img: imgLRSemana,
    path: 'https://docs.google.com/document/d/1Mug_esoh2bqapYEtgkURNlM2rq_WoDKn/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 5,
    nombre: 'Listado de reuniones semanales',
    description: 'Semana 6',
    img: imgLRSemana,
    path: 'https://docs.google.com/document/d/19DzEYb7BAMBEiNoKmmN-uVJoN6AXxm_H/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
];

const docsMaestroList = [
  {
    id: 1,
    nombre: 'Documento maestro',
    description: 'Versión 1',
    img: imgDocMaster,
    path: 'https://docs.google.com/document/d/1tlNIGe01F7oX9B1qrS_JjN9qAlDI_BfS/edit?usp=sharing&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Documento maestro',
    description: 'Versión 2',
    img: imgDocMaster,
    path: 'https://docs.google.com/document/d/1p9bb48SEvKk1RAdBAzkoRgOYKycH0WqS/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Documento maestro',
    description: 'Versión 3',
    img: imgDocMaster,
    path: 'https://docs.google.com/document/d/1Txkp50YY-XiA9TnB2Br8t80XVk-CzbLU/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Documento maestro',
    description: 'Versión 4',
    img: imgDocMaster,
    path: 'https://docs.google.com/document/d/1aYnJi4oAa2LTv5hyridNHpaoLLH-BiaJ/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 5,
    nombre: 'Documento maestro',
    description: 'Versión 5',
    img: imgDocMaster,
    path: 'https://docs.google.com/document/d/1PQ4EoYNqFk-rxiD7OE9dR4AuzVhC66KZ/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
];

// Docs por fase
const escenariosCL = [
  {
    id: 1,
    nombre: 'Escenarios de Calidad',
    description: 'Escenario Desempeño',
    img: imgECalidad,
    path: 'https://docs.google.com/document/d/1y_xGib0Ea3riwEavrEivNBrhbE2J_jEH/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Escenarios de Calidad',
    description: 'Escenario Disponibilidad',
    img: imgECalidad,
    path: 'https://docs.google.com/document/d/1TjsO3HzE5hDnlrq8-I4fgiZKh8Re0YvI/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Escenarios de Calidad',
    description: 'Escenario Escalabilidad',
    img: imgECalidad,
    path: 'https://docs.google.com/document/d/1mL1r8Vazi71_UsmqadIEEw-HZJFgcPG6/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Escenarios de Calidad',
    description: 'Escenario Modificabilidad',
    img: imgECalidad,
    path: 'https://docs.google.com/document/d/1BH_UEVMOg3XzcRjZUG5mf1Ld8EYVl_42/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 5,
    nombre: 'Escenarios de Calidad',
    description: 'Escenario Usabilidad',
    img: imgECalidad,
    path: 'https://docs.google.com/document/d/1mxwmQ43zNk9GJJRzMLkOfddg2HncAgQW/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
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
];

const vistasAL = [
  {
    id: 1,
    nombre: 'Vista de Contexto',
    description: 'Diagrama de la vista de contexto.',
    img: imgVistasA,
    path: 'https://app.luminpdf.com/viewer/641371101085138e93a43c8a',
  },
  {
    id: 2,
    nombre: 'Vista de Despliegue',
    description: 'Diagrama de la vista de despliegue.',
    img: imgVistasA,
    path: 'https://app.luminpdf.com/viewer/641371571085138e93a457d0',
  },
  {
    id: 3,
    nombre: 'Vista de Desarrollo',
    description: 'Diagrama de la vista de desarrollo.',
    img: imgVistasA,
    path: 'https://app.luminpdf.com/viewer/641375eb1085138e93a5ecdb',
  },
  {
    id: 4,
    nombre: 'Vista de Funcional',
    description: 'Diagrama de la vista de funcional.',
    img: imgVistasA,
    path: 'https://app.luminpdf.com/viewer/641371f61085138e93a49b4d',
  },
  {
    id: 5,
    nombre: 'Vista de Información',
    description: 'Diagrama de la vista de funcional.',
    img: imgVistasA,
    path: 'https://app.luminpdf.com/viewer/6413723a1085138e93a4b1c6',
  },
];

const docsFase1 = [
  {
    id: 1,
    nombre: 'Acta de iniciación',
    description: 'Conformación del equipo, objetivos, definición general del proyecto.',
    img: imgActaInit,
    path: 'https://docs.google.com/document/d/1olOzDqBN70rY9PJxmrWA9P6k3CbT10ho/edit?usp=sharing&ouid=114130291230236195537&rtpof=true&sd=true',
  },
];
const docsFase2 = [
  {
    id: 1,
    nombre: 'Documento de estrategía',
    description: 'Objetivo, estrategía, criterios de estrategía, etc.',
    img: imgDocEstrat,
    path: 'https://docs.google.com/document/d/122sPOVfQ4PPq5hz_5mUkL8dq0yjnerl9/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Plan de manejo de riesgos',
    description: 'Introducción, riesgos, criterios de valoración, etc.',
    img: imgPMRiesgos,
    path: 'https://docs.google.com/document/d/1-bt_JF9xrTdHnij0UOzmBjYjDyLwmz-m/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Plan administración de configuarción',
    description: 'Objetivo, administración de la configuración de software, etc.',
    img: imgPAConfig,
    path: 'https://docs.google.com/document/d/16LlmpstYGVRMBeWP2dF_PXxyuNYGCXOx/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
];
const docsFase3 = [
  {
    id: 1,
    nombre: 'Plan detalle casos de uso',
    description: 'Especificaciones de casos de uso, etc.',
    img: imgCasoUso,
    path: 'https://docs.google.com/document/d/1uJ_O8ljsHuDl14dwLneguvwazuMD-M96/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Escenarios de Calidad',
    description: 'Especificaciones de escenarios de calidad, etc.',
    img: imgECalidad,
    path: 'none',
    listB: escenariosCL,
  },
  {
    id: 3,
    nombre: 'Modelo de dominio',
    description: 'Plantilla de modelo de mominio, etc.',
    img: imgMDominio,
    path: 'https://docs.google.com/document/d/1-s1iEjvDy65c1XCxY7OLw5lW3pkfFvePbU7SOQndI7U/edit?usp=share_link',
  },
  {
    id: 4,
    nombre: 'Administración de requerimientos',
    description: 'Objetivo, alcance, etc.',
    img: imgARequerimientos,
    path: 'https://docs.google.com/document/d/12FNFOydalrAtLOEP9jffZACywiq8hmle8hXzVXtLh9I/edit?usp=share_link',
  },
  {
    id: 5,
    nombre: 'Listas de chequeo y requerimientos',
    description: 'Chequeo de impacto y de requerimientos, etc.',
    img: imgListCheckReq,
    path: 'none',
    listB: docsLRequerimientos,
  },
];
const docsFase4 = [
  {
    id: 1,
    nombre: 'Especificación Detallada de Tareas',
    description: 'Sub división de tareas por artefacto, estimaciones tamaño y tiempo, etc.',
    img: imgEDT,
    path: 'https://docs.google.com/document/d/1R1JkIwqJ-_ZpwHfZuPC0Vh82SXKNdUWueNPE1ru_p6E/edit?usp=share_link',
  },
  {
    id: 2,
    nombre: 'Plan de Control de Calidad',
    description: 'Alcance, audiencia, principios, actividades, etc.',
    img: imgPCCalidad,
    path: 'https://docs.google.com/document/d/14z0hdKOpcajvocaKf4DwjZuXehUuP7UynLp-plqlcYQ/edit?usp=share_link',
  },
  {
    id: 3,
    nombre: 'Postmortem',
    description: 'Base del postmortem, etc.',
    img: imgPostM,
    path: 'https://docs.google.com/document/d/1uEks2lrG_V8KYIa5iAJXc8q0mfFLpXU5/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'SUMQ Formulario e Instrucciones',
    description: 'Tasas resumidas, defectos/página, defectos/KLOC, etc.',
    img: imgSUMQ,
    path: 'https://docs.google.com/document/d/1KuP8fIOybW3MWLt2k0gms073htlmEAvp/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
];
const docsFase5 = [
  {
    id: 1,
    nombre: 'Documento SDS',
    description: 'Componenetes de presentación, modelo de negocio, persistencia, etc.',
    img: imgDocSDS,
    path: 'https://docs.google.com/document/d/1LyiviX_74Ev1spCHSn2xL6hURaKMVuTSH9MZ6hjKy84/edit?usp=share_link',
  },
  {
    id: 2,
    nombre: 'Modelo de Datos',
    description: 'Diagramas del modelo de datos.',
    img: imgModeloDatos,
    path: 'https://app.luminpdf.com/viewer/64136f421085138e93a39ead',
  },
  {
    id: 3,
    nombre: 'Modelo de Clases',
    description: 'Diagramas del modelo de clases.',
    img: imgModeloClases,
    path: 'https://app.luminpdf.com/viewer/64136fad1085138e93a3c1b4',
  },
  {
    id: 4,
    nombre: 'Especificación de interfaz de usuario',
    description: 'Mockups de la interfaz de usuario.',
    img: imgEIUsuario,
    path: 'https://app.luminpdf.com/viewer/641370021085138e93a3dd4a',
  },
  {
    id: 5,
    nombre: 'Vistas de Arquitectura',
    description: 'Diagramas de las vistas de arquitectura.',
    img: imgVistasA,
    path: 'none',
    listB: vistasAL,
  },
  {
    id: 6,
    nombre: 'Asiganación Casos de uso a componetes',
    description: 'Se asiganan los casos de uso a los componenetes por ciclo.',
    img: imgACasosU,
    path: 'https://docs.google.com/document/d/1CqQD9ClUX_G5kHR7QoADbhjUZfNL3FTE/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 6,
    nombre: 'Especificación de diseño SDS',
    description: 'Introducción, arquitectura de software, diseño detallado.',
    img: imgEDSDS,
    path: 'https://docs.google.com/document/d/1cnkN6LCgmKruDSMO3glHz6RNuNfqIjEEpiR8l1sbsps/edit?usp=share_link',
  },
];

// General docs
const docsW = [
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
    nombre: 'Logs de defectos',
    description: 'Log de registro de defectos presentados',
    img: imgLogBugs,
    path: 'none',
    listB: listLogDefect,
  },
  {
    id: 4,
    nombre: 'Documentos maestro',
    description: 'Documento maestro, versión, URL, fecha de modificación y creación',
    img: imgDocMaster,
    path: 'none',
    listB: docsMaestroList,
  },
  {
    id: 5,
    nombre: 'Control de asiganciones',
    description: 'Asiganción de tareas, tiempo estimado, tiempo real, diferencia, fecha de entrega',
    img: imgControlAsig,
    path: 'https://docs.google.com/spreadsheets/d/1AqpSFXZVNXXd1CPJgbjEHIF5isPrrAKy/edit?usp=sharing&ouid=116060602621844401144&rtpof=true&sd=true',
  },
    // Aqui
  {
    id: 6,
    nombre: 'Listado de reuniones semanales',
    description: 'Fecha, Inicio, Fin, Duración y descripción.',
    img: imgLRSemana,
    path: 'none',
    listB: listRSemanales,
  },
  {
    id: 7,
    nombre: 'Registro de actividades no planeadas',
    description: 'Fecha, Hora, Fin, Actividad y Tipo.',
    img: imgRANoPlan,
    path: 'none',
    listB: actividadesNPL,
  },
  {
    id: 8,
    nombre: 'Informes semanales',
    description: 'Descripción del rendimieto semanal.',
    img: imgISemanal,
    path: 'none',
    listB: informesW,
  },
  {
    id: 9,
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

const resumenesActividades = [
  {
    id: 1,
    nombre: 'Resumen de actividades - LD',
    description: 'Registro de actividades semanales lider de desarrollo',
    img: imgResumenActividades,
    path: 'none',
    listB: RActividadesLD,
  },
  {
    id: 2,
    nombre: 'Resumen de actividades - LE',
    description: 'Registro de actividades semanales lider de equipo',
    img: imgResumenActividades,
    path: 'none',
    listB: RActividadesLE,
  },
  {
    id: 3,
    nombre: 'Resumen de actividades - LC',
    description: 'Registro de actividades semanales lider de calidad',
    img: imgResumenActividades,
    path: 'none',
    listB: RActividadesLC,
  },
  {
    id: 4,
    nombre: 'Resumen de actividades - LA',
    description: 'Registro de actividades semanales lider de arquitectura',
    img: imgResumenActividades,
    path: 'none',
    listB: RActividadesLA,
  },
  {
    id: 5,
    nombre: 'Resumen de actividades - LS',
    description: 'Registro de actividades semanales lider de soporte',
    img: imgResumenActividades,
    path: 'none',
    listB: RActividadesLS,
  },
  {
    id: 6,
    nombre: 'Resumen de actividades - LP',
    description: 'Registro de actividades semanales lider de planeación',
    img: imgResumenActividades,
    path: 'none',
    listB: RActividadesLP,
  },
];

const cuadernosDeTrabajos = [
  {
    id: 1,
    nombre: 'Cuaderno de trabajos - LD',
    description: 'Cuaderno de trabajos del lider de desarrollo',
    img: imgBookJobs,
    path: 'https://docs.google.com/document/d/1OuIi8qCMVYdgKqoUFgmZ5e8SUF1w68F9/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 2,
    nombre: 'Cuaderno de trabajos - LE',
    description: 'Cuaderno de trabajos del lider de equipo',
    img: imgBookJobs,
    path: 'https://docs.google.com/document/d/1WXDVau7hypUgDOUWnFHxccp0Joa6LbGa/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 3,
    nombre: 'Cuaderno de trabajos - LC',
    description: 'Cuaderno de trabajos del lider de calidad',
    img: imgBookJobs,
    path: 'https://docs.google.com/document/d/1__SBsfQiVdzNcx_nImEpBKljy4wc2rZ5/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 4,
    nombre: 'Cuaderno de trabajos - LA',
    description: 'Cuaderno de trabajos del lider de arquitectura',
    img: imgBookJobs,
    path: 'https://docs.google.com/document/d/1pqksoGviJCrIJvA3352LyfCTXKDVzfO4/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 5,
    nombre: 'Cuaderno de trabajos - LS',
    description: 'Cuaderno de trabajos del lider de soporte',
    img: imgBookJobs,
    path: 'https://docs.google.com/document/d/1Xo8GNak6B2pDDv6LnLP4hZphuhH5vTZG/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
  {
    id: 6,
    nombre: 'Cuaderno de trabajos - LP',
    description: 'Cuaderno de trabajos del lider de planeación',
    img: imgBookJobs,
    path: 'https://docs.google.com/document/d/1CcoYcZdosOkGoiLF-laHxR9Zxwe0H-Em/edit?usp=share_link&ouid=116060602621844401144&rtpof=true&sd=true',
  },
];

const useGetDocs = () => {
  const [DocsF1, setDocsF1] = useState(docsFase1);
  const [DocsF2, setDocsF2] = useState(docsFase2);
  const [DocsF3, setDocsF3] = useState(docsFase3);
  const [DocsF4, setDocsF4] = useState(docsFase4);
  const [DocsF5, setDocsF5] = useState(docsFase5);
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
    WDocs,
    bitac,
    RActividades,
    booksJobs,
    reStartDocsF1,
    reStartDocsF2,
    reStartDocsF3,
    reStartDocsF4,
    reStartDocsF5,
    reStartWD,
    reStartB,
    reStartRA,
    reStartBJ,
  };
};

export default useGetDocs;
