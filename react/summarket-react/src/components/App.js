import React from 'react';
import SideBar from './SideBar';
import ProductsInDb from './ProductsInDb';
import UsersInDb from './UsersInDb';

function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          {/* <SideBar />
          <ProductsInDb /> */}
          <UsersInDb />
        </div>
     </React.Fragment>
  );
}

export default App;