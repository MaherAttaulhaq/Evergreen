import React, { useEffect, useState } from "react";
import { Herosection } from "../ui/Herosection";
import { Feature } from "../ui/Feature";
import { Location } from "../ui/Location";
import { Cards } from "../ui/Cards";
import { Accordian } from "../ui/Accordian";
import { Testimonial } from "../ui/Testimonial";
import { Getstarted } from "../ui/Getstarted";
import pb from "../../lib/pocketbase";
export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const result = await pb.collection("posts").getList(1, 50, {
          sort: "-created",
          expand: "location",
        });
        setPosts(result.items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);
  useEffect(() => {
    async function fetchPosts() {
      try {
        const result = await pb.collection("questions").getList(1, 50, {
          sort: "-created",
        });
        setQuestions(result.items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);
  return (
    <>
      <Herosection />
      <Feature />
      <Location />
      <Cards posts={posts} />
      <Accordian questions={questions} />
      <Testimonial />
      <Getstarted />
    </>
  );
};
