import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import signUpCss from "../../assets/styles/signUp.module.css"

import fbLogo from "../../assets/images/fb.jfif"
import instaLogo from "../../assets/images/instagram.png"
import googleLogo from "../../assets/images/google.jfif"


// redux
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/reducers/auth/auth.action";
import { getMySelf } from "../../redux/reducers/user/user.action";

const SignUp = ({ isOpen, setIsOpen }) => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        fullName: "",
    });

    const handleChange = (e) => {
        setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const dispatch = useDispatch();

    const submit = async () => {
        await dispatch(signUp(userData));
        await dispatch(getMySelf());
        closeModal();
        setUserData({ email: "", password: "", fullName: "" });
    };

    const googleSignUp = () =>
        (window.location.href = `${process.env.REACT_APP_CLIENT_URL}/auth/google`);

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
                        <form  >
                            <div class={signUpCss.userdetails}>
                                <div class={signUpCss.inputbox}>
                                    <span class={signUpCss.details}>FullName</span>
                                    <input type="text" id="fullName" name="fname" value={userData.fullName}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required />
                                </div>
                                {/* <div class={signUpCss.inputbox}>
                                    <span class={signUpCss.details}>Last Name</span>
                                    <input type="text" name="lname" placeholder="Enter your last name" minlength="2"
                                        maxlength="14" required />
                                </div> */}
                                {/* <div class={signUpCss.inputbox}>
                                    <span class={signUpCss.details}>User Name</span>
                                    <input type="text" name="username" placeholder="Enter your password" minlength="5"
                                        maxlength="25" required />
                                </div> */}
                                <div class={signUpCss.inputbox}>
                                    <span class={signUpCss.details}>Email</span>
                                    <input type="text" name="email" id="email"
                                        value={userData.email}
                                        onChange={handleChange}
                                        placeholder="user@email.com"
                                        required />
                                </div>
                                {/* <div class={signUpCss.genderdetails}>
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
                                </div> */}
                                {/* <div class={signUpCss.inputbox}>
                                    <span class={signUpCss.details}>Mobile Number</span>
                                    <input type="number"
                                        name="mobile"
                                        id='phoneNumber'
                                        value={userData.phoneNumber}
                                        onChange={handleChange}
                                        placeholder="123456789"
                                        required />
                                </div> */}
                                {/* <div class={signUpCss.inputbox}>
                                    <span class={signUpCss.details}>Address</span>
                                    <input type="array"
                                        name="address"
                                        id="address"
                                        value={userData.address}
                                        onChange={handleChange}
                                        placeholder="Enter your address"
                                        required />
                                </div> */}
                                <div class={signUpCss.inputbox}>
                                    <span class={signUpCss.details}>Password</span>
                                    <input type="password"
                                        id="password"
                                        value={userData.password}
                                        onChange={handleChange}
                                        placeholder="*********" required />
                                </div>
                                <div class={signUpCss.inputbox}>
                                    <span class={signUpCss.details}>Confirm Password</span>
                                    <input type="password" id="cpwd" name="caddress" placeholder="Confirm your password"
                                        required />
                                </div>
                            </div >

                            <center>
                                <div class={signUpCss.button} onClick={submit}>
                                    SignUp
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