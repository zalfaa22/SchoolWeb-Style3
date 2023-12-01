import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <Nav.Link className={`mx-2 text-dark ${router.pathname === '/' ? 'fw-bold' : 'fw-normal'}`} href="/">Beranda</Nav.Link>
            <Nav.Link className={`mx-2 text-dark ${router.pathname === '/about' ? 'fw-bold' : 'fw-normal'}`} href="/about">Tentang</Nav.Link>
            <Nav.Link className={`mx-2 text-dark ${router.pathname === '/gallery' ? 'fw-bold' : 'fw-normal'}`} href="/gallery">Galeri</Nav.Link>
            <Nav.Link className={`mx-2 text-dark ${router.pathname === '/article' ? 'fw-bold' : 'fw-normal'}`} href="/article">Artikel</Nav.Link>
            <Nav.Link className={`mx-2 text-dark ${router.pathname === '/contact' ? 'fw-bold' : 'fw-normal'}`} href="/contact">Kontak</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#" className="btn rounded-3 btn-info px-4 text-white" style={{ backgroundColor: "#619aef" }}>
              PPDB
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;





// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Navbar() {
//   return (
//     <header>
//       <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
//         <div className="container my-2">
//           <a className="navbar-brand" href="#">
//             <img src="logo.svg" alt="logo" />
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
//               <li className="nav-item mx-3">
//                 <Link href="/" className="nav-link">Beranda</Link>
//               </li>
//               <li className="nav-item mx-3">
//                 <Link href="/about" className="nav-link">Tentang</Link>
//               </li>
//               <li className="nav-item mx-3">
//                 <Link href="/gallery" className="nav-link">Galeri</Link>
//               </li>
//               <li className="nav-item mx-3">
//                 <Link href="/article" className="nav-link">Artikel</Link>
//               </li>
//               <li className="nav-item mx-3">
//                 <Link href="/contact" className="nav-link">Kontak</Link>
//               </li>
//             </ul>
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <a
//                   href="#"
//                   className="btn rounded-3 btn-info px-4 text-white"
//                   style={{ backgroundColor: "#619aef" }}
//                 >
//                   PPDB
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;
