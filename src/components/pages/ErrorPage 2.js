import React from "react";
import Navbar from "../Navbar";

export default function ErrorPage() {
  return (
    <>
      <Navbar />
      <div id="error-page">
        <h1>Oops!</h1>
        <p>
          Sorry, an unexpected error has occurred. The page you requested
          doesn't exist.
        </p>
      </div>
    </>
  );
}
