import React from "react";
import "../App.css";
import { EpicButton } from "./EpicButton";
import { IkonButton } from "./IkonButton";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="https://which-mountain.s3.amazonaws.com/video-3.mp4" autoPlay loop muted></video>
      <h1>Which Mountain</h1>
      <p>Scroll to see all mountains or choose your pass!</p>
      <div className="hero-btns">
        <EpicButton
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large "
        >
          Epic Mountains <i className="fas fa-mountain fa-xs"></i>
        </EpicButton>
        <IkonButton
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large "
        >
          Ikon Mountains <i className="fas fa-mountain fa-xs"></i>
        </IkonButton>
      </div>
    </div>
  );
}

export default HeroSection;
