import React from 'react';
import "../css/Navbar.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
  } from "react-router-dom";
class ResponsiveNav extends React.Component{
    render() {
        return(
            // <footer class="mastfoot mt-auto">
            <div class="navbar-nav collapse" id="navbarContent">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item"><Link class="nav-link-items" to="/">Home</Link></li>
                <li class="nav-item"><Link class="nav-link-items" to="/about">About</Link></li>
                <li class="nav-item"><Link class="nav-link-items" to="/projects">Projects</Link></li>
                <li class="nav-item"><Link class="nav-link-items" to="/uses">Uses</Link></li>
                <li class="nav-item"><Link class="nav-link-items" to="/contact">Contact</Link></li>
                </ul>
            </div>
        );
    }
}
export default ResponsiveNav;