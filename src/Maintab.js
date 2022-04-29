import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './Maintab.css';
import Interface1 from './Interface1';
function Maintab() {
  return(
  <>
     <div id='Maintab'>
        <div className='Container'>
           <h2>Welcome User</h2>
           <p>Here,We are Fuctioning the Fuction of our website just to tell people what can it do</p>
           <button className='startbtns'>Create Question Paper</button>
           <button className='startbtns'>Chcck Question Paper</button>
           <Interface1/>
        </div>
     </div>
  </>)
}

export default Maintab;
