import React from 'react';
import './header.css';
import { CiBoxList } from 'react-icons/ci';

import logo from '../../assets/img/logo.png';

const Header = () => {
   return (
      <header>
         <div className="logo-header">
            <img src={logo} alt="" />
         </div>
         <div className="navbar-right">
            <div className="navbav">
               <div className="nav-items">
                  <div className="items">HOME</div>
                  <div className="items">EQUIPMENT</div>
                  <div className="items">BENEFITS</div>
                  <div className="items">APPLICATION</div>
                  <div className="items">SERVICE/SUPPORT</div>
                  <div className="items">NEWS</div>
                  <div className="items">ABOUT US</div>
               </div>
            </div>
            <div className="icon-nav">
               
               <CiBoxList />
            </div>
         </div>
      </header>
   );
};

export default Header;
