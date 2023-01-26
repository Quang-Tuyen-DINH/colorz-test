import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import Landing from '../pages/Landing';

const AppRoutes = (props: {isMobile: boolean}) => {
  return (
    <BrowserRouter>
      <Navbar isMobile={props.isMobile}/>
      <Routes>
        <Route path="/" element={<Landing isMobile={props.isMobile}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes