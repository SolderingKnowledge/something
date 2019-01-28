import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import "./style.css";
import Header from "../Common/Header";

class Color extends Component {

    render() {
        const device = this.props.match.params.device;
        const models = this.props.data[device];//getting obj dynamic
        const colors = this.props.data.iPhone.iPhone8;
        // console.log(this.props.data.iPhone.iPhone8);//[black,gold]
        console.log(colors);
        return (
            <Fragment>
                <Header />
                <div className="title">Select {this.props.match.params.device} Color</div>
                {
                    colors.map(color => {
                        return <Link key={color} className="box" to={`${device}/${models}/${color}`}>
                            <div className="steps-title">{color}</div>
                        </Link>
                    })
                }
            </Fragment>
        );
    }
}

export default Color;