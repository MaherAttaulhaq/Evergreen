import "./App.css";
import { AppLayout } from "./components/layout/Applayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Aboutus } from "./components/pages/Aboutus";
import { PropertyList } from "./components/pages/PropertyList";
import { Contactus } from "./components/pages/Contactus";
import { ErrorPage } from "./components/pages/Errorpage";
import { Home } from "./components/pages/Home";
import { Propertydetail } from "./components/pages/Propertydetail";
import { Signup } from "./components/pages/Signup";
import { Signin } from "./components/pages/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <Aboutus />,
      },
      {
        path: "/property-list",
        element: <PropertyList />,
      },
      {

        path: "/signup",
        element: <Signup />,
      },
      {

        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/property-detail",
        element: <Propertydetail />,
      },
      {
        path: "/contact-us",
        element: <Contactus />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
