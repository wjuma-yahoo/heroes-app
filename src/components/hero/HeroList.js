import { useMemo } from 'react';
import _ from 'lodash';

import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  const heroesRendered = _.map(heroes, (heroe) => {
    return (
      <div className="col-4"  key={heroe.id}>
        <HeroCard {...heroe } />
      </div>
    );
  });

  return (
    <div className="row">
      <div className="col-12 mb-3 animate__animated animate__fadeIn">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title mb-0">{publisher}</h3>
          </div>
        </div>
      </div>
      { heroesRendered }
    </div>
  );
}
