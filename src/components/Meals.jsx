"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Meals = () => {
    const [search, setSearch] = useState("");
    const [meal, setMeal] = useState([]);

    const loadedData = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const data = await res.json();
        setMeal(data.meals || []);
    }

    const handleInput = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className='mt-3'>
            <input onChange={handleInput} className='px-2 py-3 bg-gray-200' type="search" />
            <button onClick={() => loadedData()} className='px-4 py-3 bg-red-500 text-white font-semibold'>Search</button>
            <div className='grid grid-cols-4 gap-4 mt-3'>
                {
                    meal?.length > 0 ? meal?.map((item) => (
                        <div key={item.idMeal} className='border-2 p-4'>
                            <Image src={item.strMealThumb} width={500} height={500} alt='hello'/>
                            <h5><span className='font-bold'>StrArea:</span> {item.strArea}</h5>
                            <h5><span className='font-bold'>StrMeal:</span> {item.strMeal}</h5>
                            <p><span className='font-bold'>StrInstructions:</span> {item.strInstructions.length > 10 ? item.strInstructions.slice(0, 150) : ""}</p>
                        </div>
                    ))
                    :
                    <h3 className='text-red-500 text-xl'>No Data Found.</h3>
                }
            </div>
        </div>
    );
};

export default Meals;