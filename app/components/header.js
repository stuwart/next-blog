import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='mt-8 ml-4 flex justify-between items-center h-auto'>
      <div className='flex w-1/4 justify-around items-center text-lg'>
        <div className='inline-block self-start'>
          <Image
            src='/Alibaba Cloud.png'
            alt='Icon'
            width={72}
            height={72}
            className='inline-block'
          />
          <span>云想</span>
        </div>
        <Link href="/" className='inline-block hover:bg-gray-100 text-gray-900 rounded-lg p-2'>博文</Link>
        <Link href="/resource"className='inline-block hover:bg-gray-100 text-gray-900 rounded-lg p-2'>资源</Link>
        <Link href="/mainsite" className='inline-block hover:bg-gray-100 text-gray-900 rounded-lg p-2'>主站</Link>
        <Link href="/about" className='inline-block hover:bg-gray-100 text-gray-900 rounded-lg p-2'>关于</Link>
      </div>
      <div>
        <img alt='头像' />
      </div>
    </div>
  )
}


