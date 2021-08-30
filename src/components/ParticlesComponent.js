import React, { Component } from 'react'
import Particles from 'react-particles-js';


function CenterGreeting() {
    return (
        <React.Fragment>
            <div id="text_div">
                <div className="center_all">
                    <span>Welcome to Liang Cai's web</span>
                </div>   
            </div>
        </React.Fragment>
    );
}


class ParticlesBackground extends Component {

    render() {
        return(
            <div>
                <Particles className="particle" params={{"particles": {
                                                            "number": { "value": 60},
                                                            "size": { "value": 3 }
                                                            },
                                                            "interactivity": {
                                                                "events": {
                                                                    "onhover": {
                                                                        "enable": true,
                                                                        "mode": "grab"
                                                                    }
                                                                }
                                                            }
                                                        }}  />
                <CenterGreeting />
            </div>
        );
    }
}

export default ParticlesBackground;



