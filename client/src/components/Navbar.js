import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import Aos from "aos";
import logo from '../logo.svg';

import Auth from '../utils/auth';
import Login from "../pages/Login";
import DriverLogs from "../pages/DriverLogs";

const Navbar = () => {
  useEffect(() => {
		Aos.init({duration:2000});
		window.addEventListener("scroll", () => {
		});
	}, [])
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
  <header id='header' className="flex-row justify-center">
    <div className="col">
      <img id="royal-icon" className='img-card-overlay' src={logo} alt="Costco Roscoe's Liquor"></img>
    </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {Auth.loggedIn() ? (
            <>
            <div className="col">
              <Link className="btn" to="/me">
                {Auth.getProfile().data.username}'s Dashboard 🎛️
              </Link>
            </div>
            <div className="col">
                <button className="btn" onClick={logout}>
                  Logout 📴
                </button>
            </div>
            </>
          ) : (
            <>

            <div className="col">
              <Link className="btn" id="login-btn" onClick={Login}>
                <b>Admin Login</b> <i id='login-icon' className="fa-solid fa-user"></i>
              </Link>
            </div>
            <div className="col">
              <Link className="btn" id="login-btn" onClick={DriverLogs}>
                <b>Driver[ </b> <img id="tips_icon_1" src='https://res.cloudinary.com/dhqsixgmo/image/upload/v1765664437/log_actmp7.svg' class="card-img-top mx-auto" alt="Driver Logs" /><b> ]</b>
              </Link>
            </div>
            </>
          )}
      </nav>
    </header>
  );
};

export default Navbar;