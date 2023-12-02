import React, { useState, useEffect } from "react";
import Image from "next/image";
import data from "../data/News.json";
import "./css/style.css";

function Card1() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const homeData = data.filter((item) => item.display === "home");
    setJsonData(homeData);
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-5">
      {jsonData.map((item, index) => (
        <a key={index} href="#" className="group">
          <div className="col">
            <div className="card rounded-4 border-2 border-info">
              <img src={item.image} className="card-img-top px-4 pt-4" alt="..." />
              <div className="card-body px-4">
                <h1 className="date fw-normal" >{item.date}</h1>
                <h5 className="card-title fw-bold lh-base tittle-limit" >{item.tittle}</h5>
                <p className="card-text text-start fw-normal" >{item.description}</p>
                <a href="#" className="more fw-semibold text-primary" >
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
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-4">
      {jsonData.map((item, index) => (
        <a key={index} href="#" className="group">
          <div className="col">
            <div className="card rounded-4 border-2 border-info">
              <img src={item.image} className="card-img-top px-4 pt-4" alt="..." />
              <div className="card-body px-4">
              <h1 className="date fw-normal" >{item.date}</h1>
                <h5 className="card-title fw-bold lh-base tittle-limit" >{item.tittle}</h5>
                <p className="card-text text-start fw-normal" >{item.description}</p>
                <a href="#" className="more fw-semibold text-primary" >
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
