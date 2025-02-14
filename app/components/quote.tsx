import React from 'react'

const Quote = () => {
    return (
        <div className='pb-20 px-12 h-screen flex flex-col items-center'>
        <div className='pb-6'>
            <p className='text-3xl pt-12 italic'>"Nếu mỗi lần nổi nóng với em, anh đóng 1 cây đinh vào ván gỗ thì có lẽ bây giờ nhà anh bán đinh"</p>
            <p className='text-3xl pt-5 font-bold'>- Phước xấu xa</p>
        </div>
       
        <img src='images/sad_emoji_1.jpg' alt='sad emoji picture' className='h-40'/>
        <img src='images/sad_emoji_2.png' alt='sad emoji picture' className='h-40'/>
        <img src='images/sad_emoji_3.jpg' alt='sad emoji picture' className='h-40'/>
    </div>
    )


}

export default Quote