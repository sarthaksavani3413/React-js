import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/action/apiaction';

const Post = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.users.posts);

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    return (
        <div align="center">
            <h2>Posts api calling</h2>
            {posts.length == 0 ? (
                <p>Loading posts...</p>
            ) : (
                <table border={1} align="center" cellPadding={10}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Views</th>
                            <th>User ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td>{post.views}</td>
                                <td>{post.userId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Post;