import React,{Component} from "react";
//react-anted
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'
import store from './store/index'


class TodoList extends  Component{
    constructor(props){
        super(props);
        this.state=store.getState();
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleStoreChange=this.handleStoreChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        //当store改变时，触发里面的handleStoreChange方法
        store.subscribe(this.handleStoreChange);

        console.log(this.state);
    }
    render() {
        return(<div style={{marginLeft:'100px'}}><div>
            <Input placeholder='todo info'
                   value={this.state.inputValue}
                   onChange={this.handleInputChange}
                   style={{width:"300px",marginRight:"50px"}}/>
            <Button onClick={this.handleBtnClick} type={"primary"}>提交</Button>
            </div>
            <List
                style={{width:'300px',marginTop:'20px'}}
                bordered
                dataSource={this.state.list}
                renderItem={item => (<List.Item>{item}</List.Item>)}
            />
        </div>)
    }
    handleInputChange(e){
            //告诉store要做什么
            const action={
                type:'change_input_value',
                value:e.target.value
            };
            store.dispatch(action);
    }
    handleStoreChange(){
            this.setState(store.getState())
    }
    handleBtnClick(){
        const action={
            type:'add_todo_item',
            //value:e.target.value
        };
        store.dispatch(action);
    }
}
export  default TodoList;