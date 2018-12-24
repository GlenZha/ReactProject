import React,{Component,Fragment} from "react";
import './style.css';
//Fragment占位符，可以让标签隐藏掉，少个包裹的标签
import ToItem from "./ToItem";
import Test from "./Test"
class ToList extends Component{
    constructor(props){
        super(props);
        //当组件的state或者props发生改变的时候，render函数就会重新执行
        this.state={
            inputValue:'',
            list:['react','vue']
        };
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handBtnClick=this.handBtnClick.bind(this);
        this.handleItemDele=this.handleItemDele.bind(this)
    }
    render() {
        return (<Fragment>
            {/*bind(this)绑定this的指向
            htmlFor='insert'等于for，点击相当于点击了id=insert的元素
            */}
            <label htmlFor='insert'>输入内容</label>
            <input id='insert'
                   className="input"
                   value={this.state.inputValue}
                   onChange={this.handleInputChange}
                   ref={(input)=>{this.input=input}}
            /><button onClick={this.handBtnClick}>提交</button>
            <ul>
                <li>英语</li>
                <li>{this.state.inputValue}</li>
                {this.getToItem()}
            </ul>
            <Test content={this.state.inputValue}/>
        </Fragment>)
    }
    getToItem(){
       return this.state.list.map((item,index)=>{
            //dangerouslySetInnerHTML={{__html:item}}将输入文本以HTML解析
            //<li key={index} onClick={this.handleItemDele.bind(this,index)} dangerouslySetInnerHTML={{__html:item}}></li>
            //<ToItem content={item}/>通过属性来向子组件传递数据
            return (
                /*bind(this)将父组件的this绑定给子组件*/
                <ToItem key={item} content={item} index={index} handleItemDele={this.handleItemDele}/>
            )
        })
    }
    handleInputChange(){
        //this.state.inputValue=e.target.value;
        //通过setState方法更改state数据,用this.input代替e.target
        const value=this.input.value;
        this.setState(()=>({
            inputValue:value
        }));
        // this.setState({
        //     inputValue:e.target.value,
        //     }
        // );
        console.log(e.target.value);
    }
    handBtnClick(){
            // this.setState({
            //     list:[...this.state.list,this.state.inputValue],
            //     inputValue:''
            // })
        this.setState((prevState)=>{
            return {
                list:[...prevState.list,prevState.inputValue],
                inputValue:''
            }
        })
    }
    handleItemDele(index){
        console.log(index);
        //不允许直接修改sate的值，拷贝出一个副本进行修改
        // list.splice(index,1);
        // this.setState({
        //     list:list
        // })
        this.setState((prevState)=>{
            const list=[...prevState.list];
            list.splice(index,1);
            return {list}
        })
    }
}
export default ToList;