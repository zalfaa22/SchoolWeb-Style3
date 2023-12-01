import React from "react";
import { Gallery2 } from "@/components/Gallery";
import "./css/style.css";

function gallery() {
  return (
    <div className="bg-white">
      <div>
          <img className="gallerybubble1" src="Gallery/bubble1.svg"></img>
          <img className="gallerybubble2" src="Gallery/bubble2.svg"></img>
          <img className="gallerybubble3" src="Gallery/bubble3.svg"></img>
        </div>
      <div class="d-flex justify-content-center">
        <div class="position-relative" style={{marginTop: "8rem"}}>
          <p
            style={{
              position: "absolute",
              top: "5%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#1C2661"
            }}
            className="text-center fs-1 fw-bold" 
          >
            Galeri
          </p>
          <img src="Gallery/hero.svg" alt="" class="img-fluid" />
        </div>
      </div>

      <div
        style={{
          paddingTop: "4rem",
          paddingBottom: "4rem",
          paddingRight: "2rem",
          paddingLeft: "2rem",
        }}
      >
        <div className="wrap mt-5">
          <p className="text-center fs-1 fw-bold" style={{color: "#1C2661"}}>
            Dokumentasi Sekolah
          </p>
          <Gallery2 />
        </div>
      </div>
    </div>
  );
}

export default gallery;
