// app/components/CategoryList.js
import { getCategories } from './ServerComponent';

export default async function CategoryList() {
    const categories = await getCategories();
    console.log(categories);
    return (
        <div className='fixed top-60 left-40 w-1/12 h-auto rounded-2xl bg-gray-50 border border-gray-200 border-solid'>
            {categories.map((category) => (
                <div key={category.id} className='text-base p-2 hover:bg-gray-100 rounded-md flex justify-start items-center overflow-hidden cursor-pointer'>
                    {category.name}
                </div>
            ))}
        </div>
    );
}
