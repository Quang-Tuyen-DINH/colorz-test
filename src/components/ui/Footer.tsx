import React, { useEffect, useState } from 'react';
import { FooterStyled } from '../styles/Footer.styled';
import { useDispatch } from "react-redux";
import logo from "../../assets/Logo Colorz.svg";
import { footerData$ } from '../../services/footer/Footer.service';
import Store from '../../store/Index';
import { FooterData } from '../../shared/models/FooterData.model';

function Footer() {
  const dispatch = useDispatch();
  const [footerData, setFooterData] = useState<FooterData>();

  const fetchData = async() => {
    await footerData$
      .then((res: any) => {
        dispatch({ type: "LOAD_FOOTER_DATA", payload: res});
      })
      .catch((err) => {console.log(err)});
  }
  
  useEffect(() => {
    fetchData();
    Store.subscribe(() => {
      setFooterData(Store.getState().footerData);
    })
  }, []);
  
  return (
    <FooterStyled>
      <div className="vision-r__footer">
        <div className="vision-r__footer__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="vision-r__footer__adress">
          <button onClick={() => console.log(footerData)}>test</button>
        </div>
      </div>
    </FooterStyled>
  )
}

export default Footer