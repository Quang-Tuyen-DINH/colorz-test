import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { LandingStyled } from '../components/styles/Landing.styled';
import { landingData$ } from '../services/landing/Landing.service';
import { LandingData } from '../shared/models/LandingData.model';
import Store from '../store/Index';
import heroImgMobile from "../assets/Hero_mobile 1.png"
import heroImgDesktop from "../assets/Hero 1.png"
import bodyCarousel1 from "../assets/Slider_B 1.png";
import bodyCarousel2 from "../assets/Slider_B 1-1.png";
import bodyCarousel3 from "../assets/Slider_B 2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import uuid from 'react-uuid';
import lockIcon from "../assets/lock.svg"
import lowerImage from "../assets/Rectangle 29.png";
import accessorImg1 from "../assets/Product_1 2.png";
import accessorImg2 from "../assets/Product_1 1.png";
import accessorImg3 from "../assets/Product_1 3.png";
import BuyPopup from '../features/BuyPopup';

function Landing(props: {isMobile: boolean}) {
  const dispatch = useDispatch();
  const [landingData, setLandingData] = useState<LandingData>();
  const bodyCarousel = [
    {
      image: bodyCarousel1,
      name: "body-img-1"
    },
    {
      image: bodyCarousel2,
      name: "body-img-2"
    },
    {
      image: bodyCarousel3,
      name: "body-img-3"
    }
  ];

  const accessorCarousel = [
    {
      image: accessorImg1,
      name: "The funny filter kit (D’jeuns friendly)",
      price: "199.00 €"
    },
    {
      image: accessorImg2,
      name: "Screen camera off si texte long",
      price: "229.00 €"
    },
    {
      image: accessorImg3,
      name: "The Charentaiz (Yeuv Friendly)",
      price: "349.95 €"
    }
  ];

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
    props.isMobile ?
      <LandingStyled className="vision-r-mobile__landing">
        <div className="vision-r-mobile__landing__upper">
          <span className="vision-r-mobile__landing__upper__subTitle">{landingData?.upper.subTitle}</span>
          <span className="vision-r-mobile__landing__upper__title">{landingData?.upper.title}</span>
          <div className="vision-r-mobile__landing__upper__image">
            <div className="vision-r-mobile__landing__upper__image__sticker">
              <div className="vision-r-mobile__landing__upper__image__sticker__background"></div>
              <div className="vision-r-mobile__landing__upper__image__sticker__content">
                <span className="vision-r-mobile__landing__upper__image__sticker__content__title">Offre speciale</span>
                <br/>
                <span className="vision-r-mobile__landing__upper__image__sticker__content__price">799,99€*</span>
                <br/>
                <span className="vision-r-mobile__landing__upper__image__sticker__content__text">*au lieu de 1.499,99€</span>
              </div>
            </div>
            <img src={heroImgMobile} alt="hero"/>
          </div>
        </div>
        <div className="vision-r-mobile__landing__body">
          <span className="vision-r-mobile__landing__body__text">{landingData?.body.text}</span>
          <button className="vision-r-mobile__landing__body__button">Buy it now</button>
          <div className="vision-r-mobile__landing__body__carousel">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showArrows={false}
            >
              {bodyCarousel.map(item => (
                <div key={uuid()}>
                  <img src={item.image} alt={item.name}/>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="vision-r-mobile__landing__lower">
          <div className="vision-r-mobile__landing__lower__image">
            <img src={lowerImage} alt="pudique"/>
          </div>
          <img className="vision-r-mobile__landing__lower__icon" src={lockIcon} alt="pudique-icon"/>
          <span className="vision-r-mobile__landing__lower__title">{landingData?.lower.title}</span>
          <span className="vision-r-mobile__landing__lower__body">{landingData?.lower.bodyMobile}</span>
        </div>
        <div className="vision-r-mobile__landing__accessories">
          <span className="vision-r-mobile__landing__accessories__title">{landingData?.accessories.title}</span>
          <div className="vision-r-mobile__landing__accessories__carousel">
            <Carousel
              autoPlay
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              showArrows={false}
              centerMode
            >
              {accessorCarousel.map(item => (
                <div key={uuid()} className="vision-r-mobile__landing__accessories__carousel__slide">
                  <img src={item.image} alt={item.name}/>
                  <span className="vision-r-mobile__landing__accessories__carousel__slide__title">{item.name}</span>
                  <br/>
                  <span className="vision-r-mobile__landing__accessories__carousel__slide__price">{item.price}</span>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </LandingStyled>
    :
      <LandingStyled className="vision-r-desktop__landing">
        <div className="vision-r-desktop__landing__upper">
          <span className="vision-r-desktop__landing__upper__subTitle">{landingData?.upper.subTitle}</span>
          <span className="vision-r-desktop__landing__upper__title">{landingData?.upper.title}</span>
          <div className="vision-r-desktop__landing__upper__image">
            <div className="vision-r-desktop__landing__upper__image__sticker">
              <div className="vision-r-desktop__landing__upper__image__sticker__background"></div>
              <div className="vision-r-desktop__landing__upper__image__sticker__content">
                <span className="vision-r-desktop__landing__upper__image__sticker__content__title">Offre speciale</span>
                <br/>
                <span className="vision-r-desktop__landing__upper__image__sticker__content__price">799,99€*</span>
                <br/>
                <span className="vision-r-desktop__landing__upper__image__sticker__content__text">*au lieu de 1.499,99€</span>
              </div>
            </div>
            <img src={heroImgDesktop} alt="hero"/>
          </div>
        </div>
        <div className="vision-r-desktop__landing__body">
          <span className="vision-r-desktop__landing__body__text">{landingData?.body.text}</span>
          {/* <button className="vision-r-desktop__landing__body__button">Buy it now</button> */}
          <BuyPopup />
          <div className="vision-r-desktop__landing__body__carousel">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showArrows={false}
            >
              {bodyCarousel.map(item => (
                <div key={uuid()}>
                  <img src={item.image} alt={item.name}/>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="vision-r-desktop__landing__lower">
          <div className="vision-r-desktop__landing__lower__image">
            <img src={lowerImage} alt="pudique"/>
          </div>
          <div className="vision-r-desktop__landing__lower__text">
            <img className="vision-r-desktop__landing__lower__text__icon" src={lockIcon} alt="pudique-icon"/>
            <span className="vision-r-desktop__landing__lower__text__title">{landingData?.lower.title}</span>
            <span className="vision-r-desktop__landing__lower__text__body">{landingData?.lower.bodyDesktop}</span>
          </div>
        </div>
        <div className="vision-r-desktop__landing__accessories">
          <span className="vision-r-desktop__landing__accessories__title">{landingData?.accessories.title}</span>
          <div className="vision-r-desktop__landing__accessories__carousel">
            <Carousel
              autoPlay
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              showArrows={false}
              centerMode
              centerSlidePercentage={100 / 3}
            >
              {accessorCarousel.map(item => (
                <div key={uuid()} className="vision-r-desktop__landing__accessories__carousel__slide">
                  <img src={item.image} alt={item.name}/>
                  <span className="vision-r-desktop__landing__accessories__carousel__slide__title">{item.name}</span>
                  <br/>
                  <span className="vision-r-desktop__landing__accessories__carousel__slide__price">{item.price}</span>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </LandingStyled>
  )
}

export default Landing