import {createStore,applyMiddleware,compose } from  'redux';
import reducer from './reducer'
//配置中间件
import thunk from 'redux-thunk'
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);
const  store=createStore(reducer, enhancer);


export default store;