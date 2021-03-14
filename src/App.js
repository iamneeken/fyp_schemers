import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import ProductScreen from './components/ProductScreen';

import Login from './components/User/Login';
import Register from './components/User/Register';

import Nav1 from './components/NavBar/Nav1';
import Nav2 from './components/NavBar/Nav2';
import Nav3 from './components/NavBar/Nav3';

function App()
{
  return(
      <Router>
        <Nav1 />
        <Nav2 />
        <Nav3 />
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/product/:id' component={ProductScreen} />
        
      </Router>
      );
}

export default App;