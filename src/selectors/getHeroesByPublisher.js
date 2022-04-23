import _ from 'lodash';
import { heroes } from '../data/heroes';


export const getHeroesByPublisher = publisher => {

  const validPublishers = ["DC Comics", "Marvel Comics"];

  if(!validPublishers.includes(publisher)) {
      throw new Error(`${publisher} is not a VALID publisher`);
  }

  return _.filter(heroes, { publisher })

};
