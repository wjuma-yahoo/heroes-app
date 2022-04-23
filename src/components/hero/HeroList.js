import _ from 'lodash';

import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

  const heroes = getHeroesByPublisher(publisher);

  const heroesRendered = _.map(heroes, (heroe) => {
    return (
      <div className="col-4"  key={heroe.id}>
        <HeroCard {...heroe } />
      </div>
    );
  });

  return (
    <div className="row">
      { heroesRendered }
    </div>
  );
}
