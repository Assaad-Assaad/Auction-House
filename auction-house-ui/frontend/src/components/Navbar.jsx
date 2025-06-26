import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Navbar.css';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import { isAdmin, isAuthenticated, getUserName } from '../services/auth';



function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("login");
  const [showAdminMenu, setShowAdminMenu] = useState(false); 

  const navigate = useNavigate();
  const isLoggedIn = isAuthenticated();
  const username = getUserName();

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/">Auction House</Link>
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>

        {/* ADMIN DROPDOWN */}
        {isLoggedIn && isAdmin() && (
          <div
            tabIndex="0"
            className="dropdown"
            onFocus={() => setShowAdminMenu(true)}
            onBlur={() => setShowAdminMenu(false)}
            onClick={() => setShowAdminMenu(prev => !prev)}
          >
            <span className="nav-link">Admin ▾</span>
            {showAdminMenu && (
              <div className="dropdown-menu" role="menu">
                <Link to="/admin/auctions" className="dropdown-item" role="menuitem">
                  Auctions
                </Link>
                <Link to="/admin/categories" className="dropdown-item" role="menuitem">
                  Categories
                </Link>
                <Link to="/admin/reports" className="dropdown-item" role="menuitem">
                  Reports
                </Link>
              </div>
            )}
          </div>
        )}

        {!isLoggedIn ? (
          <>
            <button
              onClick={() => { setModalMode("login"); setShowModal(true); }}
              className="nav-button"
              aria-label="Open login form"
            >
              Login
            </button>
            <button
              onClick={() => { setModalMode("register"); setShowModal(true); }}
              className="nav-button"
              aria-label="Open registration form"
            >
              Register
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/profile")}
              className="nav-button"
              aria-label="Go to profile"
            >
              Profile
            </button>
            <span className="nav-user">Hello, {username}</span>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
              }}
              className="nav-button"
              aria-label="Logout"
            >
              Logout
            </button>
          </>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {modalMode === "login" ? (
              <LoginForm onClose={() => setShowModal(false)} />
            ) : (
              <RegisterForm onClose={() => setShowModal(false)} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;