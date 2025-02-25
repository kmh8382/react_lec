import React from 'react';
import Header from './Header';
import NaviBar from './NaviBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const BasicLayout = () => {
  return (
    <div>
      <Header/>
      <NaviBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default BasicLayout;