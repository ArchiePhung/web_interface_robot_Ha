import React, { Component } from "react";
import {Container} from "react-bootstrap"
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Home from "./Home";
// import About from "./About";
import Map from "./Map";

class Body extends Component {
    render() {
        return (
            <Container className="container_body">
                <Router>
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/map" exact element={<Map />} />
                        {/* <Route path="/history" exact element={<History />} />
                        <Route path="/login" exact element={<Login />} />
                        <Route path="/register" exact element={<Register />} />
                        <Route path="/getpassword" exact element={<GetPwd />} />
                        <Route path="/order" exact element={<Order />} /> */}
                    </Routes>
                </Router>
            </Container>
        );
    }
}

export default Body;