import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import patientImg from "../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientImg} alt="patientIconImg" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingClr">
                  Ridham Goel
                </h4>
                <div className="flex items-center gap-[2px">
                  <HiStar className="text-yellowClr w-[18px] h-5" />
                  <HiStar className="text-yellowClr w-[18px] h-5" />
                  <HiStar className="text-yellowClr w-[18px] h-5" />
                  <HiStar className="text-yellowClr w-[18px] h-5" />
                  <HiStar className="text-yellowClr w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textClr font-[400]">
              I have taken medical services from them. They treat really well
              and also provide the best medical facilities.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientImg} alt="patientIconImg" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingClr">
                  Swarnim Gupta
                </h4>
                <div className="flex items-center gap-[2px">
                  <HiStar className="text-yellowClr w-[18px] h-5" />
                  <HiStar className="text-yellowClr w-[18px] h-5" />
                  <HiStar className="text-yellowClr w-[18px] h-5" />
                  <HiStar className="text-yellowClr w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textClr font-[400]">
              They have provided me with medical services. They offer the
              greatest medical facilities in addition to excellent treatment.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientImg} alt="patientIconImg" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingClr">
                  Pranjal Gangwar
                </h4>
                <div className="flex items-center gap-[2px">
                  <HiStar className="text-yellowClr w-[18px] h-5" />
                  <HiStar className="text-yellowClr w-[18px] h-5" />
                  <HiStar className="text-yellowClr w-[18px] h-5" />
                  <HiStar className="text-yellowClr w-[18px] h-5" />
                  <HiStar className="text-yellowClr w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textClr font-[400]">
              I have used their medical services. In addition to offering the
              best medical facilities, they treat really well.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientImg} alt="patientIconImg" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingClr">
                  Keshav Agarwal
                </h4>
                <div className="flex items-center gap-[2px">
                  <HiStar className="text-yellowClr w-[18px] h-5" />
                  <HiStar className="text-yellowClr w-[18px] h-5" />
                  <HiStar className="text-yellowClr w-[18px] h-5" />
                  <HiStar className="text-yellowClr w-[18px] h-5" />
                </div>
              </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-textClr font-[400]">
              From them, I have received medical care. Along with offering the
              greatest medical facilities, they also provide excellent care.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
