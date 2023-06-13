import React, { useReducer } from 'react';
import { useRoutes } from 'react-router-dom';
import './App.scss';
import AppContext, { initialState, rootReducer } from './context/appContext';
import routes from './routes';

const App: React.FC = () => {
  const appRoutes = useRoutes(routes);
  // TODO: should we replace any
  const [state, dispatch] = useReducer(rootReducer as any, initialState);

  return <AppContext.Provider value={{ state: state as any, dispatch }}>{appRoutes}</AppContext.Provider>;
};

export default App;
