
import React from 'react';
import Image from 'next/image';
import BannerBg from '@/assets/images/banner-bg.png';
import Button from '../button';
import TransitionsModal from '../modal';

export default function Banner() {
    return (
        <>
            <div className='main_banner'>
                <div className="w-full mx-auto px-4">
                    <div className='main_banner_bg' style={{
                        position: 'relative',
                        width: '100%',
                        height: '800px',
                        borderRadius: '10px',
                        overflow: 'hidden'
                    }}>
                        <Image
                            alt="Banner Background"
                            src={BannerBg}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-5 flex items-center justify-center p-4">
                        <div className="banner_content text-center md:text-left">
                            <h1 className="text-2xl md:text-4xl font-bold mb-4">
                                <span>The Roadmap</span> to Get Customized Healthcare <span>Solutions & Empower</span> Your Wellness
                            </h1>
                            <p className='text-lg font-medium my-4 md:my-8'>
                                Now, prioritize your health by utilizing our top-tier healthcare solution services. Discover innovative ideas modified by technology and compassionate care to integrate your wellness.
                            </p>
                            <TransitionsModal btnText="Appointment Now" />
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}
