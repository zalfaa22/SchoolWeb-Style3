import React from "react";
import { Card2 } from "@/components/CardNews";
import "./css/style.css";

function article() {
  return (
    <div className="bg-white">
      <div>
          <img className="articlebubble1" src="News/bubble1.svg"></img>
          <img className="articlebubble2" src="News/bubble2.svg"></img>
          <img className="articlebubble3" src="News/bubble3.svg"></img>
        </div>
      <div class="d-flex justify-content-center">
        <div class="position-relative" style={{marginTop:"7rem"}}>
          <p
            style={{
              position: "absolute",
              top: "15%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            className="text-center text-black fs-1 fw-bold"
          >
            Artikel
          </p>
          <img src="News/hero.svg" alt="" class="img-fluid" />
        </div>
      </div>

      <div
        style={{
          paddingTop: "7rem",
          paddingBottom: "4rem",
          paddingRight: "4rem",
          paddingLeft: "4rem",
        }}
      >
        <div class="p-1 rounded-4 border border-2 border-info  row">
          <img class="rounded-4 col-xl-6 py-3 px-3" src="News/image.png" />
          <div class="col-xl-6 row justify-content-center">
            <div class="col-12 row d-flex">
              <p class="text-primary fs-6 fw-medium  col-12 m-0 px-3 pt-3">
                12 Desember 2021
              </p>
              <p class="text-dark fs-3 fw-bold  col-12 m-0 px-3 py-2">
                Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah
              </p>
              <p class="text-start text-dark fs-6 fw-normal  col-12 m-0 px-3 py-2">
                Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin
                kembali belajar di sekolah. Saya ingin bertemu dengan
                teman-teman sekelas saya. begitupun sebagian besar orang tua,
                mimpi mereka adalah melihat anaknya kembali ke aktivitas sekolah
                secara langsung. Orang tua selama ini banyak yang mengaku lelah
                karena anak-anaknya selama pandemi lebih banyak menghabiskan
                waktu di. . .{" "}
              </p>
              <p class="text-start text-dark fs-6 fw-normal  col-12 m-0 px-3 py-2">
                Penulis : Shinta A.P
              </p>
              <p class="text-primary fs-6 fw-semibold  col-12 m-0 px-3 py-2">
                Baca selengkapnya
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          paddingBottom: "6rem",
          paddingRight: "2rem",
          paddingLeft: "2rem",
        }}
      >
        <Card2 />
      </div>
    </div>
  );
}

export default article;
