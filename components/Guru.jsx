import React, { useState, useEffect } from "react";
import data from "../data/Guru.json";

function Guru() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 px-5">
      {jsonData.map((item, index) => (
        <a key={index} href="#" class="group">
          <div class="col">
            <div class="card rounded-4 border-info">
              <img src={item.image} class="card-img-top px-3 pt-3" alt="..." />
              <div class="card-body px-4">
                <h5 class="card-title fw-bold text-center">{item.name}</h5>
                <p class="card-text text-center">{item.position}</p>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Guru;
