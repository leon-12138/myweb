import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './NavbarComponent';
import Footer from './Footer';
import Home from './HomeComponent';
import NotFound from './NotFoundComponent';

import { EDUCATION } from '../data/education';


class Main extends Component {

    constructor(props) {
        super(props);
    
        this.state ={
          education: EDUCATION
        };
    }
  
    render() {
      return (
          <div>
            <Header />
            <Switch>
                <Route exact path="/" component={ () => <Home education={this.state.education} />} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
      );
    }
  
  }
  
  export default Main;