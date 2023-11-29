import React from "react";
import { Keunggulan2 } from "@/components/Keunggulan";
import Guru from "@/components/Guru";
import Daftar from "@/components/Daftar";
import "./css/style.css";

function about() {
  return (
    <div className="bg-white">
      <div>
          <img className="aboutbubble1" src="About/bubble1.svg"></img>
          <img className="aboutbubble2" src="About/bubble2.svg"></img>
          <img className="aboutbubble3" src="About/bubble3.svg"></img>
        </div>
      <div class=" d-flex justify-content-center">
        <div class="position-relative " style={{marginTop: "6rem"}}>
          <img src="About/hero.svg" alt="" class="img-fluid " />
        </div>
      </div>

      <div style={{ paddingTop: "4rem" }}>
        <div
          className="wrap mt-5"
          style={{ maxWidth: "80%", margin: "0 auto" }}
        >
          <h1 className="text-center text-dark fs-1 fw-bold">Video Profil</h1>
          <p className="text-center text-dark fs-5 fw-normal">
            Berikut adalah video profil dari sekolah kami
          </p>
          <div class="ratio ratio-16x9">
            <img src="About/video.svg"></img>
            {/* <iframe
              className="rounded-4 "
              src="https://www.youtube.com/embed/NJq5eLYDmkE?si=Zaz98u8jyDQhha69"
              title="students writing in class"
              allowfullscreen
            ></iframe> */}
          </div>
        </div>
      </div>

      <div style={{ paddingTop: "8rem" }}>
        <Keunggulan2 />
      </div>

      <div
        style={{
          paddingTop: "6rem",
          paddingBottom: "8rem",
          paddingRight: "2rem",
          paddingLeft: "2rem",
        }}
      >
        <div className=" mt-5">
          <div className="row">
            <div className="col-md-6">
              <p className="text-start text-dark fs-1 fw-bold ms-5">
                Guru & Staff
              </p>
              <p className="text-start text-dark fs-5 fw-normal ms-5">
                Daftar Anggota Guru dan Staff Sekolah Ini
              </p>
            </div>
            <div className="col-md-5 d-md-flex align-items-md-center justify-content-md-end ms-5">
              <a
                href="#"
                className="btn btn-info px-4 text-white"
                style={{ backgroundColor: "#619aef" }}
              >
                Lihat Semua
              </a>
            </div>
          </div>
          <Guru />
        </div>
      </div>

      <div
        style={{
          paddingBottom: "8rem",
          paddingRight: "4rem",
          paddingLeft: "4rem",
        }}
      >
        <Daftar />
      </div>
    </div>
  );
}

export default about;
