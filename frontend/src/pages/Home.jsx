import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import videoIconImg from "../assets/images/video-icon.png";
import avatarIconImg from "../assets/images/avatar-icon.png";
import faqImg from "../assets/images/faq-img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/FAQ/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      {/* Main section */}
      <section className="main_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items center justify-between">
            {/* Start of main section */}

            <div>
              <div className="lg:w-[570px] ">
                <h1 className="text-[36px] leading-[46px] text-headingClr font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy, longer life.
                </h1>

                <p className="text_para">
                  At Ash-M-Care, by facilitating easy access to medical care and
                  support, we aim to empower individuals on their journey
                  towards a healthier, longer life. Together, let's prioritize
                  your well-being and pave the way for a brighter, healthier
                  future.
                </p>

                <Link to="/doctors">
                <button className="btn hover:bg-black/100">Request an Appointment</button>
                </Link>
              </div>

              {/* Main Counter Section */}

              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px] ">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingClr">
                    28+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowClr rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingClr">
                    13+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleClr rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Clinic's Available'</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingClr">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBLueClr rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Main Section content */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="hero01Img" />
              </div>

              <div className="mt-[30px]">
                <img
                  className="w-full mb-[30px]"
                  src={heroImg02}
                  alt="heroImg02"
                />
                <img className="w-full" src={heroImg03} alt="heroImg03" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of main section */}

      {/* Steps Section */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center ">
              Providing the best medical services
            </h2>
            <p className="text_para text-center">
              World-class care and treatment for everyone. Our health system
              offers unmatched, expert health care.
            </p>
          </div>

          {/* <div className='flex flex-wrap items-center flex-col md:flex-row gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>

            </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="icon01" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingClr font-[700] text-center">
                  Find A Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textClr font-[400] mt-4 text-center">
                  World-class care and treatment for everyone. From the labs to
                  the clinics, our health system offers unmatched, expert health
                  care.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryClr hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="icon02" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingClr font-[700] text-center">
                  Find Nearest Clinic
                </h2>
                <p className="text-[16px] leading-7 text-textClr font-[400] mt-4 text-center">
                  World-class care and treatment for everyone. From the labs to
                  the clinics, our health system offers unmatched, expert health
                  care.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryClr hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="icon03" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingClr font-[700] text-center">
                  Book an Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textClr font-[400] mt-4 text-center">
                  World-class care and treatment for everyone. From the labs to
                  the clinics, our health system offers unmatched, expert health
                  care.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryClr hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of steps section */}

      {/* About Us section */}
      <About />
      {/* End of About Us section */}

      {/* Services section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text_para text-center">
              World class care and treatment for everyone. Our health system
              offers unmatched, expert health care.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>
      {/* End of services section */}

      {/* Feature section */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* Features section data */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get Virtual Treatment <br /> anytime.
              </h2>
              <ul className="pl-4">
                <li className="text_para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text_para">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="text_para">
                  3. View our physicians who are accepting new patients, use the
                  online scheduling tool to select and appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn hover:bg-black/100">Learn More</button>
              </Link>
            </div>

            {/* Feature section image */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img className="w-3/4" src={featureImg} alt="featureImg" />

              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading[10px] lg:text-[14px] lg:leading-5 text-headingClr font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading[10px] lg:text-[14px] lg:leading-5 text-textClr font-[400]">
                      10:00 AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowClr rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIconImg} alt="videoImg" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBLueClr font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:t-[10px]">
                  <img src={avatarIconImg} alt="avatarIconImg" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingClr">
                    Ashmit Shukla
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features section end */}

      {/* About the doctors */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Fantastic Doctors</h2>
            <p className="text_para text-center">
              An extremely experienced and well reputed team of doctors makes
              our organization the goto for any patient.
            </p>
          </div>

          <DoctorList />
        </div>
      </section>
      {/* End of doctors section */}

      {/* Frequently asked questions section */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block ">
              <img src={faqImg} alt="faqsImage" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">Frequently Asked Questions</h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* End of Frequently asked questions section */}

      {/* Patient's Testimonial section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              What our patients say about us
            </h2>
            <p className="text_para text-center">
              True, unfiltered and raw opinion of our dear patients. Shows true
              reflection of the effect that our system has on them. The
              testimonials are unedited and presented int the same manner as
              written by the patients.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
      {/* End of testimonial section */}

      {/* Footer Section then */}
    </>
  );
};

export default Home;
