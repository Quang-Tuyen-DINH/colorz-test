import React from 'react';
import { LandingStyled } from '../components/styles/Landing.styled';

function Landing(props: {isMobile: boolean}) {
  return (
    <LandingStyled className="vision-r__landing">
      <div className="vision-r__landing__title">Bienvenue</div>
    </LandingStyled>
  )
}

export default Landing