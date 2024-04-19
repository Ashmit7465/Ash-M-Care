import React, { useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { formatDate } from "../../utils/formatDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";
// import { BASE_URL } from "../../../config";
import useFetchData from "../../hooks/useFetchData";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";


const Feedback = ({reviews, totalRating}) => {
  
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  // console.log(reviews);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingClr mb-[30px]">
          All Reviews ({totalRating})
        </h4>

        {reviews && reviews.length > 0 && reviews?.map((review, index) => (<div key={index} className="flex justify-between gap-10 mb-[30px]">
          <div key={index} className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img className="w-full" src={review?.user?.photo} alt="avatarImg" />
            </figure>

            <div>
              <h5 className="text-[16px] leading-6 text-primaryClr font-bold">
                {review?.user?.name}
              </h5>

              <p className="text-[14px] leading-6 text-textClr">
                {formatDate(review?.createdAt)}
              </p>

              <p className="text_para mt-3 font-medium text-[15px]">
                {review?.reviewText}
              </p>
            </div>
          </div>

          <div className="flex gap-1">
            {[...Array(review?.rating).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067FF" />
            ))}
          </div>
        </div>))}
      </div>

      {!showFeedbackForm && (
        <div className="text-center">
          <button onClick={() => setShowFeedbackForm(true)} className="btn hover:bg-black">
            Give Feedback
          </button>
        </div>
      )}

      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
};

export default Feedback;
