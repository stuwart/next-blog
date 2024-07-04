import { getCategory } from "@/lib/action"
export default function HoverMenu() {
    const categorys = getCategory();
    console.log(categorys);
    return (
        <div className='fixed top-60 left-40 w-1/12 h-auto rounded-2xl bg-gray-50 border border-gray-200 border-solid'>
            <div className=' text-base p-2 hover:bg-gray-100 rounded-md flex justify-start items-center overflow-hidden cursor-pointer'>
                123
            </div>
            <div className=' text-base p-2 hover:bg-gray-100 rounded-md flex justify-start items-center overflow-hidden cursor-pointer'>
                456
            </div>
        </div>
    )
}
