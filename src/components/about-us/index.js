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
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutUs
