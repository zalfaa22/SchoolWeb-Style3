import React from "react";
import { Gallery2 } from "@/components/Gallery";

function gallery() {
  return (
    <div className="bg-white">
      <div class="d-flex justify-content-center">
        <div class="position-relative mt-5">
          <p
            style={{
              position: "absolute",
              top: "5%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            className="text-center text-black fs-2 fw-bold"
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
          <p className="text-center text-black fs-1 fw-bold">
            Dokumentasi Sekolah
          </p>
          <Gallery2 />
        </div>
      </div>
    </div>
  );
}

export default gallery;
