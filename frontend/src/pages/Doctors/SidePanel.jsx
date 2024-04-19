import React from "react";
import convertTime from "../../utils/convertDate";
// import {BASE_URL, token} from "../../../config.js"
import {toast} from 'react-hot-toast';

const SidePanel = ({ doctorId, consultationFee, timeSlots }) => {

  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("authToken");

  const bookingHandler = async () => {
    try 
    {
      const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`, {
        method: 'post',
        headers: {
          Authorization: `Bearer ${token}`
        },
      });

      const result = await res.json();

      if(!result.success)
      {
        // toast.error("Could not create Session. Please try again");
        // console.log(result.message);
        throw new Error(result.message + 'Please try again');
      }

      if(result.session.url) 
      {
        window.location.href = result.session.url;
      }

    }
    catch (error) 
    {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text_para mt-0 font-semibold">Consultation Fee</p>

        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingClr font-bold">
          {consultationFee} INR
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text_para mt-0 font-semibold text-headingClr">
          Available Time Slots:
        </p>

        <ul className="mt-3 ">
          {timeSlots && timeSlots.map((slot, index) => {
            return (
              <li
                className="flex items-center justify-between mb-2"
                key={index}
              >
                <p className="text-[16px] leading-6 text-textClr font-semibold">
                  {slot.day.charAt(0).toUpperCase() + slot.day.slice(1)}
                </p>

                <p className="text_para">
                  {convertTime(slot.startingTime)} - {convertTime(slot.endingTime)}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      <button onClick={bookingHandler} className="btn px-2 w-full rounded-md hover:bg-black">Book Appointment</button>
    </div>
  );
};

export default SidePanel;
