import { SelectedPage } from '@/types'
import { motion } from 'framer-motion'
import temp_coffeehouse from '@/assets/temp/Coffee_shop_illustration.svg';

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const MainInfo = ({ setSelectedPage }: Props) => {
  return (
    <section id='aboutus' className='w-full flex justify-center mt-32 pb-4 px-4'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}
        className='flex flex-row justify-between items-center md:gap-10 xl:w-5/6'
      >
        <div className='flex flex-col items-start w-[170px] sm:w-3/6'>
          <h1 className='text-sm font-semibold sm:text-[25px]'>Welcome to coffee vibe!</h1>
          <p className='text-[10px] font-light sm:text-[14px] sm:mt-3'>Our company believes that good coffee starts with the best beans, which is why we only use the best coffees in our expertly crafted blends. Our baristas take pride in every cup they make, ensuring every sip is a rich and flavorful delight that lingers long after you've had it.</p>
        </div>

        <img className='w-40 sm:w-2/6' src={temp_coffeehouse} alt="" />
      </motion.div>
    </section>
  )
}

export default MainInfo