import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    SearchWrapper,
    Button
} from "./style";
import {connect} from 'react-redux'

const Header =(props)=>{
    return (<HeaderWrapper>
        <Logo/>
        <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载App</NavItem>
            <NavItem className='right'>登录</NavItem>
            <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
            <SearchWrapper>
                <CSSTransition
                    in={props.focused}
                    timeout={300}
                    classNames={"slide"}>
                    <NavSearch className={props.focused ?'focused':''}
                               onFocus={props.handleInputFocus}
                               onBlur={props.handleInputBlur}
                    />
                </CSSTransition>

                <i className={props.focused ?'focused iconfont':'iconfont'}>&#xe60b;</i>
            </SearchWrapper>
        </Nav>
        <Addition>
            <Button className='writting'><i className="iconfont">&#xe62d;</i>写文章</Button>
            <Button className='reg'>注册</Button>
        </Addition>
    </HeaderWrapper>)

};
//把state映射到props
const mapStateToProps=(state)=>{
      return {
          focused:state.focused
      }
};
const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputFocus(){
            const action={
                type:'search_focus'
            };
            dispatch(action);
        },
        handleInputBlur(){
            const action={
                type:'search_blur'
            };
            dispatch(action);
        }
    }
};
export default  connect(mapStateToProps,mapDispatchToProps)(Header);
