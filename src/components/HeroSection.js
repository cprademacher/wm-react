import React from "react";
import '../App.css';
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-3.mp4" autoPlay loop muted></video>
      <h1>Which Mountain</h1>
      <p>Scroll to see all mountains or choose your pass!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large "
        >
          EPIC PASS
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large "
        >
          IKON PASS
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;