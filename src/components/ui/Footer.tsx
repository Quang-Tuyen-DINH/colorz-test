import React, { useEffect, useState } from 'react';
import { FooterStyled } from '../styles/Footer.styled';
import logo from "../../assets/Logo Colorz.svg";
import { useDispatch } from "react-redux";
import { footerData$ } from '../../services/footer/Footer.service';
import Store from '../../store/Index';
import { FooterData } from '../../shared/models/FooterData.model';
import uuid from 'react-uuid';

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
          <img src={logo} alt="logo"/>
        </div>
        {footerData?.adresses.map(adress => (
          <div key={uuid()} className="vision-r__footer__adress">
            <span className="vision-r__footer__adress__city">{adress.city}</span>
            <span className="vision-r__footer__adress__location">{adress.location}</span>
            <span className="vision-r__footer__adress__zipcode">{adress.zipcode}</span>
          </div>
        ))}
        <div className="vision-r__footer__contact">
          <span className="vision-r__footer__contact__title">Nous contacter</span>
          <span className="vision-r__footer__contact__phone">{footerData?.contact.phone}</span>
          <span className="vision-r__footer__contact__email">{footerData?.contact.email}</span>
        </div>
      </div>
    </FooterStyled>
  )
}

export default Footer