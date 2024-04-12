import React from "react";
import doctorImg from "../../assets/images/doctor-img02.png";
import starIcon from "../../assets/images/Star.png";
import { useState } from "react";
import AboutDoctor from "./AboutDoctor";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";

const DoctorsDetails = () => {
  const [tab, setTab] = useState("");

  return (
    <>
      <section>
        <div className="max-w-[1170px] px-5 mx-auto">
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5">
                <figure className="max-w-[200px] max-h-[200px]">
                  <img src={doctorImg} alt="doctorImg" />
                </figure>

                <div>
                  <span className="bg-[#CCF0F3] text-irisBLueClr py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                    Neurologist
                  </span>

                  <h3 className="text-headingClr text-[22px] leading-9 mt-3 font-bold">
                    Nishant Maheshwari
                  </h3>

                  <div className="flex items-center gap-[6px]">
                    <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingClr">
                      <img src={starIcon} alt="starIcon" /> 4.5
                    </span>

                    <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textClr">
                      (235)
                    </span>
                  </div>

                  <p className="text_para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta alias!
                  </p>
                </div>
              </div>

              <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                <button
                  onClick={() => setTab("about")}
                  className={`${
                    tab == "about" && "border-b border-solid border-primaryClr"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingClr font-semibold hover:bg-[#fed7aa]`}
                >
                  About
                </button>

                <button
                  onClick={() => setTab("feedback")}
                  className={`${
                    tab == "feedback" &&
                    "border-b border-solid border-primaryClr"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingClr font-semibold hover:bg-[#fed7aa]`}
                >
                  Feedback
                </button>
              </div>

              <div className="mt-[50px]">
                {tab == "about" && <AboutDoctor />}

                {tab == "feedback" && <Feedback />}
              </div>
            </div>

            <div>
              <SidePanel />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorsDetails;
