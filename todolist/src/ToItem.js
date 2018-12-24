//子组件
import React,{Component} from 'react';

class ToItem extends Component{
    //初始化函数
    constructor(props){
        super(props);
        //绑定this
        this.handleClick=this.handleClick.bind(this);
    }
    render() {
        //子组件通过属性接受数据
        return <div onClick={this.handleClick}>{this.props.content}</div>
    }
    handleClick(){
        console.log(this.props.index);
        this.props.handleItemDele(this.props.index)
    }
}
export default ToItem;