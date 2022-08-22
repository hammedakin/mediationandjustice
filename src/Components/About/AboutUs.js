import React from "react";
import cac from "../../assets/cac.jpg"

const AboutUs = () => {
  return (
    <>
      <section class="aboutus">
        <div class="">
          <div class="row justify-content-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <div class="col-md-6 text-center">
              <img
                src={cac}
                class="card-body "
                alt=""
                width="300px"
              />

            </div>
            <div class="col-md-6 text-sm-right text-justify aa">
              <div class="container ">
                <h4 class="text-center">MCHRC</h4>
                <p class="">
                  Mediation Conciliation and Human Rights Center (MCHRC) is incorporated in Ibadan, Nigeria with and  Registered with CAC, Registration Number 125096, It was registered on 21st February, 2019. Company's registered office address is No. 1, I.K Dairo Street, Behind Ola Sheu Petrol Station, Agodi Gate, Ibadan, Nigeria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
