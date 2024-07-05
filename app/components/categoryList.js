
import { getCategories } from './serverComponent';
export default async function CategoryList() {
    const categories = await getCategories();
    console.log(categories);
    return (
        <div className='fixed top-60 left-40 min-w-12 h-auto rounded-2xl  border border-gray-200 border-solid'>
            <div className='text-base p-2 hover:bg-gray-200 rounded-md flex justify-start items-center overflow-hidden cursor-pointer'>最近更新</div>
            {categories.map((category) => (
                <div key={category.id} className='text-base p-2 hover:bg-gray-200 rounded-md flex justify-start items-center overflow-hidden cursor-pointer'>
                    {category.name}
                </div>
            ))}
        </div>
    );
}
