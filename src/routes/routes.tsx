import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/Navbar';
import Landing from '../pages/Landing';

const AppRoutes = (props: {isMobile: boolean}) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing isMobile={props.isMobile}/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes