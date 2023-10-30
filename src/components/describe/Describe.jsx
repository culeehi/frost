import React from 'react';
import './describe.css';
import img1 from '../../assets/img/describe/img1.png';
import img2 from '../../assets/img/describe/img2.png';
import img3 from '../../assets/img/describe/img3.png';
import img4 from '../../assets/img/describe/img4.png';

const Describe = () => {
   return (
      <div className="describe">
         <div className="describe-title">
            <h3>TESTIMONIALS</h3>
            <div className="describe-items">
               <div className="describe-item">
                  <h4>Graham Reed</h4>
                  <p>Managing Director Pinnacle Foods</p>
                  <p>The products bright, fresh and free flowing</p>
               </div>
               <div className="describe-item">
                  <h4>Mr. Fenando Prado</h4>
                  <p>Responsible Division Berries Citromax SACI</p>
                  <p>We are extremely pleased to have incested in this technology</p>
               </div>
               <div className="describe-item">
                  <h4>Jerome Fesselet</h4>
                  <p>Production Manager Futicola Olmue</p>
                  <p>The freezer is easy to openrate, event for unexperienced staff</p>
               </div>
               <div className="describe-item">
                  <h4>ULF Olsson</h4>
                  <p>Technical Manager Guldfageln</p>
                  <p>The separation of the product and appearance is excenllent</p>
               </div>
            </div>
            <div className="amount">
               <div className="polka"></div>
               <div className="polka"></div>
               <div className="polka"></div>
            </div>
         </div>
         <div className="describe-img">
            <h3>IQF NEWS AND ARTICLES</h3>
            <div className="describe-new">
               <div className="describe-articles">
                  <img src={img1} alt="" />
                  <h4>MJKJKJJUHUJ</h4>
               </div>
               <div className="describe-articles">
                  <img src={img2} alt="" />
                  <h4>MJKJKJJUHUJ</h4>
               </div>
               <div className="describe-articles">
                  <img src={img3} alt="" />
                  <h4>MJKJKJJUHUJ</h4>
               </div>
               <div className="describe-articles">
                  <img src={img4} alt="" />
                  <h4>MJKJKJJUHUJ</h4>
               </div>
            </div>
            <div className="amount">
               <div className="polka"></div>
               <div className="polka"></div>
               <div className="polka"></div>
            </div>
         </div>
      </div>
   );
};

export default Describe;
