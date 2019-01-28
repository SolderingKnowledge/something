import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Repair from './components/Repair';
import Device from './components/Device';
import Colors from './components/Colors';

const data = {
  iPhone: {
    iPhone8: ["black", "gold"],
    iPhoneX: ["black", "white"]
  },
  iPad: {
    mini: ["black", "gold"],
    pro: ["black", "gold"],
  }
}
class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {

  //   }
  // }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/:device/:model" render={(props) => <Colors data={data} {...props} />} />
          <Route exact path="/:device" render={(props) => <Device data={data} {...props} />} />
          <Route exact path="/" component={Repair} />
        </div>
      </Router>
    );
  }
}

export default App;
