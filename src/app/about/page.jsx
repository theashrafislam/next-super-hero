import React from 'react';
import { Playpen_Sans } from 'next/font/google';

const playpen_Sans = Playpen_Sans({weight: ['400', '700'], subsets: ['latin']})

export const metadata = {
    title: {
        absolute: "about page"
    },
    description: "Hello, I am form about page. I am MERN Stack Developer.",
    keywords: ['web developer, mern stack developer, full stack developer']
};

// const getLocalTime = async () => {
//     const res = await fetch('http://localhost:3000/time', {cache: 'no-store'});
//     const data = await res.json();
//     return data.currentTime;
// }

const AboutPage = async () => {
    // const getTime = await getLocalTime();
    return (
        <div>
            <h1 className={`${playpen_Sans.className}`}>Hello, I am about page</h1>
            <h1 className='text-xl text-red-500 font-bold'>Time: {getTime}</h1>
        </div>
    );
};

export default AboutPage;