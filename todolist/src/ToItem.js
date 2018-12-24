//子组件
import React,{Component} from 'react';

class ToItem extends Component{
    render() {
        return <div>{this.props.content}</div>
    }
}
export default ToItem;