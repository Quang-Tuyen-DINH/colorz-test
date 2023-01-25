import React from 'react';
import { NavBarStyled } from '../styles/Navbar.styled';
import { Link } from 'react-router-dom';

function Navbar(props: {isMobile: boolean}) {
  return (
    props.isMobile ?
      <NavBarStyled>
        <div className="vision-r-mobile__nav-bar">
          <ul>
            <li className="vision-r-mobile__nav-bar__logo">
              <Link to="">
                <span>Vision.R</span>
              </Link>
            </li>
          </ul>
        </div>
      </NavBarStyled>
    :
      <NavBarStyled>
        <ul className="vision-r-desktop__nav-bar">
          <li className="vision-r-desktop__nav-bar__logo">
            <Link to="">
              <span>Vision.R</span>
            </Link>
          </li>
        </ul>
      </NavBarStyled>
  )
}

export default Navbar