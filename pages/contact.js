import React from "react";

function contact() {
  return (
    <div className="bg-white">
      <div class="d-flex justify-content-center">
        <div class="position-relative mt-5">
          <p
            style={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            className="text-center text-black fs-2 fw-bold"
          >
            Hubungi Kami
          </p>
          <img src="Contact/hero.svg" alt="" class="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default contact;
