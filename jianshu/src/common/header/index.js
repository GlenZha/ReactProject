import React,{Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import {actionCreators}  from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    SearchWrapper,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwtich,
    SearchInfoItem,
    SearchInfoList
} from "./style";
import {connect} from 'react-redux'


class Header extends Component{
    getListArea(show){
        if (show){
            return(<SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwtich>换一批</SearchInfoSwtich>
                    <SearchInfoList>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                        <SearchInfoItem>教育</SearchInfoItem>
                    </SearchInfoList>
                </SearchInfoTitle>
            </SearchInfo>)
        } else {
            return null;
        }
    }
    render() {
        return (<HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={this.props.focused}
                        timeout={300}
                        classNames={"slide"}>
                        <NavSearch className={this.props.focused ?'focused':''}
                                   onFocus={this.props.handleInputFocus}
                                   onBlur={this.props.handleInputBlur}
                        />
                    </CSSTransition>

                    <i className={this.props.focused ?'focused iconfont':'iconfont'}>&#xe60b;</i>
                </SearchWrapper>
                {this.getListArea(this.props.focused)}
            </Nav>
            <Addition>
                <Button className='writting'><i className="iconfont">&#xe62d;</i>写文章</Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>)
    }
};

//把state映射到props
const mapStateToProps=(state)=>{
      return {
          //focused:state.get('header').get('focused')
          focused:state.getIn(['header','focused'])
      }
};
const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputFocus(){
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
};
export default  connect(mapStateToProps,mapDispatchToProps)(Header);
