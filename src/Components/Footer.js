import { Link } from "react-router-dom";



const Footer = () => {
    return (
        <>
            <footer class="text-center text-lg-start bg-dark text-muted ">
                <section
                    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >
                    <div class="me-5 d-none d-lg-block light-text">
                        <span>Get connected with us on Whatsapp:</span>
                    </div>

                    <div>

                        <a href="" class="me-4 light-text">
                            <i class="bi bi-whatsapp h3"></i>
                        </a>
                    </div>
                </section>

                <section class="light-text">
                    <div class="container text-center text-md-start mt-5">
                        <div class="row mt-3">
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4 sec-bold-text">
                                    <i class="fas fa-gem me-3"></i> MCHRC
                                </h6>
                                <p>
                                    Mediation Conciliation and Human Rights Center seeks to enhance knowledge, advocate for observance of human rights, through instrumentality of law, education, enlightenment & humanification.
                                </p>
                            </div>

                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4 sec-bold-text">
                                    Useful links
                                </h6>
                                <p>
                                    <Link to="/" className="light-text">
                                        Home
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/about" className="light-text">
                                        About
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/contact" className="light-text">
                                        Contact
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/join-us" className="light-text">
                                        Join Us
                                    </Link>
                                </p>

                            </div>

                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 class="text-uppercase fw-bold mb-4 sec-bold-text">
                                    Contact
                                </h6>
                                <p>
                                    <i className='bi bi-geo h6 me-4' />
                                    No 1, I.K Dairo Street,Agodi Gate, Ibadan, Oyo State, Nigeria
                                    </p>
                                <p>
                                    <i className='bi bi-envelope h6 me-4' />
                                  mediationandjustice@gmail.com
                                </p>
                                <p> <i className='bi bi-telephone h6 me-4' />
                                    +2348070679494</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="text-center p-4 light-text" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    © 2022 Copyright:
                    <a class="fw-bold sec-bold-text" href="https://mediationandjustice.org/"> MCHRC</a>
                </div>
            </footer>

        </>
    );
}

export default Footer;