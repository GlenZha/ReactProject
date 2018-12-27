import React,{Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import {actionCreators}  from './store';
import {Link} from 'react-router-dom'
import {actionCreators as loginActionCreators} from '../../pages/login/store'
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
        const {mouseIn,focused,list,page,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage} =this.props;
        const newList=list.toJS();
        const pageList=[];

        if(newList.length){
            for (let i=(page-1)*10;i<page*10;i++){
                if(newList[i]){
                    pageList.push(
                        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                    )
                }
            }
        }

        
        if (focused||mouseIn){
            return(<SearchInfo onMouseEnter={handleMouseEnter}
                               onMouseLeave={handleMouseLeave}>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwtich onClick={()=>{handleChangePage(page,totalPage,this.spinIcon)}}>
                        <i ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe851;</i>
                        换一批
                    </SearchInfoSwtich>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfoTitle>
            </SearchInfo>)
        } else {
            return null;
        }
    }
    render() {
        const {focused,handleInputFocus,handleInputBlur,list,login,logout} =this.props;
        return (<HeaderWrapper>
            <Link to={'/'}>
                <Logo/>
            </Link>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                {
                    login ?<NavItem onClick={logout} className='right'>退出</NavItem>:
                        <Link to={'/login'}><NavItem className='right'>登录</NavItem></Link>
                }
                <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={focused}
                        timeout={300}
                        classNames={"slide"}>
                        <NavSearch className={focused ?'focused':''}
                                   onFocus={()=>{handleInputFocus(list)}}
                                   onBlur={handleInputBlur}
                        />
                    </CSSTransition>

                    <i className={focused ?'focused iconfont':'iconfont'}>&#xe60b;</i>
                </SearchWrapper>
                {this.getListArea()}
            </Nav>
            <Addition>
                <Link to={'/write'}><Button className='writting'><i className="iconfont">&#xe62d;</i>写文章</Button></Link>
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
          list:state.getIn(['header','list']),
          page:state.getIn(['header','page']),
          mouseIn:state.getIn(['header','mouseIn']),
          totalPage:state.getIn(['header','totalPage']),
          login:state.getIn(['login','login'])
      }
};
const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputFocus(list){
            (list.size===0)&&dispatch(actionCreators.searchFocus());
            dispatch(actionCreators.getList());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page,totalPage,spin){
            //取到原始度数，非数字替换成空
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            }else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else {
                dispatch(actionCreators.changePage(1));
            }
        },
        logout(){
            dispatch(loginActionCreators.logout())
        }
    }
};
export default  connect(mapStateToProps,mapDispatchToProps)(Header);
