import React from "react";
import { Button } from "./button";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useSearchParams } from "react-router-dom"; // Use useNavigate and useSearchParams
import { AutoComplete } from "./autoComplete"; // This component is assumed to exist
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AppSelect } from "./appSelect";

export const Herosection = () => {
  // `useSearchParams` links directly to the URL's query string
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate(); // Get the navigate function for programmatic navigation
  const items = [
    { id: "100000", name: "100000" },
    { id: "200000", name: "200000" },
    { id: "300000", name: "300000" },
    { id: "400000", name: "400000" },
    { id: "500000", name: "500000" },
  ];
  const types = [
    { id: "for_rent", name: "For Rent" },
    { id: "for_sale", name: "For Sale" },
  ];
  const rooms = [
    { id: "1", name: "1 Bedroom" },
    { id: "2", name: "2 Bedroom" },
    { id: "3", name: "3 Bedroom" },
    { id: "4", name: "4 Bedroom" },
    { id: "5", name: "5 Bedroom" },
  ];
  const onLocationSelect = (location) => {
    setSearchParams((prevSearchParams) => {
      const newParams = new URLSearchParams(prevSearchParams);
      newParams.set("location_id", location.id);
      newParams.set("location_name", location.name);
      return newParams;
    });
  };

  const handleFilterChange = (name, value) => {
    setSearchParams((prevSearchParams) => {
      const newParams = new URLSearchParams(prevSearchParams);
      newParams.set(name, value);
      return newParams;
    });
  };

  // This function is now correctly linked to the useNavigate hook
  const goPropertyList = () => {
    navigate({
      pathname: "/property-list",
      search: searchParams.toString(), // Convert URLSearchParams object to a string
    });
  };

  return (
    <>
      {/* Background Image and other static JSX */}
      <img
        src="/images/house.jpg"
        className="absolute inset-0 h-[660px] w-full object-cover -z-10 brightness-75"
        alt="house pic"
      />
      <div className="mt-28 sm:mt-32 md:mt-20">
        <div className="flex flex-col md:flex-row justify-between mx-auto container items-center gap-6">
          <div className="flex flex-col gap-6 text-center md:text-left justify-center items-center md:items-start px-4">
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <Badge className={"bg-white text-black"}>House</Badge>
              <Badge className={"bg-white text-black"}>Apartment</Badge>
              <Badge className={"bg-white text-black"}>Residential</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl text-white leading-snug font-semibold">
              Build your future,
              <br />
              One property at a time
            </h1>
          </div>
          <div className="max-w-md text-center md:text-left px-4">
            <p className="text-white text-base sm:text-lg md:text-xl font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              exercitationem perspiciatis delectus corrupti voluptatibus
              nesciunt alias praesentium ad!
            </p>
          </div>
        </div>

        {/* Search Form */}
        <form onSubmit={(e) => e.preventDefault()}>
          {" "}
          {/* Prevent default form submission */}
          <div className="bg-white my-8 rounded-2xl mx-auto container p-6">
            <span className="font-bold text-lg sm:text-xl md:text-2xl flex justify-start mb-4">
              Find the best place
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm sm:text-base md:text-lg font-medium">
                  Looking for
                </label>
                <AppSelect
                  label="Looking for"
                  name="type"
                  items={types}
                  onChange={handleFilterChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm sm:text-base md:text-lg font-medium">
                  Price
                </label>
                <AppSelect
                  label="Price"
                  name="price"
                  items={items}
                  onChange={handleFilterChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm sm:text-base md:text-lg font-medium">
                  Locations
                </label>
                <AutoComplete onLocationSelect={onLocationSelect} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm sm:text-base md:text-lg font-medium">
                  Number of rooms
                </label>
                <AppSelect
                  label="Rooms"
                  name="rooms"
                  items={rooms}
                  onChange={handleFilterChange}
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-6">
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start items-center">
                <p className="font-bold text-sm">Filter:</p>
                <Button variant="outline">City</Button>
                <Button variant="outline">House</Button>
                <Button variant="outline">Residential</Button>
                <Button variant="outline">Apartment</Button>
              </div>
              <div>
                {/* Use the Button with the onClick handler calling the navigate function */}
                <Button
                  className="rounded-full px-6 py-2 bg-black text-white"
                  onClick={goPropertyList}
                >
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
