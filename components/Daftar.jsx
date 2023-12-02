import React from "react";
import Image from "next/image";
import "./css/style.css";

function Daftar() {
  return (
    <div class="px-4 py-1 gradient-container rounded-4">
      <div class="row align-items-center">
        <div class="col-lg-8 py-4 py-lg-0">
          <p class="text-center text-md-start text-lg-start text-white fs-4 fs-md-1 fs-lg-1 fw-bold  m-0 px-2 px-md-3 px-lg-3 py-2">
            Daftar Sekarang Juga !
          </p>
          <p class="text-center text-md-start text-lg-start text-white fs-6 fs-md-5 fs-lg-5 fw-normal  m-0 px-3 py-2">
            Jangan sampai melewatkan kesempatan untuk mendaftar, kami senantiasa
            menunggu kehadiran anak anda untuk segera belajar bersama kami.
          </p>
          <div className="text-center text-md-start text-lg-start ps-md-3 ps-lg-3 pt-2">
            <a href="#" class="btn bg-light m-0 px-auto py-2 text-primary">
              Daftar Sekarang
            </a>
          </div>
        </div>
        <div class="col-lg-4 text-center">
          <img src="daftar.svg" class="img-fluid py-4" alt="Rafiki Image" />
        </div>
      </div>
    </div>
  );
}

export default Daftar;
