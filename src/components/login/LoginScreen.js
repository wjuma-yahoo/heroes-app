import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {

  const navigate = useNavigate();

  const handlerLogin = () => {
    navigate('/', {
      replace: true // Reemplaza el historial de paginas evitando volver a la pagina actual
    });
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
