import React, {Component} from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import {ReactComponent as WorkIcon } from '../assets/work.svg';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import { Link } from 'react-router-dom';


class Vertical extends Component {

    render() {
        return(
            <VerticalTimeline className="custom-vline">
                
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                    date="Sep, 2020 - Dec, 2020"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#000' }}
                    icon={<AccountTreeIcon />}
                >
                    <h4 className="vertical-timeline-element-title">Flask Web Development Project</h4>
                    <h6 className="vertical-timeline-element-subtitle">University of Toronto</h6>
                    <p>
                        <span className="badge bg-secondary">Flask, Bootstrap</span> &nbsp;
                        <span className="badge bg-secondary">Python, Html, Css</span> &nbsp; 
                        <span className="badge bg-secondary">AWS, EC2, S3, Load-Balancer, MySQL</span> &nbsp;
                    </p>
                    <Link to="/details">
                        <div className="mt-2">
                        <button type="button" className="btn btn-secondary " >View More</button>
                        </div>
                    </Link>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                    date="Jan 2020 - May, 2020"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#000' }}
                    icon={<AccountTreeIcon />}
                >
                    <h4 className="vertical-timeline-element-title">Datalogger Capstone Project</h4>
                    <h6 className="vertical-timeline-element-subtitle">University of Alberta</h6>
                    <p>
                        <span className="badge bg-secondary">Arduino, Sensor development</span> &nbsp;
                        <span className="badge bg-secondary">C Programming </span> &nbsp; 
                        <span className="badge bg-secondary">Data Communication</span> &nbsp;
                    </p>
                    <Link to="/details">
                        <div className="mt-2">
                        <button type="button" className="btn btn-secondary" >View More</button>
                        </div>
                    </Link>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Sep, 2018 - Sep, 2019"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h4 className="vertical-timeline-element-title">R&D Engineer Internship</h4>
                    <h6 className="vertical-timeline-element-subtitle">Scientific Drilling International, Calgary, Canada</h6>
                    <p>
                        <span className="badge bg-secondary">Sensor Development</span> &nbsp;
                        <span className="badge bg-secondary">C programming</span> &nbsp;
                        <span className="badge bg-secondary">Eagle PCB design</span> &nbsp;                   
                    </p>
                    <Link to="/details">
                        <div className="mt-2">
                        <button type="button" className="btn btn-secondary" >View More</button>
                        </div>                    </Link>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="May, 2017 - Dec, 2017"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h4 className="vertical-timeline-element-title">Fabrication Engineer Internship</h4>
                    <h6 className="vertical-timeline-element-subtitle">Ingenuity Technology, Edmonton, Canada</h6>
                    <p>
                        <span className="badge bg-secondary">Nano-Fabrication Clean Room</span> &nbsp;
                        <span className="badge bg-secondary">L-edit, Sketch Up, Matlab</span> &nbsp;                   
                    </p>
                    <Link to="/details">
                        <div className="mt-2">
                        <button type="button" className="btn btn-secondary" >View More</button>
                        </div>          
                    </Link>
                </VerticalTimelineElement>
                </VerticalTimeline>
        );
    }
}


export default Vertical;