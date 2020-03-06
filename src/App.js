import React from 'react';
import Multiplier from "./Multiplier"; 
import EvenClicks from "./EvenClicks";
import CountBy from "./CountBy"; 
import HideMe from "./HideMe"; 

import './App.css';

function App() {
  return (
  <>
   <Multiplier x='234' y='23432' />
   <EvenClicks />
   <CountBy step={ 5 }/>
   <HideMe>Blah blah blah</HideMe> 
   </>
  )
}

export default App;
