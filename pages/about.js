import React, { useState } from "react";
import Image from "next/image";
import { Keunggulan2 } from "@/components/Keunggulan";
import Guru from "@/components/Guru";
import Daftar from "@/components/Daftar";
import "./css/style.css";

function About() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


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
          <h1 className="title text-center fs-1 fw-bold" style={{color: "#1C2661"}}>Video Profil</h1>
          <p className="sub-title text-center fw-normal" >
            Berikut adalah video profil dari sekolah kami
          </p>
          <div class="ratio ratio-16x9">
            <img src="About/video.svg" onClick={openModal}
              style={{ cursor: "pointer" }}></img>
              {isModalOpen && (
                <div className="">
            <iframe
              className="rounded-4 ratio ratio-16x9"
              src="https://www.youtube.com/embed/NJq5eLYDmkE?si=Zaz98u8jyDQhha69"
              title="students writing in class"
              allowfullscreen
              style={{ width: "100%", height: "100%" }}
            ></iframe>
            <button
      className="btn-close text-black text-5xl position-absolute top-2 end-2 m-1 -pb-5"
      onClick={closeModal}
      aria-label="Close"
    ></button>
            {/* <button
  className="btn-close text-black text-5xl position-absolute "
  onClick={closeModal}
  aria-label="Close"
></button> */}
            </div>
            )}
          </div>
        </div>
      </div>

      <div style={{ paddingTop: "8rem" }}>
        <Keunggulan2 />
      </div>

      <div
        style={{
          paddingTop: "6rem",
          paddingBottom: "8rem"
        }}
      >
        <div className="">
          {/* <div className="row">
            <div className="col-md-6">
              <p className="text-start text-dark fs-1 fw-bold ms-5">
                Guru & Staff
              </p>
              <p className="text-start text-dark fs-5 fw-normal ms-5">
                Daftar Anggota Guru dan Staff Sekolah Ini
              </p>
            </div>
            <div className="col-md-5 d-md-flex align-items-md-center justify-content-md-end ms-5 mb-4 mb-md-0 mb-lg-0">
              <a
                href="#"
                className="btn btn-info px-4 text-white"
                style={{ backgroundColor: "#619aef" }}
              >
                Lihat Semua
              </a>
            </div>
          </div> */}

<div class="galeri pb-4">
          <h2 class="title text-start fs-1 fw-bold ">Guru & Staff</h2>
          <div class="d-flex justify-content-between align-items-center">
            <h1 class="sub-title text-start fw-normal lh-base">Daftar Anggota Guru dan Staff Sekolah Ini</h1>
            <div class="d-flex align-items-center">
              <a href="/galery">
                <div
                  class="btn rounded-lg px-auto"
                  style={{ backgroundColor: "#619aef" }}
                >
                  <div class="seeall text-white text-end">
                    Lihat Semua{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
          <Guru />
        </div>

{/* <div className="position-relative mt-1">
  <div className="row">
    <div className="col-md-6 col-2">
      <div className="d-flex flex-column">
        <h2 className="text-start fs-1 fw-bold ms-5" style={{ color: "#1C2661" }}>
        Guru & Staff
        </h2>
        <h1 className="col-12 text-start fs-6 fw-normal ms-5 mb-4" style={{ color: "#1C2661" }}>
        Daftar Anggota Guru dan Staff Sekolah Ini
        </h1>
      </div>
    </div>
    <div className="col-md-6 col-10 px-5 d-flex align-items-center justify-content-end">
      <a
        href="#"
        className="btn btn-info fs-6 px-auto me-2 text-end text-white"
        style={{ backgroundColor: "#619aef" }}
      >
        Lihat Semua
      </a>
    </div>
  </div>
  <Guru/>
</div> */}

      </div>

      <div className="px-5"
        style={{
          paddingBottom: "8rem"
        }}
      >
        <Daftar />
      </div>
    </div>
  );
}

export default About;
