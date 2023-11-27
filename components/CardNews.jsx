import React, { useState, useEffect } from "react";
import Image from "next/image";
import data from "../data/News.json";
import "./css/D.css";

function Card1() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const homeData = data.filter((item) => item.display === "home");
    setJsonData(homeData);
  }, []);

  return (
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-5">
      {jsonData.map((item, index) => (
        <a key={index} href="#" class="group">
          <div class="col">
            <div class="card rounded-4 border-2 border-info">
              <img src={item.image} class="card-img-top px-4 pt-4" alt="..." />
              <div class="card-body px-4">
                <p className="fw-normal text-info">{item.date}</p>
                <h5 class="card-title fw-bold tittle-limit">{item.tittle}</h5>
                <p class="card-text">{item.description}</p>
                <a href="#" className="fw-semibold text-primary">
                  Baca selengkapnya
                </a>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

function Card2() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const homeData = data.filter((item) => item.display === "all");
    setJsonData(homeData);
  }, []);

  return (
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-4">
      {jsonData.map((item, index) => (
        <a key={index} href="#" class="group">
          <div class="col">
            <div class="card rounded-4 border-2 border-info">
              <img src={item.image} class="card-img-top px-4 pt-4" alt="..." />
              <div class="card-body px-4">
                <p className="fw-normal text-info">{item.date}</p>
                <h5 class="card-title fw-bold tittle-limit">{item.tittle}</h5>
                <p class="card-text">{item.description}</p>
                <a href="#" className="fw-semibold text-primary text-limit-4">
                  Baca selengkapnya
                </a>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export { Card1, Card2 };