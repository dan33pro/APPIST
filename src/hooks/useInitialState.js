import { useState } from "react";

const initialState = {
    isViewMenu: false,
};

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const toggleMenu = (newState) => {
        setState({
            ...state,
            isViewMenu: newState,
        });
    };

    return {
        state,
        toggleMenu,
    };
};

export default useInitialState;