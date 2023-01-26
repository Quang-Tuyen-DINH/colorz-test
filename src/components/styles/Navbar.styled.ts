import styled from "styled-components";

export const NavBarStyled = styled.div`
  .vision-r-mobile__nav-bar {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    ul {
      margin: 30px 0 0 0;
      padding: 0;
    }
    &__logo {
      list-style-type: none;
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      color: #18181B;
      a {
        text-decoration: none;
        color: #18181B;
      }
    }
  }
  .vision-r-desktop__nav-bar {
    position: absolute;
    ul {
      margin: 30px 0 0 104px;
      padding: 0;
    }
    &__logo {
      margin: 0 667px 0 0;
      list-style-type: none;
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      color: #18181B;
      display: inline;
      cursor: pointer;
      a {
        text-decoration: none;
        color: #18181B;
      }
    }
    &__tabs {
      display: inline;
      &__tab {
        list-style-type: none;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #18181B;
        display: inline;
        margin: 0 30px;
        cursor: pointer;
        a {
          text-decoration: none;
          color: #18181B;
        }
      }
      &__button {
        margin: 10px 18px 12px;
        height: 46px;
        width: 77px;
        border-radius: 150px;
        border-color: transparent;
        background-color: #F0380F;
        color: #ffffff;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        cursor: pointer;
      }
    }
  }
`;
