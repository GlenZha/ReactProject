import React from 'react';
import ReactDOM from 'react-dom';
//import ToList from './ToList';
import TodoListReact_Redux from './TodoListReact_Redux'
//import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './store2'

const App=(
    /*Provider提供器，将store提供给内部的子组件*/
    <Provider store={store}>
        <TodoListReact_Redux/>
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
