import React, { useState, useEffect } from "react";
import Image from "next/image";
import data from "../data/Gallery.json"

function Gallery() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        const homeData = data.filter(
          (item) => item.display === "home"
        );
        setJsonData(homeData);
      }, []);

  return (
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-1 px-4">
        {jsonData.map((item, index) => (
          <a key={index} href="#" class="group">
     <div class="col">
         <Image src={item.image} class="card-img-top p-4" alt="..."/>
     </div></a> ))}
     </div>
  )
}

export default Gallery