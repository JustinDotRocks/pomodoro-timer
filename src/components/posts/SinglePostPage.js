import React from 'react';
//import styled from 'styled-components';
import { useSelector } from 'react-redux';

const SinglePostPage = (match) => {

    const postId  = match.params

    const post = useSelector(state => 
        state.posts.find(post => post.id === postId)
    )

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (
        <section>
            <article>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </article>
        </section>
    )
};

export default SinglePostPage;