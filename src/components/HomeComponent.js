import React, {Component} from 'react';
import { Link } from 'react-router-dom';



function RenderEducation({one}) {
    return(
        <div className="col-10 col-lg-5 mx-auto mb-5 d-flex align-items-stretch" >
        <div className="card" style={{width: '25rem'}}>
            <img src={one.img} className="card-img-top" alt="school" />
            <div className="card-body">
                <h3 className="card-title text-uppercase">{one.headerTitle}</h3>
                <h5 className="card-title">{one.headerSubTitle}</h5>
                <p className="card-text">{one.headerText}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
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
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>About Myself</h3>
                        <hr />
                    </div> 
                </div>
                <div className="row mb-5 mx-auto">
                    <div className="col-12 col-md-6">
                        <p>Hello Everyone, Welcome to my personal website!</p>
                        <p>My name is Liang (Leon) Cai and I am right now a master of computer engineering student at the University of Toronto. I have 1.5 years of internship experience and several project experience with software and hardware development, including embedded system, PCB design, web development. 
                            Also love solving problems and exploring the unknown. </p>
                        <span >Find Me Here : </span>
                        <a className="btn btn-outline-dark btn-floating m-1" href="mailto:cailiang1997@gmail.com" role="button" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
                        <a className="btn btn-outline-dark btn-floating m-1" href="https://www.linkedin.com/in/leoncai" role="button" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-dark btn-floating m-1" href="https://github.com/leon-12138" role="button" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a className="btn btn-outline-dark btn-floating m-1" href="https://www.instagram.com/l_cai_/" role="button" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    </div>

                    <div className="col-12 col-md-6 ">

                        
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={'/assets/1.jpg'} className="d-block w-100 h-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
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

                <div className="col-12">
                    <h3>Education History</h3>
                    <hr />
                </div> 
                <div className="row mt-4">
                    {this.props.education.map((one) => {
                        return(
                            <RenderEducation one={one} key={one.id} />
                        );
                    })}
                </div>
            </div>
        );
    }
}



export default Home;


   

