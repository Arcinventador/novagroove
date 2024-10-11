"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react';
import ServiceIcon from '@/assets/icons/services-icon.png'
import ServiceIcon1 from '@/assets/icons/services-icon1.png'
import ServiceCard1 from '@/assets/images/services-1.png'
import ServiceCard2 from '@/assets/images/services-2.png'
import ServiceCard3 from '@/assets/images/services-3.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';

const ServiceCardDetail = [
  {
    imgSrc: ServiceCard1, title: "Heading Here",
    text: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    icon: ServiceIcon
  },

  { imgSrc: ServiceCard2, title: "Heading Here", text: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", icon: ServiceIcon1 },

  { imgSrc: ServiceCard3, title: "Heading Here", text: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", icon: ServiceIcon },
  {
    imgSrc: ServiceCard1, title: "Heading Here",
    text: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    icon: ServiceIcon
  },

  { imgSrc: ServiceCard2, title: "Heading Here", text: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", icon: ServiceIcon1 },

  { imgSrc: ServiceCard3, title: "Heading Here", text: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", icon: ServiceIcon },
  {
    imgSrc: ServiceCard1, title: "Heading Here",
    text: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    icon: ServiceIcon
  },

  { imgSrc: ServiceCard2, title: "Heading Here", text: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", icon: ServiceIcon1 },

  { imgSrc: ServiceCard3, title: "Heading Here", text: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", icon: ServiceIcon },

]
function Services() {

  return (
    <div className='main_services p-100'>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4 flex items-center">
          <div className="col-span-12">
            <div className="services_heading">
              <h2 className="text-5xl font-bold text-black-800 text-center">Services</h2>
              <p className='text-1x1 text-xl	 text-center my-4 w-3/6 m-auto '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
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

    //   <div className="container mx-auto">
    //     


    //     </div>
    //   </div>
    // 
  )
}


export default Services
