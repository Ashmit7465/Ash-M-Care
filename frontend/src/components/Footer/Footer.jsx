import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo03.png";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.youtube.com/channel/UCQoaP2A7wn_npsnE2vZIiVQ",
    icon: <AiFillYoutube className="group-hover:tet-white w-4 h-5" />,
  },
  {
    path: "https://github.com/Ashmit7465",
    icon: <AiFillGithub className="group-hover:tet-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/ashmit._.7465/",
    icon: <AiOutlineInstagram className="group-hover:tet-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/in/ashmit-shukla-895813227/",
    icon: <RiLinkedinFill className="group-hover:tet-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLinks02 = [
  {
    path: "/doctors",
    display: "Find Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a clinic location",
  },
  {
    path: "/",
    display: "Get an opinion",
  },
];

const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="logo AshMCare" />
            <p className="text-[16px] leading-7 font-[400] text-textClr mt-4">
              Copyright @ {year} developed by Ashmit Shukla all rights reserved.
            </p>

            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181a1e] rounded-full flex items-center justify-center group hover:bg-primaryClr  hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingClr">
              Quick Links
            </h2>

            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textClr"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingClr">
              I want to:
            </h2>

            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textClr"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingClr">
              Support
            </h2>

            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textClr"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
