import React from 'react';
import { HeroList } from './HeroList';

export const HeroScreen = ({ publisher }) => {
  return (<HeroList publisher={publisher}/>);
}
