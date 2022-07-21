import React from 'react';
import logo from '../../assets/logo-r.png'

const AboutShowcase = () => {
  return (
    <>
      <section class="aboutshowcase">
        <div class="container ">
            <div class="row align-items-center">
              <div class="col-md-6 animated">
              <div class="text-center mb-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                  <h1 class=""> ABOUT US</h1>
                  <div class="">
                    {/* <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed et tempora
                    </p> */}

                  </div>
                </div>
              </div>

              <div class="col-md-5 text-center"
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-delay="700"
              >
                <img src={logo} alt="logo" width={"50%"} className='?' />
              </div>
          </div>
        </div>
      </section>


    </>
  );
}

export default AboutShowcase;