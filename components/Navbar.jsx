import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <header>
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
      </header>
    </>
  );
}

export default Navbar;
