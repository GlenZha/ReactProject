import React, { Component,Fragment } from 'react';
import {Globalstyle} from './style.js'
import Header from './common/header'
import {Iconfont} from  './statics/iconfont/iconfont'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './pages/home';
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Write from './pages/write'
//引入redux，使用store
import {Provider} from 'react-redux';
import store from './store'


class App extends Component {
  render() {
    return (<Fragment>
                <Globalstyle/>
                <Iconfont/>
        <Provider store={store}>

            {/*在这里实现路由*/}
            <BrowserRouter>
                <div>
                    <Header/>
                <Route path={'/'} exact component={Home}/>
                <Route path={'/login'} exact component={Login}/>
                <Route path={'/detail/:id'} exact component={Detail}/>
                <Route path={'/write'} exact component={Write}/>
                </div>
            </BrowserRouter>
        </Provider>

        </Fragment>);
  }
}

export default App;
