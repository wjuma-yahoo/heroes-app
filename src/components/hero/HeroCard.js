import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
}) => {

  const imagePath = `/assets/${id}.jpg`;

  return (
    <div className="card mb-3">
      <div className="row">
        <div className="col-4 d-flex justify-content-center align-items-center">

          <img src={ imagePath } className="w-100 px-1" />

        </div>
        <div className="col-8">

          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            {
              (alter_ego !== characters)
              && <p className="text-muted">{ characters }</p>
            }
            <p className="text-muted">{ first_appearance }</p>
            <Link to={`/hero/${id}`}>Mas ...</Link>
          </div>

        </div>
      </div>
    </div>
  );

}
