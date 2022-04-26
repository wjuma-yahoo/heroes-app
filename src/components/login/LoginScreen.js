import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { types } from '../../types';
import { AuthContext } from '../../auth/authContext';

export const LoginScreen = () => {

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handlerLogin = () => {

    const action = {
      type: types.login,
      payload: { name: 'wilson' }
    }

    dispatch(action);

    navigate('/', { replace: true });

  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <h1>Login</h1>
          <hr />
        </div>
        <div className="col-12">
          <button onClick={handlerLogin} className="btn btn-primary">Acceder</button>
        </div>
      </div>
    </div>
  );
}
