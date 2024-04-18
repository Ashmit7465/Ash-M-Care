import React, { useState, useEffect } from "react";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../../config";
import Tabs from "./Tabs";
import starIcon from "../../assets/images/Star.png";
import AboutDoctor from "../../pages/Doctors/AboutDoctor"
import Profile from "./Profile";
import Appointments from "./Appointments";

const DoctorAccount = () => {
  
  const { data, loading, error } = useFetchData(
    `${BASE_URL}/doctors/profile/me`
  );

  // console.log(data.appointments);

  const [tab, setTab] = useState("overview");

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loading />}

        {error && !loading && <Error />}

        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
            <Tabs tab={tab} setTab={setTab} />

            <div className="lg:col-span-2">
              {data.isApproved === "pending" && (
                <div className="flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg">
                  <svg
                    aria-hidden="true"
                    className="flex shrink-0 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    ></path>
                  </svg>

                  <span className="sr-only">Info</span>

                  <div className="ml-3 text-sm font-medium">
                    To get approval please complete your profile. We&apos;ll
                    review your profile manually and approve if it matches the
                    requirements.
                  </div>
                </div>
              )}

              <div className="mt-8">
                {tab === "overview" && (
                  <div>
                    <div className="flex items-center gap-4 mb-10">
                      <figure className="max-w-[200px] max-h-[200px]">
                        <img
                          src={data?.photo}
                          alt="profile pic"
                          className="w-full"
                        />
                      </figure>

                      <div>
                        <span className="bg-indigo-50 text-irisBLueClr py-1 px-2 lg:py-2 lg:px-6 rounded text-[14px] leading-4 lg:[text-18px] lg:leading-6 font-semibold">
                          {data.specialization}
                        </span>

                        <h3 className="text-[22px] leading-9 font-bold text-headingClr mt-3 ">
                          {data.name}
                        </h3>

                        <div className="flex items-center gap-[6px]">
                          <span className="flex items-center text-headingClr text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                            <img src={starIcon} alt="starIcon" />
                            {data.averageRating}
                          </span>
                          <span className="flex items-center text-headingClr text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                            ({data.totalRating})
                          </span>
                        </div>

                        <p className="text_para font-[15px] lg:max-w-[390px] leading-6">{data?.bio}</p>
                      </div>
                    </div>
                    <AboutDoctor name={data.name} about={data.about} qualification={data.qualification} experiences={data.experiences} />
                  </div>
                )}

                {tab === "appointments" && <div><Appointments appointments={data.appointments} /></div>}
                {tab === "settings" && <div><Profile doctorData={data}/></div>}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorAccount;
