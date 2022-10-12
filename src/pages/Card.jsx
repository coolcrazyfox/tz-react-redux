import React from 'react';
import {useSelector} from "react-redux";
import {selectAllPosts} from "../testRedux/features/post/postsSlice";

const Card = () => {
    const cards = useSelector(selectAllPosts)
    return (
        <>
            {cards.map(post=>(

                <div key={post.id}>
                    {/*<label htmlFor="">Name:*/}
                    {/*    <span>{post.name}</span>*/}
                    {/*</label>*/}
                    {/*<label htmlFor="">Name:*/}
                    {/*    <span>{post.surname}</span>*/}
                    {/*</label>*/}
                    {/*<label htmlFor="">Name:*/}
                    {/*    <span>{post.birth_year}</span>*/}
                    {/*</label>*/}
                    {/*<label htmlFor="">Name:*/}
                    {/*    <span>{post.portfolio}</span>*/}
                    {/*</label>*/}
                    <p>{post.name}</p>
                    <p>{post.surname}</p>
                    <p>{post.birth_year}</p>
                    <p>{post.portfolio}</p>

                </div>
                ))
            }
        </>

    );
};

export default Card;
