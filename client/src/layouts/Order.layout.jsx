import React from 'react'


import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// import orderCss from "../assets/styles/order.css"


const Orderlayout = (Component) =>
    ({ ...props }) => {

        return (

            <>

                <Navbar />
                <div className="container mx-auto px-4 lg:px-20">
                    <Component {...props} />
                </div>
                <Footer />
            </>
        )
    }

export default Orderlayout