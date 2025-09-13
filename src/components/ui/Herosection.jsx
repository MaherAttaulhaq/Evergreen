import React from "react";
import { Button } from "./button";
import { Badge } from "@/components/ui/badge";
export const Herosection = () => {
  return (
    <>
      {/* Background Image */}
      <img
        src="/images/house.jpg"
        className="absolute inset-0 h-[660px] w-full object-cover -z-10 brightness-75"
        alt="house pic"
      />

      <div className="mt-28 sm:mt-32 md:mt-20">
        {/* Hero Content */}
        <div className="flex flex-col md:flex-row justify-between mx-auto container items-center gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6 text-center md:text-left justify-center items-center md:items-start px-4">
            {/* Buttons */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <Badge className={"bg-white text-black"}>House</Badge>
              <Badge className={"bg-white text-black"}>Apartment</Badge>
              <Badge className={"bg-white text-black"}>Residential</Badge>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl  text-white leading-snug font-semibold">
              Build your future,
              <br />
              One property at a time
            </h1>
          </div>

          {/* Right Column */}
          <div className="max-w-md text-center md:text-left px-4">
            <p className="text-white text-base sm:text-lg md:text-xl font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              exercitationem perspiciatis delectus corrupti voluptatibus
              nesciunt alias praesentium ad!
            </p>
          </div>
        </div>

        {/* Search Form */}
        <form>
          <div className="bg-white my-8 rounded-2xl mx-auto container p-6">
            {/* Title */}
            <span className="font-bold text-lg sm:text-xl md:text-2xl flex justify-start mb-4">
              Find the best place
            </span>

            {/* Input Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Looking for */}
              <div className="flex flex-col gap-2">
                <label className="text-sm sm:text-base md:text-lg font-medium">
                  Looking for
                </label>
                <input
                  type="text"
                  placeholder="Enter type"
                  className="w-full p-2 rounded border outline-none"
                />
              </div>

              {/* Price */}
              <div className="flex flex-col gap-2">
                <label className="text-sm sm:text-base md:text-lg font-medium">
                  Price
                </label>
                <select className="w-full p-2 rounded border outline-none">
                  <option value="Price">Price</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>

              {/* Locations */}
              <div className="flex flex-col gap-2">
                <label className="text-sm sm:text-base md:text-lg font-medium">
                  Locations
                </label>
                <select className="w-full p-2 rounded border outline-none">
                  <option value="Locations">Locations</option>
                  <option value="0">FSD</option>
                  <option value="1">LHR</option>
                  <option value="2">ISL</option>
                </select>
              </div>

              {/* Rooms */}
              <div className="flex flex-col gap-2">
                <label className="text-sm sm:text-base md:text-lg font-medium">
                  Number of rooms
                </label>
                <select className="w-full p-2 rounded border outline-none">
                  <option value="Number of rooms">Number of rooms</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
            </div>

            {/* Filters + Search Button */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-6">
              {/* Filters */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start items-center">
                <p className="font-bold text-sm">Filter:</p>
                <Button variant="outline">City</Button>
                <Button variant="outline">House</Button>
                <Button variant="outline">Residential</Button>
                <Button variant="outline">Apartment</Button>
              </div>

              {/* Search Button */}
              <div>
                <Button className="rounded-full px-6 py-2 bg-black text-white">
                  Search Properties
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
