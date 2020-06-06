import React from 'react';
import logo from '../src/logos.svg';
import logopana from '../src/panaclouds.png'
import './Mycss.css';

// function App({name, age}) {
//   return (
//     <div >
//      Hello from App.js {name} and age is {age -8}
//     </div>
//   );
// }

function App ({name})  {

  let number1=10;
  let number2=5;
  let number3=number1+number2;

  return (
    
 

  <div className="contents">

    <div className="main">
     <h2 className="backgrounds">They are our partner Thank You BootCamp2020</h2>
   <div className="logos"><img src={logo} alt="piaic" width="150px" height="150px"/>
   </div>
   <div className="logos"><img src={logopana} alt="panacloud" width="180px" height="150px"/><br/>
   </div>
  
   <div className="contentmain" >
     <br/>
     <h2 >React Assignment of React Tutorial I tried My <strong className="spans">Best !</strong></h2>
</div>

    <div className="names">
     Hello <strong>{name} </strong>with CSS
    </div>
    
    
     
     <h2 className="backgrounds"> Using JS Expression</h2>
  <p>Using "Curley Braces"</p>
      <div className="expressions">
      <strong>{number1+number2} </strong>is equal to <strong>{number3}</strong>
    </div>
   <div className="ends">Made By Ozair Shafique</div>
    </div>
    </div>
    
     )
    }
 
export default App;
