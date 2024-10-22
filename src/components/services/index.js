"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react';
import ServiceIcon1 from '@/assets/icons/services-icon1.png'
import ServiceIcon2 from '@/assets/icons/services-icon2.png'
import ServiceIcon3 from '@/assets/icons/services-icon3.png'
import ServiceIcon4 from '@/assets/icons/services-icon4.png'
import ServiceIcon5 from '@/assets/icons/services-icon5.png'
import ServiceIcon6 from '@/assets/icons/services-icon6.png'
import ServiceCard1 from '@/assets/images/services-1.png'
import ServiceCard2 from '@/assets/images/services-2.png'
import ServiceCard3 from '@/assets/images/services-3.png'
import ServiceCard4 from '@/assets/images/services-4.png'
import ServiceCard5 from '@/assets/images/services-5.png'
import ServiceCard6 from '@/assets/images/services-6.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';

const ServiceCardDetail = [
  {
    imgSrc: ServiceCard1, title: "All-in-One Advantage Plans",
    text: "Discover innovative Medicare diverse advantages. Utilize the complete health coverage with practical added benefits.",
    icon: ServiceIcon1
  },

  {
    imgSrc: ServiceCard2, title: "Comprehensive Healthcare Services",
    text: "Elevate your health by utilizing customized solutions that benefit everyone. Get a comprehensive strategy to fix health care.",
    icon: ServiceIcon2
  },

  {
    imgSrc: ServiceCard3, title: "Enhanced Coverage Plans",
    text: "Get peace of mind at Nova Groove Good through comprehensive coverage by bridging gaps with supplemental plans.",
    icon: ServiceIcon3
  },
  {
    imgSrc: ServiceCard4, title: "Prescription Medication Coverage",
    text: "Integrate your wellness by taking prescription Medicare plans for you. Covering all your drug coverage choices with effective Medicare solutions",
    icon: ServiceIcon4
  },

  {
    imgSrc: ServiceCard5, title: "Enrollment Periods Simplified",
    text: "We simplify and streamline the enrollment process to make it as efficient as possible and secure the best coverage through our dedicated health providers.",
    icon: ServiceIcon5
  },

  {
    imgSrc: ServiceCard6, title: "Personalized Guidance",
    text: "You can benefit yourself by utilizing our ideal personalized guidance and our expert healthcare suggestions.",
    icon: ServiceIcon6
  },

]
function Services() {

  return (
    <div className='main_services p-100'>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4 flex items-center">
          <div className="col-span-12">
            <div className="services_heading">
              <h2 className="text-5xl font-bold text-black-800 text-center">Services</h2>
              <p className='text-1x1 text-xl	 text-center my-4 w-3/6 m-auto '>At Nova Groove Good, we provide a diverse range of medicare services designed to enhance your health and well-being.</p>
            </div>
          </div>
        </div>
        <Swiper
          slidesPerView={3} // Default large screen
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          breakpoints={{
            // Small devices (mobile phones)
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // Medium devices (tablets)
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // Large devices (desktops, default)
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {ServiceCardDetail.map((list, index) => (
            <SwiperSlide key={index}>
              <div className="service_card">
                <div className="service_card_img">
                  <Image className='img-fluid' src={list.imgSrc} alt={list.title} />
                </div>
                <div className="service_card_content">
                  <h6 className='text-3xl font-semibold text-center mb-3'>{list.title}</h6>
                  <p className='w-4/5 text-xl text-center m-auto'>{list.text}</p>
                </div>
                <div className="serive_card_icon">
                  <Image className='icon1' src={list.icon} alt='' />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


      </div>
    </div>

 
  )
}


export default Services
