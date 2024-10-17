import React from 'react';
import Logo from '@/assets/images/logo.png';
import PhoneIcon from '@/assets/icons/phone-icon.png';
import Image from 'next/image';
import Button from '../button';
import Link from 'next/link';
import TransitionsModal from '../modal';

function Header() {
    return (
        <div className='main_header '>
            <div className="w-full mx-auto px-4 ">
                <div className="grid grid-cols-12 gap-4 flex items-center">
                    <div className="col-span-3">
                        <div className="logo">
                            <Image className='img-fluid' src={Logo} alt='logo' />
                        </div>
                    </div>
                    <div className="col-span-4"></div>
                    <div className="col-span-5 ">
                        <div className='header_icons flex flex-row gap-5 items-center justify-end	'>
                            <TransitionsModal btnText="Get Started" />
                            {/* <Image className='img-fluid' src={PhoneIcon} alt='phone' />
                            <Link href="tel:1234567890" className='font-bold text-xl flex items-center'>
                                <span className='font-light'>Call:</span> 123 456 7890
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
