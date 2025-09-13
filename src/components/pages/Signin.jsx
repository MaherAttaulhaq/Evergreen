import React from "react";
import { NavLink } from "react-router";

export const Signin = () => {
  return (
    <section className="container mx-auto">
      <div className="flex justify-center items-center my-6">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
          <h1 className="text-2xl font-bold text-center">Sign In</h1>
          <form
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block text-black">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md border border-white/30 bg-white/20 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-black"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block text-black">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border border-white/30 bg-white/20 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-black"
              />
            </div>
            <button className="block w-full p-3 text-center rounded-sm text-white bg-primary hover:bg-primary-800">
              Sign In
            </button>
          </form>
          <p className="text-xs text-center sm:px-6 text-black">
            Don't have an account?
            <NavLink to="/signup" className="underline text-primary">
              {" "}
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};
