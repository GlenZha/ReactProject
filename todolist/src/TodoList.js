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
        console.log(this.state);
    }
    render() {
        return(<div style={{marginLeft:'100px'}}><div>
            <Input placeholder='todo info'
                   value={this.state.inputValue}
                   onChange={this.handleInputChange}
                   style={{width:"300px",marginRight:"50px"}}/>
            <Button  type={"primary"}>提交</Button>
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
        console.log(e.target.value);
    }
}
export  default TodoList;