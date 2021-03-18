import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Register from './Components/Register'
import Login from './Components/Login';
import Contact from './Components/Contact';
import About from './Components/About';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/Home' component={Home}></Route>
          <Route exact path='/Register' component={Register}></Route>
          <Route exact path='/Login' component={Login}></Route>
          <Route exact path='/Contact' component={Contact}></Route>
          <Route exact path='/About' component={About}></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </div>
    </>
  );
}

export default App;