import Image from 'next/image'
import React from 'react'
import AboutUsImg from '@/assets/images/about-us.png'
function AboutUs() {
    return (
        <>
            <div className="main_about_us">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 items-center">
                        {/* Left Column */}
                        <div className="md:col-span-6 mb-5 md:mb-0">
                            <div className="about_img">
                                <Image className="img-fluid" src={AboutUsImg} alt="" />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="md:col-span-6">
                            <h3 className="text-3xl md:text-5xl font-semibold">About Us</h3>
                            <p className="text-lg md:text-xl mt-5">
                            At Nova Groove Good, we offer healthcare-defined solutions to satisfy our patients. We believe every customer deserves coverage that meets their needs and empowers them to get wellness. Our quality healthcare treatment fosters your health with technology that ensures improvement in your health. 
                            </p>
                            <p className="text-lg md:text-xl mt-5">Choosing our expert ensures that delivering the highest standards of care and service as well. With a dedicated team of professional healthcare providers, we guarantee a complete Medicare solution according to your needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutUs
