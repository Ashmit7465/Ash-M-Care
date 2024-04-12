import React from "react";
import logo_opt from "../../assets/images/logo03.png";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { loginReducer, logoutReducer } from "../../../redux/authSlice";
import { useSelector } from "react-redux";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const headRef = useRef(null);
  const menuRef = useRef(null);

  const data = useSelector((state) => state.auth.data);
  const role = useSelector((state) => state.auth.role);
  const token = useSelector((state) => state.auth.token);

  const isTokenValid = token !== null;

  // console.log(data);
  // console.log(role);
  // console.log(token);

  // console.log(data.name);

  const stickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headRef.current.classList.add("sticky_header");
      } else {
        headRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    stickyHeader();
    return () => window.removeEventListener("scroll", stickyHeader);
  }, []);

  const menuToggler = () => {
    menuRef.current.classList.toggle("show_menu");
  };

  return (
    <header className="header flex items-center" ref={headRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="w-40">
            <Link to="/">
              <img src={logo_opt} alt="Logo" />
            </Link>
          </div>

          <div className="navigation" ref={menuRef} onClick={menuToggler}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryClr text-[16px] leading-7 font-[600]"
                        : "text-textClr text-[16px] leading-7 font-[500]"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            {isTokenValid && data ? (
              <div className="flex items-center">
                <h2>{data?.name}</h2>
                <Link
                  to={`${
                    role === "doctor"
                      ? "/doctor/profile/me"
                      : "/users/profile/me"
                  }`}
                >
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                    <img
                      src={data?.photo}
                      alt="userImage"
                      className="w-full rounded-full"
                    />
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button
                  className="bg-primaryClr py-2 px-6 text-white font-[600]
              h-[44px] flex items-center justify-center rounded-[50px] hover:bg-black/100"
                >
                  Login
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={menuToggler}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
