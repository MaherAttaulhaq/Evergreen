import { NavLink } from "react-router-dom";
import React from "react";

export const Header = () => {
  return (
    <header>
      <nav className="">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/">
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Evergreen
            </span>
          </NavLink>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-black bg-primary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Get started
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-1 mt-4 rounded-full shadow-xl bg-slate-500/20 backdrop-blur-md border border-white/30 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <NavLink
                to="/"
                className="block p-2 text-black bg-secondary bg-primary-700 rounded-full"
              >
                Home
              </NavLink>
              <NavLink
                to="/about-us"
                className="block p-2 text-white rounded-full"
              >
                Aboutus
              </NavLink>
              <NavLink
                to="/property-detail"
                className="block p-2 text-white rounded-full"
              >
                Propertydetail
              </NavLink>
              <NavLink
                to="/property-list"
                className="block p-2 text-white rounded-full"
              >
                Propertylist
              </NavLink>
              <NavLink
                to="/contact-us"
                className="block p-2 text-white rounded-full"
              >
                Contactus
              </NavLink>
              <NavLink
                to="/signup"
                className="block p-2 text-white rounded-full"
              >
                Signup
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
