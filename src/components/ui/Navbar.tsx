import React from 'react';
import { NavBarStyled } from '../styles/Navbar.styled';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <NavBarStyled>
      <ul className="vision-r__nav-bar">
        <li className="vision-r__nav-bar__logo">
          <Link to="">
            <span>Vision.R</span>
          </Link>
        </li>
      </ul>
    </NavBarStyled>
  )
}

export default Navbar