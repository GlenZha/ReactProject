
import {combineReducers} from 'redux';
//as起一个别名
import {reducer as headerReducer} from '../common/header/store'

const reducer= combineReducers({
    header:headerReducer
});
export default reducer;