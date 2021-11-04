

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";


import Cards from "./components/Cards";


  
    const App = () => {
      return (

    <BrowserRouter>
      
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          
          <Route path="/cards" component={Cards} />
          <Route path="/contact" component={Contact} />
          
        </Switch> 
      </div>
    </BrowserRouter>
      )
      
      }; 


export default App;
