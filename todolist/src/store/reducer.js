//笔记本
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELE_TODO_ITEM,INIT_LIST_ACTION} from './actionTypes'
//默认第一次穿的值
const defaultState={
    inputValue:'',
    list:[45,65]
};
//reducer可以接受state，但绝不能修改state
//action是用来接受组件传过来的action
export default (state=defaultState,action)=>{
    //state所有数据
    if(action.type===CHANGE_INPUT_VALUE){
        //深复制一个state
        const newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        //返回个store
        return newState;
    }
    if(action.type===ADD_TODO_ITEM){
        //深复制一个state
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        //返回个store
        return newState;
    }
    if(action.type===DELE_TODO_ITEM){
        //深复制一个state
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        //返回个store
        return newState;
    }
    if(action.type===INIT_LIST_ACTION){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list=action.data;
        return newState;
    }
    return state;
}