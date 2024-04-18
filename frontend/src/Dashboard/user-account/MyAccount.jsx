import React, { useState } from "react";
import userImg from "../../assets/images/doctor-img01.png";
import { useDispatch } from "react-redux";
import { logoutReducer } from "../../../redux/authSlice";
import MyBookings from "./MyBookings";
import Profile from "./Profile";
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../../config";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const MyAccount = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutReducer());
  };

  const [tab, setTab] = useState("bookings");

  const {
    data: userData,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}/users/profile/me`);

  console.log(userData, "UserData");

  return (
    <section>
      {loading && !error && <Loading />}

      {error && !loading && <Error errMessage={error} />}

      {!loading && !error && (
        <div className="max-w-[1170px] px-5 mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="pb-[50px] px-[30px] rounded-md">
              <div className="flex items-center justify-center">
                <figure className="w-[180px] h-[180px] rounded-full border-2 border-solid border-primaryClr">
                  <img
                    src={userData.photo}
                    alt="userImage"
                    className="w-full h-full
                                  rounded-full"
                  />
                </figure>
              </div>

              <div className="text-center mt-4">
                <h3 className="text-[18px] leading-[30px] text-headingClr font-bold">
                  {userData.name}
                </h3>

                <p className="text-textClr  text-[15px] leading-6 font-medium">
                  {userData.email}
                </p>
                <p className="text-textClr  text-[15px] leading-6 font-medium">
                  Blood Group:
                  <span className="ml-2 text-headingClr text-[18px]">{userData.bloodGroup}</span>
                </p>
              </div>

              <div className="mt-[50px] md:mt-[100px] ">
                <button
                  onClick={logoutHandler}
                  className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white"
                >
                  Logout
                </button>
                <button className="w-full bg-red-600 p-3 text-[16px] leading-7 rounded-md text-white mt-4">
                  Delete My Account
                </button>
              </div>
            </div>

            <div className="md:col-span-2 md:px-[30px]">
              <div>
                <button
                  onClick={() => setTab("bookings")}
                  className={`${
                    tab === "bookings" && "bg-primaryClr text-white font-normal"
                  } p-2 mr-5 px-5 rounded-md text-headingClr font-semibold text-[16px] leading-7 border border-solid border-primaryClr`}
                >
                  My Bookings
                </button>

                <button
                  onClick={() => setTab("settings")}
                  className={`${
                    tab === "settings" && "bg-primaryClr text-white font-normal"
                  } p-2 mr-5 px-5 rounded-md text-headingClr font-semibold text-[16px] leading-7 border border-solid border-primaryClr`}
                >
                  Profile Settings
                </button>
              </div>

              {tab === "bookings" && <MyBookings />}
              {tab === "settings" && <Profile user={userData} />}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyAccount;
