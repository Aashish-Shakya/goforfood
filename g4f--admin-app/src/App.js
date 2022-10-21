import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home.page';
import Users from './pages/Users/Users.page';
import Orders from './pages/Orders/Orders.page';
import Dishes from './pages/Dishes/DishEdit.page';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
// import ScriptTag from 'react-script-tag';
// import adminjs from "./assets/admin"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="orders" element={<Orders />} />
        <Route path="dishes" element={<Dishes />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />


        {/* <Route path="menu" element={<Menu />} /> */}

      </Routes>
      {/* //not able to install script -- for admin js  */}
      {/* <ScriptTag isHydrating={true} type="text/javascript"
        src={adminjs} /> */}

    </>
  );
}

export default App;
