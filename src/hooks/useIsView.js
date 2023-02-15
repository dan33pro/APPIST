import { useState, useEffect } from 'react';

const useIsView = (elem) => {
  const [isView, setIsView] = useState(false);

  useEffect(() => {
    setIsView(false);
  }, [elem]);

  function changeState(elem) {
    let distance = elem.getBoundingClientRect();
    let state = distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0;
    setIsView(state);
  }

  return { isView, changeState };
};

export default useIsView;
