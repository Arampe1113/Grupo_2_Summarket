import React from 'react';
import SideBar from './SideBar';


import {BrowserRouter  } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      	<div id="wrapper">
          <SideBar />
        </div>
    </BrowserRouter>
    
  );
}

export default App;
