import styled from "styled-components";

export const LandingStyled = styled.div`
  .vision-r-mobile__landing {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    &__upper {
      height: 899px;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      &__subTitle {
        margin: 89px 71px 0 71px;
        display: block;
        position: absolute;
        text-align: center;
        color: #F0380F;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
      &__title {
        margin: 167px 20px 0 20px;
        display: block;
        position: absolute;
        width: 335px;
        text-align: center;
        color: #18181B;
        font-weight: 500;
        font-size: 30px;
        line-height: 35px;
      }
      &__image {
        &__sticker {
          position: absolute;
          right: 40px;
          top: 740px;
          &__content {
            margin: 42px 0 0 72px;
            text-align: center;
            transform: rotate(11.56deg);
            &__title {
              font-weight: 500;
              font-size: 22px;
              line-height: 34px;
              color: #ffffff;
            }
            &__price {
              font-weight: 500;
              font-size: 30px;
              line-height: 35px;
              color: #ffffff;
            }
            &__text {
              font-weight: 400;
              font-size: 16px;
              line-height: 24px;
              color: #ffffff;
            }
          }
          &__background {
            position: absolute;
            margin: 0 0 0 50px;
            width: 189.06px;
            height: 189.06px;
            border-radius: 95px;
            background: #F0380F;
            box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
          }
        }
        img {
          height: 899px;
          object-fit: contain;
        }
      }
    }
    &__body {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      &__text {
        margin: 60px 20px 0 20px;
        display: block;
        text-align: center;
        color: #18181B;
        font-weight: 500;
        font-size: 22px;
        line-height: 34px;
      }
      &__button {
        margin: 30px 117.5px 60px 117.5px;
        height: 58px;
        width: 140px;
        border-radius: 150px;
        border-color: transparent;
        background-color: #F0380F;
        color: #ffffff;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
      }
    }
    &__lower {
      display: flex;
      flex-wrap: wrap;
      &__image {
        img {
          height: auto;
          width: 100%;
        }
      }
      &__icon {
        margin: 30px 20px 0 20px;
      }
      &__title {
        margin: 30px 20px 0 20px;
        display: block;
        text-align: left;
        color: #18181B;
        font-weight: 500;
        font-size: 30px;
        line-height: 35px;  
      }
      &__body {
        margin: 30px 20px 0 20px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
    }
    &__accessories {
      &__title {
        display: block;
        margin: 60px 20px 0 20px;
        font-weight: 500;
        font-size: 30px;
        line-height: 35px;
        text-align: center;
      }
      &__carousel {
        margin: 30px 0 60px 0;
        &__slide {
          width: 285px;
          height: 368px;
          border: 1px solid #F3F3F3;
          border-radius: 5px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          img {
            display: block;
            width: 100%;
            margin: 24px auto 0 auto;
            height: 209px;
            width: 209px;
          }
          &__title {
            margin: 14px 26px 0 26px;
            display: block;
            font-weight: 500;
            font-size: 22px;
            line-height: 34px;
            text-align: center;
            color: #18181B;
          }
          &__price {
            margin: 4.87px auto 24.13px auto;
            display: block;
          }
        }
      }
    }
  }
  .vision-r-desktop__landing {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 100px 0 0 0;
  }
`;
