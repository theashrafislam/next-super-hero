// import { getpostdata } from '@/servicesApi/getpostapi';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export const getpostdata = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
    const data = await res.json();
    // if(data) {
    //     redirect(`/posts/${data[0].id}`)
    // }
    return data;
}

const PostsPage = async () => {
    const getData = await getpostdata();
    return (
        <div className='grid grid-cols-4 gap-4 m-5'>
            {
                getData?.map((post) => (
                    <div key={post.id} className='border-2 p-4'>
                        <h4><span className='font-bold'>User ID:</span>{post.userId}</h4>
                        <h3><span className='font-bold'>Title:</span>{post.title}</h3>
                        <p><span className='font-bold'>Body:</span>{`${post.body.length > 100 ? post.body.slice(0, 100) : ""}`}</p>
                        <button className='py-2 px-4 font-bold text-white bg-red-500 rounded-xl'><Link href={`/posts/${post.id}`}>View Details</Link></button>
                    </div>
                ))
            }
        </div>
    );
};

export default PostsPage;