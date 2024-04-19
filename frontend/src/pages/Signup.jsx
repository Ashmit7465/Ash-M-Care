import React from "react";
import logo_opt from "../assets/images/logo03.png";
import signUpImg from "../assets/images/signup.gif";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/images/main-img-01.jpeg";
import { useState } from "react";
import uploadImage from "../utils/uploadCloudinary";
// import { BASE_URL } from "../../config";
import { toast } from "react-hot-toast";
import HashLoader from "react-spinners/HashLoader";

const Signup = () => {

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [selectedFile, setSelectedFile] = useState(null);

  const [previewURL, setPreviewURL] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (ev) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  };

  const handleFileInput = async (ev) => {
    const file = ev.target.files[0];
    const data = await uploadImage(file);
    // console.log(data);

    setPreviewURL(data.url);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const navigate = useNavigate();

  const submitHandler = async (ev) => {
    // console.log(formData);
    ev.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }
      setLoading(false);
      toast.success(message);
      // alert("Registration Successful");
      navigate("/login");
    } catch (error) {
      toast.error(error);
      // alert("Error in registration")
      setLoading(false);
    }
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image  */}
          <div className="hidden lg:block bg-primaryClr rounded-l-lg">
            <figure className="rounded-l-lg">
              <img
                src={signUpImg}
                alt="signUpImg"
                className="w-full rounded-l-lg"
              />
            </figure>
          </div>

          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingClr text-[22px] leading-9 font-bold mb-10 text-center">
              <span className="text-black/100">
                🎉 Create an <span className="text-primaryClr">Account</span> 🎉
              </span>
            </h3>

            <form action="" onSubmit={submitHandler}>
              <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-[18px]">
                  Full Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border border-solid border-black/100 hover:border-primaryClr w-full py-3 pr-4 rounded-md focus:outline-none  px-4
            text-[16px] leading-7 placeholder:text-headingClr cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-[18px]">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border border-solid border-black/100 hover:border-primaryClr w-full py-3 pr-4 rounded-md focus:outline-none  px-4
            text-[16px] leading-7 placeholder:text-headingClr cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-[18px]">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="border border-solid border-black/100 hover:border-primaryClr w-full py-3 pr-4 rounded-md focus:outline-none  px-4
            text-[16px] leading-7 placeholder:text-headingClr cursor-pointer"
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label
                  htmlFor="role"
                  className="text-headingClr font-bold text-[16px] leading-7"
                >
                  Are You a:
                  <select
                    name="role"
                    id="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="text-textClr font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

                <label
                  htmlFor="gender"
                  className="text-headingClr font-bold text-[16px] leading-7"
                >
                  Gender:
                  <select
                    name="gender"
                    id="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="text-textClr font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="select">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                {selectedFile && (
                  <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryClr flex items-center justify-center">
                    <img
                      src={previewURL}
                      alt="avatar"
                      className="rounded-full w-full"
                    />
                  </figure>
                )}

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    accept=".jpg,.png,.jpeg"
                    onChange={handleFileInput}
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingClr font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="mb-5">
                <button
                  disabled={loading & true}
                  type="submit"
                  className="bg-primaryClr btn w-full px-4 py-3 leading-[30px] rounded-xl hover:bg-black/100"
                >
                  {loading ? (
                    <HashLoader size={35} color="#ffffff" />
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>

              <p className="mt-5 text-textCLr text-center">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primaryClr ml-1 hover:underline"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
