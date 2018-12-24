import React,{Component,Fragment} from "react";
//Fragment占位符，可以让标签隐藏掉，少个包裹的标签
class ToList extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:'',
            list:['react','vue']
        }
    }
    render() {
        return (<Fragment>
            {/*bind(this)绑定this的指向*/}
            <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/><button onClick={this.handBtnClick.bind(this)}>提交</button>
            <ul>
                <li>英语</li>
                <li>{this.state.inputValue}</li>
                {
                    this.state.list.map((item,index)=>{
                        return <li key={index} onClick={this.handleItemDele.bind(this,index)}>{item}</li>
                    })
                }
            </ul>
        </Fragment>)
    }
    handleInputChange(e){
        //this.state.inputValue=e.target.value;
        //通过setState方法更改state数据
        this.setState({
            inputValue:e.target.value,
            }
        );
        console.log(e.target.value);
    }
    handBtnClick(){
            this.setState({
                list:[...this.state.list,this.state.inputValue],
                inputValue:''
            })
    }
    handleItemDele(index){
        console.log(index);
        //不允许直接修改sate的值，拷贝出一个副本进行修改
        const list=[...this.state.list];
        list.splice(index,1);
        this.setState({
            list:list
        })
    }
}
export default ToList;