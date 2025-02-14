'use client'
import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    reveal: { opacity: 1, y: 0 },
}

const Lovedays = () => {
  return (
    <main id='loveday' className="min-h-screen overflow-hidden bg-black relative">
      <section className="container mx-auto h-full flex items-center justify-center">
        <motion.div 
          className='p-12 text-center'
          initial='hidden'
          whileInView='reveal'
          transition={{ staggerChildren: 0.2 }}
          viewport={{ 
            once: true,
            margin: "-100px",  // Adjust this value to control when animation starts
            amount: 0.3 // This means the element needs to be 30% in view to start
          }}
        >
            <motion.div 
              className='text-3xl py-6 text-white font-bold'
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
                <p className='text-6xl'>Mình đã bên nhau:</p>
            </motion.div>
            <motion.div 
              className='text-8xl pb-4 text-pink-500 font-bold'
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
                <p style={{ filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.6))' }}>1 năm</p>
            </motion.div>
            <motion.div 
              className='text-6xl pb-4 text-pink-600 font-bold'
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
                <p style={{ filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.5))' }}>2 tháng</p>
            </motion.div>
            <motion.div 
              className='text-5xl text-red-500 font-bold'
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
                <p style={{ filter: 'drop-shadow(0 0 10px rgba(231, 33, 6, 0.6))' }}>8 ngày</p>
            </motion.div>
            <motion.div 
              className='text-5xl text-red-500 font-bold'
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 1 }}
            >
                <img src='images/heart.png' alt='heart image'/>
            </motion.div>

        </motion.div>
      </section>
    </main>
  )
}

export default Lovedays