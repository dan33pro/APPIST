import { useState } from 'react';

const initialState = {
  isViewMenu: false,
  isViewDocAside: false,
  selectDoc: undefined,
  options: ['/','/documentos', '/proyecto', '/equipo'],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const toggleMenu = (newState) => {
    setState({
      ...state,
      isViewMenu: newState,
    });
  };

  const changeSelectDoc = (newDoc) => {
    setState({
      ...state,
      selectDoc: newDoc,
    });
  };

  const toggleDocAside = (newState) => {
    setState({
      ...state,
      isViewDocAside: newState,
    });
  };

  return {
    state,
    toggleMenu,
    toggleDocAside,
    changeSelectDoc,
  };
};

export default useInitialState;
