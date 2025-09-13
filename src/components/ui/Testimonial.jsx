import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export const Testimonial = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">
          What our clients say <br />
          about us
        </h1>
        <div className="flex gap-1 justify-center items-center">
          <div className="flex justify-center items-center">
            <img
              src="/images/clients-img/Alisa Hester.png"
              alt="avatar"
              className="size-10 rounded-full"
            />
            <img
              src="/images/clients-img/Andi Lane.webp"
              alt="avatar"
              className="size-10 rounded-full"
            />
            <img
              src="/images/clients-img/Anita Cruz.webp"
              alt="avatar"
              className="size-10 rounded-full"
            />
          </div>
          <p className="text-xl">
            More than <span className="font-bold">500+</span>
            <br />
            Client Reviews
          </p>
        </div>
      </div>
      <div>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="my-10 flex  gap-3 justify-center items-center">
              <img
                src="/images/clients-img/Andi Lane.webp"
                alt="avatar"
                className="size-100 rounded-2xl"
              />
              <div className="bg-gray-100 text-balance pt-15 py-5 size-100 rounded-2xl">
                <p className="font-semibold text-2xl mx-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis voluptatem fuga cumque est officia neque adipisci
                  distinctio nihil! Nisi perspiciatis vero accusantium doloribus
                  voluptas architecto nihil adipisci a sequi inventore.
                </p>
                <p className="font-bold mx-5 pt-5">Imsha Rahman</p>
                <p className="font-semibold mx-5">UI UX Designer</p>
              </div>
            </CarouselItem>
            <CarouselItem className="my-10 flex  gap-3 justify-center items-center">
              <img
                src="/images/clients-img/Anita Cruz.webp"
                alt="avatar"
                className="size-100 rounded-2xl"
              />
              <div className="bg-gray-100 text-balance pt-15 py-5 size-100 rounded-2xl">
                <p className="font-semibold text-2xl mx-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis voluptatem fuga cumque est officia neque adipisci
                  distinctio nihil! Nisi perspiciatis vero accusantium doloribus
                  voluptas architecto nihil adipisci a sequi inventore.
                </p>
                <p className="font-bold mx-5 pt-5">Imsha Rahman</p>
                <p className="font-semibold mx-5">UI UX Designer</p>
              </div>
            </CarouselItem>
            <CarouselItem className="my-10 flex  gap-3 justify-center items-center">
              <img
                src="/images/clients-img/Alisa Hester.png"
                alt="avatar"
                className="size-100 rounded-2xl"
              />
              <div className="bg-gray-100 text-balance pt-15 py-5 size-100 rounded-2xl">
                <p className="font-semibold text-2xl mx-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis voluptatem fuga cumque est officia neque adipisci
                  distinctio nihil! Nisi perspiciatis vero accusantium doloribus
                  voluptas architecto nihil adipisci a sequi inventore.
                </p>
                <p className="font-bold mx-5 pt-5">Imsha Rahman</p>
                <p className="font-semibold mx-5">UI UX Designer</p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
