import React,{Component} from 'react'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
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
}
export default home;