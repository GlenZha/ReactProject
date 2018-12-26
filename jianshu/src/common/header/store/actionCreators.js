import * as constants from './constants';
import {fromJS} from 'immutable'
import axios from 'axios';

export const searchFocus=()=>({
    type:constants.SEARCH_FOCUS
});
export const searchBlur=()=>({
    type:constants.SEARCH_BLUR
});
const changeList=(data)=>({
    type:constants.CHANGE_LIST,
    //把data转化成一个immutable数组再传过去
    data:fromJS(data)
});

export const getList=()=>{
    return (dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{
            const action =changeList(res.data.data);
            dispatch(action);
        }).catch(()=>{
        })
    }
};