// import gavel from '../../assets/gavel-r.png'
// import bg from '../../assets/bg.png'
// import agree from '../../assets/agree.jpg'
import gavel from '../../assets/gavel.jpg'
import law from '../../assets/law.jpg'
import agree from '../../assets/agree.jpg'


const Services = () => {
    return ( 
        <>
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
                            We have offrer alot of services which Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, consequatur.
                        </p>
                    </div>
                </div>
                <div className="">
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
                                 Quo fugiat reprehenderit eos similique, est assumenda dolorum, laboriosam atque delectus quidem ipsa perspiciatis aut suscipit.
                                 Quo fugiat reprehenderit eos similique, est assumenda dolorum, laboriosam atque delectus quidem ipsa perspiciatis aut suscipit.
                                 Quo fugiat reprehenderit eos similique, est assumenda dolorum, laboriosam atque delectus quidem ipsa perspiciatis aut suscipit.
                                 Quo fugiat reprehenderit eos similique, est assumenda dolorum, laboriosam atque delectus quidem ipsa perspiciatis aut suscipit.
                            </p>
                                <div className="py-1 pry br-md mt-5"></div>


                        </div>
                    </div>
                    <div className="row first align-items-center justify-content-around py-5 "
                        data-aos="fade-up"
                        data-aos-duration="1000"                    >
                        <div className="col-md-4">
                            <h3 className='mb-4 text-start'>Lorem ipsum, dolor sit amet </h3>
                            <p>
                                 Quo fugiat reprehenderit eos similique, est assumenda dolorum, laboriosam atque delectus quidem ipsa perspiciatis aut suscipit.
                                 Quo fugiat reprehenderit eos similique, est assumenda dolorum, laboriosam atque delectus quidem ipsa perspiciatis aut suscipit.
                                 Quo fugiat reprehenderit eos similique, est assumenda dolorum, laboriosam atque delectus quidem ipsa perspiciatis aut suscipit.
                                 Quo fugiat reprehenderit eos similique, est assumenda dolorum, laboriosam atque delectus quidem ipsa perspiciatis aut suscipit.
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
                            <h3 className='mb-4 text-start'>Lorem ipsum, dolor sit amet </h3>
                            <p>
                                 Quo fugiat reprehenderit eos similique, est assumenda dolorum, laboriosam atque delectus quidem ipsa perspiciatis aut suscipit.
                                 Quo fugiat reprehenderit eos similique, est assumenda dolorum, laboriosam atque delectus quidem ipsa perspiciatis aut suscipit.
                                 Quo fugiat reprehenderit eos similique, est assumenda dolorum, laboriosam atque delectus quidem ipsa perspiciatis aut suscipit.
                                 Quo fugiat reprehenderit eos similique, est assumenda dolorum, laboriosam atque delectus quidem ipsa perspiciatis aut suscipit.
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
        </>
     );
}
 
export default Services;