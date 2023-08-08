import React from 'react'
import logo from '@/assets/logo.svg';
import phone from '@/assets/phone.svg';
import licence from '@/assets/licence.svg';

import youtube from '@/assets/social/youtube.svg'
import telegram from '@/assets/social/telegram.svg'
import vk from '@/assets/social/vk.svg'

type Props = {}

const Footer = (props: Props) => {
  return (
    <section className='flex flex-row justify-center text-secondary w-full text-[10px] px-[10px]'>
      <div className='w-5/6 flex justify-between'>
      <div className='flex items-center gap-3'>
        <img className='w-[94px]' src={logo} alt="" />

        <div className='flex flex-col'>
        <div className='flex items-center gap-1.5'>
          <img src={licence} alt="licence" />
          <span>CoffeeVibe., 2023 year. All rights reserved.</span>
        </div>
        <div className='flex items-center gap-1.5'>
          <img src={phone} alt="phone" />
          <a href="tel:+7(905)242-76-35">+7 (905) 242-76-35</a>
        </div>
        </div>
        
      </div>

      <div className='flex gap-x-1.5'>
        <img src={youtube} alt="youtube" />
        <img src={telegram} alt="telegram" />
        <img src={vk} alt="vk" />
      </div>
      </div>
      
    </section>
  )
}

export default Footer