import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { LandingStyled } from '../components/styles/Landing.styled';
import { landingData$ } from '../services/landing/Landing.service';
import { LandingData } from '../shared/models/LandingData.model';
import Store from '../store/Index';

function Landing(props: {isMobile: boolean}) {
  const dispatch = useDispatch();
  const [landingData, setLandingData] = useState<LandingData>();

  const fetchData = async() => {
    await landingData$
      .then((res: any) => {
        dispatch({ type: "LOAD_LANDING_DATA", payload: res});
      })
      .catch((err) => {console.log(err)});
  }
  
  useEffect(() => {
    fetchData();
    Store.subscribe(() => {
      setLandingData(Store.getState().landingData);
    })
  }, []);
  
  return (
    <LandingStyled className="vision-r__landing">
      <div className="vision-r__landing__title">Bienvenue</div>
    </LandingStyled>
  )
}

export default Landing