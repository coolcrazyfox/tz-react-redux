import {createAction, createReducer} from "@reduxjs/toolkit";


const initialState ={
    count: 0,
    todos: ['movies', 'learn', 'read']
}

export const increment =createAction('INCREMENT')
export const decrement =createAction('DECREMENT')
// const increment =createAction('ADD_TODO')
// const increment =createAction('REMOVE_TODO')

export default createReducer(initialState,{
    [increment]: function (state) {
        state.count = state.count +1
    },
    [decrement]: function (state) {
        state.count = state.count -1
    },

})
