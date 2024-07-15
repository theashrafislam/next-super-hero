import Image from 'next/image';
import React from 'react';

const PhotosPage = () => {
    return (
        <div>
            <h1 className='text-center'>Hello, I am photos</h1>
            <div>
                {
                    [1, 2, 3, 4].map((img) => (
                        <Image key={img} width={1920} height={1080} alt='hello' src={`/${img}.jpg`}/>
                    ))
                }
            </div>
        </div>
    );
};

export default PhotosPage;