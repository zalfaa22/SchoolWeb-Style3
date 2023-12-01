import React, { useState, useEffect } from "react";
import Image from "next/image";
import data from "../data/Gallery.json";
import "./css/D.css";

function Gallery1() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const homeData = data.filter((item) => item.display === "home");
    setJsonData(homeData);
  }, []);

  return (
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-1 px-5">
      {jsonData.map((item, index) => (
        <a key={index} href="#" class="group">
          <div class="col">
            <img src={item.image} class="card-img-top p-2" alt="..." />
          </div>
        </a>
      ))}
    </div>
  );
}

function Gallery2() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const homeData = data.filter((item) => item.display === "all");
    setJsonData(homeData);
  }, []);

  return (
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-1 px-4">
      {jsonData.map((item, index) => (
        <a key={index} href="#" class="group position-relative">
          <div class="col">
            <div class=""></div>
            <img src={item.image} class="card-img-top p-4" alt="..." />
            <p
              class=" translate-middle text-center text-white fw-semibold"
              style={{
                position: "absolute",
                bottom: "4%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {item.tittle}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}

export { Gallery1, Gallery2 };
