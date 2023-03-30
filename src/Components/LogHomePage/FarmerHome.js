import React from 'react'
// import Login from '../LoginPage/Login'
import Contact from '../HomePage/ContactUsPage/Contact'
import Aboutus from '../HomePage/AboutUs/Aboutus'
// import Navbar from '../Navbar/Navbar';
// import Auction from '../Auction/Auction'
import Carousel from '../Carousel';
import { countries } from '../Data';
// import Service from '../ServicePage/Service';
import './FarmerHome.css'
const Home = () => {
    return (
        <>
            {/* <Navbar/> */}
            <div className='main'>
                <div className="bodymain">
                    <div className="carousel"> <Carousel images={countries}/></div>
               
                    {/* <div className="main-image">
                        <img src="../images/agricultural-waste.jpg" className="Main-img" alt="" />
                    </div> */}
                    <div className="space"></div>
                    <div className="service navbar-container">
                            {/* <button className="button service button-name">
                               <a href="Service">service</a> </button> */}
                               <button className="button service Auction button-name">
                               <a href="Auction">Auction</a> </button>
                    </div>
                    {/* <div className="Auction navbar-container">
                            <button className="button service button-name">
                            
                    </div> */}
                    <div className="space"></div>
                    <div className="datacontainer">
                        <div className="text-container">
                            <h3 className="text-head">Pollution</h3>
                            <p className="text-contant">While more than 80% of Indian cities struggle with unhealthy air quality, the landlocked capital of New Delhi in the northern part of the country suffers the most toxic air—and it’s at its worst every year from October through December. During these months, a grayish-yellow haze hangs over the city, leading government agencies and the Environment Pollution Prevention and Control Authority to declare public health emergencies, shut down schools, halt construction work and ground flights due to poor visibility. Studies estimated that each year tens of thousands of citizens die from respiratory illnesses due to air pollution.</p>
                        </div>
                        <div className="image-contianer">
                            <img src="../images/parali.jpg" className="image1" alt="" />
                        </div>
                    </div>
                    <div className="space"></div>
                    <div className="datacontainer">
                        <div className="image-contianer">
                            <img src="../images/sugar.jpg" className="image2" alt="" />
                        </div>
                        <div className="text-container">
                            <h3 className="text-head">Residue</h3>
                            <p className="text-contant">The burning of crop residues generates numerous environmental problems. The main adverse effects of crop residue burning include the emission of greenhouse gases (GHGs) that contributes to the global warming, increased levels of particulate matter (PM) and smog that cause health hazards, loss of biodiversity of agricultural lands, and the deterioration of soil fertility .</p>
                        </div>
                    </div>
                    <div className="space"></div>
                    <div className="datacontainer">
                        <div className="text-container">
                            <h3 className="text-head">side-effects</h3>
                            <p className="text-contant">Crop residue burning significantly increases the quantity of air pollutants such as CO2, CO, NH3, NOX, SOX, Non-methane hydrocarbon , volatile organic compounds (VOCs), semi volatile organic compounds (SVOCs) and PM. This basically accounts for the loss of organic carbon, nitrogen, and other nutrients, which would otherwise have retained in soil </p>
                        </div>
                        <div className="image-contianer">
                            <img src="../images/side-effects.jpg" className="image3" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="space"></div>
 
                {/* Contact us page */}
                 <div id="contact"> <Contact/></div>


                
                 <div className="space"></div>


                {/* AboutUs Page */}
                <div id="about"> <Aboutus /></div>

            </div>


        </>
    )
}

export default Home