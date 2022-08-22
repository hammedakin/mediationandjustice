
const CoreValues = () => {

    const aims = [
        {
            content: "To promote equity, justice and peaceful co-existence among Nigeria Citizen.",
        },
        {
            content: "To take the leading role in the development of innovative community based projects for affected children, families and communities.",
        },
        {
            content: "To contribute to the development of our immediate environment and Nigeria at large.",
        },
        {
            content: "To encourage the spirit of cooperation amongst members for the well being of the center",
        },
        {
            content: "To co-operate with other relevant bodies within and abroad that have similar aims and objectives and that will be of benefit to the center.",
        },
    ]


    return (
        <>
            <section className="core-values">
                <div className="text-center mb-5 pry-bold-text"
                    data-aos="fade-up"
                // data-aos-duration="500"
                >
                    <h3 class="h1-responsive text-center my-4 ">
                        OUR AIMS AND OBJECTIVES
                    </h3>

                    <p class="text-center w-responsive mx-auto mb-5">
                        MCHRC is a humanitarian organization with a primary focus of targeting the most vulnerable groups — especially women, the elderly and children. All our activities aim to maintain and/or restore human wellbeing and dignity.
                    </p>
                </div>

                <div className="row justify-content-center">
                    {
                        aims.map(({ content }, i) =>
                            <div className="col-md-6 mb-4 col-lg-4"
                                data-aos="fade-up"
                                data-aos-duration="500"
                                key={i}
                            >
                                <div className="card shadow h-100 first py-4 px-3 br-md ">
                                    <div className="mb-3">
                                        <i className="bi bx bi-person-circle bx-sm sec p-2 br-lg pry-bold-text"></i>
                                    </div>
                                    {/* <h5 className=" my-4">
                                Humanity and Human Rights Alertness
                            </h5> */}
                                    <p className="">
                                        {content}
                                    </p>
                                </div>
                            </div>

                        )
                    }
                    {/* <div className="col-md-4 mb-4"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="300"
                    >
                        <div className="card shadow h-100 first py-4 px-3 br-md ">
                            <div className="">
                                <i className="bi bi-person-circle bx-sm sec p-2 br-lg pry-bold-text"></i>
                            </div>
                            <h5 className=" my-4">
                                Humanity and Human Rights Alertness
                            </h5>
                            <p className="">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aspernatur quae cupiditate, cum a alias impedit velit adipisci
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="500"
                    >
                        <div className="card shadow h-100 first py-4 px-3 br-md ">
                            <div className="">
                                <i className="bi bi-person-circle bx-sm sec p-2 br-lg pry-bold-text"></i>
                            </div>
                            <h5 className=" my-4">
                                Gender sensitivity, equity and Justice
                            </h5>
                            <p className="">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aspernatur quae cupiditate, cum a alias impedit velit adipisci
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="700"
                    >
                        <div className="card shadow h-100 first py-4 px-3 br-md ">
                            <div className="">
                                <i className="bi bi-person-circle bx-sm sec p-2 br-lg pry-bold-text"></i>
                            </div>
                            <h5 className=" my-4">
                                Transparency, Accountability and Honesty
                            </h5>
                            <p className="">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aspernatur quae cupiditate, cum a alias impedit velit adipisci
                            </p>
                        </div>
                    </div> */}

                </div>

            </section>
        </>
    );
}

export default CoreValues;