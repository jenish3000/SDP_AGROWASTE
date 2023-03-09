import React from 'react'
// import Login from '../LoginPage/Login'
import Contact from './ContactUsPage/Contact'
import Aboutus from './AboutUs/Aboutus'
import Navbar from '../Navbar/Navbar';
// import Service from '../ServicePage/Service';
import './HomeStyle.css'
const Home = () => {
    return (
        <>
            <Navbar/>
            <div className='main'>
                <div className="bodymain">
                    
                    <div className="main-image">
                        <img src="../images/agricultural-waste.jpg" className="Main-img" alt="" />
                    </div>
                    <div className="space"></div>
                    <div className="service navbar-container">
                            <button className="button service button-name">
                               <a href="Service">service</a> </button>
                    </div>
                    <div className="space"></div>
                    <div className="datacontainer">
                        <div className="text-container">
                            <h3 className="text-head">Pollution</h3>
                            <p className="text-contant">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quasi adipisci laborum harum, ducimus neque? Vel nostrum rem rerum quis voluptatibus, provident alias, fuga velit quasi illum deserunt quidem explicabo adipisci, similique eveniet facilis iste nam molestias incidunt. Cupiditate magni nulla, temporibus perspiciatis quam maiores. Quisquam ab eum inventore quaerat.</p>
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
                            <p className="text-contant">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quasi adipisci laborum harum, ducimus neque? Vel nostrum rem rerum quis voluptatibus, provident alias, fuga velit quasi illum deserunt quidem explicabo adipisci, similique eveniet facilis iste nam molestias incidunt. Cupiditate magni nulla, temporibus perspiciatis quam maiores. Quisquam ab eum inventore quaerat.</p>
                        </div>
                    </div>
                    <div className="space"></div>
                    <div className="datacontainer">
                        <div className="text-container">
                            <h3 className="text-head">side-effects</h3>
                            <p className="text-contant">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quasi adipisci laborum harum, ducimus neque? Vel nostrum rem rerum quis voluptatibus, provident alias, fuga velit quasi illum deserunt quidem explicabo adipisci, similique eveniet facilis iste nam molestias incidunt. Cupiditate magni nulla, temporibus perspiciatis quam maiores. Quisquam ab eum inventore quaerat.</p>
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