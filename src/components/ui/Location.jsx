import React from "react";
import { Button } from "./button";
import { IoMdArrowForward } from "react-icons/io";
export const Location = () => {
  return (
    <div className="container mx-auto bg-gray-100">
      <div className="flex justify-between gap-8 items-center px-4 py-8 md:flex-row flex-col">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.5258977520243!2d71.30963987462468!3d29.87794382644202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b18ea65f67b67%3A0x75c64662333028ff!2sStreet%20No.%205%2C%20Shujaab%C4%81d%2C%20Pakistan!5e0!3m2!1sen!2s!4v1756723738416!5m2!1sen!2s"
            className="w-150 h-60"
            // style="border:0;"
            // allowfullscreen="false"
            // loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl">
            Discover properties with <br />
            the best value
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus <br />
            dolorem illum animi, dolore architecto assumenda dicta
          </p>
          <div>
            <Button className="flex items-center gap-2 bg-black text-white rounded-2xl">
              Find Nearest Properties
              <span>
                <IoMdArrowForward />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
