import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-vertical-timeline-component/style.min.css';
import 'react-image-lightbox/style.css'; 
import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';

import Main from './components/MainComponent';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );

  }
}

export default App;
