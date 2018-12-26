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
    getListArea(){
        const {focused,list} =this.props;
        if (focused){
            return(<SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwtich>换一批</SearchInfoSwtich>
                    <SearchInfoList>

                        {
                            list.map((item)=>{
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>;
                            })
                        }
                    </SearchInfoList>
                </SearchInfoTitle>
            </SearchInfo>)
        } else {
            return null;
        }
    }
    render() {
        const {focused,handleInputFocus,handleInputBlur} =this.props;
        return (<HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={focused}
                        timeout={300}
                        classNames={"slide"}>
                        <NavSearch className={focused ?'focused':''}
                                   onFocus={handleInputFocus}
                                   onBlur={handleInputBlur}
                        />
                    </CSSTransition>

                    <i className={focused ?'focused iconfont':'iconfont'}>&#xe60b;</i>
                </SearchWrapper>
                {this.getListArea()}
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
          focused:state.getIn(['header','focused']),
          list:state.getIn(['header','list'])
      }
};
const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputFocus(){
            dispatch(actionCreators.searchFocus());
            dispatch(actionCreators.getList());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
};
export default  connect(mapStateToProps,mapDispatchToProps)(Header);
