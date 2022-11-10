import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import signInCss from "../../assets/styles/signIn.module.css"
import signUpCss from "../../assets/styles/signUp.module.css"
import googleLogo from "../../assets/images/google.jfif"


// redux
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/reducers/auth/auth.action";
import { getMySelf } from "../../redux/reducers/user/user.action";
import { Link } from 'react-router-dom'

const SignIn = ({ isOpen, setIsOpen }) => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const dispatch = useDispatch();

    const submit = async () => {
        await dispatch(signIn(userData));
        await dispatch(getMySelf());
        closeModal();
        setUserData({ email: "", password: "" });

    };


    return (
        <>
            <Navbar />
            <div className={signInCss.formbody}>
                <div className={signInCss.container}>

                    <center>
                        <div className={signInCss.title}>Sign in</div>
                    </center>

                    <br />
                    <h3 className={signInCss.msg}> </h3>

                    <br />

                    <form  >
                        <div className={signInCss.userdetails}>
                            <div className={signInCss.inputbox}>
                                <span className={signInCss.details}>User Email</span> <input type="text" name="username"
                                    placeholder="Enter your email" id="email" onChange={handleChange} required />
                            </div>
                            <div className={signInCss.inputbox}>
                                <span className={signInCss.details}>Password</span> <input type="password" name="password"
                                    placeholder="Enter your password" id="password" value={userData.password} onChange={handleChange} required />
                            </div>
                        </div>
                        <br /> <br />
                        <Link to="/" >
                            <div className={signInCss.button}>

                                <div onClick={submit} className="login">Login</div>

                            </div>
                        </Link>
                        <div className={signInCss.reset}>
                            <input type="reset" name="resetto" value="Reset" />
                        </div>

                        {/* //Added extra need some inprovment */}
                        <div className={signUpCss.icon} flex justify-content-center>
                            <ul className={signUpCss.unicon}>

                                <li><a href="#"><img src={googleLogo} alt="" className={signUpCss.fb} width="60px" /></a>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SignIn