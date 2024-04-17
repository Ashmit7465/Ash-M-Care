import React from "react";
import doctorImg from "../../assets/images/doctor-img02.png";
import starIcon from "../../assets/images/Star.png";
import { useState } from "react";
import AboutDoctor from "./AboutDoctor";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
import { BASE_URL } from "../../../config";
import useFetchData from "../../hooks/useFetchData";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { useParams } from "react-router-dom";
import useFetchReviews from "../../hooks/useFetchReviews";

const DoctorsDetails = () => {
  const [tab, setTab] = useState("");

  const { id } = useParams();

  const {
    data: doctor,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors/${id}`);

  const {
    data,
    reviews: final_reviews,
  } = useFetchReviews(`${BASE_URL}/doctors/${id}`);

  const {
    name,
    qualification,
    experiences,
    timeSlots,
    bio,
    about,
    averageRating,
    totalRating,
    specialization,
    consultationFee,
    photo,
  } = doctor;

  console.log(doctor);

  return (
    <>
      <section>
        <div className="max-w-[1170px] px-5 mx-auto">
          {loading && !error && <Loading />}

          {error && !loading && <Error errMessage={error} />}

          {!loading && !error && (
            <div className="grid md:grid-cols-3 gap-[50px]">
              <div className="md:col-span-2">
                <div className="flex items-center gap-5">
                  <figure className="max-w-[150px] max-h-[150px]">
                    <img src={photo} alt="doctorImg" />
                  </figure>

                  <div>
                    <span className="bg-[#CCF0F3] text-irisBLueClr py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                      {specialization}
                    </span>

                    <h3 className="text-headingClr text-[22px] leading-9 mt-3 font-bold">
                      {name}
                    </h3>

                    <div className="flex items-center gap-[6px]">
                      <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingClr">
                        <img src={starIcon} alt="starIcon" /> {averageRating}
                      </span>

                      <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textClr">
                        ({totalRating})
                      </span>
                    </div>

                    <p className="text_para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]">
                      {bio}
                    </p>
                  </div>
                </div>

                <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                  <button
                    onClick={() => setTab("about")}
                    className={`${
                      tab == "about" &&
                      "border-b border-solid border-primaryClr"
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
                  {tab === "about" && (
                    <AboutDoctor
                      name={name}
                      about={about}
                      qualification={qualification}
                      experiences={experiences}
                    />
                  )}

                  {tab === "feedback" && <Feedback reviews={final_reviews} totalRating={totalRating} />}
                </div>
              </div>

              <div>
                <SidePanel />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default DoctorsDetails;
