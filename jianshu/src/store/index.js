import {createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store;
if(!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)){
    store = createStore(
        reducer,
        applyMiddleware(thunk)
    );
}else{
    store = createStore(
        reducer,
        compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //插件调试，未安装会报错
    );
}



//const store=createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

export default store;
