//笔记本
const defaultState={
    inputValue:'',
    list:[45,65]
};
//reducer可以接受state，但绝不能修改state
export default (state=defaultState,action)=>{
    //state所有数据
    if(action.type==='change_input_value'){
        //深复制一个state
        const newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        //返回个store
        return newState;
    }
    if(action.type==='add_todo_item'){
        //深复制一个state
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        //返回个store
        return newState;
    }
    console.log(state,action);
    return state;
}