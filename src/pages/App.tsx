import React from 'react';
import { AppStyled } from '../components/styles/App.styled';
import Footer from '../components/ui/Footer';
import useViewport from '../hooks/Viewport';
import AppRoutes from '../routes/routes';

function App() {
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 1024;

  return (
    <AppStyled className={isMobile ? "vision-r-mobile" : "vision-r-desktop"}>
      <AppRoutes isMobile={isMobile}/>
      <Footer isMobile={isMobile}/>
    </AppStyled>
  )
}

export default App;
