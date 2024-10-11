
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
                    <span>Maximize</span> Your Benefits with Our <span>Medicare</span> Insights Your <span>Medicare Choices</span>
                </h1>
                <p className='text-lg font-medium my-4 md:my-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt quae illo enim praesentium! Vitae amet ab non accusamus, quo provident expedita dicta in corrupti fuga facilis.
                </p>
                <TransitionsModal btnText="Appointment Now"  />        
            </div>
        </div>
    </div>
</div>

            
        </>
    );
}
