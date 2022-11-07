import React from 'react';
import image from '../images/summa2.png';
import {Link, Route, Switch} from 'react-router-dom';
// import UsersInDb from './UsersInDb';
// import ProductsInDb from './ProductsInDb';
// import NotFound from './NotFound';


function SideBar(){
    return (
        <React.Fragment>
        <main className="productos"> 
            <img src={image} alt="Summarket"/>
            <h2>Acciones</h2>
         
            {/* <li>
            <Link claseName='productos' to="/"> <span>Tablero - Summarket</span>
            </Link>
            </li>
         
            <li>
            <Link claseName='productos' to="/UsersInDb"> <span>Usuarios en BD</span>
            </Link>
            </li> */}

                <article>
               <h2>Lorem, ipsum.</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia blanditiis natus dicta error, cum alias ipsam libero odio impedit, fuga at dolore voluptatem illum pariatur cupiditate fugit, ullam amet?</p>
                <button>Ver más</button>
            </article>
        </main>

            {/* <Switch>
            <Route exact path="/UsersInDb" >
            <UsersInDb />
            </Route>
            <Route exact path="/ProductsInDb">
            <ProductsInDb />
            </Route>               
            <Route component={NotFound} />
            </Switch>    */}

        </React.Fragment>
    )
  }  
  
export default SideBar;



 

