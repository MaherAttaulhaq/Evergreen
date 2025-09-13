import React from "react";
import { Button } from "./button";

export const Getstarted = () => {
  return (
    <div className="bg-[url('/images/house.jpg')] bg-cover bg-no-repeat size-100 text-center text-balance w-full">
      <h1 className="text-4xl font-bold mb-4 pt-25">
        Ready to make your dream <br />
        property a Reality ?
      </h1>
      <p className="mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, vitae.
      </p>
      <Button variant="secondary">Get Started</Button>
    </div>
  );
};
