import React from 'react';
import './footer.css';

import logofooter from '../../assets/img/logofooter.png';

import { AiOutlineDoubleRight } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
   return (
      <footer>
         <div className="container">
            <div className="img-footer">
               <img src={logofooter} alt="" />
            </div>
            <div className="content-footer">
               <div className="content">
                  <h3>EQUIPMENT</h3>
                  <ul>
                     <li>IQF Freezer</li>
                     <li>IQF Processing Line</li>
                     <li>IF Blancher</li>
                     <li>IF Cooker</li>
                     <li>IF Chiller</li>
                  </ul>
               </div>
               <div className="content">
                  <h3>Service & Support</h3>
                  <ul>
                     <li>Our Company</li>
                     <li>Our Value</li>
                     <li>Social Responsability</li>
                     <li>Careers</li>
                     <li>Financing</li>
                     <li>Privacy Policy</li>
                  </ul>
               </div>
               <div className="content">
                  <div className="btn">
                     <button>
                        SUBCRIBE <AiOutlineDoubleRight className="icon" />
                     </button>
                  </div>
                  <div className="icons">
                     <AiFillInstagram className="icon"></AiFillInstagram>
                     <FaTelegram className="icon"></FaTelegram>
                     <AiFillYoutube className="icon"></AiFillYoutube>
                     <AiFillFacebook className="icon"></AiFillFacebook>
                  </div>
               </div>
            </div>
         </div>
         <p className="title-footer">FROST. All rights reserved</p>
      </footer>
   );
};

export default Footer;
