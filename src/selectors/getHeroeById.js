import _ from 'lodash';
import { heroes } from '../data/heroes';

export const getHeroeById = heroeId => _.find(heroes, { 'id': heroeId });
