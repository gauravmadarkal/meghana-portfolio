import React from 'react';
import logo from './logo.svg';
// import './App.css';
import "./css/bootstrap.min.css"
import './css/loader.css'
import './css/header.css'
import './css/font-awesome.min.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link
} from "react-router-dom";
import ResponsiveNav from './component/ResponsiveNav';

class App extends React.Component{
  constructor(){
    super();
    this.onClick = this.changeActiveElement.bind(this);
  }
  changeActiveElement(event){
    const {id} = event.target;
    var ids = ["nav-about","nav-projects","nav-contact","nav-home","nav-uses"];
    ids.forEach(function(item){ 
      if(item === id){
        document.getElementById(item).style.borderBottomColor = "#880e4f";
      }else{
        document.getElementById(item).style.borderBottomColor = "#fafafa";
      }
    });
  }
  responsiveBurgerIcon() {
    var x = document.getElementById("navbarContent");
    if (x.className === "navbar-nav collapse") {
        x.className += " show fade-in";
    } else {
        x.className = "navbar-nav collapse";
    }
  }
  render() {
    return (
      <Router>
      <header class="main-header">
              <section class="inner">
              <div class="one"><h3 class="masthead-brand"><a class="brandLogo" href="/">M.</a></h3></div>
              <div class="two"><nav class="nav nav-masthead justify-content-center" id="topnav">
                      <Link style={{ textDecoration: 'none', marginBottom: '20px' }} to="/" ><a class="nav-link active nav-bar-items" id = "nav-home" onClick={this.onClick}>Home</a></Link>
                      <Link style={{ textDecoration: 'none', marginBottom: '20px' }} to="/about"><a class="nav-link nav-bar-items" onClick={this.onClick} id = "nav-about">About</a></Link>
                      <Link style={{ textDecoration: 'none', marginBottom: '20px' }} to="/projects"><a class="nav-link nav-bar-items" onClick={this.onClick} id = "nav-projects">Projects</a></Link>
                      <Link style={{ textDecoration: 'none', marginBottom: '20px' }} to="/uses"><a class="nav-link nav-bar-items" onClick={this.onClick} id = "nav-uses">Uses</a></Link>
                      <Link style={{ textDecoration: 'none', marginBottom: '20px' }} to="/contact"><a class="nav-link nav-bar-items" onClick={this.onClick} id = "nav-contact">Contact</a></Link>
                      <a class="burger" onClick={this.responsiveBurgerIcon}>
                          <i class="fa fa-align-left fa-2x"></i>
                      </a> 
                      <ResponsiveNav /> 
              </nav>
              </div>
              </section>
          </header>
          </Router>
      // <div className="App">
      //   <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      // </div>
    );
  }
}

export default App;
