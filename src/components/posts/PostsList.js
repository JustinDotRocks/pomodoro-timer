import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const PostsContainer = styled.div`

`;

const PostsList = () => {
    const posts = useSelector(state => state.posts)

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <Link to={`/posts/${post.id}`}>View Post</Link>
        </article>
    ))

    return (
        <PostsContainer>
            Posts
            {renderedPosts}
        </PostsContainer>
    )
};

export default PostsList;