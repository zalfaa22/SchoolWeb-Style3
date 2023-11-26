import React from "react";
import Keunggulan from "@/components/Keunggulan";
import Card from "@/components/Card";
import Gallery from "@/components/Gallery";
import Daftar from "@/components/Daftar";

function index() {
  return (
    <>
      <div className="bg-white">
        <section class="py-lg-16 py-8 pb-5 bg-white">
          {/* <!-- container --> */}
          <div class="container">
            {/* <!-- row --> */}
            <div class="row align-items-center">
              {/* <!-- col --> */}
              <div class="col-lg-6 mb-6 mb-lg-0">
                <div class="">
                  {/* <!-- heading --> */}
                  {/* <h5 class="text-dark mb-4"><i class="fe fe-check icon-xxs icon-shape bg-light-success text-success rounded-circle me-2"></i>Most
                         trusted education platform</h5> */}
                  {/* <!-- heading --> */}
                  <h1 class="display-7 fw-bold mb-3">
                    Tuntut Ilmu Untuk Masa Depan Yang Lebih Baik
                  </h1>
                  {/* <!-- para --> */}
                  <p class="pe-lg-10 mb-5">
                    jelajahi semua pengetahuan dan ilmu yang berguna bersama
                    kami, untuk kehidupan yang lebih bermanfaat
                  </p>
                  {/* <!-- btn --> */}
                  <a href="#" class="btn btn-primary">
                    Daftar Sekarang
                  </a>
                </div>
              </div>

              {/* <!-- col --> */}
              <div class="col-lg-6 d-flex justify-content-center">
                {/* <!-- images --> */}
                <div class="position-relative">
                  <img
                    src="home/background.png"
                    alt=""
                    class="img-fluid end-0"
                  />
                  {/* <img src="../assets/images/background/acedamy-img/girl-image.png" alt="" class=" position-absolute end-0 bottom-0"/>
                     <img src="../assets/images/background/acedamy-img/frame-1.svg" alt="" class=" position-absolute top-0 ms-lg-n10 ms-n19"/>
                     <img src="../assets/images/background/acedamy-img/frame-2.svg" alt="" class=" position-absolute bottom-0 start-0 ms-lg-n14 ms-n6 mb-n7"/>
                     
                     <img src="../assets/images/background/acedamy-img/sound.svg" alt="" class=" position-absolute top-0  start-0 mt-18 ms-lg-n19 ms-n8"/>
                     <img src="../assets/images/background/acedamy-img/trophy.svg" alt="" class=" position-absolute top-0  start-0 ms-lg-n14 ms-n5"/> */}
                  {/* <img src="home/ellipse.png" alt="" class=" position-absolute b-0 mb-10 ms-n10 ms-lg-n1 "/> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Keunggulan />

        <div className="wrap mt-5">
          <p class="text-center text-dark fs-1 fw-bold ">Artikel</p>
          <p class="text-center text-dark fs-5 fw-normal ">
            Artikel terbaru seputar pendidikan
          </p>
          <Card />
        </div>

        <div className=" mt-5">
          <div className="row">
            <div className="col-md-6">
              <p className="text-start text-dark fs-1 fw-bold ms-5">Galeri</p>
              <p className="text-start text-dark fs-5 fw-normal ms-5">
                Dokumentasi Sekolah
              </p>
            </div>
            <div className="col-md-5 d-md-flex align-items-md-center justify-content-md-end ms-5">
              <a href="#" className="btn btn-info px-4">
                PPDB
              </a>
            </div>
          </div>
          <Gallery />
        </div>
        <div className="px-5 py-5">
          <Daftar />
        </div>
      </div>
    </>
  );
}

export default index;
