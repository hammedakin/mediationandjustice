import gavel from '../../assets/gavel.jpg'
import law from '../../assets/law.jpg'
import agree from '../../assets/agree.jpg'


const Services = () => {

    return (
        <section>
            <hr />

            <div className="services">
                <div className="my-3 text-center">

                    <div className="text-center mb-5 pry-bold-text"
                        data-aos="fade-up"
                        data-aos-duration="1000">
                        <h3 class="h1-responsive text-center my-4 ">
                            WHAT WE DO
                        </h3>

                        <p class="text-center w-responsive mx-auto mb-5">
                            We offer a lot of humanitarian services which includes and not limited to
                        </p>
                    </div>
                </div>
                <div className="">
                    <div className="row first align-items-center justify-content-around py-5 "
                        data-aos="fade-up"
                        data-aos-duration="1000"                    >
                        <div className="col-md-4">
                            <h3 className='mb-4 text-start'> Fundamental Human Rights Protection </h3>
                            <p>
                                Mediation Conciliation and Human Rights Center (MCHRC) assist individuals in protection of their fundamental human rights. <br />
                                Human rights are rights we have simply because we exist as human beings - they are not necessarily granted by any state or government. These universal rights are inherent to us all, regardless of nationality, sex, national or ethnic origin, color, religion, language, or any other status. They range from the most fundamental - the right to life - to those that make life worth living, such as the rights to food, education, work, health, and liberty.
                            </p>
                            <div className="py-1 pry br-md mt-5"></div>

                            <div className="second">
                                <div className="py-1"></div>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <img src={law} alt="" width={'100%'} className='image' />
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-around py-5 "
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="500"                  >
                        <div className="col-md-6 text-center">
                            <img src={gavel} alt="" width={'100%'} className='image' />
                        </div>
                        <div className="col-md-4 ">
                            <h3 className='mb-4'>Alternative Dispute Resolution</h3>
                            <p className=''>
                                Alternative Dispute Resolution (ADR) is a core and fundamental service to the society provided by Mediation Conciliation and Human Rights Center (MCHRC). <br />
                                Alternative Dispute Resolution (ADR) refers to the different ways by which disputes are resolved without court trial. Common ADR processes include mediation, arbitration, and neutral evaluation. These processes are generally confidential, less formal, and less stressful than traditional court proceedings.
                                <br />
                                {/* In mediation, parties play an important role in resolving their own disputes. This often results in creative solutions, longer-lasting outcomes, greater satisfaction, and improved relationships. */}
                            </p>
                            <div className="py-1 pry br-md mt-5"></div>
                        </div>
                    </div>

                    <div className="row first align-items-center justify-content-around py-5 "
                        data-aos="fade-up"
                        data-aos-duration="1000"                    >
                        <div className="col-md-4">
                            <h3 className='mb-4 text-start'> Child's Rights and Family Welfare </h3>
                            <p>
                                Family forms the nucleus of the society, hence family integration reflects the status of the society. Mediation Conciliation and Human Rights Center (MCHRC) strive to ensure integration of every family through prevention od domestic violence and protection of the Right of every child in the society.
                                {/* Children and young people have the same general human rights as adults and also specific rights that recognize their special needs. Children are neither the property of their parents nor are they helpless objects of charity. They are human beings and are the subject of their own rights. */}
                            </p>
                            <div className="py-1 pry br-md mt-5"></div>

                            <div className="second">
                                <div className="py-1"></div>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <img src={law} alt="" width={'100%'} className='image' />
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-around py-5 "
                        data-aos="fade-up"
                        data-aos-duration="1000"                    >
                        <div className="col-md-6 text-center">
                            <img src={agree} alt="" width={'100%'} className='image' />
                        </div>
                        <div className="col-md-4">
                            <h3 className='mb-4 text-start'> Land and Property Matters</h3>
                            <p>
                                Mediation Conciliation and Human Rights Center (MCHRC) engages Alternative Dispute Resolution (ADR) to settle cases of Land and Property matters through amicable settlement method without necessarily resorting to litigation.
                            </p>
                            <div className="py-1 pry br-md mt-5"></div>

                            <div className="second">
                                <div className="py-1"></div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <hr />
        </section>
    );
}

export default Services;