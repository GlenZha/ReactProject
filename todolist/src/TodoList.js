import React,{Component} from "react";
//react-anted
import 'antd/dist/antd.css'
import store from './store/index'
import TodoListUI from './TodoListUI'
import {getInputChangeAction,getAddItemAction,getDeleteItemAction,getTodoList} from './store/actionCreators';


class TodoList extends  Component{
    constructor(props){
        super(props);
        this.state=store.getState();
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleStoreChange=this.handleStoreChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleItemClick=this.handleItemClick.bind(this);
        //当store改变时，触发里面的handleStoreChange方法
        store.subscribe(this.handleStoreChange);

        console.log(this.state);
    };
    render() {
        return (<TodoListUI inputValue={this.state.inputValue}
                            list={this.state.list}
                            handleInputChange={this.handleInputChange}
                            handleBtnClick={this.handleBtnClick}
                            handleItemClick={this.handleItemClick}/>)
    }
    componentDidMount() {
            /*axios.get('/list.json').then((res)=>{
                const data=res.data;
                const action=initListAction(data);
                console.log(data);
                store.dispatch(action);
                console.log(res.data);
            });*/
        //    getTodoList返回的是一个函数
        const action=getTodoList();
        //自动执行这个函数
        store.dispatch(action);
    }

    handleInputChange(e){
            //告诉store要做什么
            const action=getInputChangeAction(e.target.value);
            store.dispatch(action);
    };
    handleStoreChange(){
            this.setState(store.getState())
    };
    handleBtnClick(){
        const action=getAddItemAction();
        store.dispatch(action);
    };
    handleItemClick(index){
        const action=getDeleteItemAction(index);
        store.dispatch(action);
    };
}
export  default TodoList;