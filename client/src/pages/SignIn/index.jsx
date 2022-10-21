import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import signInCss from "../../assets/styles/signIn.module.css"
import signUpCss from "../../assets/styles/signUp.module.css"
import googleLogo from "../../assets/images/google.jfif"
const SignIn = () => {

    return (
        <>
            <Navbar />
            <div class={signInCss.formbody}>
                <div class={signInCss.container}>

                    <center>
                        <div class={signInCss.title}>Sign in</div>
                    </center>

                    <br />
                    <h3 class={signInCss.msg}> </h3>

                    <br />

                    <form action="signin_servlet.jsp" method="post">
                        <div class={signInCss.userdetails}>
                            <div class={signInCss.inputbox}>
                                <span class={signInCss.details}>User Name</span> <input type="text" name="username"
                                    placeholder="Enter your password" minlength="5" maxlength="25" required />
                            </div>
                            <div class={signInCss.inputbox}>
                                <span class={signInCss.details}>Password</span> <input type="password" name="password"
                                    placeholder="Enter your password" minlength="8" maxlength="25" required />
                            </div>
                        </div>
                        <br /> <br />
                        <div class={signInCss.button}>
                            <input type="submit" name="submitto" value="Login" />
                        </div>
                        <div class={signInCss.reset}>
                            <input type="reset" name="resetto" value="Reset" />
                        </div>

                        {/* //Added extra need some inprovment */}
                        <div class={signUpCss.icon} flex justify-content-center>
                            <ul class={signUpCss.unicon}>

                                <li><a href="#"><img src={googleLogo} alt="" class={signUpCss.fb} width="60px" /></a>
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