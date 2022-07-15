import { Container } from '@mui/material';
import React, { FC, useState } from 'react'
import { IPost } from '../models/IPost';
import { postApi } from '../services/PostService';
import PostItem from './PostItem';

const PostContainer: FC = () => {
    const [limit, setLimit] = useState(50);
    const { data: posts, error, isLoading } = postApi.useFetchAllPostsQuery(limit);
    const [deletePost, { }] = postApi.useDeletePostMutation();
    const [updatePost, { }] = postApi.useUpdatePostMutation();

    console.log("рендер PostContainer");

    return (
        <div>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Произошла ошибка при загрузке</h1>}
            <Container maxWidth="sm">
                {posts && posts.map(post =>
                    <PostItem remove={(post: IPost) => deletePost(post)} update={(post: IPost) => updatePost(post)} key={post.id} post={post} />
                )}
            </Container>
        </div>
    )
};

export default PostContainer;
