import React from "react";
import Link from "next/link";
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
        <section class="py-8 pb-5 bg-white" style={{ paddingTop: "7rem" }}>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 mb-6 mb-lg-0 text-center text-md-start text-lg-start">
                <div class="text-black position-relative mb-4 mb-md-0 mb-lg-0">
                  <h1
                    class="display-7  fs-1 fw-semibold mb-3"
                    style={{ color: "#16215D" }}
                  >
                    Tuntut Ilmu Untuk Masa Depan Yang Lebih Baik
                  </h1>
                  <p class="text-secondary fs-6 fw-normal pe-lg-10 mb-4">
                    jelajahi semua pengetahuan dan ilmu yang berguna bersama
                    kami, untuk kehidupan yang lebih bermanfaat
                  </p>
                  <Link
                    href="#"
                    class="btn rounded-3 text-white fs-6 fw-medium hover-opacity"
                    style={{ backgroundColor: "#619aef" }}
                  >
                    Daftar Sekarang
                  </Link>
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
            <h1 class="text-center fs-1 fw-bold " style={{ color: "#1C2661" }}>
              Artikel
            </h1>
            <p
              class="text-center fs-5 fw-normal mb-4"
              style={{ color: "#1C2661" }}
            >
              Artikel terbaru seputar pendidikan
            </p>
            <Card1 />
          </div>
        </div>

        <div
          style={{
            paddingBottom: "7rem",
          }}
        >
          <div className="position-relative">
            <div class="galeri pb-4">
              <h2 class="title text-start fs-1 fw-bold ">Galeri</h2>
              <div class="d-flex justify-content-between align-items-center">
                <h1 class="sub-title text-start fw-normal lh-base">
                  Dokumentasi Sekolah
                </h1>
                <div class="d-flex align-items-center">
                  <Link href="/gallery">
                    <div
                      class="btn rounded-lg px-auto hover-opacity"
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
                  </Link>
                </div>
              </div>
            </div>
            <Gallery1 />
          </div>
        </div>
        <div
          className="px-5 pt-1"
          style={{ paddingTop: "5rem", paddingBottom: "7rem" }}
        >
          <Daftar />
        </div>
      </div>
    </>
  );
}

export default index;
