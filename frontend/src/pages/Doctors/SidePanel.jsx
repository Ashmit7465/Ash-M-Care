import React from "react";

const SidePanel = () => {
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text_para mt-0 font-semibold">Consultation Fee</p>

        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingClr font-bold">
          800 INR
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text_para mt-0 font-semibold text-headingClr">
          Available Time Slots:
        </p>

        <ul className="mt-3 ">
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textClr font-semibold">
              Sunday
            </p>

            <p className="text-[15px] leading-6 text-textClr font-semibold">
              11.30 AM - 3:30 PM
            </p>
          </li>

          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textClr font-semibold">
              Tuesday
            </p>

            <p className="text-[15px] leading-6 text-textClr font-semibold">
              05.30 PM - 9:30 PM
            </p>
          </li>

          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textClr font-semibold">
              Thursday
            </p>

            <p className="text-[15px] leading-6 text-textClr font-semibold">
              7.00 PM - 11:00 PM
            </p>
          </li>
        </ul>
      </div>

      <button className="btn px-2 w-full rounded-md">Book Appointment</button>
    </div>
  );
};

export default SidePanel;
