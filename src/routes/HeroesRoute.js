import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { LoginScreen } from '../components/login';
import { DashboardRoute } from './DashboardRoute';


export const HeroesRoute = () => {

  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/*" element={<DashboardRoute />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
