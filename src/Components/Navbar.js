import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import ScrollTopTopButton from "./ScrollToTopButton";
import logo from "../assets/logo.jpg";
const Navbar = () => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <>

      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
          <Link to="/" className="navbar-brand" >
            <img src={logo} alt="Mchrc logo" width={'30%'} className="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav text-center animated fadeInUp mx-auto">
              <li class="nav-item">
                <NavLink tag={Link}
                  // ClassName="active"
                  to="/">
                  Home
                </NavLink>
              </li>


              <li class="nav-item">
                <NavLink
                  tag={Link}
                  // className="active"
                  to="/about"
                >
                  About
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink
                  tag={Link}
                  // ClassName="active"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>

              {/* <li class="nav-item">
                <NavLink
                  tag={Link}
                  // ClassName="active"
                  to="/blog"

                >
                  Blog
                </NavLink>
              </li> */}
            </ul>
            <ul class="navbar-nav animated fadeIn text-center">
              <Link to="/join-us">
                <li class=" btn-contact">
                  <button type="btn" class="btn shadow light-text pry-bold br-lg">
                    Join Us
                  </button>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <ScrollTopTopButton />
    </>
  );
};

export default Navbar;
