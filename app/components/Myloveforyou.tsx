import React from 'react'

const Myloveforyou = () => {
  return (
    <div className='h-auto flex flex-col px-12'>
        <p className='text-center text-3xl py-6 text-white font-bold'>Sở thích của anh mỗi ngày</p>
        <img src='images/human_body.png' alt='human body in pink color' className='flex items-center justify-center size-[90%] pb-6'/>
        
        <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
              <div className='h-8 w-8 bg-blue-500'>
              </div>
              <p>Game</p>
            </div>
            <div className='flex items-center gap-4'>
              <div className='h-8 w-8 bg-green-500'>
              </div>
              <p>Cờ bạc</p>
            </div>
            <div className='flex items-center gap-4'>
              <div className='h-8 w-8 bg-yellow-400'>
              </div>
              <p>Rượu, bia, thuốc lá</p>
            </div>
            <div className='flex items-center gap-4'>
              <div className='h-8 w-8 bg-red-500'>
              </div>
              <p>Đua xe trá hình</p>
            </div>
            <div className='flex items-center gap-4'>
              <div className='h-8 w-8 bg-pink-500'>
              </div>
              <p>Đồng Hoàng Bảo Anh</p>
            </div>
            <div className='flex items-center gap-4'>
              <div className='h-8 w-8 bg-purple-600'>
              </div>
              <p>Mấy con nhỏ khác</p>
            </div>
        </div>
    </div>
  )
}

export default Myloveforyou