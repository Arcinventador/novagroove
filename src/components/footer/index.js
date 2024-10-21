import Image from 'next/image'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Logo from '@/assets/images/logo.png'
function Footer() {
    return (
        <>
            <div className="w-full mx-auto px-4 footer">
                <div className="main_footer  rounded-2xl mb-5">
                    <div className="container mx-auto">
                        <div className="grid grid-col-12 gap-4 flex items-center justify-center">
                            <div className="col-span-6 ">
                                <div className="footer_content text-center">
                                    <Image className='img-fluid' src={Logo} alt='' />
                                    <p className='text-xl font-semibold '>Get Our Dedicated Healthcare Professionals’ Assistance
                                    </p>
                                        <span className='contact' ><IoLocationSharp /> 350 S Brooks St, Sheridan, WY 82801, United States</span> <br/> <br/>
                                        <span className='contact' ><MdEmail />info@novagroovegood.com</span>
                            
                                    {/* <ul className='flex gap-2 justify-center'>
                                        <li><a href="#" className='text-3xl'><AiFillFacebook /></a></li>
                                        <li><a href="#" className='text-3xl'><AiFillTwitterCircle /></a></li>
                                        <li><a href="#" className='text-3xl'><AiFillGooglePlusCircle /></a></li>
                                        <li><a href="#" className='text-3xl'><AiFillLinkedin /></a></li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
