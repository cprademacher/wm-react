import React from "react";
// import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Ikon from "./components/pages/Ikon";
import Epic from "./components/pages/Epic";
import Weather from "./components/pages/Weather";
import ErrorPage from "./components/pages/ErrorPage";
import "font-awesome/css/font-awesome.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/ikon-mountains",
    element: <Ikon />,
  },
  {
    path: "/epic-mountains",
    element: <Epic />,
  },
  {
    // change to /mountainName/weather
    path: "/weather/:mountainName",
    element: <Weather />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
