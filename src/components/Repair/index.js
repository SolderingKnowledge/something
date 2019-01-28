import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Common/Header';
import iphone from './assets/iphone.png';
import ipad from './assets/ipad.png';
import './style.css';

class Repair extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content-repair">
          <Link to="/iPhone" className="box-device"> {/* uwul jerde match bolot */}
            <h3>iPhone</h3>
            <img src={iphone} height="200px" />
          </Link>
          <Link to="/iPad" className="box-device"> {/* uwul jerde match bolot */}
            <h3>iPad</h3>
            <img src={ipad} height="200px" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Repair;
