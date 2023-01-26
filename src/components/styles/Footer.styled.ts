import styled from "styled-components";

export const FooterStyled = styled.div`
  .vision-r-mobile__footer {
    display: block;
    height: 612px;
    padding: 36px;
    background: #F3F3F3;
    &__logo {
      img {
        height: 30px;
      }
    }
    &__adress {
      margin: 30px 0 0 0;
      &__city {
        color: #18181B;
        font-weight: 500;
        font-size: 22px;
        line-height: 34px;
      }
      &__location {
        margin: 10px 0 0 0;
        color: #18181B;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
      &__zipcode {
        margin: 10px 0 0 0;
        color: #18181B;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
    }
    &__contact {
      margin: 30px 0 0 0;
      &__title {
        color: #18181B;
        font-weight: 500;
        font-size: 22px;
        line-height: 34px;
      }
      &__phone {
        margin: 10px 0 0 0;
        color: #18181B;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
      &__email {
        margin: 10px 0 0 0;
        color: #18181B;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
    }
    &__earth {
      margin: 30px 0 0 0;
      img {
        height: 66px;
        width: 73px;
      }
    }
  }
  .vision-r-desktop__footer {
  }
`;
