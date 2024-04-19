import React, { useState, useContext } from "react";
import logo_opt from "../assets/images/logo03.png";
import { Link, useNavigate } from "react-router-dom";
import {toast} from 'react-hot-toast'
// import { BASE_URL } from "../../config";
import HashLoader from 'react-spinners/HashLoader'
import { useDispatch, useSelector } from "react-redux";
import { loginReducer } from "../../redux/authSlice";

const Login = () => {

  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("authToken");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (ev) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  };

  const submitHandler = async (ev) => {
    // console.log(formData);
    ev.preventDefault();
    setLoading(true);

    try 
    {
        const res = await fetch(`${BASE_URL}/auth/login`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        })

        const result = await res.json();

        if(!res.ok)
        {
          throw new Error(result.message);
        }

        dispatch(loginReducer(result));

        console.log(result, "Login data");

        setLoading(false);
        toast.success(result.message);
        navigate('/home');
    }
    catch (error)
    {
      toast.error(error.message);y
      
      setLoading(false);
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto shadow-md md:p-10 bg-[##fafaf9]">
        <div className="mb-5">
          <figure>
            <img src={logo_opt} alt="logo" className="m-auto" />
          </figure>
          <h3 className="text-headingClr text-[25px] leading-9 font-bold mb-10 text-center">
            <span className="text-textClr">🎉 Welcome Back 🎉</span>
          </h3>
        </div>

        <form className="py-4 md:py-0" onSubmit={submitHandler}>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-[18px]">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="border border-solid border-black/20 w-full py-3 px-4 rounded-md focus:outline-none 
              hover:outline-none hover:border-black/100
              focus:border-primaryClr text-[16px] leading-7 cursor-pointer"
              value={formData.email}
              onChange={handleInputChange}
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
              placeholder="Enter Your Password"
              className="border border-solid border-black/20 w-full py-3 px-4 rounded-md focus:outline-none 
              hover:outline-none hover:border-black/100
              focus:border-primaryClr text-[16px] leading-7 cursor-pointer"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-5">
            <button
              type="submit"
              className="bg-primaryClr btn w-full px-4 py-3 leading-[30px] rounded-xl hover:bg-black/100"
            >
              {loading ? (<HashLoader size={35} color='#ffffff' />) : ( "Login" )}
            </button>
          </div>

          <p className="mt-5 text-textCLr text-center">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="text-primaryClr ml-1 hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
