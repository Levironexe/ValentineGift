'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Letter = () => {
  const [isOpened, setIsOpened] = useState(false);
  
  const handleClick = () => {
    setIsOpened(true);
  }

  return (
    <div className='pt-12 relative'>
      <div className='p-12'>        
        <p className='font-bold text-center text-6xl bg-gradient-to-r from-pink-500 via-pink-600 to-red-500 text-transparent bg-clip-text relative z-10'>Bấm vào lá thư ở dưới ikk</p>
      </div>
      <div className='min-h-screen h-auto flex items-end'>
        <AnimatePresence>
          {isOpened && (
            <motion.img 
              src='images/flower.png' 
              alt='flower' 
              className='absolute top-80 left-1/2 -translate-x-1/2 z-0'
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 0.5,
                scale: { duration: 0.5 },
                rotate: {
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut"
                }
              }}
            />
          )}
        </AnimatePresence>
        <div className='w-full flex justify-center'>
          {!isOpened ? (
            <img 
              src='images/closed_letter.png' 
              alt='closed letter' 
              onClick={handleClick}
              className='cursor-pointer relative z-10'
            />
          ) : (
            <div className='relative flex justify-center w-full'>
              <img 
                src='images/opened_letter_1.png' 
                alt='opened letter'
                className='relative z-10'
              />
              <motion.div 
                className='bg-slate-50 w-2/3 p-6 pb-20 absolute z-20'
                initial={{ y: 200, opacity: 1 }}
                animate={{ y: -400, opacity: 1 }}
                transition={{ 
                  type: "spring",
                  damping: 20,
                  stiffness: 100
                }}
              >
                <p className='text-black whitespace-pre-line'>
                  Gửi em - người yêu dấu của anh, <br></br>

                  Nhân dịp Valentine này, cũng tròn một tuần ta tìm về bên nhau. Có những khoảnh khắc anh tưởng như đã đánh mất em mãi mãi, nhất là hôm ấy - ngày anh vội vã chạy từ Biên Hòa lên gặp em. Trên đường về, trái tim anh tan vỡ, và những giọt mưa đêm càng khiến nỗi nhớ em thêm đau đớn.
<br></br>
                  Nhưng rồi định mệnh đã mỉm cười với chúng mình. Em đã cho anh một cơ hội để yêu thương và che chở em một lần nữa. Anh hứa sẽ trân trọng từng phút giây bên em, để tình yêu của chúng mình mãi mãi bền lâu và ngọt ngào như những ngày đầu tiên.
<br></br>
                  Cảm ơn em đã quay về bên anh...
                </p>
              </motion.div>
              <img 
                src='images/opened_letter_2.png' 
                alt='opened letter'
                className='absolute bottom-0 z-30'
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Letter