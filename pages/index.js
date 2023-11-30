import React from "react";
import { Keunggulan1 } from "@/components/Keunggulan";
import { Card1 } from "@/components/CardNews";
import { Gallery1 } from "@/components/Gallery";
import Daftar from "@/components/Daftar";
import "./css/style.css";

function index() {
  return (
    <>
      <div className="bg-white">
        <div className="d-none d-md-block">
          <img className="homebubble1" src="Home/bubble1.svg"></img>
          <img className="homebubble2" src="Home/bubble2.svg"></img>
          <img className="homebubble3" src="Home/bubble3.svg"></img>
        </div>
        <section class="py-8 pb-5 bg-white" style={{paddingTop: "7rem"}}>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 mb-6 mb-lg-0 text-center text-md-start text-lg-start">
                <div class="text-black position-relative">
                  <h1 class="display-7  fs-1 fw-semibold mb-3" style={{ color: "#16215D" }}>
                    Tuntut Ilmu Untuk Masa Depan Yang Lebih Baik
                  </h1>
                  <p class="text-secondary fs-6 fw-normal pe-lg-10 mb-4">
                    jelajahi semua pengetahuan dan ilmu yang berguna bersama
                    kami, untuk kehidupan yang lebih bermanfaat
                  </p>
                  <a href="#" class="btn rounded-3 text-white fs-6 fw-medium" style={{ backgroundColor: "#619aef" }}>
                    Daftar Sekarang
                  </a>
                </div>
              </div>

              <div class="col-lg-6 d-flex justify-content-center">
                <div class="position-relative">
                  <img src="Home/rafiki.svg" alt="" class="img-fluid end-0" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div style={{ paddingTop: "4rem" }}>
        <Keunggulan1 />
        </div>

        <div
          style={{
            paddingTop: "3rem",
            paddingBottom: "7rem",
          }}
        >
          <div className="wrap mt-5">
            <h1 class="text-center fs-1 fw-bold " style={{ color: "#1C2661" }}>Artikel</h1>
            <p class="text-center fs-5 fw-normal mb-4" style={{ color: "#1C2661" }}>
              Artikel terbaru seputar pendidikan
            </p>
            <Card1 />
          </div>
        </div>

        <div
          style={{
            paddingBottom: "7rem"
          }}
        >
          <div className="position-relative mt-1">
            <div className="row">
              <div className="col-md-6">
                <h2 className="text-start fs-1 fw-bold ms-5" style={{ color: "#1C2661" }}>
                  Galeri
                </h2>
                <h1 className="col-5 col-md-12 col-lg-12 text-start fs-5 fw-normal ms-5 mb-4" style={{ color: "#1C2661" }}>
                  Dokumentasi Sekolah
                </h1>
              </div>
              <div className="col-5 d-flex align-items-center justify-content-end col-md-5 d-md-flex align-items-md-center justify-content-md-end  ms-lg-5">
                <a
                  href="#"
                  className="btn btn-info px-4 text-white" 
                  style={{ backgroundColor: "#619aef" }}
                >
                  Lihat Semua
                </a>
              </div>
            </div>
            <Gallery1 />
          </div>
        </div>
        <div className="px-5 pt-1" style={{paddingTop: "5rem", paddingBottom: "7rem",}}>
          <Daftar />
        </div>
      </div>
    </>
  );
}

export default index;
