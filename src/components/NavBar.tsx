import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import logo from '@/assets/logo.svg';
import phone from '@/assets/phone.svg';
import location from '@/assets/location.svg';
import { SelectedPage } from '@/types';
import useMediaQuery from '@/hook/useMediaQuery';
import Link from './Link';
import youtube from '@/assets/social/youtube.svg'
import telegram from '@/assets/social/telegram.svg'
import vk from '@/assets/social/vk.svg'

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    isTopOfPage: boolean;
}

const NavBar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");

    return (
        <nav>
            <div className='py-2.5 bg-white fixed mx-auto w-full border-b-2 border-b-gray-300 z-50'>
                
                {isAboveMediumScreens ? (
                    <div className='flex items-center justify-between px-4 py-2 fixed top-0 w-full bg-white'>
                        <div className='flex items-center justify-between w-full'>
                            <div className='flex items-center justify-between mx-auto w-5/6'>
                                <img width={'200px'} src={logo} alt="logo" />

                                <div className='flex flex-col gap-1 justify-start'>
                                    <div className='flex flex-row text-secondary text-base gap-1'>
                                        <p>Our city: <span className='font-bold'>St. Petersburg</span></p>
                                        <img width={18} src={location} alt="location" />
                                    </div>
                                    <div className='flex flex-row gap-0.5 text-secondary text-2xl'>
                                        <img width={23} src={phone} alt="phone" />
                                        <a href="tel:+79052127634">+7 (905) 212 76-34</a>
                                    </div>
                                </div>

                                <div className='flex items-center justify-between gap-6 text-sm'>
                                    <Link page='About Us' selectedpage={selectedPage} setSelectedpage={setSelectedPage} />
                                    <Link page='Menu' selectedpage={selectedPage} setSelectedpage={setSelectedPage} />
                                    <Link page='Contact' selectedpage={selectedPage} setSelectedpage={setSelectedPage} />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex flex-row items-center justify-between bg-white px-3'>
                        <div className='flex items-center'>
                            <img className='w-[90px]' src={logo} alt="logo" />

                            <div className='flex flex-col gap-1 justify-start text-xs'>
                                <div className='flex flex-row text-secondary gap-1'>
                                    <p>Our city: <span className='font-bold'>St. Petersburg</span></p>
                                    <img width={8} src={location} alt="location" />
                                </div>
                                <div className='flex flex-row gap-0.5 text-secondary'>
                                    <img width={9} src={phone} alt="phone" />
                                    <a href="tel:+79052127634">+7 (905) 212 76-34</a>
                                </div>
                            </div>
                        </div>


                        <button
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            {isMenuToggled ? (
                                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                    <XMarkIcon className='h-6 w-6 text-primary' />
                                </button>
                            ) : (
                                <Bars3Icon className='w-6 h-6 text-primary' />

                            )}
                        </button>
                    </div>

                )}


                {!isAboveMediumScreens && isMenuToggled && (
                    <div className='fixed right-0 top-14 pt-20 bottom-0 z-40 h-full w-full bg-white'>
                        <div className='mx-auto w-5/6'>
                            <div className='flex flex-col text-center gap-10'>
                                <Link page='About Us' selectedpage={selectedPage} setSelectedpage={setSelectedPage} />
                                <Link page='Menu' selectedpage={selectedPage} setSelectedpage={setSelectedPage} />
                                <Link page='Contact' selectedpage={selectedPage} setSelectedpage={setSelectedPage} />
                            </div>

                            <div className='flex flex-row justify-center mt-7 gap-4'>
                                <img width={14} src={youtube} alt="youtube" />
                                <img width={14} src={telegram} alt="telegram" />
                                <img width={14} src={vk} alt="vk" />
                            </div>
                        </div>

                    </div>
                )}


            </div>
        </nav>

    )
}

export default NavBar