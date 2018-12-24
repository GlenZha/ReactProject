//子组件
import React,{Component} from 'react'
//对传过来的函数进行校验，确定是否为函数
import PropTypes from 'prop-types'


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

//期望接受到的值是什么类型，不是会报警告
ToItem.propTypes={
    //test:PropTypes.string.isRequied,必须传一个test
    content:PropTypes.string,
    handleItemDele:PropTypes.func,
    index:PropTypes.number
};
//默认值
ToItem.defaultProps={
    test:'hello'
};
export default ToItem;