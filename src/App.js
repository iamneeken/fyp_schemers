import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import ProductScreen from './components/ProductScreen';

import Products from './components/Products/Products';
import NewProducts from './components/Products/NewProducts';

import Login from './components/User/Login';
import Register from './components/User/Register';
import Profile from './components/User/Profile';


import Nav1 from './components/NavBar/Nav1';
import Nav2 from './components/NavBar/Nav2';

  
import CartScreen from './components/cart/CartScreen';
import ShippingScreen from './components/cart/ShippingScreen';
import CheckoutSteps from './components/cart/CheckoutSteps';
import PaymentScreen from './components/cart/PaymentScreen';
import Footer from "./components/NavBar/Footer";

import ContactUs from "./components/ContactUs/ContactUs";



function App()
{
  return(
      <Router>
        <Nav1 />
        <Nav2 />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/shipping' exact component={ShippingScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id' component={CartScreen} />
          <Route path='/checkout' component={CheckoutSteps} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/newrelease' component={Products} />
          <Route path='/products' component={NewProducts} />

          <Route path='/contactus' component={ContactUs} />
          
        </Switch>
        <Footer/>  
        
      </Router>
      );
}

export default App;