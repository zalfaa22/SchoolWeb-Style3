import React from "react";
import "./css/style.css";

function contact() {
  return (
    <div className="bg-white">
      <div>
        <img className="contactbubble1" src="Contact/bubble1.svg"></img>
        <img className="contactbubble2" src="Contact/bubble2.svg"></img>
        <img className="contactbubble3" src="Contact/bubble3.svg"></img>
      </div>
      <div class="d-flex justify-content-center">
        <div class="position-relative" style={{ marginTop: "8rem" }}>
          <p
            style={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#1C2661",
            }}
            className="text-center fs-1 fw-bold"
          >
            Hubungi Kami
          </p>
          <img src="Contact/hero.svg" alt="" class="img-fluid" />
        </div>
      </div>

      <div
        className="px-lg-5 px-md-5"
        style={{ paddingTop: "8rem", paddingBottom: "6rem" }}
      >
        <h1 className="text-center  fs-1 fw-bold " style={{ color: "#1C2661" }}>
          Kontak Kami
        </h1>
        <p
          className="sub-title text-center text-dark fw-normal pb-5 px-3"
          style={{ color: "#1C2661" }}
        >
          Untuk info lebih lanjut silahkan hubungi kami
        </p>
        <section className="py-3">
          <div className="container-xl">
            <div className="row gx-5">
              <div className="col-md-6">
                <div className="d-flex flex-column gap-5">
                  <div className="d-flex gap-3 align-items-center">
                    <div className="ph px-1 py-3 rounded-circle border border-2 d-flex justify-content-center align-items-center">
                      <img
                        src="Contact/phone.svg"
                        alt="Phone"
                        className="w-50"
                      />
                    </div>
                    <div
                      className="d-flex flex-column"
                      style={{ color: "#3A3B41" }}
                    >
                      <p className="fs-lg-5 fs-md-5 fw-bold mb-2">
                        (+62) 812 698 15172
                      </p>
                      <p className="fs-lg-5 fs-md-5 fw-bold mb-0">
                        (0341) 545 987
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-3 align-items-center">
                    <div className="em px-1 py-3  rounded-circle border border-2 d-flex justify-content-center align-items-center">
                      <img
                        src="Contact/email.svg"
                        alt="Email"
                        className="w-50"
                      />
                    </div>
                    <div
                      className="d-flex flex-column"
                      style={{ color: "#3A3B41" }}
                    >
                      <p className="fs-lg-5 fs-md-5 fw-bold mb-2">
                        contact@sekolahanak.Com
                      </p>
                      <p className="fs-lg-5 fs-md-5 fw-bold mb-0">
                        info@sekolah.anak.com
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-3 align-items-center">
                    <div className="loc px-1 py-3  rounded-circle border border-2 d-flex justify-content-center align-items-center">
                      <img
                        src="Contact/location.svg"
                        alt="Location"
                        className="w-50"
                      />
                    </div>
                    <div
                      className="d-flex flex-column"
                      style={{ color: "#3A3B41" }}
                    >
                      <p className="fs-lg-5 fs-md-5 fw-bold mb-2">
                        Jl. Soekarno Hatta J-12
                      </p>
                      <p className="fs-lg-5 fs-md-5 fw-bold mb-0">Malang</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pt-5 pt-md-0 pt-lg-0">
                <form className="d-flex flex-column gap-4">
                  <label className="form-label">
                    <input
                      type="text"
                      placeholder="Nama Anda*"
                      className="form-control border-2"
                      style={{ borderColor: "#54BAEB" }}
                    />
                  </label>
                  <label className="form-label">
                    <input
                      type="text"
                      placeholder="Email Anda*"
                      className="form-control border-2"
                      style={{ borderColor: "#54BAEB" }}
                    />
                  </label>
                  <label className="form-label">
                    <input
                      type="text"
                      placeholder="Nomor Telepon*"
                      className="form-control border-2"
                      style={{ borderColor: "#54BAEB" }}
                    />
                  </label>
                  <label className="form-label">
                    <textarea
                      rows="3"
                      placeholder="Pesan Anda*"
                      className="form-control border-2"
                      style={{ borderColor: "#54BAEB" }}
                    ></textarea>
                  </label>
                  <button
                    type="button"
                    className="btn text-white"
                    style={{ backgroundColor: "#619AEF" }}
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default contact;
