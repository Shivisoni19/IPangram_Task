import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Colors } from "../Utils/Colors";

export default function CustomNavbar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light home-border-radius sticky-top"
        style={{ backgroundColor: Colors.Background }}
      >
        <div className="container">
          <Link
            className="navbar-brand nav-font"
            to="/"
          >
            <span style={{ color: Colors.LightBlue }}>I-Pangram</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShow(!show)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link mx-3 text-white font-44"
                  to="/about"
                  style={{ fontFamily: "Gilroy_Medium" }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-3 text-white font-44"
                  to="/"
                  style={{ fontFamily: "Gilroy_Medium" }}
                >
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
              <Link
                  className="nav-link mx-3 text-white font-44"
                  style={{ fontFamily: "Gilroy_Medium" }}
                  to="/login"
                >
                  Admin Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-3 text-white font-44"
                  to="/login"
                  style={{ fontFamily: "Gilroy_Medium" }}>
                  User Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-3 text-white font-44"
                  to="/dashboard"
                  style={{ fontFamily: "Gilroy_Medium" }}>
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
