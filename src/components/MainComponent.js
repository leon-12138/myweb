import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './NavbarComponent';
import Footer from './Footer';
import Home from './HomeComponent';
import Details from './DetailsComponent';
import NotFound from './NotFoundComponent';

import { EDUCATION } from '../data/education';
import { EXPERIENCE } from '../data/experience';


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
                <Route path="/details" component={Details} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
      );
    }
  
  }
  
  export default Main;