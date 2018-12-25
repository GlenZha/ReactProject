import React,{Component} from 'react'
import {connect} from 'react-redux'

class TodoListReact_Redux extends Component{
    // constructor(props){
    //     super(props);
    //     //this.state=store.getState();
    // }
    render() {
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.InputChange}/>
                    <button onClick={this.props.handleClick}>提交</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item,index)=>{
                            return<li onClick={()=>{this.props.deleteItem(index)}} key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    };
}
//怎么映射
const mapStateToProps=(state)=>{
        return {
            inputValue:state.inputValue,
            list:state.list
        }
};
 //store.dispatch  props
const mapDispatchToProps=(dispatch)=>{
    return{
        InputChange(e){
            const action={
                type:'change_input_value',
                value:e.target.value
            };
            dispatch(action);
            //dispatch
            //console.log(e.target.value);
        },
        handleClick(){
            const action={
                type: 'add_item'
            };
            dispatch(action)
        },
        deleteItem(index){
            const action={
                type: 'delete_item',
                index
            };
            console.log(index);
            dispatch(action)
        }
    }
};
//怎么连接
export default connect(mapStateToProps,mapDispatchToProps)(TodoListReact_Redux);