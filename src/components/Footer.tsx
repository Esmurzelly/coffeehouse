import logo from '@/assets/logo.svg';
import phone from '@/assets/phone.svg';
import licence from '@/assets/licence.svg';

import youtube from '@/assets/social/youtube.svg';
import telegram from '@/assets/social/telegram.svg';
import vk from '@/assets/social/vk.svg';

const Footer = () => {
  return (
    <footer className='mt-14 flex flex-row justify-between lg:justify-center text-secondary w-full text-[10px] px-[10px] pb-7'>
      <div className='w-full lg:w-5/6 flex justify-between'>
        <div className='flex items-center gap-3'>
          <img className='w-[94px] 2xl:w-36' src={logo} alt="" />

          <div className='flex flex-col'>
            <div className='flex items-center gap-1.5'>
              <img src={licence} alt="licence" />
              <span className='text-[10px] xl:text-base'>CoffeeVibe., 2023 year. All rights reserved.</span>
            </div>
            <div className='flex items-center gap-1.5'>
              <img src={phone} alt="phone" />
              <a className='text-[10px] xl:text-base' href="tel:+7(905)242-76-35">+7 (905) 242-76-35</a>
            </div>
          </div>
        </div>

        <div className='flex gap-x-1.5'>
          <img className='w-4 2xl:w-8' src={youtube} alt="youtube" />
          <img className='w-4 2xl:w-8' src={telegram} alt="telegram" />
          <img className='w-4 2xl:w-8' src={vk} alt="vk" />
        </div>
      </div>
    </footer>
  )
}

export default Footer