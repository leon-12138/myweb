import React, {Component} from 'react';

import Header from './NavbarComponent';
import Footer from './Footer';
import Home from './HomeComponent';


class Main extends Component {

    constructor(props) {
      super(props);
    }
  
    render() {
      return (
          <div>
            <Header />
            <p>hello</p>
            <Footer />
          </div>
      );
    }
  
  }
  
  export default Main;