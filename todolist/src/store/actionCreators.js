import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELE_TODO_ITEM} from './actionTypes'

export const getInputChangeAction=(value)=>({
    type:CHANGE_INPUT_VALUE,
    value
});
export const getAddItemAction=()=>({
    type:ADD_TODO_ITEM
});
export const getDeleteItemAction=(index)=>({
    type:DELE_TODO_ITEM,
    index
});