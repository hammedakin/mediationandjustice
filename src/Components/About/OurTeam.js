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

          <div class="row justify-content-center">
            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <img src={img} width="50%" alt="" />

                <div class="py-3">
                  <h5> Hon. Justice Badejoko Adeniji </h5>
                  <small> Emeritus Chief Judge of Oyo State </small>
                  <h6> Chairman, BOT </h6>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <img src={img} width="50%" alt="" />

                <div class="py-3">
                  <h5> Comrade Kehinde Akinyemi JP </h5>
                  <h6> Founder/ CEO </h6>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <img src={img} width="50%" alt="" />

                <div class="py-3">
                  <h5> Prof Olagoke Sabit </h5>
                  <h6> Member, BOT </h6>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-4">
              <div class="card h-100">
                <img src={img} width="50%" alt="" />

                <div class="py-3">
                  <h5> Hamidat Akinyemi </h5>
                  <h6> Secretary </h6>
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
