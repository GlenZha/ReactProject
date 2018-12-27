import {fromJS} from 'immutable';
//immutable库创建immutable对象

const defaultState=fromJS({
    topicList:[{
        id:1,
        title:'社会热点',
        imgUrl:'//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp'
    }]
});

export default (state=defaultState,action)=>{
    switch (action.type) {
    }
    return state;
}