import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/Footer.css";


export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
          </div>

          <ul className="menu">
            <li className="menu">
              <Link className="menu__link" to="/products/men's clothing">
                men's
              </Link>
            </li>

            <li className="menu">
              <Link className="menu__link" to="/products/women's clothing">
                women's
              </Link>
            </li>

            <li className="menu">
              <Link className="menu__link" to="/products/jewelery">
                jewelery
              </Link>
            </li>

            <li className="menu">
              <Link className="menu__link" to="/products/electronics">
                electronics
              </Link>
            </li>
          </ul>

          <ul className="menu">
            <li className="menu__item">
              <a className="menu__link" href="#d">
                Home
              </a>
            </li>

            <li className="menu__item">
              <a className="menu__link" href="#d">
                About
              </a>
            </li>
            
            <li className="menu__item">
              <a className="menu__link" href="#d">
                Services
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#d">
                Team
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#d">
                Contact
              </a>
            </li>
          </ul>

          
          <p>&copy;11228 George Birgoan</p>
        </footer>
      </div>
    );
  }
}