import React, { useReducer } from 'react';
import { HeroesRoute } from './routes';

import { authReducer } from './auth/authReducer';
import { AuthContext } from './auth/authContext';

const initialState = () => {
  return {
    name: 'fernando temporal',
    logged: true
  }
}

export const App = () => {

  const [user, dispatch] = useReducer(authReducer, {}, initialState);

  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <HeroesRoute />
    </AuthContext.Provider>
  )
}
