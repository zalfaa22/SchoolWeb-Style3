import React from "react";
import Image from "next/image";
import Link from "next/link";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar() {
  return (
    <>
      {/* <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container my-2">
            <a className="navbar-brand" href="#">
              <img src="logo.svg" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i data-feather="menu"></i>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
                <li className="nav-item mx-3">
                  <Link className="nav-link" href="/">
                    Beranda
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link" href="/about">
                    Tentang
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link" href="/gallery">
                    Galeri
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link" href="/article">
                    Artikel
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link" href="/contact">
                    Kontak
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    href="#"
                    className="btn rounded-3 btn-info px-4 text-white"
                    style={{ backgroundColor: "#619aef" }}
                  >
                    PPDB
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header> */}


<header>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top" >
        <div className="container my-2">
          <a className="navbar-brand" href="#">
            <img src="logo.svg" alt="logo" />
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
            <i data-feather="menu"></i>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
              <li className="nav-item mx-3">
                <Link href="/"className="nav-link">Beranda
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link href="/about"className="nav-link">Tentang
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link href="/gallery"className="nav-link">Galeri
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link href="/article"className="nav-link">Artikel
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link href="/contact"className="nav-link">Kontak
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  href="#"
                  className="btn rounded-3 btn-info px-4 text-white"
                  style={{ backgroundColor: "#619aef" }}
                >
                  PPDB
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </>
  );
}

export default Navbar;
