import React from 'react';
import { Link } from 'react-router-dom';

import './HeroeCard.css';

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
    <div className="card mb-3 heroe">
      <div className="row card-body">
        <div className="col-4 d-flex align-items-center">

          <img src={ imagePath } alt={id} className="heroe__image" />

        </div>
        <div className="col-8">

          <div className="card-body">
            <h5 className="card-title heroe__superhero">{superhero}</h5>
            <p className="card-text mb-1 heroe__alterego">{alter_ego}</p>
            {
              (alter_ego !== characters)
              && <p className="text-muted heroe__characters">{ characters }</p>
            }
            <p className="text-muted mb-1 heroe__firstappearance">{ first_appearance }</p>
            <Link to={`/hero/${id}`} className="heroe__link">Mas ...</Link>
          </div>

        </div>
      </div>
    </div>
  );

}
