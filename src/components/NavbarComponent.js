import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../data/logo.png';

class Header extends Component {

    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{position: 'sticky', top: '0', zIndex: '1'}}>
        <div className="container-fluid">
          <Link className="navbar-brand"  to="/">
              <img src={logo} alt="logo" height="35px" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span><i class="fas fa-bars" style={{color: '#fff'}}></i></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <a className="nav-link text-white text-uppercase mx-5" aria-current="page" href="#about" >About <i class="fas fa-info-circle"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-uppercase mx-5" href="#edu">Education <i class="fas fa-university"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-uppercase mx-5" href="#exp">Experience <i class="fas fa-briefcase"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-uppercase mx-5" href="#pro">Project <i class="fas fa-tasks"></i></a>
              </li>
            </ul>
          </div>
        </div>
        </nav>
      );
    }
  
  }
  
  export default Header;