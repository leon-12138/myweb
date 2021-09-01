import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ParticlesBackground from './ParticlesComponent';
import Vertical from './VerticalComponent';

import pic1 from '../assets/1.jpg';
import pic2 from '../assets/2.jpg';
import pic3 from '../assets/3.jpg';


function RenderEducation({one}) {

    return(
        <div className="col-10 col-lg-5 mx-auto mb-5 d-flex align-items-stretch" >
        <div className="card" style={{width: '25rem'}}>
            <img src={require('../assets/'+one.img).default} className="card-img-top" alt="school" />
            <div className="card-body">
                <h3 className="card-title text-uppercase">{one.headerTitle}</h3>
                <h5 className="card-title">{one.headerSubTitle}</h5>
                <p className="card-text">{one.headerText}</p>
            </div>
        </div>
        </div>
    );
}



class Home extends Component {

    constructor(props) {
        super(props);
      }

    render() {
        return(
            <React.Fragment>

            <ParticlesBackground />
            <br></br>

            <div className="container">
                <div className="row" id="about">
                    <div className="col-12">
                        <h3>About Myself</h3>
                        <hr />
                    </div> 
                </div>
                <div className="row mb-5 mx-auto">
                    <div className="col-12 col-md-6 my-auto">
                        <p>Hello Everyone, Welcome to my personal website!</p>
                        <p>My name is Liang (Leon) Cai and I am right now a master of computer engineering student at the University of Toronto. I have 1.5 years of internship experience and several project experience with software and hardware development, including embedded system, PCB design, web development. 
                            Also love solving problems and exploring the unknown. </p>
                        <span >Find Me Here : </span>
                        <Link className="btn btn-outline-dark btn-floating m-1" to={{ pathname: "mailto:cailiang1997@gmail.com" }} role="button" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></Link>
                        <Link className="btn btn-outline-dark btn-floating m-1" to={{ pathname: "https://www.linkedin.com/in/leoncai" }} role="button" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></Link>
                        <Link className="btn btn-outline-dark btn-floating m-1" to={{ pathname: "https://github.com/leon-12138" }} role="button" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></Link>
                        <Link className="btn btn-outline-dark btn-floating m-1" to={{ pathname: "https://www.instagram.com/l_cai_/" }} role="button" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></Link>
                    </div>

                    <div className="col-12 col-md-6 mt-2">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{height: '380px', zIndex:'0'}}>
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={pic1} className="d-block w-100" alt="pic1" style={{height: '380px'}}/>
                            <div className="carousel-caption d-none d-md-block">
                                <p>First Internship in Calgary @ May, 2018</p>
                            </div>
                            </div>
                            <div className="carousel-item w-100">
                            <img src={pic2} className="d-block w-100" alt="pic2" style={{height: '380px'}}/>
                            <div className="carousel-caption d-none d-md-block">
                            <p>Graduated from University of Alberta @ June 2020</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src={pic3} className="d-block w-100" alt="pic3" style={{height: '380px'}}/>
                            <div className="carousel-caption d-none d-md-block">
                            <p>Friends and I in Banff @June, 2019</p>
                            </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>
                </div>

                <div className="row"  id="edu">
                    <div className="col-12">
                        <h3>Education History</h3>
                        <hr />
                    </div> 
                </div>
                <div className="row mt-4">
                    {this.props.education.map((one) => {
                        return(
                            <RenderEducation one={one} key={one.id} />
                        );
                    })}
                </div>

                <div className="row" id="exp" >
                    <div className="col-12">
                        <h3>Experience & Projects</h3>
                        <hr />
                    </div> 
                </div>
                <div className="row mt-4">
                    <Vertical />
                </div>
                <br></br>
            </div>
            </React.Fragment>
        );
    }
}


export default Home;
