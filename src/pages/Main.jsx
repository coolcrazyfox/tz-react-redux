import React, {useEffect, useRef} from 'react';
import s from "../styles/Main.module.css";
import {addTodo, decrement, increment, removeLastTodo} from "../toolkitRedux/toolkitSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {selectAllPosts} from "../testRedux/features/post/postsSlice";
import FormPage from "../secondRedux/pages/UserPage";
import Card from "./Card";

// https://youtu.be/C0fBnil_Im4


// const addAsyncTodo =()=>{
//     return async dispatch =>{
//         setTimeout(()=>{
//             dispatch(addTodo("ASYNC TODO"))
//
//         }, 3000)
//     }
// }

const Main = () => {
    // const posts = useSelector(state => state.posts)
    // const posts = useSelector(selectAllPosts)
    // console.log('p',posts)
    // const addButton = posts.length
    // const isMounted = useRef(false)

    // useEffect(()=>{
    //     if (isMounted.current){
    //         const json =JSON.stringify(posts)
    //         localStorage.setItem('contact', json)
    //     }
    //     isMounted.current = true
    // },[posts])
    // useEffect(()=>{
    //     console.log('render')
    // },[])
    // console.log(addButton)

    // const renderedPosts = posts.map(post=>(
    //
    //     <div key={post.id}>
    //         <p>{post.name}</p>
    //         <p>{post.surname}</p>
    //         <p>{post.birth_year}</p>
    //         <p>{post.portfolio}</p>
    //
    //     </div>
    // ))

    // const count = useSelector(state => state.toolkit.count)
    // const todos = useSelector(state => state.toolkit.todos)

    // const count = useSelector(state => state.main.count)
    // const todos = useSelector(state => state.main.todos)
    // const dispatch = useDispatch()
    return (
        <div className={s.main_form}>
            {/*<div>*/}
            {/*    <h1>Count {count}</h1>*/}
            {/*    <button onClick={()=>dispatch(increment())}>Increment</button>*/}
            {/*    <button onClick={()=>dispatch(decrement())}>Decrement</button>*/}
            {/*    <button onClick={()=>dispatch(removeLastTodo())}>Delete last todo</button>*/}
            {/*    <button onClick={()=>dispatch(addTodo(prompt()))}>  Add todo</button>*/}
            {/*    <button onClick={()=>dispatch(addAsyncTodo())}>  Add async todo</button>*/}
            {/*    <ul>*/}
            {/*        {todos.map(todo=>*/}
            {/*            <li key={todo}>{todo}</li>*/}
            {/*        )}*/}
            {/*    </ul>*/}
            {/*</div>*/}

            <div className={s.main_box}>
                <div className={s.title}>Карточка студента</div>
                {/*<div className={s.box_info}>*/}
                {/*    <Card/>*/}
                {/*</div>*/}
                <div className={s.information}> No data</div>


                <Link to='/form'>
                    <button className={s.btn}>Добавить</button>
                </Link>
                {/*    {addButton<=1 ?  <div className={s.information}> No data</div> : renderedPosts}*/}
                {/*</div>*/}

                {/*{addButton>1 ? <div to='/form'> <button className={s.btn}>Изменить</button></div>: */}
                {/*}*/}



            </div>
            {/*<FormPage/>*/}


        </div>
    );
};

export default Main;
