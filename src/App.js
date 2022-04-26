import React, { useReducer, useEffect } from 'react';
import { HeroesRoute } from './routes';

import { authReducer } from './auth/authReducer';
import { AuthContext } from './auth/authContext';

const initialState = () => {
  return JSON.parse( localStorage.getItem('user') ) || { logged: false }
}

export const App = () => {

  const [user, dispatch] = useReducer(authReducer, {}, initialState);

  useEffect(() => {
    if ( !user ) return;
    localStorage.setItem('user', JSON.stringify(user));
  }, [ user ]);

  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <HeroesRoute />
    </AuthContext.Provider>
  )
}
