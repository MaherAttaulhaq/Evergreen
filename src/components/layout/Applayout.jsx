import { Outlet } from "react-router-dom";
import { Footer } from "../ui/Footer";
import { Header } from "../ui/Header";
import React from "react";
export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
