import React, { useState, useEffect } from "react";
import Image from "next/image";
import data from "../data/News.json"

function Card() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        const homeData = data.filter(
          (item) => item.display === "home"
        );
        setJsonData(homeData);
      }, []);

  return (
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 px-5">
        {jsonData.map((item, index) => (
          <a key={index} href="#" class="group">
     <div class="col">
       <div class="card border-info">
         <Image src={item.image} class="card-img-top p-4" alt="..."/>
         <div class="card-body px-4">
            <p className="fw-normal text-info">{item.date}</p>
           <h5 class="card-title fw-bold">{item.tittle}</h5>
           <p class="card-text">{item.description}</p>
           <p className="fw-semibold text-primary">Baca selengkapnya</p>
         </div>
       </div>
     </div></a> ))}
     </div>
  )
}

export default Card