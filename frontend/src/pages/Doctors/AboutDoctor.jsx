import React from "react";
import { formatDate } from "../../utils/formatDate";

const AboutDoctor = ({ name, about, qualification=[], experiences=[] }) => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingClr font-semibold flex items-center gap-2">
          About Dr.
          <span className="text-irisBLueClr font-bold text-[24px] leading-9">
            {name}
          </span>
        </h3>
        <p className="text_para">
          {about}
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingClr font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">

        {qualification.map((item, index) =>  <li key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBLueClr text-[15px] leading-6 font-semibold">
                {formatDate(item.startingDate)} - {formatDate(item.endingDate)}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textClr">
                {item.degree}
              </p>
            </div>

            <p className="text-[16px] leading-5 font-medium text-textClr">
              {item.university}
            </p>
          </li>)}

          
          {/* <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBLueClr text-[15px] leading-6 font-semibold">
                {formatDate("12-04-2008")} - {formatDate("12-12-2010")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textClr">
                PHD in Neurological Sciences and Surgery
              </p>
            </div>

            <p className="text-[16px] leading-5 font-medium text-textClr">
              Charite - Medical University of Berlin
            </p>
          </li> */}
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingClr font-semibold">
          Experience
        </h3>

        <ul className="pt-4 md:p-5">

          {experiences.map((item, index) => <li key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBLueClr text-[15px] leading-6 font-semibold">
                {formatDate(item.startingDate)} - {formatDate(item.endingDate)}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textClr">
                {item.position}
              </p>
            </div>

            <p className="text-[16px] leading-5 font-medium text-textClr">
              {item.hospital}
            </p>
          </li>)}
          {/* <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBLueClr text-[15px] leading-6 font-semibold">
                {formatDate("09-04-2018")} - Current
              </span>
              <p className="text-[16px] leading-6 font-medium text-textClr">
                HOD and Senior Neurologist
              </p>
            </div>

            <p className="text-[16px] leading-5 font-medium text-textClr">
              Medanta Superspeciality Hospital, Gurugram
            </p>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default AboutDoctor;
