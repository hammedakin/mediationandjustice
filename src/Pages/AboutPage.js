import React from 'react';
import AboutShowcase from '../Components/About/AboutShowcase';
import AboutUs from '../Components/About/AboutUs';
import OurTeam from '../Components/About/OurTeam';
import WhoWeAre from '../Components/About/WhoWeAre';


const AboutPage = () => {
    return ( 
        <main>
        <AboutShowcase/>
        <AboutUs/>
        {/* <WhoWeAre/> */}
        <OurTeam/>
        </main>
     );
}
 
export default AboutPage;