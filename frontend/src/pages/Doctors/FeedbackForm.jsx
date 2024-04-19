import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
// import {BASE_URL, token} from "../../../config"
import {toast} from "react-hot-toast"
import HashLoader from 'react-spinners/HashLoader'

const FeedbackForm = () => {

  const BASE_URL = import.meta.env.BASE_URL;
  const token = localStorage.getItem("authToken");

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  // console.log(id);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setLoading(true);

    try
    {
      if(!rating || !reviewText)
      {
        setLoading(false);
        return toast.error("Rating and Review fields are required");
      }
      // console.log(id);
      const res = await fetch(`${BASE_URL}/doctors/${id}/reviews`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({rating, reviewText}),
      });

      const result = await res.json();
      if(!result.ok) 
      {
        throw new Error(result.message);
      }

      setLoading(false);
      toast(result.message);
      setReviewText("");
      setRating(0);
    }
    catch(error)
    {
      setLoading(false);
      toast(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmitReview} action="">
      <div>
        <h3 className="text-[16px] text-headingClr leading-6 font-semibold mb-4 mt-0">
          How would you rate your overall experience ?
        </h3>

        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;

            return (
              <button
                key={index}
                type="button"
                className={`${
                  index <= ((rating && hover) || hover)
                    ? "text-yellowClr"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="text-[16px] text-headingClr leading-6 font-semibold mb-4 mt-0">
          Share your feedback and suggestions
        </h3>

        <textarea
          className="border border-solid border-[#0066ff34] focus:outline outline-primaryClr w-full px-4 py-3 rounded-md"
          rows="5"
          placeholder="Enter your feedback here"
          onChange={(ev) => setReviewText(ev.target.value)}
        ></textarea>
      </div>

      <button type="submit" className="btn hover:bg-black">
        {loading ? <HashLoader size={25} color="#ffffff"/> : ('Submit Feedback')} 
      </button>
    </form>
  );
};

export default FeedbackForm;
