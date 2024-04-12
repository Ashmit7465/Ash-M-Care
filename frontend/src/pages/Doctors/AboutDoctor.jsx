import React from "react";
import { formatDate } from "../../utils/formatDate";

const AboutDoctor = ({ name, about, qualifications, experience }) => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingClr font-semibold flex items-center gap-2">
          About Dr.
          <span className="text-irisBLueClr font-bold text-[24px] leading-9">
            Nishant Maheshwari
          </span>
        </h3>
        <p className="text_para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          aliquid necessitatibus dolore aliquam alias rem saepe, asperiores,
          itaque corrupti dolor at libero laborum praesentium unde excepturi
          sequi enim consequatur atque!
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingClr font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBLueClr text-[15px] leading-6 font-semibold">
                {formatDate("06-23-2005")} - {formatDate("07-23-2008")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textClr">
                Masters in Neurological Sciences
              </p>
            </div>

            <p className="text-[16px] leading-5 font-medium text-textClr">
              University of Michigan - Ann Arbor
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
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
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingClr font-semibold">
          Background
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBLueClr text-[15px] leading-6 font-semibold">
                {formatDate("06-23-2011")} - {formatDate("07-23-2018")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textClr">
                Neurological Surgeon
              </p>
            </div>

            <p className="text-[16px] leading-5 font-medium text-textClr">
              The Rosewood Speciality Hospital, Lucknow
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
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
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutDoctor;
