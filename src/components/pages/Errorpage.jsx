import { NavLink, useRouteError } from "react-router-dom";
import React from "react";
import { Button } from "../ui/button";
export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex justify-center items-center">
      <h1>Oops! An error occurred.</h1>
      {error && <p>{error.data}</p>}
      <NavLink to="/">
        <Button variant="destructive"> Go Home </Button>
      </NavLink>
    </div>
  );
};
