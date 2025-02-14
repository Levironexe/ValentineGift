'use client'
import React from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  return (
    <div className='px-12 h-screen bg-black'>
      <div className='flex flex-col justify-between h-full items-center py-12'>
        <div>
          <p className='text-6xl font-bold bg-gradient-to-r from-pink-500 via-pink-600 to-red-700 text-transparent bg-clip-text'>
            Bông yêu dấu của anh ơiii
          </p>
          <p className='pt-4 text-3xl text-white font-normal'>
            Nhân dịp <span className='bg-gradient-to-r from-pink-500 via-pink-600 to-red-500 text-transparent bg-clip-text'>Valentine</span> năm nay anh muốn có đôi lời muốn nhắn nhủ em và rewind lại câu chuyện của chúng mình nhé!
          </p>
        </div>
        
        <Link
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('loveday');
            const offset = 50;
            
            if (element) {
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - offset;
              
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }} 
          href={'#loveday'}
          className='flex flex-col items-center'
        >
          <p className='text-3xl mb-2'>Bấm cái ni đi :&gt;</p>
          <ChevronDown size={40} className='animate-bounce'/>
        </Link>
      </div>
    </div>
  )
}

export default Hero