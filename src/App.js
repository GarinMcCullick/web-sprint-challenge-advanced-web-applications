import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import ProtectedRoute from './components/PrivateRoute';
import BubblePage from "./components/BubblePage";

const handleLougout = () => {
  try{
    localStorage.removeItem('token')
  }catch(err){
    console.log(err)
  }
}

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="#" onClick={handleLougout}>logout</a>
          <Link to="/PrivateRoute">Private Route</Link>
        </header> 

        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path='/PrivateRoute' component={BubblePage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.--DONE