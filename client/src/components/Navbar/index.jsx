import React from "react";






const MobileNav = ({ user, admin }) => {
    return (
        <>
            <div className="flex w-full items-center justify-between lg:hidden">
                <h1>MobileNavbar</h1>
            </div>

        </>
    )
}

const LargeNav = ({ user, admin }) => {
    return (
        <>
            <div className="w-full hidden lg:flex navbar">

                {/* <!-- <div class="item"> --> */}
                <h4 class="title">GO 4 FOOD</h4>
                <ul class="nav-items">
                    <div className="nav-logo"></div>
                    {/* <img src="../public/image/logopic.jpg" alt="Logo Pic" class="nav-logo" /> */}

                    <li class="nav-links"><a href="/">Home</a></li>
                    <li class="nav-links"><a href="/menu">Menu</a></li>
                    <li class="nav-links"><a href="/cart">Cart</a></li>
                    <li class="nav-links"><a href="/order">Orders</a></li>

                    {admin?.pass ? (
                        <li class="nav-links"><a href="/admin">AdminPortal</a></li>
                    ) : (
                        <li class="nav-links"><a href="/about">About</a></li>
                    )}

                </ul>
                <div class="right">
                    {user?.fullName ? (
                        <>
                            <a href="./htmls/signin.html" class="login">Login</a>
                        </>
                    ) : (
                        <>
                            <a href="./htmls/register.html" class="login">Register</a>
                        </>
                    )}
                        // <a href="#" class="user_icon"><i class="fa-solid fa-user"></i></a>

                </div>

            </div>





        </>
    )
}




const Navbar = () => {
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const user = {
        fullName: "Aditya",
    };
    const admin = {

        pass: "admin"
    }

    return (
        <>

            <nav className="flex lg:py-6 bg-black shadow-md lg:shadow-none lg:border-b-2 border-gray-100 w-full items-center">
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
            </nav>
        </>
    );
};

export default Navbar;