import { Routes, Route } from 'react-router-dom';

import { Navbar } from '../utils';

import { MarvelScreen } from '../components/marvel';
import { DcScreen } from '../components/dc';
import { SearchScreen } from '../components/search';
import { HeroScreen } from '../components/hero';

export const DashboardRoute = () => {
  const brand = 'HeroesApp';
  return (
    <>
      <Navbar brand={brand}/>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-3">


          <Routes>
            <Route path="marvel" element={<MarvelScreen publisher="Marvel Comics" />} />
            <Route path="dc" element={<DcScreen publisher="DC Comics" />} />
            <Route path="search" element={<SearchScreen />} />
            <Route path="hero/:heroeId" element={<HeroScreen />} />
            <Route path="/" element={<MarvelScreen publisher="Marvel Comics" />} />
          </Routes>


          </div>
        </div>
      </div>
    </>
  );
}
