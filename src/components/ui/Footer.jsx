import React from "react";
import { Button } from "@/components/ui/button";
export const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between border-b pb-15 mt-8 mx-5 flex-col md:flex-row">
        <h1 className="text-2xl font-bold">
          Discover natures world <br />
          with Expert Guidance
        </h1>
        <div className="flex flex-col gap-2 font-semibold">
          <p>New housing colony shujababd, 123924.</p>
          <p>+13892373427974</p>
        </div>
      </div>
      <div className="flex justify-around border-b py-6 items-center flex-col md:flex-row ">
        <div>
          <ul className="flex gap-4 font-semibold">
            <li>Home</li>
            <li>About</li>
            <li>Properties</li>
            <li>Services</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-xl">Evergreen</p>
        </div>
        <div>
          <ul className="flex gap-4 font-semibold">
            <li>Gallery</li>
            <li>Contact</li>
            <li>FAQ</li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>
      <div className="md:flex justify-between mx-5 items-end pt-12 pb-2 md:flex-row flex-col">
        <p>© 2025.All right reserved</p>
        <p>Terms & conditions | Privacy Policy</p>
      </div>
    </footer>
  );
};
