import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <>
            <main>
                <div className="container">
                    <div className="not-found text-center pry-bold-text">
                        <div className="">
                           <h1 className="" >
                            404
                           </h1>
                            <h4 className="">
                                PAGE REQUESTED NOT FOUND
                            </h4>
                            <Link to="/" className=''>
                                <button className="pry-bold btn light-text mt-4"> 
                                <h6 className="m-0">
                                Home
                                </h6>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}

export default PageNotFound;