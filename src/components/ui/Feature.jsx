import React from "react";
import { Button } from "./button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export const Feature = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="md:flex flex-col md:flex-row justify-between my-10">
        <div>
          <p className="text-3xl font-bold">
            Your primary home might
            <br />
            begin to feel left out
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
            libero error? Alias <br />
            rerum voluptatibus distinctio assumenda voluptatum magni eius
            dignissimos?
          </p>
        </div>
      </div>
      <div className="flex gap-6">
        <div>
          <img src="/images/home.jpg" alt="home image" className="size-120" />
        </div>
        <div className="border bg-gray-200 size-85 border-gray-200 px-4 py-4 rounded-2xl relative">
          <div>
            <p className="text-2xl font-bold text-center">
              Big things can <br /> happen in small
              <br /> space
            </p>
          </div>
          <div>
            <p className="text-center text-base text-balance">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              dolore cum accusantium, laboriosam minima saepe itaque voluptas
              dolorum eum, tenetur corporis soluta aliquam eius ea temporibus
              magni assumenda non dicta!
            </p>
          </div>
          <div className="text-center my-4">
            <Button variant="outline">Details</Button>
          </div>
          <div className="absolute mt-10 text-center">
            <Carousel className={"flex justify-between"}>
              <div>
                <CarouselContent>
                  <CarouselItem className="font-semibold">
                    Lorem ipsum dolor sit amet consectetur
                    <br /> adipisicing elit. Hic, illo
                  </CarouselItem>
                  <CarouselItem className="font-semibold">
                    Lorem ipsum dolor sit amet consectetur
                    <br /> adipisicing elit. Hic, illo
                  </CarouselItem>
                  <CarouselItem className="font-semibold">
                    Lorem ipsum dolor sit amet consectetur
                    <br /> adipisicing elit. Hic, illo
                  </CarouselItem>
                </CarouselContent>
              </div>
              <div className="absolute top-5 -right-50">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
        <div className="bg-gray-100 size-80 rounded-2xl">
          <img
            src="/images/homes.jpg"
            alt="homes pic"
            className="size-52 w-full rounded-2xl"
          />
          <div>
            <p className="text-center mt-2 text-2xl">Price starts at 256k$</p>
          </div>
          <div className="text-center py-2">
            <Button variant="outline">Search properties</Button>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-10 my-10 justify-between items-center">
        <div className="flex flex-col gap-2 border-r pr-20">
          <p className="font-bold text-4xl">100%</p>
          <p>Satisfaction Clients</p>
        </div>
        <div className="flex flex-col gap-2 border-r pr-20">
          <p className="font-bold text-4xl">500+</p>
          <p>Property Sells</p>
        </div>
        <div className="flex flex-col gap-2 border-r pr-20">
          <p className="font-bold text-4xl">150+</p>
          <p>Countries & Cities</p>
        </div>
        <div className="flex flex-col gap-2 pr-20">
          <p className="font-bold text-4xl">200+</p>
          <p>Positive Reviews</p>
        </div>
      </div>
    </section>
  );
};
