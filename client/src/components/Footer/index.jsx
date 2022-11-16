import React from "react";



const MobileFoot = () => {
    return (
        <>
            <div className="flex w-full items-center justify-between lg:hidden">
                <h1>MobileFooter</h1>
            </div>
        </>
    )
}

const LargeFoot = () => {
    return (
        <>
            <div className="w-full hidden lg:flex ">
                <div class="footer-items ">
                    <div class="social-icons">
                        {/* <Link to={`/restaurant/${8}/overview`}>jdsbfjsv</Link> */}
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                    <div class="footer-links">
                        <a href="/" class="links">Home</a>
                        <a href="/services" class="links">Service</a>
                        {/* <a href="/aboutus" class="links">About Us</a> */}
                        <a href="/gallery" class="links">Galery</a>
                        <a href="/contactus" class="links">Contact Us</a>

                    </div>

                    <h3 class="disclaimer">Developed by Aashish Shakya</h3>
                    <br />
                </div>
            </div>





        </>
    )
}




const Footer = () => {



    return (
        <>
            <footer className="flex w-full ">
                <MobileFoot


                />

                <LargeFoot

                />
            </footer>
        </>
    );
};

export default Footer;