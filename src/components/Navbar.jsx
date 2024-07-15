"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const router = useRouter();
    const pathName = usePathname();
    const navLinks = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Photos",
            path: "/photos"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Posts",
            path: "/posts"
        },
        {
            title: "Meals",
            path: "/meals"
        }
    ]
    const handleLoginButton = () => {
        router.push('/login')
    }
    if(pathName.includes('dashboard')){
        return (
            <div className='bg-green-500 py-4'>
                <h1>Hello, I am Dashboard Navbar</h1>
            </div>
        )
    }
    return (
        <nav className="bg-red-500 p-4 text-white flex justify-between items-center">
            <h6 className="text-xl">Next<span className="text-cyan-300"> Hero</span></h6>
            <ul className="flex justify-between items-center gap-3">
                {
                    navLinks?.map((link) => <Link className={`${pathName == link.path && "text-black"}`} href={link.path} key={link.path}>{link.title}</Link>)
                }
            </ul>
            <div>
                <button onClick={handleLoginButton} className={`px-4 py-2 rounded-xl bg-white font-bold text-black ${pathName == "/login" && "text-red-500"}`}>Login</button>
            </div>
        </nav>
    );
};

export default Navbar;