import React, {Component} from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import {ReactComponent as WorkIcon } from '../assets/work.svg';
import AccountTreeIcon from '@material-ui/icons/AccountTree';


class Vertical extends Component {

    render() {
        return(
            <VerticalTimeline className="custom-vline">
                
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#908fe7', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid #908fe7' }}
                    date="Sep, 2020 - Dec, 2020"
                    iconStyle={{ background: '#908fe7', color: '#000' }}
                    icon={<AccountTreeIcon />}
                >
                    <h4 className="vertical-timeline-element-title">Flask Web Development Project</h4>
                    <h6 className="vertical-timeline-element-subtitle">University of Toronto</h6>
                    <p>
                        <span className="badge bg-secondary">Flask, Bootstrap</span> &nbsp;
                        <span className="badge bg-secondary">Python, Html, Css</span> &nbsp; 
                        <span className="badge bg-secondary">AWS, EC2, S3, Load-Balancer, MySQL</span> &nbsp;
                    </p>

                    <button type="button" className="btn btn-dark mt-2" data-bs-toggle="modal" data-bs-target="#modal1">View More</button>
                    <div className="modal fade" id="modal1" tabindex="-1" aria-labelledby="modal1Label" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal1Label">Key Functionalities</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul>
                                <li>Able to authorize users and reset password</li>
                                <li>Able to check masks on uploaded images</li>
                                <li>Able to help users to monitor self data</li>
                                <li>Able to autoscale servers based on AWS load-balancer </li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#908fe7', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  #908fe7' }}
                    date="Jan 2020 - May, 2020"
                    iconStyle={{ background: '#908fe7', color: '#000' }}
                    icon={<AccountTreeIcon />}
                >
                    <h4 className="vertical-timeline-element-title">Datalogger Capstone Project</h4>
                    <h6 className="vertical-timeline-element-subtitle">University of Alberta</h6>
                    <p>
                        <span className="badge bg-secondary">Arduino, Sensor development</span> &nbsp;
                        <span className="badge bg-secondary">C Programming </span> &nbsp; 
                        <span className="badge bg-secondary">Data Communication</span> &nbsp;
                    </p>

                    <button type="button" className="btn btn-dark mt-2" data-bs-toggle="modal" data-bs-target="#modal2">View More</button>
                    <div className="modal fade" id="modal2" tabindex="-1" aria-labelledby="modal2Label" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal2Label">Key Functionalities</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul>
                                <li>Able to collect data from PAR sensors</li>
                                <li>Able to store data into SD card</li>
                                <li>Able to communicate and transfer data with computer by USB</li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#cee07d', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  #cee07d' }}
                    date="Sep, 2018 - Sep, 2019"
                    iconStyle={{ background: '#cee07d', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h4 className="vertical-timeline-element-title">R&D Engineer Internship</h4>
                    <h6 className="vertical-timeline-element-subtitle">Scientific Drilling International, Calgary, Canada</h6>
                    <p>
                        <span className="badge bg-secondary">Sensor Development</span> &nbsp;
                        <span className="badge bg-secondary">C programming</span> &nbsp;
                        <span className="badge bg-secondary">Eagle PCB design</span> &nbsp;                   
                    </p>

                    <button type="button" className="btn btn-dark mt-2" data-bs-toggle="modal" data-bs-target="#modal3">View More</button>
                    <div className="modal fade" id="modal3" tabindex="-1" aria-labelledby="modal3Label" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal3Label">Key Responsibilities</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul>
                                <li>Developed magnetometer and accelerometer sensors</li>
                                <li>Transmitted data under SPI communication</li>
                                <li>Circuit debug and PCB design</li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#cee07d', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  #cee07d' }}
                    date="May, 2017 - Dec, 2017"
                    iconStyle={{ background: '#cee07d', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h4 className="vertical-timeline-element-title">Fabrication Engineer Internship</h4>
                    <h6 className="vertical-timeline-element-subtitle">Ingenuity Technology, Edmonton, Canada</h6>
                    <p>
                        <span className="badge bg-secondary">Nano-Fabrication Clean Room</span> &nbsp;
                        <span className="badge bg-secondary">L-edit, Sketch Up, Matlab</span> &nbsp;                   
                    </p>

                    <button type="button" className="btn btn-dark mt-2" data-bs-toggle="modal" data-bs-target="#modal4">View More</button>
                    <div className="modal fade" id="modal4" tabindex="-1" aria-labelledby="modal4Label" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal4Label">Key Responsibilities</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul>
                                <li>Conducted the fabrication inside cleaning room</li>
                                <li>Designed the photomasks</li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                    </div>

                </VerticalTimelineElement>
            </VerticalTimeline>
        );
    }
}


export default Vertical;