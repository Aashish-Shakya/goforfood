import React from 'react'
import Footer from '.'
import Navbar from '../Navbar'
import contactCss from "../../assets/styles/contactus.module.css"

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className={contactCss.main}>
                <div className={contactCss.mainblock}>
                    {/* <div className="left-part">
                        <i className="fas fa-envelope"></i>
                        <i className="fas fa-at"></i>
                        <i className="fas fa-mail-bulk"></i>
                    </div> */}
                    <form className={contactCss.contactForm}>
                        <h1>Contact Us</h1>
                        <div className={contactCss.info}>
                            <input className="fname" type="text" name="name" placeholder="Full name" />
                            <input type="text" name="name" placeholder="Email" />
                            <input type="number" name="name" placeholder="Phone number" />
                            <input type="text" name="name" placeholder="Website" />
                        </div>
                        <p>Message</p>
                        <div>
                            <textarea rows="4"></textarea>
                        </div>
                        <button type="submit" className={contactCss.contactButton}>Submit</button>
                    </form>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default ContactUs