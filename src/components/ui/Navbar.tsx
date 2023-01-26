import React from 'react';
import { NavBarStyled } from '../styles/Navbar.styled';
import { Link } from 'react-router-dom';

const navBarData = [
  {
    label: "Low Solution",
    id: "solution",
    link: ""
  },
  {
    label: "Low Technology",
    id: "technology",
    link: ""
  },
  {
    label: "High price",
    id: "price",
    link: ""
  }
]

function Navbar(props: {isMobile: boolean}) {
  return (
    props.isMobile ?
      <NavBarStyled>
        <div className="vision-r-mobile__nav-bar">
          <ul>
            <li className="vision-r-mobile__nav-bar__logo">
              <Link to="">
                Vision.R
              </Link>
            </li>
          </ul>
        </div>
      </NavBarStyled>
    :
      <NavBarStyled>
      <div className="vision-r-desktop__nav-bar">
        <ul>
          <li className="vision-r-desktop__nav-bar__logo">
            <Link to="">
              Vision.R
            </Link>
          </li>
          <div className="vision-r-desktop__nav-bar__tabs">
            {navBarData.map(tab => (
              <li className="vision-r-desktop__nav-bar__tabs__tab">
                <Link to={tab.link}>
                  {tab.label}
                </Link>
              </li>
            ))}
            <button className="vision-r-desktop__nav-bar__tabs__button">Buy it</button>
          </div>
        </ul>
      </div>
      </NavBarStyled>
  )
}

export default Navbar