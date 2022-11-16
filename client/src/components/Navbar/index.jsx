import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";


import SignIn from "../../pages/SignIn/index";
import SignUp from "../../pages/SignUp/index";



// redux
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../redux/reducers/auth/auth.action";
import { clearUser } from "../../redux/reducers/user/user.action";

const MobileNav = ({
    user,
    isDropdownOpen,
    setIsDropdownOpen,
    signIn,
    signUp,
    admin
}) => {
    const SignIn = () => {
        signIn();
        setIsDropdownOpen(false);
    };

    const SignUp = () => {
        signUp();
        setIsDropdownOpen(false);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const SignOut = () => {
        dispatch(signOut());
        dispatch(clearUser());
        navigate("/delivery");
        setIsDropdownOpen(false);
    };

    return (
        <>
            <div className="flex w-full items-center justify-between lg:hidden">
                <h1>MobileNavbar</h1>
            </div>

        </>
    )
}


const LargeNav = ({
    user,
    isDropdownOpen,
    setIsDropdownOpen,
    signIn,
    signUp,
    admin
}) => {
    const SignIn = () => {
        signIn();
        setIsDropdownOpen(false);
    };

    const SignUp = () => {
        signUp();
        setIsDropdownOpen(false);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const SignOut = () => {
        dispatch(signOut());
        dispatch(clearUser());
        navigate("/");
        setIsDropdownOpen(false);
    };
    return (
        <>
            {user?.role === "admin" ? (
                navigate("/admin")

            ) : (
                <div className="w-full hidden lg:flex navbar">
                    <h4 class="title">GO 4 FOOD</h4>


                    <ul class="nav-items">
                        <div className="nav-logo"></div>
                        {/* <img src="" class="nav-logo" /> */}

                        <li class="nav-links"><a onClick={() => navigate("/")}  >Home</a></li>
                        <li class="nav-links"><a onClick={() => navigate("/menu")} >Menu</a></li>
                        <li class="nav-links"><a onClick={() => navigate("/cart")} >Cart</a></li>
                        <li class="nav-links"><a onClick={() => navigate("/order")} >Orders</a></li>



                    </ul>


                    <div className="flex items-center gap-3 relative">
                        {user?.fullName ? (

                            <>
                                <li class="nav-links"><a href="/order">Welcome  {user.fullName}</a></li>
                                <div
                                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                                    className="border border-gray-300 text-zomato-400 w-9 h-9 rounded-full"
                                >
                                    <img
                                        src="https://cdn3.vectorstock.com/i/1000x1000/00/92/teen-boy-character-avatar-vector-11360092.jpg"
                                        alt="avatar"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                {isDropdownOpen && (
                                    <div className="absolute shadow-lg py-3 -bottom-14 -right-0 w-36 z-20 flex flex-col gap-2 bg-white border border-gray-200">
                                        <button onClick={SignOut}>Sign Out</button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <>
                                <span
                                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                                    className="border p-2 border-gray-400 rounded-full"
                                >
                                    <FaUserAlt className="w-full h-full  text-white" />
                                </span>

                                {isDropdownOpen && (
                                    <div className=" popup absolute shadow-lg py-3 -bottom-24 -right-0 w-36 z-20 flex flex-col gap-2 bg-red border border-gray-200 text-black justify-center " >
                                        <Link to="/signin">
                                            <button  >Sign In</button>
                                        </Link>
                                        <Link to="/signup">
                                            <button >Sign Up</button>
                                        </Link>

                                        {/* <button onClick={SignUp}>Sign Up</button> */}
                                    </div>
                                )}
                            </>
                        )}
                    </div>


                </div>
            )}
        </>
    )
}




const Navbar = () => {
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [openSignIn, setOpenSignIn] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);

    const openSignInModal = () => setOpenSignIn(true);
    const openSignUpModal = () => setOpenSignUp(true);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // const user = {
    //   // fullName: "Aditya",
    // };

    const user = useSelector((globalState) => globalState.user);


    return (
        <>

            <nav className="flex lg:py-6 bg-black shadow-md lg:shadow-none lg:border-b-2 border-gray-100 w-full items-center">
                <MobileNav
                    user={user}
                    setIsDropdownOpen={setIsDropdownOpen}
                    isDropdownOpen={isDropdownOpen}
                    signIn={openSignInModal}
                    signUp={openSignUpModal}
                />

                <LargeNav
                    user={user}
                    setIsDropdownOpen={setIsDropdownOpen}
                    isDropdownOpen={isDropdownOpen}
                    signIn={openSignInModal}
                    signUp={openSignUpModal}
                />
            </nav>
            {/* <nav className="flex lg:py-6 bg-black shadow-md lg:shadow-none lg:border-b-2 border-gray-100 w-full items-center">
                <MobileNav
                    user={user}
                // setIsDropdownOpen={setIsDropdownOpen}
                // isDropdownOpen={isDropdownOpen}
                />

                <LargeNav
                    user={user}
                // setIsDropdownOpen={setIsDropdownOpen}
                // isDropdownOpen={isDropdownOpen}
                />
            </nav> */}
        </>
    );
};

export default Navbar;