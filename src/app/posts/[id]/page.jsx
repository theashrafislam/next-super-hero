import React from 'react';

const getPost = async(id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
    return data;
}

export const generateMetadata = async ({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await res.json();
    return {
        title: {
            absolute: `${data.title}`
        },
        description: data.body,
        keywords: data.body.split(' ')
    }
}

const PostDetails = async({params}) => {
    const {title, body, id} = await getPost(params.id);
    return (
        <div className='border-2 p-4 m-6'>
            <h3>Title: {title}</h3>
            <p>Body: {body}</p>
        </div>
    );
};

export default PostDetails;