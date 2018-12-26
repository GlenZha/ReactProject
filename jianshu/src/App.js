import React, { Component,Fragment } from 'react';
import {Globalstyle} from './style.js'
import Header from './common/header'
import {Iconfont} from  './statics/iconfont/iconfont'

class App extends Component {
  render() {
    return (<Fragment>
                <Globalstyle/>
                <Iconfont/>
                <Header/>
        </Fragment>);
  }
}

export default App;
