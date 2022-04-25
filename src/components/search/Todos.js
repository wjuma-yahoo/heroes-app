import _ from 'lodash';
import { HeroCard } from '../hero/HeroCard';

export const Todos = ({ heroes }) => {

  const appendHeroesToHTML = _.map(heroes, heroe => {
    return <HeroCard key={heroe.id} {...heroe} />
  });

  return appendHeroesToHTML;
  
}
