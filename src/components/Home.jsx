import React, {Component} from "react";
// import Connection from "./Connection";
// import Teleopeation from "./Teleoperation";
// import RobotState from "./RobotState";
// import Map from "./Map";
// import {Row, Col, Container, Button} from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <h2 style={{ color: 'white' }} className="greeting">Hi, EveryOne</h2>
                <h2 style={{ color: 'white' }} className="wlc">Welcome to</h2>
                <h1 style={{ color: '#87CEEB' }} className="title">Robot Webserver</h1>
                <button type='submit' className="btn btn-info w-30 rounded-0">Call me</button>
            </div>
        );
    }
}

export default Home;