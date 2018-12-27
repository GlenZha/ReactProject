import React,{Component} from 'react'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import {connect} from 'react-redux'
import axios from 'axios'
import {
    HomeWrapper,HomeLeft,HomeRight} from './style'

class home extends Component{
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className={'banner-img'} src={require('./../../statics/banner-img.jpg')} alt={'lkk'}/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        );
    }
    componentDidMount() {
         this.props.changeHomeData();
    }
}
const mapDispatch=(dispatch)=>({
    changeHomeData(){
        axios.get('/api/home.json').then((res)=>{
            const result=res.data.data;
            const action={
                type:'change_home_data',
                topicList: result.topicList,
                articleList: result.articleList,
                recommendList: result.recommendList
            };
            dispatch(action)
        });

    }
});

export default connect(null,mapDispatch)(home);