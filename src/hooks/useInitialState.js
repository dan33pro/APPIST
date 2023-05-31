import { useState } from 'react';

const initialState = {
  isViewMenu: false,
  isViewDocAside: false,
  selectDoc: undefined,
  options: ['/','/documentosFase1', '/proyecto', '/equipo', '/documentosFase2'],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const toggleMenu = (newState) => {
    setState({
      ...state,
      isViewMenu: newState,
      isViewDocAside: false,
      selectDoc: undefined,
      listDocs: [],
    });
  };

  const changeListDocs = (listB) => {
    setState({
      ...state,
      listDocs: listB,
    });
  };

  const changeSelectDoc = (newDoc) => {
    console.log(newDoc);
    setState({
      ...state,
      selectDoc: newDoc,
      listDocs: newDoc.listB,
    });
  };

  const toggleDocAside = (newState, newDoc) => {
    setState({
      ...state,
      selectDoc: newDoc,
      listDocs: newDoc?.listB,
      isViewMenu: false,
      isViewDocAside: newState,
    });
  };

  return {
    state,
    toggleMenu,
    toggleDocAside,
    changeSelectDoc,
    changeListDocs,
  };
};

export default useInitialState;
