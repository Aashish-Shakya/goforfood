import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import signUpCss from "../../assets/styles/signUp.module.css"
import cx from "classnames"
import fbLogo from "../../assets/images/fb.jfif"
import instaLogo from "../../assets/images/instagram.png"
import googleLogo from "../../assets/images/google.jfif"
const SignUp = () => {
    return (
        <>
            <Navbar />
            <div class={signUpCss.background1}>
                <div class={signUpCss.formbody}>
                    <div class={signUpCss.container}>
                        <center>
                            <div class={signUpCss.pagetitle}>Signup</div>
                        </center>

                        <br />
                        <h3 class={signUpCss.msg}>

                        </h3>

                        <br />
                        <div class={signUpCss.icon}>
                            <ul class={signUpCss.unicon}>
                                <li> <a href="#"><img src={fbLogo} alt="" class={signUpCss.fb} width="60px" /></a>
                                </li>
                                <li><a href="#"><img src={instaLogo} alt="" class={signUpCss.fb} width="60px" /></a>
                                </li>
                                <li><a href="#"><img src={googleLogo} alt="" class={signUpCss.fb} width="60px" /></a>
                                </li>
                            </ul>
                        </div>
                        <form action="signup_servlet.jsp" method="post">
                            <div class={signUpCss.userdetails}>
                                <div class={signUpCss.inputbox}>
                                    <span class={signUpCss.details}>First Name</span>
                                    <input type="text" name="fname" placeholder="Enter your first name" minlength="2"
                                        maxlength="20" required />
                                </div>
                                <div class={signUpCss.inputbox}>
                                    <span class={signUpCss.details}>Last Name</span>
                                    <input type="text" name="lname" placeholder="Enter your last name" minlength="2"
                                        maxlength="14" required />
                                </div>
                                <div class={signUpCss.inputbox}>
                                    <span class={signUpCss.details}>User Name</span>
                                    <input type="text" name="username" placeholder="Enter your password" minlength="5"
                                        maxlength="25" required />
                                </div>
                                <div class={signUpCss.inputbox}>
                                    <span class={signUpCss.details}>Email id</span>
                                    <input type="text" name="email" placeholder="Enter your email id" minlength="4"
                                        maxlength="25" required />
                                </div>
                                <div class={signUpCss.genderdetails}>
                                    <span class={signUpCss.gendertitle}>Gender</span>
                                    <br />
                                    <input type="radio" name="gender" id="dot-1" value="male" />
                                    <label for="dot-1">
                                        <span className={cx(signUpCss.dot, signUpCss.one)}></span>
                                        <span class={signUpCss.gender}>Male</span>
                                    </label>
                                    <input type="radio" name="gender" id="dot-2" value="female" />
                                    <label for="dot-2">
                                        <span class={cx(signUpCss.dot, signUpCss.two)}></span>
                                        <span class={signUpCss.gender}>Female</span>
                                    </label>
                                    <input type="radio" name="gender" id="dot-3" value="other" />
                                    <label for="dot-3">
                                        <span class={cx(signUpCss.dot, signUpCss.three)}></span>
                                        <span class={signUpCss.gender}>Other</span>
                                    </label>

                                    <div class={signUpCss.category}>



                                    </div>
                                </div>
                                <div class={signUpCss.inputbox}>
                                    <span class={signUpCss.details}>Mobile Number</span>
                                    <input type="number" name="mobile" placeholder="Enter your mobile number" minlength="10"
                                        maxlength="10" required />
                                </div>
                                <div class={signUpCss.inputbox}>
                                    <span class={signUpCss.details}>Address</span>
                                    <input name="address" placeholder="Enter your address" minlength="5" maxlength="50"
                                        required />
                                </div>
                                <div class={signUpCss.inputbox}>
                                    <span class={signUpCss.details}>Password</span>
                                    <input type="password" id="pwd" name="password" placeholder="Enter your password"
                                        minlength="8" maxlength="25" required />
                                </div>
                                <div class={signUpCss.inputbox}>
                                    <span class={signUpCss.details}>Confirm Password</span>
                                    <input type="password" id="cpwd" name="caddress" placeholder="Confirm your password"
                                        minlength="8" maxlength="25" required />
                                </div>
                            </div >

                            <center>
                                <div class={signUpCss.button}>
                                    <label style={{ color: 'red' }} id="test"></label><br />
                                    <input type="submit" onclick="return check()" name="submitto" value="Register" />
                                </div>
                                <div class={signUpCss.reset}>
                                    <input type="reset" name="resetto" value="Reset" />
                                </div>
                            </center>

                        </form >
                    </div >
                </div >
            </div >


            <Footer />
        </>
    )
}

export default SignUp