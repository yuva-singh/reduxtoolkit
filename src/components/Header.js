import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const items = useSelector((state) => state.cart);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Redux Toolkit
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/card">
                Card
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <div type="button" className="position-relative">
             <NavLink to={"/card"} className="text-dark"><i className="bi bi-cart-check fs-1"></i>
              <span className="position-absolute bottom-0 start-100 translate-middle badge rounded-4 bg-success">
                {items.length}
                {/* <span className="visually-hidden">unread messages</span> */}
              </span>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
