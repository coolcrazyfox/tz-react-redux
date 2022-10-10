import React from 'react';
import s from "../styles/Main.module.css";
import {addTodo, decrement, increment, removeLastTodo} from "../toolkitRedux/toolkitSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";


const addAsyncTodo =()=>{
    return async dispatch =>{
        setTimeout(()=>{
            dispatch(addTodo("ASYNC TODO"))

        }, 3000)
    }
}

const Main = () => {
    const count = useSelector(state => state.toolkit.count)
    const todos = useSelector(state => state.toolkit.todos)
    // const count = useSelector(state => state.main.count)
    // const todos = useSelector(state => state.main.todos)
    const dispatch = useDispatch()
    return (
        <div className={s.main_form}>
            <div>
                <h1>Count {count}</h1>
                <button onClick={()=>dispatch(increment())}>Increment</button>
                <button onClick={()=>dispatch(decrement())}>Decrement</button>
                <button onClick={()=>dispatch(removeLastTodo())}>Delete last todo</button>
                <button onClick={()=>dispatch(addTodo(prompt()))}>  Add todo</button>
                <button onClick={()=>dispatch(addAsyncTodo())}>  Add async todo</button>
                <ul>
                    {todos.map(todo=>
                        <li key={todo}>{todo}</li>
                    )}
                </ul>
            </div>

            <div className={s.main_box}>
                <div className={s.title}>Карточка студента</div>
                <div className={s.information}> No data</div>
                <Link to='/form'>
                    <button className={s.btn}>Добавить</button>
                </Link>

            </div>


        </div>
    );
};

export default Main;
