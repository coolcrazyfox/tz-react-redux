import React, { useState } from 'react';
import s from "../styles/Main.module.css";
import {useSelector} from "react-redux";
import {selectAllPosts} from "../testRedux/features/post/postsSlice";

const Card = () => {
    const posts = useSelector(selectAllPosts)
    // const todos = useSelector(state=> state.todos.todos)
    const years= 1985
    const [yearsOld, setYearsOlid]= useState(2022)
    const yearsOldSum = yearsOld - years
    console.log('y',years)
    console.log('yo',yearsOld)
    console.log('yos',yearsOldSum)
    console.log('p',posts.birth_year)

    return (
        <div>
            <div>
                <label htmlFor="Name">Name:</label>
                {posts.map(post=>(
                        <div key={post.id}>                        
                            <span>{post.name}</span>
                        </div>
                        ))
                        }
            </div>
            <div>
                <label htmlFor="Surname">Surname: </label>  
                {posts.map(post=>(
                    <div key={post.id}>                        
                        <span>{post.surname}</span> 
                    </div>
                    ))
                    }
            </div>
            <div>
                <label htmlFor="Birth_year"> Birth_year:</label>
                {posts.map(post=>(
                    <div key={post.id}>                        
                        <span>{post.birth_year}</span>
                    </div>
                    ))
                    }
                    <span> {yearsOldSum }
                        </span>

            </div>
            <div>
                <label htmlFor="Portfolio">Portfolio:</label>
                {posts.map(post=>(
                    <div key={post.id}>                        
                        <span>{post.portfolio}</span>
                    </div>
                    ))
                    }

            </div>
           
        </div>

    );
};

export default Card;
