import React from 'react';


const Contact = () => {
    return (
        <>


            <section class="contact pry-bold-text ">
                <div class="" id="contact">
                    <div className="text-center mb-5 "
                        data-aos="zoom-in"
                        data-aos-duration="2000"
                    >
                        <h3 class="h1-responsive text-center my-4 ">
                            CONTACT US
                        </h3>

                        <p class="text-center w-responsive mx-auto mb-5">
                            Do you have any questions? Please do not hesitate to contact us
                            directly. Our team will come back to you within 24 hours.
                        </p>
                    </div>

                    <div class="row justify-content-around py-5">

                        <div class="col-md-5 mb-4 "
                            data-aos="zoom-in"
                            data-aos-duration="2000"
                            data-aos-delay="700"
                        >
                            <div class=" h-100">
                                <div className="my-2">
                                    <h3 class="m-0 mb-3">
                                        <strong>Get in Touch</strong>
                                    </h3>
                                    <h6 className="m-0">
                                        Fill up the form and our Team will get back to you within 24 hours.
                                    </h6>
                                </div>


                                <div class="mt-3 row align-items-center h-100"
                                    data-aos="flip-left"
                                    data-aos-duration="3000"
                                    data-aos-delay="1500"
                                >
                                    <div className="">
                                        <div class="d-flex my-4 border-bottom border-start p-3 align-items-center border-2 border-success">
                                            <i className='bi bi-geo h6 me-4' />
                                            <h6 class=" ml-4"> No 1, I.K Dairo Street,Agodi Gate, Ibadan, Oyo State, Nigeria</h6>
                                        </div>

                                        <div class="d-flex my-4 border-bottom border-start p-3 align-items-center border-2 border-success">
                                            <i className='bi bi-telephone h6 me-4' />
                                            <h6>+2348070679494</h6>
                                        </div>

                                        <div class="d-flex my-4 border-bottom border-start p-3 align-items-center border-2 border-success">
                                            <i className='bi bi-envelope h6 me-4' />
                                            <h6>mediationandjustice@gmail.com</h6>
                                        </div>
                                    </div>

                                    <div className=" text-center mb-5">
                                        <i className='bi bi-whatsapp h3 me-4' />
                                        <i className='bi bi-facebook h3 me-4' />
                                        <i className='bi bi-twitter h3 me-4' />
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-md-5 mb-4 pry-bold py-5 br-md"
                            data-aos="zoom-in"
                            data-aos-duration="2000"
                            data-aos-delay="700">
                            <div class="h-100">
                                <div className="col-md-10 mx-auto"
                                    data-aos="flip-right"
                                    data-aos-duration="3000"
                                    data-aos-delay="1500"
                                >
                                    <form enctype="multipart/form-data">
                                        <div className="row justify-content-center text-left">
                                            <div className="col-md-12 ">
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        className=" input-style"
                                                        name="fname"
                                                        placeholder="Full Name *"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-12 ">
                                                <div className="input-group">
                                                    <input
                                                        type="email"
                                                        className=" input-style"
                                                        name="email"
                                                        placeholder="Email *"
                                                        required />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="input-group">
                                                    <textarea
                                                        type="text"
                                                        className="input-style textarea-style"
                                                        name="location"
                                                        placeholder="Detailed Address *"
                                                        rows="3"
                                                        required></textarea>
                                                </div>
                                            </div>

                                            <div class="col-md-12 mt-4 mx-auto text-center">
                                                <div class="mb-4 mr-auto text-center">
                                                    <button
                                                        type="button"
                                                        class="btn shadow-none w-100 light-bg pry-bold-text"
                                                        action="submit"
                                                    >
                                                        <h6 className='m-0'>
                                                            Submit
                                                        </h6>
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </section>

        </>

    );
}

export default Contact;