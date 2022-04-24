import React from 'react';

export const SearchScreen = () => {
  return (
    <div className="row">
      <div className="col-5">

        <h1>Busqueda</h1>

        <form>
          <div className="mb-2">
            <input placeholder="Buscar heroe ..." className="form-control" />
          </div>
          <div className="mb-3">
            <button className="btn btn-primary">Buscar</button>
          </div>
        </form>

      </div>
    </div>
  );
}
