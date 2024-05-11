import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logout from "../auth/Logout";
import { FaSign, FaSignInAlt, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { Button } from "react-bootstrap";

const Header = () => {
  const location = useLocation();
  const [showAccount, setShowAccount] = useState(false);

  const handleAccountClick = () => {
    setShowAccount(!showAccount);
  };

  const isLoggedIn = localStorage.getItem("token")
  const userRole = localStorage.getItem("userRole")
  return (
    <>
      {!location.pathname.includes("admin") && (
        <>
        {isLoggedIn && userRole === "ROLE_ADMIN" && (
          <a href="/admin">
            <button className="w-100 rounded-0 fw-bold btn btn-danger">Yönetim Kontrol Merkezi</button>
            </a>
        )}
        
        <nav className="navbar navbar-expand-lg bg-dark px-5 shadow  sticky-top">

          
          <div className="container ">
            <a href="/" className="navbar-brand">
              <img src="logo2.png" alt="logo" height={"36"} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ">

                <li className="nav-item">
                  <NavLink className="nav-link text-light" aria-current="page" to={"/browse-all-rooms"}>
                    Tüm araçlar
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light" aria-current="page" to={"/about"}>
                    Hakkımızda
                  </NavLink>
                </li>
              </ul>

              <ul className="d-flex navbar-nav">
                {/* <li className="nav-item">
                  <NavLink className="nav-link text-light" to={"/find-booking"}>
                    Find my booking
                  </NavLink>
                </li> */}


                <li className="nav-item dropdown">
                  <a
                    className={`btn btn-danger dropdown-toggle text-light ${showAccount ? "show" : ""}`}
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={handleAccountClick}>
                    <FaUserAlt className="mx-1" />  
                  </a>

                  <ul
                    className={`dropdown-menu dropdown-menu-dark  ${showAccount ? "show" : ""}`}
                    aria-labelledby="navbarDropdown">
                    {isLoggedIn ? (
                      <Logout />
                    ) : (
                      <li>
                        <Link className="dropdown-item" to={"/login"}>
                          Giriş yap <FaSignOutAlt />
                        </Link>
                      </li>
                    )}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </>
      )}
    </>
  );
};

export default Header;
