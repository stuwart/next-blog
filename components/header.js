import Image from 'next/image'

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
        <span className='inline-block hover:bg-gray-100 text-gray-900 rounded-lg p-2'>博文</span>
        <span className='inline-block hover:bg-gray-100 text-gray-900 rounded-lg p-2'>资源</span>
        <span className='inline-block hover:bg-gray-100 text-gray-900 rounded-lg p-2'>主站</span>
        <span className='inline-block hover:bg-gray-100 text-gray-900 rounded-lg p-2'>关于</span>
      </div>
      <div>
        <img alt='头像' />
      </div>
    </div>
  )
}


