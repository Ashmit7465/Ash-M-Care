import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmitReview = async (e) => {
    e.preventDefault();
  };

  return (
    <form action="">
      <div>
        <h3 className="text-[16px] text-headingClr leading-6 font-semibold mb-4 mt-0">
          How would you rate your overall experience
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
          onChange={(ev) => setReview(ev.target.value)}
        ></textarea>
      </div>

      <button type="submit" className="btn" onClick={handleSubmitReview}>
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
