import Showcase from "../Components/Homepage/Showcase";
import '../Components/Homepage/Homepage.css'
import CoreValues from "../Components/Homepage/CoreValues";
import HomeBlog from "../Components/Homepage/HomeBlog";
import Services from "../Components/Homepage/Services";
import Testimonials from "../Components/Homepage/Testimonials";
import PageLoader from "../Components/PageLoader";
import React, { useState, useEffect } from 'react';



const Homepage = () => {

    const [ploading, setploading] = useState(false);

    useEffect(() => {
        setploading(true);
        setTimeout(() => {
            setploading(false);
        }, 500);
    }, []);

    return (
        <>
            {ploading ? (
                <>
                    <PageLoader loading={ploading} />
                </>
            ) : (
                <>
                    <main className="home">
                        <Showcase />
                        <div className="container">
                            <CoreValues />
                            <Services />
                  
                        </div>
                    </main>
                </>
            )}
        </>
    );
}

export default Homepage;