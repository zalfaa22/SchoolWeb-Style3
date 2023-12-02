import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useRouter } from "next/router";

function AppNavbar() {
  const [scrolling, setScrolling] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      className={`py-3 ${scrolling ? "bg-white" : "bg-transparent"}`}
      expand="lg"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#">
          <img
            src="logo.svg"
            height="40"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto bg-white text-center">
            <Nav.Link
              className={`mx-2 text-dark ${
                router.pathname === "/" ? "fw-bold" : "fw-normal"
              }`}
              href="/"
            >
              Beranda
            </Nav.Link>
            <Nav.Link
              className={`mx-2 text-dark ${
                router.pathname === "/about" ? "fw-bold" : "fw-normal"
              }`}
              href="/about"
            >
              Tentang
            </Nav.Link>
            <Nav.Link
              className={`mx-2 text-dark ${
                router.pathname === "/gallery" ? "fw-bold" : "fw-normal"
              }`}
              href="/gallery"
            >
              Galeri
            </Nav.Link>
            <Nav.Link
              className={`mx-2 text-dark ${
                router.pathname === "/article" ? "fw-bold" : "fw-normal"
              }`}
              href="/article"
            >
              Artikel
            </Nav.Link>
            <Nav.Link
              className={`mx-2 text-dark ${
                router.pathname === "/contact" ? "fw-bold" : "fw-normal"
              }`}
              href="/contact"
            >
              Kontak
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              href="#"
              className="btn rounded-3 btn-info px-4 text-white"
              style={{ backgroundColor: "#619aef" }}
            >
              PPDB
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
