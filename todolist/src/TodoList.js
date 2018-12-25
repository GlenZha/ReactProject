import React,{Component} from "react";
//react-anted
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'
import store from './store/index'
import {getInputChangeAction,getAddItemAction,getDeleteItemAction} from './store/actionCreators';


class TodoList extends  Component{
    constructor(props){
        super(props);
        this.state=store.getState();
        TodoList.handleInputChange=TodoList.handleInputChange.bind(this);
        this.handleStoreChange=this.handleStoreChange.bind(this);
        TodoList.handleBtnClick=TodoList.handleBtnClick.bind(this);
        //当store改变时，触发里面的handleStoreChange方法
        store.subscribe(this.handleStoreChange);

        console.log(this.state);
    };
    render() {
        return(<div style={{marginLeft:'100px'}}><div>
            <Input placeholder='todo info'
                   value={this.state.inputValue}
                   onChange={TodoList.handleInputChange}
                   style={{width:"300px",marginRight:"50px"}}/>
            <Button onClick={TodoList.handleBtnClick} type={"primary"}>提交</Button>
            </div>
            <List
                style={{width:'300px',marginTop:'20px'}}
                bordered
                dataSource={this.state.list}
                renderItem={(item,index) => (<List.Item onClick={TodoList.handleItemClick.bind(this,index)}>{item}</List.Item>)}
            />
        </div>)
    };
    static handleInputChange(e){
            //告诉store要做什么
            const action=getInputChangeAction(e.target.value);
            store.dispatch(action);
    };
    handleStoreChange(){
            this.setState(store.getState())
    };
    static handleBtnClick(){
        const action=getAddItemAction();
        store.dispatch(action);
    };
    static handleItemClick(index){
        const action=getDeleteItemAction(index);
        store.dispatch(action);
    };
}
export  default TodoList;