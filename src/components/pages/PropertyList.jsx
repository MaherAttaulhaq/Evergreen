import React, { useEffect } from "react";
import { CiLocationOn, CiSaveDown1 } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { RiPriceTag3Line } from "react-icons/ri";
import { CustomSlider } from "../ui/CustomSlider";
import { LucideGitCompareArrows, LucideHotel } from "lucide-react";
import { Input } from "../ui/input";
import {
  MdBedroomParent,
  MdOutlineBathroom,
  MdOutlinePlace,
} from "react-icons/md";
import { Button } from "../ui/button";
import { FaStar } from "react-icons/fa6";
import { Cards } from "../ui/Cards";
import products from "../../api/products.json";
import { useSearchParams } from "react-router";
export const PropertyList = () => {
  const [searchParams] = useSearchParams();

  // Read the parameters from the URL
  const locationId = searchParams.get("location_id");
  const locationName = searchParams.get("location_name");
  const type = searchParams.get("type");
  const price = searchParams.get("price");
  const rooms = searchParams.get("rooms");

  useEffect(() => {
    if (location) {
      // Fetch product details using productId
      console.log("Fetching location with ID:", location);
    }
  }, [location]); // Re-run effect when searchParams change
  return (
    <div className="flex gap-6 mt-16">
      {/* sidebar */}
      <div className="w-75  border-gray-200 ">
        <div className="flex justify-around items-center mb-2 border-b-2 border-gray-200 py-2 ">
          <h1 className="font-bold text-xl">Custom filters</h1>
          <p className="text-blue-600">Clear all</p>
        </div>
        <div className="my-4 border-b-2 border-gray-200 pb-4">
          <div className="flex justify-between items-center border-b border-gray-200 rounded-full bg-gray-200 mx-2 p-2">
            <div className="flex gap-2 items-center">
              <CiLocationOn />
              <h1 className="text-lg">Location</h1>
            </div>
            <div className="bg-white text-black rounded-full p-1">
              <RxCross2 />
            </div>
          </div>
          <div className="flex gap-2 mx-4 my-2 items-center">
            <input type="checkbox"></input>
            <button>
              <p className="font-semibold tracking-tighter">{locationName}</p>
            </button>
          </div>
          <div className="flex gap-2 mx-4 my-2 items-center">
            <input type="checkbox"></input>
            <p className="font-semibold tracking-tighter">Karachi ,Pakistan</p>
          </div>
        </div>
        <div className="my-4 border-b-2 border-gray-200 pb-4">
          <div className="flex justify-between items-center border-b border-gray-200 rounded-full bg-gray-200 mx-2 p-2">
            <div className="flex gap-2 items-center">
              <RiPriceTag3Line />
              <h1 className="text-lg">Price Range</h1>
            </div>
            <div className="bg-white text-black rounded-full p-1">
              <RxCross2 />
            </div>
          </div>
          <div className="flex gap-2 mx-4 my-2 items-center">
            <input type="radio"></input>
            <p className="font-semibold tracking-tighter">{price}</p>
          </div>
          <div className="flex gap-2 mx-4 my-2 items-center">
            <input type="radio"></input>
            <p className="font-semibold tracking-tighter"> $1000-$5000</p>
          </div>
          <div className="flex gap-2 mx-4 my-2 items-center">
            <input type="radio"></input>
            <p className="font-semibold tracking-tighter">more than $15000</p>
          </div>
          <div className="flex gap-2 mx-4 my-2 items-center">
            <input type="radio"></input>
            <p className="font-semibold tracking-tighter">Custom</p>
          </div>
          <div className="mx-2 my-4 flex justify-center items-center">
            <CustomSlider
              defaultValue={[10, 33]}
              max={100}
              step={1}
              showTooltip
            />
          </div>
        </div>
        <div className="my-4 border-b-2 border-gray-200 pb-4">
          <div className="flex justify-between items-center border-b border-gray-200 rounded-full bg-gray-200 mx-2 p-2">
            <div className="flex gap-2 items-center">
              <LucideGitCompareArrows />
              <h1 className="text-lg">Land Area</h1>
            </div>
            <div className="bg-white text-black rounded-full p-1">
              <RxCross2 />
            </div>
          </div>
          <div className="flex gap-2 mx-4 my-4 items-center">
            <div className="flex justify-between">
              <Input type="min" placeholder="Min" />
            </div>
            <div className="flex justify-between">
              <Input type="max" placeholder="Max" />
            </div>
          </div>
        </div>
        <div className="my-4 border-b-2 border-gray-200 pb-4">
          <div className="flex justify-between items-center border-b border-gray-200 rounded-full bg-gray-200 mx-2 p-2">
            <div className="flex gap-2 items-center">
              <MdOutlinePlace />
              <h1 className="text-lg">Type of </h1>
            </div>
            <div className="bg-white text-black rounded-full p-1">
              <RxCross2 />
            </div>
          </div>
          <div className="flex gap-2 mx-4 my-2 items-center">
            <input type="checkbox"></input>
            <p className="font-semibold tracking-tighter">{type}</p>
          </div>
          <div className="flex gap-2 mx-4 my-2 items-center">
            <input type="checkbox"></input>
            <p className="font-semibold tracking-tighter">Townhouse</p>
          </div>
          <div className="flex gap-2 mx-4 my-2 items-center">
            <input type="checkbox"></input>
            <p className="font-semibold tracking-tighter">Apartment</p>
          </div>
          <div className="flex gap-2 mx-4 my-2 items-center">
            <input type="checkbox"></input>
            <p className="font-semibold tracking-tighter">Bunglaow</p>
          </div>
        </div>
        <div className="my-4 border-b-2 border-gray-200 pb-4">
          <div className="flex justify-between items-center border-b border-gray-200 rounded-full bg-gray-200 mx-2 p-2">
            <div className="flex gap-2 items-center">
              <LucideHotel />
              <h1 className="text-lg">Aminities</h1>
            </div>
            <div className="bg-white text-black rounded-full p-1">
              <RxCross2 />
            </div>
          </div>
          <div className="flex gap-6 mx-4 my-6 items-center">
            <Button variant="secondary" className={"bg-blue-500 text-white"}>
              {rooms + " bedrooms"}
            </Button>
            <Button variant="secondary">{rooms + " bathrooms"}</Button>
          </div>
        </div>
      </div>
      {/* cards */}
      <div className="grid grid-cols-3 gap-4 mr-4">
        {products.map((product, index) => (
          <div key={index}>
            <div className="relative">
              <img
                src={product.img}
                alt="house image"
                className="size-90 rounded-2xl "
              />
              <Button variant="secondary" className={"absolute top-5 left-3"}>
                {product.type}
              </Button>
            </div>

            <div className="flex gap-2">
              <div className="flex my-2">
                <MdBedroomParent className="mt-1" />
                <p>{product.bedrooms} Bedrooms</p>
              </div>
              <div className="flex my-2">
                <MdOutlineBathroom className="mt-1" />
                <p>{product.bathrooms} Bathrooms</p>
              </div>
            </div>
            <p className="font-semibold text-2xl">{product.title}</p>
            <div className="flex gap-3 mt-4">
              <p className="font-bold">${product.price}</p>
              <p> {product.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
