import React from 'react';
import './content.css';
import bgmain from '../../assets/img/bgmain.png';
import bgquater from '../../assets/img/quater.png';
import JJ from '../../assets/img/JJ.png';
import machine from '../../assets/img/machine.png';

import img1 from '../../assets/img/img1.png';
import img2 from '../../assets/img/img2.png';
import img3 from '../../assets/img/img3.png';

const Content = () => {
   return (
      <main>
         <div className="img-main">
            <div className="bgmain">
               <img src={bgmain} alt="" />
            </div>
            <div className="bgquater">
               <div className="bgquater-img">
                  <img src={bgquater} alt="" />
               </div>
            </div>
            <div className="JJimg">
               <div className="JJimg-img">
                  <img src={JJ} alt="" />
               </div>
            </div>
            <div className="JJimg">
               <div className="JJimg-img">
                  <img src={machine} alt="" />
               </div>
            </div>
            <div className="contents">
               <div className="ct-items">
                  <img src={img1} alt="" />
               </div>
               <div className="ct-items">
                  <img src={img2} alt="" />
               </div>{' '}
               <div className="ct-items">
                  <img src={img3} alt="" />
               </div>
            </div>
         </div>
      </main>
   );
};

export default Content;
