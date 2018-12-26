import React, { Component } from 'react';
import {Globalstyle} from './style.js'
import Header from './common/header'
import {Iconfont} from  './statics/iconfont/iconfont'

class App extends Component {
  render() {
    return (
      <Header>
          <Globalstyle/>
          <Iconfont/>
      </Header>
    );
  }
}

export default App;
