'use client'
import { useEffect, useState } from 'react';
import { getCategory } from "@/lib/action";


export default function HoverMenu() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const categoryData = await getCategory();
            setCategories(categoryData);
        }
        fetchData();
    }, []);

    return (
        <div className='fixed top-60 left-40 w-1/12 h-auto rounded-2xl bg-gray-50 border border-gray-200 border-solid'>
            {categories.map((category, index) => (
                <div key={index} className='text-base p-2 hover:bg-gray-100 rounded-md flex justify-start items-center overflow-hidden cursor-pointer'>
                    {category.name}
                </div>
            ))}
        </div>
    );
}
