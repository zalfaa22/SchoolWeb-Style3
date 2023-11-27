import React from "react";
import { Keunggulan1 } from "@/components/Keunggulan";
import { Card1 } from "@/components/CardNews";
import { Gallery1 } from "@/components/Gallery";
import Daftar from "@/components/Daftar";

function index() {
  return (
    <>
      <div className="bg-white">
        <section class="py-lg-16 py-8 pb-5 bg-white">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 mb-6 mb-lg-0">
                <div class="text-black">
                  <h1 class="display-7 fw-bold mb-3">
                    Tuntut Ilmu Untuk Masa Depan Yang Lebih Baik
                  </h1>
                  <p class="pe-lg-10 mb-5">
                    jelajahi semua pengetahuan dan ilmu yang berguna bersama
                    kami, untuk kehidupan yang lebih bermanfaat
                  </p>
                  <a href="#" class="btn btn-primary">
                    Daftar Sekarang
                  </a>
                </div>
              </div>

              <div class="col-lg-6 d-flex justify-content-center">
                <div class="position-relative">
                  <img src="Home/hero.svg" alt="" class="img-fluid end-0" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Keunggulan1 />

        <div
          style={{
            paddingTop: "5rem",
            paddingBottom: "7rem",
            paddingRight: "2rem",
            paddingLeft: "2rem",
          }}
        >
          <div className="wrap mt-5">
            <p class="text-center text-black fs-1 fw-bold ">Artikel</p>
            <p class="text-center text-black fs-5 fw-normal ">
              Artikel terbaru seputar pendidikan
            </p>
            <Card1 />
          </div>
        </div>

        <div
          style={{
            paddingBottom: "7rem",
            paddingRight: "2rem",
            paddingLeft: "2rem",
          }}
        >
          <div className=" mt-5">
            <div className="row">
              <div className="col-md-6">
                <p className="text-start text-black fs-1 fw-bold ms-5">
                  Galeri
                </p>
                <p className="text-start text-black fs-5 fw-normal ms-5">
                  Dokumentasi Sekolah
                </p>
              </div>
              <div className="col-md-5 d-md-flex align-items-md-center justify-content-md-end ms-5">
                <a
                  href="#"
                  className="btn btn-info px-4"
                  style={{ backgroundColor: "#619aef" }}
                >
                  Lihat Semua
                </a>
              </div>
            </div>
            <Gallery1 />
          </div>
        </div>
        <div className="px-5 py-5">
          <Daftar />
        </div>
      </div>
    </>
  );
}

export default index;
