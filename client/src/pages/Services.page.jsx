import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import srvCss from "../assets/styles/services.module.css"
import doorStep from "../assets/images/doorstep.png"

const Servicespage = () => {
    return (
        <>
            <Navbar />
            <div class={srvCss.services}>

                <div class={srvCss.sheading}>
                    <h1>Ser<font color="#4a90e2">vic</font>es</h1>
                    <p>We Provide The Best In Class Services For Our Customers</p>
                </div>

                <div class={srvCss.sboxcontainer}>

                    <div class={srvCss.sbox}>

                        <div class={srvCss.bar}></div>

                        <img alt="1"
                            src="https://image.shutterstock.com/image-vector/quality-control-checkmark-label-illustration-260nw-1029251812.jpg"
                            style={{ borderRadius: "25px" }} />

                        <h1>Best Quality Food</h1>

                        <p>Our Food Quality Is Checked In every Aspect & Delivered To You After Every Test Passed.</p>

                    </div>

                    <div class={srvCss.sbox}>

                        <div class={srvCss.bar}></div>

                        <img alt="2" src={doorStep} style={{ borderRadius: "25px" }} />

                        <h1>Doorstep Delivery</h1>

                        <p> Just Order Your Food And Soon You'll Get Your Yummy Food At Your Doorstep And Enjoy The
                            Taste..COD Available</p>

                    </div>

                    <div class={srvCss.sbox}>

                        <div class={srvCss.bar}></div>

                        <img alt="3"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQng3frj8_RnhA1w-I-Fji7MZ7GyrByKlNIbHeuaj9-loSkFcU9Za4oM6uxKSnXJFXcrFo&usqp=CAU"
                            style={{ borderRadius: "25px" }} />

                        <h1>PlayPlaces & Parties</h1>

                        <p>Fun for kids and stress-free for you, we've got parties down with Happy Meals, cake,
                            decorations and party favors..</p>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Servicespage