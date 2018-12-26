import React, { Component,Fragment } from 'react';
import {Globalstyle} from './style.js'
import Header from './common/header'
import {Iconfont} from  './statics/iconfont/iconfont'
//引入redux，使用store
import {Provider} from 'react-redux';
import store from './store'


class App extends Component {
  render() {
    return (<Fragment>
                <Globalstyle/>
                <Iconfont/>
        <Provider store={store}><Header/></Provider>

        </Fragment>);
  }
}

export default App;
