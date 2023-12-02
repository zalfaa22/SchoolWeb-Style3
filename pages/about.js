import React, { useState } from 'react';
import Image from "next/image";
import { Keunggulan2 } from "@/components/Keunggulan";
import Guru from "@/components/Guru";
import Daftar from "@/components/Daftar";
import "./css/style.css";

function about() {
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
          <Image className="aboutbubble1" src="About/bubble1.svg"/>
          <Image className="aboutbubble2" src="About/bubble2.svg"/>
          <Image className="aboutbubble3" src="About/bubble3.svg"/>
        </div>
      <div class=" d-flex justify-content-center">
        <div class="position-relative " style={{marginTop: "6rem"}}>
          <Image src="About/hero.svg" alt="" class="img-fluid " />
        </div>
      </div>

      <div style={{ paddingTop: "4rem" }}>
        <div
          className="wrap mt-5"
          style={{ maxWidth: "80%", margin: "0 auto" }}
        >
          <h1 className="text-center fs-1 fw-bold" style={{color: "#1C2661"}}>Video Profil</h1>
          <p className="text-center fs-5 fw-normal" style={{color: "#1C2661"}}>
            Berikut adalah video profil dari sekolah kami
          </p>
          <div class="ratio ratio-16x9">
            <Image src="About/video.svg" onClick={openModal}
              style={{ cursor: "pointer" }}/>
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
          <div className="row">
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

export default about;
