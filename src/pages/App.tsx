import React from 'react';
import { AppStyled } from '../components/styles/App.styled';
import useViewport from '../hooks/Viewport';
import AppRoutes from '../routes/routes';

function App() {
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 1024;

  if(isMobile) {
    return (
      <AppStyled className="vision-r-mobile">
        <AppRoutes isMobile={isMobile}/>
      </AppStyled>
    )
  } else {
    return (
      <AppStyled className="vision-r-desktop">
        <AppRoutes isMobile={isMobile}/>
      </AppStyled>
    )
  }
}

export default App;
