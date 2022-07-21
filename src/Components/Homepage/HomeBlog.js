import img from '../../assets/img.jpg'

const HomeBlog = () => {
    return (
        <>
            <section className="home-blog pt-5 pb-5">
                <div className="text-center mb-5 pry-bold-text"
                    data-aos="fade-up"
                    data-aos-duration="1000">
                    <h3 class="h1-responsive text-center my-4 ">
                        RECENT BLOG
                    </h3>

                    <p class="text-center w-responsive mx-auto mb-5">
                        our periodic blog which Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, consequatur.
                    </p>
                </div>

                <div className="row pt-3">
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={img} alt="a" width="100%" className='br-md hover shadow-sm' />
                            <div className="mt-3 px-4 blog-text">
                                <p className="">February 27, 2022</p>
                                <p className=" fw-bold">How to protect your Right</p>
                                <p className='lh-sm '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam voluptas ex beatae corporis quaerat error. Quae, quam quasi. Saepe officia asperiores amet est fugiat minus doloribus consectetur molestiae nemo itaque.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={img} alt="a" width="100%" className='br-md hover shadow-sm' />
                            <div className="mt-3 px-4 blog-text">
                                <p className="">February 27, 2022</p>
                                <p className=" fw-bold">How to protect your Right</p>
                                <p className='lh-sm '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam voluptas ex beatae corporis quaerat error. Quae, quam quasi. Saepe officia asperiores amet est fugiat minus doloribus consectetur molestiae nemo itaque.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src={img} alt="a" width="100%" className='br-md hover shadow-sm' />
                            <div className="mt-3 px-4 blog-text">
                                <p className="">February 27, 2022</p>
                                <p className=" fw-bold">How to protect your Right</p>
                                <p className='lh-sm '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam voluptas ex beatae corporis quaerat error. Quae, quam quasi. Saepe officia asperiores amet est fugiat minus doloribus consectetur molestiae nemo itaque.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default HomeBlog;