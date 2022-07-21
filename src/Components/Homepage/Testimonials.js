



import React, { useRef, useState, useEffect } from "react";
import Glide, { Slide } from "react-glidejs";
import { Spinner } from "reactstrap";
import "react-glidejs/dist/index.css";

const Testimonials = () => {
    // Glide
    const gliderRef = useRef(null);
    // Glide


    const testimonial = [
        { name: "Akin", message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, voluptas"},
        { name: "Akin", message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, voluptas"},
        { name: "Akin", message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, voluptas"},
        { name: "Akin", message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, voluptas"},
]


    const allproducts = testimonial.map((item, i) => {
        const { name, message } = item;
        return (
            <div className="col-md-12 first mb-3" key={i}>
                <div className="card h-100 text-center  ">
                   <p className="p-4">
                    {message}
                   </p>
                   <h5 className="mt-2 mb-4">
                    {name}
                   </h5>
                </div>
            </div>
        );
    });
    // Fetch Products



    return (
        <>
            <section className="testimonials">
                <div className="container-fluid">
                    <div className="container-fluid mb-4">
                        <div className="flex row align-items-center">
                            {/* <hr className="small dark" />{" "} */}
                            <div className="text-center mb-5 pry-bold-text"
                                data-aos="fade-up"
                                data-aos-duration="1000">
                                <h3 class="h1-responsive text-center my-4 ">
                                   TESTIMONIALS
                                </h3>
                            </div>
                        </div>
                    </div>

                    <Glide
                        ref={gliderRef}
                        startAt={0}
                        perView={3}
                        type="carousel"
                        hoverPause="true"
                        gap={20}
                        autoplay={3000}
                        animationDuration={2000}
                        animationTimingFunc="ease"
                        slideClassName="slider__frame"
                        breakpoints={{
                            1000: {
                                perView: 2,
                            },
                            768: {
                                perView: 1,
                            },
                        }}
                    >
                        {allproducts}
                    </Glide>


            </div>
        </section>
        </>
    );
};

export default Testimonials;
