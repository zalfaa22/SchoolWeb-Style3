import React from "react";
import Image from "next/image";
import "./css/D.css";

function Daftar() {
  return (
    <div class="px-4 py-1 gradient-container rounded-4">
      <div class="row align-items-center">
        <div class="col-lg-8">
          <p class="text-white fs-1 fw-bold font-family-Poppins m-0 px-3 py-2">
            Daftar Sekarang Juga !
          </p>
          <p class="text-white fs-5 fw-normal font-family-Poppins m-0 px-3 py-2">
            Jangan sampai melewatkan kesempatan untuk mendaftar, kami senantiasa
            menunggu kehadiran anak anda untuk segera belajar bersama kami.
          </p>
          <div className="ps-3 pt-2">
          <a href="#" class="btn bg-light m-0 px-3 py-2 text-primary">
            Daftar Sekarang
          </a></div>
        </div>
        <div class="col-lg-4">
          <img src="rafiki2.png" class="img-fluid py-4" alt="Rafiki Image" />
        </div>
      </div>
    </div>
  );
}

export default Daftar;
