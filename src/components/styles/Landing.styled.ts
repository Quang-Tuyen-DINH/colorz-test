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
          height: auto;
          width: 100vw;
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
        font-size: 16px;
        font-weight: 700;
        line-height: 19.54px;
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
        width: 43px;
        height: 45px;
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
      margin: 0 0 60px 0;
      &__title {
        display: block;
        margin: 60px 20px 0 20px;
        font-weight: 500;
        font-size: 30px;
        line-height: 35px;
        text-align: center;
      }
      &__carousel {
        margin: 30px 0 0 0;
        &__slide {
          margin: 0 auto;
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
            margin: 14px auto 0 auto;
            display: block;
            width: 100%;
            font-weight: 500;
            font-size: 22px;
            line-height: 34px;
            text-align: center;
            color: #18181B;
          }
          &__price {
            margin: 4.87px auto 24.13px auto;
            display: block;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
          }
        }
      }
    }
  }
  .vision-r-desktop__landing {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    &__upper {
      height: 1563px;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      &__subTitle {
        margin: 209px 71px 0 71px;
        display: block;
        position: absolute;
        text-align: center;
        color: #F0380F;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
      &__title {
        margin: 262.74px 20px 0 20px;
        display: block;
        position: absolute;
        width: 1020px;
        text-align: center;
        color: #18181B;
        font-weight: 500;
        font-size: 52px;
        line-height: 60px;
      }
      &__image {
        &__sticker {
          position: absolute;
          right: 140px;
          top: 630px;
          &__content {
            margin: 55px 0 0 60px;
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
              font-size: 52px;
              line-height: 60px;
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
            width: 227.24px;
            height: 227.24px;
            border-radius: 113.5px;
            background: #F0380F;
            box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
          }
        }
        img {
          width: 100vw;
          height: auto;
          object-fit: contain;
        }
      }
    }
    &__body {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      &__text {
        margin: 90px 313px 0 313px;
        display: block;
        text-align: center;
        color: #18181B;
        font-weight: 500;
        font-size: 22px;
        line-height: 34px;
        white-space: pre-line;
      }
      &__button {
        margin: 30px 651px 90px 651px;
        height: 58px;
        width: 138px;
        border-radius: 150px;
        border-color: transparent;
        background-color: #F0380F;
        color: #ffffff;
        font-size: 16px;
        font-weight: 500;
        line-height: 19.54px;
        cursor: pointer;
      }
    }
    &__lower {
      display: flex;
      flex-wrap: nowrap;
      &__image {
        img {
          height: auto;
          width: 710px;
        }
      }
      &__text {
          margin: 202px 104px 0 124px;
        &__icon {
          margin: 30px 0 0 0;
          width: 43px;
          height: 45px;
        }
        &__title {
          margin: 30px 0 0 0;
          display: block;
          text-align: left;
          color: #18181B;
          font-weight: 500;
          font-size: 52px;
          line-height: 60px;  
        }
        &__body {
          margin: 30px 0 0 0;
          display: block;
          font-weight: 500;
          font-size: 22px;
          line-height: 34px;
        }
      }
    }
    &__accessories {
      margin: 0 0 90px 0;
      &__title {
        display: block;
        margin: 90px 209px 0 209px;
        font-weight: 500;
        font-size: 52px;
        line-height: 60px;
        text-align: center;
      }
      &__carousel {
        margin: 30px 104px 0 104px;
        &__slide {
          margin: 0 auto;
          width: 397px;
          height: 514px;
          border: 1px solid #F3F3F3;
          border-radius: 5px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          img {
            display: block;
            width: 100%;
            margin: 51px auto 0 auto;
            height: 315px;
            width: 315px;
          }
          &__title {
            margin: 45px auto 0 auto;
            display: block;
            width: 100%;
            font-weight: 500;
            font-size: 22px;
            line-height: 34px;
            text-align: center;
            color: #18181B;
          }
          &__price {
            margin: 10px auto 35px auto;
            display: block;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
          }
        }
      }
    }
  }
`;
