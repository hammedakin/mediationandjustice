import React, { useState } from 'react';


const Showcase = () => {
    return (
        <>
            <section className="showcase light-text align-items-center d-flex">
                <div className="col-md-8 mx-auto border text-center first"
                    data-aos="zoom-out"
                    data-aos-duration="2000">
                    <div className=""
                        data-aos="zoom-in"
                        data-aos-duration="3000"
                        data-aos-delay="1000"

                    >

                        <h1 className='lh-base'> MEDIATION CONCILIATION AND HUMAN RIGHTS CENTER</h1>
                        <h5 className='fw-light'>
                            <i> equity and justice ...</i>
                        </h5>
                        <hr />
                        <p
                            data-aos="flip-up"
                            data-aos-duration="3000"
                            data-aos-delay="2000"
                        >
                            Mediation Conciliation and Human Rights Center (MCHRC) seeks to enhance knowledge, advocate for observance of human rights, and encourage exchange of information and experience for the betterment of the citizenry through instrumentality of law, education, enlightenment & humanification.
                        </p>
                    </div>
                </div>
            </section>

        </>

    );
}

export default Showcase;