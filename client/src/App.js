import React, { useEffect, useState } from "react";
import axios from "axios";
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
  const [serverMessage, setServerMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8081")
      .then((response) => {
        setServerMessage(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
