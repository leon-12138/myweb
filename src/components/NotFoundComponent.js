import React, {Component} from 'react';
import { Link } from 'react-router-dom';
 
class NotFound extends Component {

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mx-auto my-auto">
                        <div className="error-template ">
                            <h1>Ops! Error 404 Not Found</h1>
                            <div className="error-details">
                            <h4>Sorry, the requested page is not found.</h4>
                            </div>
                            <div className="error-actions">
                                <Link className="btn btn-warning btn-lg" to='/'>
                                    <i className="fas fa-home"> Back To Home Page</i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default NotFound;