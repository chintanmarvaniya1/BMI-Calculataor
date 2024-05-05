import React from 'react'
import { SocialIcon } from 'react-social-icons'
import logo from '../../assets/logo.png'

function Header() {
    return (
        <div className='bg-white shadow-lg'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16'>
                    <div className='flex-shrink-0 flex items-center'>
                        <img class="hidden lg:block h-14 w-auto" src={logo} alt="Logo" />
                        <span class="font-quicksand font-bold text-3xl ml-2">BMI calculator</span>
                    </div>
                    <div className="flex flex-shrink-1 items-center">
                        <SocialIcon style={{ marginRight: '10px' }} network="linkedin" bgColor="#13192F" />
                        <SocialIcon style={{ marginRight: '10px' }} network="email" bgColor="#13192F" />
                        <SocialIcon network="instagram" bgColor="#13192F" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header