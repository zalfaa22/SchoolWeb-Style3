import React from "react";

function Keunggulan() {
  return (
    <>
    <div className="py-5" style={{ backgroundImage: "url('gradient.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}> 
    <div className="text-center fs-3 text-white fw-bold pt-4">Keunggulan Sekolah Kami </div>
    <div class="container my-5" >
      <div class="row">
        <div class="col-md-4 col-12">
          {/* <!-- card --> */}
          <div class="card mb-4 mb-lg-0">
            {/* <!-- card body --> */}
            <div class="card-body p-4">
              <div class="mb-3 text-center">
                <img src="book.svg"/>
              </div>
              <h3 class="mb-3 fs-5 fw-bolder text-center">Kurikulum Terbaru</h3>
              <p class="mb-0 text-center px-2">
              Menerapkan kurikulum terbaru agar siswa mendapatakan materi terbaru 
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-12">
          {/* <!-- card --> */}
          <div class="card mb-4 mb-lg-0">
            {/* <!-- card body --> */}
            <div class="card-body p-4">
              <div class="mb-3 text-center">
                <img src="clock.svg"/>
              </div>
              <h3 class="mb-3 fs-5 fw-bolder text-center">Efektifitas Waktu Belajar</h3>
              <p class="mb-0 text-center">
              Waktu belajar yang dirancang agar para siswa tidak jenuh dan menerima pelajaran
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-12">
          {/* <!-- card --> */}
          <div class="card mb-4 mb-lg-0">
            {/* <!-- card body --> */}
            <div class="card-body p-4">
              <div class="mb-3 text-center">
                <img src="pen-tool.svg"/>
              </div>
              <h3 class="mb-3 fs-5 fw-bolder text-center">Penyaluran Bakat dan Minat</h3>
              <p class="mb-0 text-center">
              Berbagai macam kegitan akademik maupun non akademik untuk mendukung bakat minat 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container d-md-flex align-items-center py-10">
        <img class=" w-100 py-5  mb-4 mb-md-0 " src="rafiki.png" alt="" />
         <div class="fw-bold text-white ms-5 fs-3 text-start px-lg-5 mx-auto me-lg-5">Tentang kami
           <div class="fw-normal fs-6 pt-4 ">
             Sekolah Kami merupakan sekolah informal yang dikelola untuk membantu anak mengembangkan bakat dan kemampuannya. Dengan memberikan kurikulum terbaik agar anak bisa memilih minatnya dan fokus mengembangkan minat tersebut. Sekolah ini didirikan sejak tahun 1989 dan terus berkembang.
           </div>
         </div>
       </div></div>
    </>
  );
}

export default Keunggulan;
