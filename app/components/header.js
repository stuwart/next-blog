import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='header-container'>
      <div className=' px-4 lg:px-6 py-2.5 flex justify-between items-center h-auto border-gray-200'>
        <div className='flex w-1/4 justify-around items-center text-lg'>
          <div className='flex-none inline-block self-start'>
            <Image
              src='/Alibaba Cloud.png'
              alt='Icon'
              width={64}
              height={64}
              className='inline-block'
            />
          </div>
          <Link href="/" className='flex-none inline-block hover:bg-gray-200 text-gray-900 rounded-lg p-2'>博文</Link>
          <Link href="/resource" className='flex-none inline-block hover:bg-gray-200 text-gray-900 rounded-lg p-2'>资源</Link>
          <Link href="/mainsite" className='flex-none inline-block hover:bg-gray-200 text-gray-900 rounded-lg p-2'>主站</Link>
          <Link href="/about" className='flex-none inline-block hover:bg-gray-200 text-gray-900 rounded-lg p-2'>关于</Link>
        </div>
        <div className='flex'>
          <button className='flex-none hover:bg-gray-200 text-gray-900 rounded-lg p-2 m-1'>Log in</button>
          <button className='flex-none hover:bg-gray-200 text-gray-900 rounded-lg p-2 m-1'>Sign up</button>
          <img alt='头像' className='flex-none' />
        </div>
      </div>
      <div className="border-b border-gray-300 "></div>
    </div>
  )
}


