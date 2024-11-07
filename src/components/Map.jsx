import React, {Component} from "react";
import Config from "../scripts/config";
// import ROSLIB from "roslib";

class Map extends Component {
    state = {
        ros:null,
    };

    constructor (){
        super();
        this.view_map = this.view_map.bind(this);
    }

    init_connection(){

        this.state.ros = new window.ROSLIB.Ros();
        console.log(this.state.ros);

        try{
            this.state.ros.connect(
                "ws://" + 
                Config.ROSBRIDGE_SERVER_IP +
                ":" + 
                Config.ROSBRIDGE_SERVER_PORT +
                ""
            );
        } catch (error) {
            console.log(
                "ws://" + Config.ROSBRIDGE_SERVER_IP + ":" + Config.ROSBRIDGE_SERVER_PORT + ""
            );
            console.log("connection problem");
        }

    }
    componentDidMount() {
        this.init_connection();
        this.view_map();
    }

    view_map(){
        var viewer = new window.ROS2D.Viewer({
            divID: "nav_div",
            width: 640,
            height: 480,
        });

        var navClient = new window.NAV2D.OccupancyGridClientNav({
            ros: this.state.ros,
            rootObject: viewer.scene,
            viewer: viewer,
            severName: "/move_base",
            withOrientation: true,
        });
    }

    render() {
        return(
            <div>
                <h1>MAP</h1>
                <div id="nav_div">Viewer</div>
            </div>
        );
    }
}

export default Map;