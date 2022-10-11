import React from 'react';
import {useSelector} from "react-redux";
import {selectAllPosts} from "./postsSlice";

const PostsList = () => {
    // const posts = useSelector(state => state.posts)
    const posts = useSelector(selectAllPosts)
    const renderedPosts = posts.map(post=>(
        <article key={post.id}>
            <h3>{post.name}</h3>
            <h3>{post.surname}</h3>
            <h3>{post.birth_year}</h3>
            <h3>{post.portfolio}</h3>

        </article>
    ))
    return (
        <section>
            <h2>Card</h2>
            {renderedPosts}

        </section>
    );
};

export default PostsList;
