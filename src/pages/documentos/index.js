import Head from 'next/head';
import AppContext from '@context/AppContext';
import { useContext } from 'react';

import Footer from '@components/Footer';
import Menu from '@components/Menu';
import DocsContainer from '@containers/DocsContainer';
import ContainerInfo from '@containers/ContainerInfo';

import useGetDocs from '@hooks/useGetDocs';
import ScrollNavDocs from '@components/ScrollNavDocs';
import ButtonTopScroll from '@components/ButtomTopScroll';
import SearchDocsContainer from '@containers/SearchDocsContainer';

const infoDocsFase1 = {
  id: 'Documentos-Fase-Iniciación',
  title:'Documentos Fase de Iniciación',
  text: 'Acta de iniciación.'
};

const infoDocsFase2 = {
  id: 'Documentos-Fase-Estrategía',
  title:'Documentos Fase de Estrategía',
  text: 'Plan definición de estrategía, Plan de manejo de riesgos, etc.'
};

const infoDocsFase3 = {
  id: 'Documentos-Fase-Requerimientos',
  title:'Documentos Fase de Requerimientos Funcionales',
  text: 'Casos de uso, Escenarios de Calidad, etc.'
};

const infoDocsFase4 = {
  id: 'Documentos-Fase-Planeación',
  title:'Documentos Fase de Planeación',
  text: 'EDT(Work Breakdown Structure), Plan Control de Calidad, etc.'
};

const infoDocsFase5 = {
  id: 'Documentos-Fase-Diseño',
  title:'Documentos Fase de Diseño',
  text: 'Diseño de arquitectura, Diseño detallado, Especificación de intefaz de usuario, Vistas de arquitectura, Especificación de diseño SDS, etc.'
};

const infoSemanalDocs = {
  id: 'Documentos-Semanales',
  title:'Documentos Semanales',
  text: 'Actas de reunión, scripts, etc.'
};

const infoBitacoras = {
  id: 'Bitacoras',
  title:'Bitácoras',
  text: 'Todas las bitácoras de cada integrante.'
};

const infoRActividades = {
  id: 'Resumenes-De-actividades',
  title:'Resumenes de actividades',
  text: 'Todas los resumenes de actividades de cada integrante.'
};

const infoBookJoob = {
  id: 'Cuadernos-De-trabajo',
  title:'Cuadernos de trabajo',
  text: 'Todos los cuadernos de trabajo de cada integrante.'
};

export default function Home() {
  const { state } = useContext(AppContext);
  const allDocs = useGetDocs();

  const docsFase1 = allDocs.DocsF1;
  const docsFase2 = allDocs.DocsF2;
  const docsFase3 = allDocs.DocsF3;
  const docsFase4 = allDocs.DocsF4;
  const docsFase5 = allDocs.DocsF5;

  const docsW = allDocs.WDocs;
  const bitacoras = allDocs.bitac;
  const RActividades = allDocs.RActividades;
  const booksJobs = allDocs.booksJobs;

  const ADocs = [
    ...docsFase1,
    ...docsFase2,
    ...docsFase3,
    ...docsFase4,
    ...docsFase5,
    ...docsW,
    ...bitacoras,
    ...RActividades,
    ...booksJobs,
  ];

  return (
    <>
      <Head>
        <title>Appist - Documentos</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchDocsContainer docs={ADocs} />
      <ScrollNavDocs />
      <ContainerInfo info={infoDocsFase1} />
      <DocsContainer docs={docsFase1} />
      <ContainerInfo info={infoDocsFase2} />
      <DocsContainer docs={docsFase2} />
      <ContainerInfo info={infoDocsFase3} />
      <DocsContainer docs={docsFase3} />
      <ContainerInfo info={infoDocsFase4} />
      <DocsContainer docs={docsFase4} />
      <ContainerInfo info={infoDocsFase5} />
      <DocsContainer docs={docsFase5} />
      <ContainerInfo info={infoSemanalDocs} />
      <DocsContainer docs={docsW} />
      <ContainerInfo info={infoBitacoras} />
      <DocsContainer docs={bitacoras} />
      <ContainerInfo info={infoRActividades} />
      <DocsContainer docs={RActividades} />
      <ContainerInfo info={infoBookJoob} />
      <DocsContainer docs={booksJobs} />
      <ButtonTopScroll ruta={'/documentos'} />
      <Footer />
      {state.isViewMenu && <Menu />}
    </>
  );
}
