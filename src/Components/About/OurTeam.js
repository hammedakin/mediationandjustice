import React from "react";
import img from "./img/team.jpg";

const OurTeam = () => {
  return (
    <>
      <section class="ourteam text-center">
        <div class="container"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          <div class=" mb-5">
            <h4> OUR BOARD OF TRUSTEE</h4>
          </div>

          <div class="row">
            <div class="col-md-4 mb-4">
              <div class="card">
                <img src={img} width="50%" alt="" />

                <div class="py-3">
                  <h5> Badejoko Adeniji O. </h5>
                  <h6> Chairman </h6>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-4">
              <div class="card">
                <img src={img} width="50%" alt="" />

                <div class="py-3">
                  <h5> Akinyemi Kehinde A. </h5>
                  <h6> Chairman </h6>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-4">
              <div class="card">
                <img src={img} width="50%" alt="" />

                <div class="py-3">
                  <h5> Olagoke Sabit A. </h5>
                  <h6> Chairman </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
