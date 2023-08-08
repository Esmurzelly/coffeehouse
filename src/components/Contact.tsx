import { SelectedPage } from '@/types';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from '@/hook/useMediaQuery';
import girl from '@/assets/temp/girl.svg'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}
const Contact = ({ setSelectedPage }: Props) => {
  const [visitor, setVisitor] = useState<boolean>(true);
  const [seeker, setSeeker] = useState<boolean>(false);

  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");

  const handleVisitor = () => {
    setVisitor(true);
    setSeeker(false)
  }

  const handleSeeker = () => {
    setVisitor(false);
    setSeeker(true)
  }

  return (
    <section id='contact' className='w-full'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
      >
        {isAboveMediumScreens ? (
          <div className='flex flex-row justify-center items-start px-4 py-10 w-full'>
            <div className='w-full lg:w-5/6 flex flex-row justify-between'>
              <div>
                <p className='font-normal text-[30px] 2xl:text-[50px] 4xl:text-[70px]'>Contact with us</p>
                <form className='max-w-[18rem] 2xl:max-w-full mt-2' onSubmit={e => e.preventDefault()}>
                  <div className='flex flex-row justify-start 4xl:justify-between gap-6 items-center'>
                    <label className='cursor-pointer' onChange={handleSeeker} htmlFor="seeker">
                      <input checked={seeker} type="checkbox" name="seeker" id="seeker" />
                      <span className='ml-1 text-secondary text-lg 4xl:text-2xl'>I’m a job seeker</span>
                    </label>

                    <label className='cursor-pointer' onChange={handleVisitor} htmlFor="visitor">
                      <input checked={visitor} type="checkbox" name="visitor" id="visitor" />
                      <span className='ml-1 text-secondary text-lg 4xl:text-2xl'>I’m a visitor</span>
                    </label>
                  </div>

                  <div className='mt-3'>
                    {visitor ? (
                      <div className='grid gap-x-3 gap-y-2 grid-rows-2 grid-cols-2'>
                        <input placeholder='First Name' className='w-full focus:outline-none border-b-[1px] border-primary' type="text" name="" id="" />
                        <input placeholder='Last Name' className='w-full focus:outline-none border-b-[1px] border-primary' type="text" name="" id="" />
                        <input placeholder='Email' className='w-full focus:outline-none border-b-[1px] border-primary col-start-1 col-end-3' type="email" name="" id="" />
                      </div>
                    ) : (
                      <div className='grid gap-x-3 gap-y-2 grid-rows-2 grid-cols-2'>
                        <input placeholder='First Name' className='w-full focus:outline-none border-b-[1px] border-primary' type="text" name="" id="" />
                        <input placeholder='Last Name' className='w-full focus:outline-none border-b-[1px] border-primary' type="text" name="" id="" />
                        <input placeholder='Phone' className='w-full focus:outline-none border-b-[1px] border-primary' type="tel" name="" id="" />
                        <input placeholder='Age' className='w-full focus:outline-none border-b-[1px] border-primary' type="number" name="" id="" />
                      </div>
                    )}

                    <div className='flex flex-col items-start w-full'>
                      <textarea className='mt-5 w-full h-[200px] outline outline-secondary' placeholder={`${visitor ? 'Enter your message...' : 'Why do you want work with us?'}`}></textarea>
                      <button type='submit' className='bg-primary text-white mt-3 font-extralight text-sm px-8 py-2.5'>Send</button>
                    </div>
                  </div>
                </form>
              </div>

              <div className='flex flex-row justify-end relative'>
                <p className='w-[200px] 2xl:w-[270px] 4xl:w-[320px] absolute top-[11px] left-[133px] 2xl:left-[-35px] 3xl:left-[-80px] 4xl:left-[-120px] text-sm 2xl:text-lg 4xl:text-2xl xl:before:content-pcLine xl:before:absolute xl:before:top-7 xl:before:right-[120px] 2xl:before:right-[215px] 4xl:before:right-[315px]'>
                  To get a job with us or leave a review as a visitor, use the contact form.
                </p>
                <img className='w-3/5 2xl:w-full' src={girl} alt="girl" />
              </div>
            </div>

          </div>
        ) : (
          <div className='w-full py-1 px-10 flex flex-col justify-between items-center'>
            <div className='flex flex-col gap-2 sm:w-[56%]'>
              <div className='w-full relative flex flex-row justify-between gap-5 items-center'>
                <p className="after:content-mobileLine after:absolute after:top-16 after:left-16 font-light w-[163px] text-sm">To get a job with us or leave a review as a visitor, use the contact form.</p>
                <img className='w-[93px]' src={girl} alt="girl" />
              </div>
              <p className='mt-8 text-center font-normal text-sm'>Contact with us</p>
            </div>

            <form className='max-w-3xl mt-4' onSubmit={e => e.preventDefault()}>
              <div className='flex flex-row justify-between items-center'>
                <label onChange={handleSeeker} htmlFor="seeker">
                  <input checked={seeker} type="checkbox" name="seeker" id="seeker" />
                  <span className='ml-1'>I’m a job seeker</span>
                </label>

                <label onChange={handleVisitor} htmlFor="visitor">
                  <input checked={visitor} type="checkbox" name="visitor" id="visitor" />
                  <span className='ml-1'>I’m a visitor</span>
                </label>
              </div>

              <div className='mt-3'>
                {visitor ? (
                  <div className='grid gap-x-3 gap-y-2 grid-rows-2 grid-cols-2'>
                    <input placeholder='First Name' className='w-full placeholder:text-center focus:outline-none border-b-2' type="text" name="" id="" />
                    <input placeholder='Last Name' className='w-full placeholder:text-center focus:outline-none border-b-2' type="text" name="" id="" />
                    <input placeholder='Email' className='w-full placeholder:text-center focus:outline-none border-b-2 col-start-1 col-end-3' type="email" name="" id="" />
                  </div>
                ) : (
                  <div className='grid gap-x-3 gap-y-2 grid-rows-2 grid-cols-2'>
                    <input placeholder='First Name' className='w-full placeholder:text-center focus:outline-none border-b-2' type="text" name="" id="" />
                    <input placeholder='Last Name' className='w-full placeholder:text-center focus:outline-none border-b-2' type="text" name="" id="" />
                    <input placeholder='Phone' className='w-full placeholder:text-center focus:outline-none border-b-2' type="tel" name="" id="" />
                    <input placeholder='Age' className='w-full placeholder:text-center focus:outline-none border-b-2' type="number" name="" id="" />
                  </div>
                )}

                <textarea className='mt-5 w-full h-[100px] outline outline-secondary' placeholder={`${visitor ? 'Enter your message...' : 'Why do you want work with us?'}`}></textarea>
                <div className='w-full flex justify-center'>
                  <button type='submit' className='bg-primary text-white font-extralight text-sm px-7 py-1'>Send</button>
                </div>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </section>
  )
}

export default Contact