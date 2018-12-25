import React from 'react';
import {Input,Button,List} from 'antd'

/*无状态组件*/
const TodoListUI=(props)=>{
    return(<div style={{marginLeft:'100px'}}><div>
        <Input placeholder='todo info'
               value={props.inputValue}
               onChange={props.handleInputChange}
               style={{width:"300px",marginRight:"50px"}}/>
        <Button onClick={props.handleBtnClick} type={"primary"}>提交</Button>
    </div>
        <List
            style={{width:'300px',marginTop:'20px'}}
            bordered
            dataSource={props.list}
            renderItem={(item,index)=>(<List.Item onClick={(index)=>{props.handleItemClick(index)}}>{item}</List.Item>)}
        />
    </div>);
}

/*class TodoListUI extends Component{
    render() {
        return(<div style={{marginLeft:'100px'}}><div>
            <Input placeholder='todo info'
                   value={this.props.inputValue}
                   onChange={this.props.handleInputChange}
                   style={{width:"300px",marginRight:"50px"}}/>
            <Button onClick={this.props.handleBtnClick} type={"primary"}>提交</Button>
        </div>
            <List
                style={{width:'300px',marginTop:'20px'}}
                bordered
                dataSource={this.props.list}
                renderItem={(item,index)=>(<List.Item onClick={(index)=>{this.props.handleItemClick(index)}}>{item}</List.Item>)}
            />
        </div>);
    };
}*/
export default TodoListUI;