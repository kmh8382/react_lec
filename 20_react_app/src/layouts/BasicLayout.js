import React from 'react';
import Header from '../components/Header';
import NaviBar from '../components/NaviBar';
import { Outlet } from 'react-router-dom';

const BasicLayout = () => {
  return (
    <>
      <Header />
      <NaviBar />
      <Outlet />
    </>
  );
};

export default BasicLayout;