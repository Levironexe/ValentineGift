'use client'
import React from 'react'
import { motion } from 'framer-motion'

const BarGraph = () => {
  return (
    <div className='h-auto bg-black'>
      <div className='py-20'>
        <p className='text-3xl text-center mb-6 text-white font-bold'>Bảng tổng hợp những lần mình giận nhau =))</p>
        <div className='relative'>
          <div className='inset-0 z-10 absolute w-1/12 h-52 bg-black border-r-4 border-white'>
          </div>
          <div className='flex flex-col gap-12 pt-3 pr-12'>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1,
                ease: "easeOut"
              }}
              className='w-full h-16 bg-blue-500 py-3 text-center items-center flex justify-center'
            >
              999
            </motion.div>
            <div className='relative w-full h-16 bg-transparent py-3 text-center items-center flex justify-center'>
              1 (Hôm nay)
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '15%' }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.3
                }}
                className='absolute bg-pink-600 inset-0'
              ></motion.div>
            </div>
          </div>
        </div>
        <div className='p-12 flex flex-col gap-4'>
          <div className='bg-white rounded-3xl p-4 text-black'>
            <p className='pb-4 font-bold text-xl'>Chú thích:</p>
            <div className='flex items-center gap-4'>
              <div className='h-8 w-8 bg-blue-500'>
              </div>
              <p>Anh cáu em vô lý vl</p>
            </div>
            <div className='flex items-center gap-4'>
              <div className='h-8 w-8 bg-pink-600'>
              </div>
              <p>Em hơi cáu anh do anh vô tâm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BarGraph