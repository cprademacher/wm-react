import React from "react";
// import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import 'font-awesome/css/font-awesome.min.css';

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
    path: "/services",
    element: <Services />,
  },
  {
    path: "/products",
    element: <Products />,
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