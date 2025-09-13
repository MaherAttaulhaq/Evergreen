import React, { useState, useEffect } from "react";
import { Button } from "./button";
import { MdBedroomParent, MdOutlineBathroom } from "react-icons/md";
import pb from "@/lib/pocketbase";

export const Cards = ({ posts }) => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const dataWithImages = await Promise.all(
        posts.map(async (post) => {
          try {
            const imageUrl = post.image
              ? await pb.files.getURL(post, post.image)
              : null;
            return { ...post, imageUrl };
          } catch (err) {
            console.error("Failed to get file URL:", err);
            return { ...post, imageUrl: null };
          }
        })
      );
      setCardData(dataWithImages);
    };

    // Call the function directly without the `if` condition
    fetchImages();
  }, [posts]); // This dependency array ensures the effect runs when `posts` changes.

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">Explore our premium houses</h1>
          <p className="font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, esse?
          </p>
        </div>
        <div>
          <Button className="flex items-center gap-2 bg-black text-white rounded-2xl">
            Find Nearest Properties
          </Button>
        </div>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 py-10 justify-center items-center">
        {cardData.map((item, index) => (
          <div key={index}>
            <div className="relative">
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt="house image"
                  className="size-90 rounded-2xl"
                />
              )}
              <Button variant="secondary" className={"absolute top-5 left-3"}>
                {item.type}
              </Button>
            </div>

            <div className="flex gap-2">
              <div className="flex my-2 gap-2">
                <MdBedroomParent className="mt-1" />
                <p>{item.bedrooms} Bedrooms</p>
              </div>
              <div className="flex my-2">
                <MdOutlineBathroom className="mt-1" />
                <p>{item.bathroom} Bathrooms</p>
              </div>
            </div>
            <p className="font-semibold text-2xl">{item.title}</p>
            <div className="flex gap-3 mt-4">
              <p className="font-bold">${item.price}</p>
              <p>{item.expand?.location?.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
