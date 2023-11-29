import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer class="pt-lg-10 pt-5 footer bg-light">
      <div class="container">
        <div class="row text-black">
          <div class="col-lg-4 col-md-6 col-12">
            <div class="mb-4">
              <img src="logo.svg" alt="" class="logo-inverse " />
              <div class="mt-4">
                <p>
                  Jelajahi semua pengetahuan dan ilmu yang berguna bersama kami,
                  untuk kehidupan yang lebih bermanfaat
                </p>
              </div>
            </div>
          </div>
          <div class="offset-lg-1 col-lg-2 col-md-2 col-3">
            <div class="mb-5">
              <h3 class="fs-lg-5 fs-md-5 fs-6 fw-bold mb-3">Informasi</h3>
              <p>
                <a href="#" class="nav-link">
                  Artikel
                </a>
              </p>
              <p>
                <a href="#" class="nav-link">
                  Galeri
                </a>
              </p>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-3">
            <div class="mb-5">
              <h3 class="fs-lg-5 fs-md-5 fs-6 fw-bold mb-3">Tentang</h3>
              <p>
                <a href="#" class="nav-link">
                  Tentang Kami{" "}
                </a>
              </p>
              <p>
                <a href="#" class="nav-link">
                  Hubungi Kami
                </a>
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-2 col-4">
            <div class="mb-4">
              <h3 class="fs-lg-5 fs-md-5 fs-6 fw-bold mb-3">Ikuti Kami</h3>
              <p class="d-flex flex-row align-items-center"> <img src="facebook.svg" alt="Small Image" class="me-2" />namasekolah</p>
              <p class="d-flex flex-row align-items-center"> <img src="twitter.svg" alt="Small Image" class="me-2" />namasekolah</p>
              <p class="d-flex flex-row align-items-center"> <img src="instagram.svg" alt="Small Image" class="me-2" />namasekolah</p>
            </div>
          </div>
        </div>
        <div class="row align-items-center g-0 border-top py-2 mt-6">
          <div class="p-3 text-center">
            <span>Copyright © 2021. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
