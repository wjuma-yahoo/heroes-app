import _ from 'lodash';
import { heroes } from '../data/heroes';

export const getHeroesByName = (name='') => {

  name = name.toLowerCase();

  if (name.length === 0) {
    return [];
  }

  const heroesMatched = _.filter(heroes, heroe => heroe.superhero.toLowerCase().includes(name));

  // return
  return heroesMatched;
}
