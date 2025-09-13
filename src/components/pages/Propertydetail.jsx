import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { FaCarSide, FaFacebook, FaHouse, FaInstagram, FaLinkedin, FaStar, FaXTwitter } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { CiAlignLeft } from "react-icons/ci";
import { GiEmptyWoodBucketHandle } from "react-icons/gi";
import { MdOutlineBathroom, MdOutlineBedroomChild } from "react-icons/md";
import { NavLink } from "react-router";
export const Propertydetail = () => {
  return (
    <div className="my-10 mx-20">
      <div className="flex justify-around gap-10 border-b border-gray-200 pb-10">
        <div>
          <img
            src="/images/homes.jpg"
            alt="home pic"
            className="size-100 rounded-2xl"
          />
          <div className="grid grid-cols-3 gap-2 mt-2 ">
            <img
              src="/images/homes.jpg"
              alt="homes pic"
              className="size-30 rounded-2xl"
            />
            <img
              src="/images/homes.jpg"
              alt="homes pic"
              className="size-30 rounded-2xl"
            />
            <img
              src="/images/homes.jpg"
              alt="homes pic"
              className="size-30 rounded-2xl"
            />
          </div>
          <div className="">
            <Card className="w-full max-w-sm border-gray-200 shadow-2xl">
              <div className="flex justify-between mx-7">
                <div className="flex gap-2">
                  <FaHouse className="mt-1 text-2xl" />
                  <p className="text-2xl font-bold">Aruna</p>
                </div>
                <div>
                  <p className="font-semibold text-md">View Listings</p>
                </div>
              </div>
              <CardContent>
                <form>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <label htmlFor="email" className="font-semibold">
                        Name
                      </label>
                      <input
                        type="Name"
                        placeholder="Enter your name here"
                        className="outline-none border-2 rounded-2xl p-2 border-slate-100 tracking-tight"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email" className="font-semibold">
                        Number
                      </label>
                      <input
                        type="Number"
                        placeholder="Enter your Number here"
                        className="outline-none border-2 rounded-2xl p-2 border-slate-100 tracking-tight"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email" className="font-semibold">
                        Email
                      </label>
                      <input
                        type="Email"
                        placeholder="Enter your Email here"
                        className="outline-none border-2 rounded-2xl p-2 border-slate-100 tracking-tight"
                        required
                      />
                      <input
                        type="Email"
                        placeholder="Hello I am interested in silica"
                        className="outline-none border-2 rounded-2xl p-2 border-slate-100 tracking-tight"
                        required
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button variant="outline" className="w-full">
                  Send messages
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div>
          <div className="flex justify-between gap-10">
            <div>
              <h1 className="font-bold text-xl max-w-md">
                Lorem, ipsum dolor sit amet consectetur
              </h1>
              <div className="grid grid-cols-2 gap-2 my-4">
                <div className="flex gap-2">
                  <IoMdHome className="text-md mt-1" />
                  <p>Residence</p>
                </div>
                <div className="flex gap-2">
                  <FaStar className="text-md mt-1 text-yellow-400" />
                  <p>4.5 star Review</p>
                </div>
              </div>
            </div>
            <div>
              <Button variant="secondary">Secondary</Button>
            </div>
          </div>
          <div className="my-4">
            <div className="font-bold text-xl">
              <h1>Overview</h1>
            </div>
            <div className="grid grid-cols-3 m-4 border-gray-200 border rounded-2xl divide-x divide-y divide-gray-200 shadow-sm">
              <div className="flex gap-2 justify-center items-center border-gray-200 p-2">
                <MdOutlineBedroomChild className="text-md mt-o.5" />
                <p>3 Bedrooms</p>
              </div>
              <div className="flex gap-2 justify-center items-center border-gray-200  p-2">
                <MdOutlineBathroom className="text-md mt-o.5" />
                <p>7 Bathrooms</p>
              </div>
              <div className="flex gap-2 justify-center items-center border-gray-200 p-2">
                <CiAlignLeft className="text-md mt-o.5" />
                <p>3943 ft</p>
              </div>
              <div className="flex gap-2 justify-center items-center border-gray-200  p-2">
                <GiEmptyWoodBucketHandle className="text-md mt-o.5" />
                <p>All furniture</p>
              </div>
              <div className="flex gap-2 justify-center items-center  border-gray-200 p-2">
                <FaCarSide className="text-md mt-o.5" />
                <p>1 Car garage</p>
              </div>
              <div className="flex gap-2 justify-center items-center border-gray-200 p-2"></div>
            </div>
          </div>
          <div className="my-4">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-xl">Description</h1>
              <div className="font-semibold tracking-tight text-gray-600 max-w-md">
                <p className="text-balance text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  asperiores animi cupiditate corporis inventore ullam hic? Ad,
                  voluptatum quis earum maxime eaque maiores facere optio
                  tempore mollitia excepturi, ex sint?
                </p>

                <p className="text-balance text-base my-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Excepturi sequi eveniet quas, earum officia totam voluptatem
                  eaque rerum fugiat ad. Quae rem repellat fuga. Repellat
                  suscipit doloremque vel recusandae beatae.
                </p>

                <p className="text-balance text-base my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa, libero!
                </p>
              </div>
            </div>
          </div>
          <div className="my-4">
            <div className="font-bold text-xl">
              <h1>Address</h1>
            </div>

            <div className="grid grid-cols-2 m-4 border-gray-200 border rounded-2xl divide-x divide-y divide-gray-200 shadow-sm font-semibold">
              <div className="flex justify-around border-gray-200 p-2">
                <p>City</p>
                <p>Shujabad</p>
              </div>
              <div className="flex justify-around border-gray-200  p-2">
                <p>Country</p>
                <p>Shujabad</p>
              </div>
              <div className="flex justify-around border-gray-200  p-2">
                <p>State/Country</p>
                <p>Shujabad</p>
              </div>
              <div className="flex justify-around border-gray-200  p-2"></div>
            </div>
          </div>
          <div className="my-4">
            <div className="font-bold text-xl">
              <h1>Details:</h1>
            </div>

            <div className="grid grid-cols-2 m-4 border-gray-200 border rounded-2xl divide-x divide-y divide-gray-200 shadow-sm font-semibold">
              <div className="flex justify-around border-gray-200 p-2">
                <p>Property id:</p>
                <p>78378</p>
              </div>
              <div className="flex justify-around border-gray-200  p-2">
                <p>Bedrooms:</p>
                <p>11</p>
              </div>
              <div className="flex justify-around border-gray-200  p-2">
                <p>Price:</p>
                <p>$20006347346</p>
              </div>
              <div className="flex justify-around border-gray-200  p-2">
                <p>Bathrooms:</p>
                <p>11</p>
              </div>
              <div className="flex justify-around border-gray-200 p-2">
                <p>Property size:</p>
                <p>1567m</p>
              </div>
              <div className="flex justify-around border-gray-200  p-2">
                <p>Year Built:</p>
                <p>2010</p>
              </div>
              <div className="flex justify-around border-gray-200  p-2">
                <p>Land area:</p>
                <p>1567m</p>
              </div>
              <div className="flex justify-around border-gray-200  p-2">
                <p>Property type:</p>
                <p>Residence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* cards */}
      <div>
        <div className="flex flex-col gap-2 mt-10 mb-4">
          <h1 className="font-bold text-2xl">Discover Aruna Property</h1>
          <p className="text-gray-600 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            explicabo.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10">
          <div>
            <img
              src="/images/home.jpg"
              alt="home pic"
              className="rounded-2xl"
            />
            <div className="flex justify-between font-semibold">
              <p>Multan</p>
              <p>Pakistan</p>
            </div>
            <div className="flex gap-2">
              <div className="flex">
                <MdOutlineBedroomChild className="text-md mt-1" />
                <p>3 Bedrooms</p>
              </div>
              <div className="flex">
                <MdOutlineBathroom className="text-md mt-1" />
                <p>7 Bathrooms</p>
              </div>
              <div className="flex">
                <CiAlignLeft className="text-md mt-1" />
                <p>3943 ft</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <img
              src="/images/homes.jpg"
              alt="home pic"
              className="rounded-2xl"
            />
            <div className="flex justify-between font-semibold">
              <p>Lahore</p>
              <p>Pakistan</p>
            </div>
            <div className="flex gap-2">
              <div className="flex">
                <MdOutlineBedroomChild className="text-md mt-1" />
                <p>3 Bedrooms</p>
              </div>
              <div className="flex">
                <MdOutlineBathroom className="text-md mt-1" />
                <p>7 Bathrooms</p>
              </div>
              <div className="flex">
                <CiAlignLeft className="text-md mt-1" />
                <p>3943 ft</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <img
              src="/images/house.jpg"
              alt="home pic"
              className="rounded-2xl"
            />
            <div className="flex justify-between font-semibold">
              <p>Islamabad</p>
              <p>Pakistan</p>
            </div>
            <div className="flex gap-2">
              <div className="flex">
                <MdOutlineBedroomChild className="text-md mt-1" />
                <p>3 Bedrooms</p>
              </div>
              <div className="flex">
                <MdOutlineBathroom className="text-md mt-1" />
                <p>7 Bathrooms</p>
              </div>
              <div className="flex">
                <CiAlignLeft className="text-md mt-1" />
                <p>3943 ft</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* form */}
      <div className="flex my-10">
        <div className="relative">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="flex justify-center w-full">
                <img
                  src="/images/homes.jpg"
                  alt="home pic"
                  className="size-120"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/images/house.jpg"
                  alt="home pic"
                  className="size-120"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="/images/home.jpg"
                  alt="home pic"
                  className="size-120"
                />
              </CarouselItem>
            </CarouselContent>
            <div className="absolute bottom-8 right-34">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
        <div className=" bg-black text-white px-4 py-6  ">
          <h1 className="font-semibold text-2xl">
            Still dont found what u are <br />
            looking for?
          </h1>

          <form className="m-4">
            <div className="flex gap-4">
              <div className="flex justify-between gap-4">
                <div className="grid gap-2">
                  <label htmlFor="FirstName" className="font-semibold">
                    FirstName
                  </label>
                  <input
                    type="text"
                    name="FirstName"
                    placeholder="Enter your FirstName here"
                    className="border border-gray-600 rounded-2xl px-8 py-2 tracking-tight"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="Lastname" className="font-semibold">
                    Lastname
                  </label>
                  <input
                    type="text"
                    name="Lastname"
                    placeholder="Enter your Lastname here"
                    className="border border-gray-600 rounded-2xl px-8 py-2  tracking-tight"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-2 my-2">
              <label htmlFor="Name" className="font-semibold">
                I want to know about
              </label>
              <input
                type="text"
                name="Name"
                placeholder="I want to know about ..."
                className="border border-gray-600 rounded-2xl p-2 tracking-tight"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="Notes" className="font-semibold">
                Notes
              </label>
              <Textarea />
            </div>
            <div className="mt-8">
              <Button variant="secondary">Submit</Button>
            </div>
          </form>
        </div>
      </div>
      {/* accordian */}
      <div className="flex justify-between border-b border-gray-200 pb-14 pt-5">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
          <p className="text-gray-600 tracking-tighter">
            Lorem ipsum, dolor sit amet consectetur <br />
            adipisicing elit. Officiis, quaerat.
          </p>
        </div>
        <div>
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem
              value="item-1"
              className={"border-b border-gray-200"}
            >
              <AccordionTrigger
                className={"hover:no-underline text-2xl font-bold"}
              >
                How do I start the business with aura and evergreen?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and
                  experts.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className={"border-b border-gray-200"}
            >
              <AccordionTrigger
                className={"hover:no-underline text-2xl font-bold"}
              >
                How do I start the business with aura and evergreen?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We offer worldwide shipping through trusted courier partners.
                  Standard delivery takes 3-5 business days, while express
                  shipping ensures delivery within 1-2 business days.
                </p>
                <p>
                  All orders are carefully packaged and fully insured. Track
                  your shipment in real-time through our dedicated tracking
                  portal.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className={"border-b border-gray-200"}
            >
              <AccordionTrigger
                className={"hover:no-underline text-2xl font-bold"}
              >
                How do I start the business with aura and evergreen?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p>
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className={"border-b border-gray-200"}
            >
              <AccordionTrigger
                className={"hover:no-underline text-2xl font-bold"}
              >
                How do I start the business with aura and evergreen?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We offer worldwide shipping through trusted courier partners.
                  Standard delivery takes 3-5 business days, while express
                  shipping ensures delivery within 1-2 business days.
                </p>
                <p>
                  All orders are carefully packaged and fully insured. Track
                  your shipment in real-time through our dedicated tracking
                  portal.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className={"border-b border-gray-200"}
            >
              <AccordionTrigger
                className={"hover:no-underline text-2xl font-bold"}
              >
                How do I start the business with aura and evergreen?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p>
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      {/* footer */}
      <div className="border-b border-gray-200 py-10">
        <h1 className="text-7xl font-bold text-center">
          And Comfort,Live with Arun
        </h1>
      </div>
      <div className="flex justify-around py-10">
        <div>
          <p>2024 All rights reserved by</p>
        </div>
        <div className="flex gap-4">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/properties-list">
            <p>Properties</p>
          </NavLink>
          <NavLink to="/projects">
            <p>Our projects</p>
          </NavLink>
          <NavLink to="/faq">
            <p>FAQ</p>
          </NavLink>
          <NavLink to="/aboutus">
            <p>About us</p>
          </NavLink>
        </div>
        <div className="flex gap-4">
          <FaFacebook />
          <FaInstagram />
          <FaXTwitter />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};

 
