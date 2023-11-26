import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid " style={{ padding: "70px" }}>
            <a className="navbar-brand" href="#">
              <img
                src="logo.svg"
                alt="Header Logo"
                style={{ zIndex: 1000 }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div>
              <ul className="navbar-nav gap-3">
                <li className="nav-item">
                  <a
                    className="nav-link active border-bottom border-white border-2"
                    aria-current="page"
                    href="#"
                    style={{ color: "black" }}
                  >
                    Beranda
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: "black" }}>
                    Tentang
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: "black" }}>
                    Galeri
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: "black" }}>
                    Artikel
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: "black" }}>
                    Kontak
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <button
                className="rounded px-4"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  color: "black",
                  border: "rgba(255, 255, 255, 0.4)",
                }}
              >
                PPDB
              </button>
            </div>
          </div>
        </nav>
        <div
          className=""
          style={{
            backgroundImage: "url('rafiki.png')",
            backgroundSize: "cover",
            backgroundPosition: "top",
            overflowY: "auto",
            height: "50vh",
          }}
        ></div>
      </>
    );
  }
}
