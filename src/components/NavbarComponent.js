import React, {Component} from 'react';

class Header extends Component {

    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          {/* <a className="navbar-brand text-white text-uppercase"  href="#">Liang Cai</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <a className="nav-link text-white text-uppercase mx-5" aria-current="page" href="#" >About <i class="fas fa-house-user"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-uppercase mx-5" href="#">Education <i class="fas fa-university"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-uppercase mx-5" href="#">Experience <i class="fas fa-briefcase"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-uppercase mx-5" href="#">Project <i class="fas fa-tasks"></i></a>
              </li>
            </ul>
          </div>
        </div>
        </nav>
      );
    }
  
  }
  
  export default Header;