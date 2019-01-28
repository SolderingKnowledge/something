import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import "./style.css";
import Header from "../Common/Header";

class Device extends Component {

  render() {
    const device = this.props.match.params.device;
    const models = this.props.data[device];//getting obj dynamic
    // const colors = this.props.data.iPhone.iPhone8
    // console.log(this.props.data.iPhone.iPhone8);//[black,gold]
    console.log(this.props);
    return (
      <Fragment>
        <Header />
        <div className="title">Select {this.props.match.params.device} Model</div>
        {
          Object.keys(models).map(model => {
            return <Link key={model} className="box" to={`${device}/${model}`}>
              <div className="steps-title">{model}</div>
            </Link>
          })
        }
      </Fragment>
    );
  }
}

export default Device;