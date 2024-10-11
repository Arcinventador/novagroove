import Image from 'next/image';
import React from 'react'
import CompanyLogos from '@/assets/images/company-logos.png';

function Marque() {
    return (
        <div className='main_marquee'>
            <marquee behavior="" direction="">
                <Image src={CompanyLogos} alt='' />
            </marquee>
        </div>
    )
}

export default Marque
