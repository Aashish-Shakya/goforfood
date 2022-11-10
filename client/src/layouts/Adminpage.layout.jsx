import React from 'react'

import AdminNavbar from "../components/Navbar";
import Footer from "../components/Footer";

const Adminpagelayout = (Component) =>
    ({ ...props }) => {
        return (

            <>

                {/* <Navbar /> */}
                <div className="container mx-auto px-4 lg:px-20">
                    <Component {...props} />
                </div>
                {/* <Footer /> */}
            </>
        )
    }
export default Adminpagelayout

