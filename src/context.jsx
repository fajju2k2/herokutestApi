import React, { useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';

const AppContext = React.createContext();

const API = 'https://api.jsonbin.io/v3/b/63caf2f301a72b59f24fc31d';

const intialState = {
  name: '',
  image: '',
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: 'Home_update',
      payload: {
        name: 'teknovation',
        image: './images/hero.svg',
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: 'About_update',
      payload: {
        name: 'About Teknovation',
        image: './images/about1.svg',
      },
    });
  };

  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: 'GET_SERVICES', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  // to calling api

  useEffect(() => {
    getServices(API);
  }, []);

  return (
    <AppContext.Provider
      //   value={{ organizationName: 'Teknovation', since: '1998' }}
      value={{ ...state, updateHomePage, updateAboutPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
