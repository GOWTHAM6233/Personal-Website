import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {

  return (
    <div className="app-root">
      <header className="header">
        <nav className="nav container">
          <div className="logo" title="Gowtham">Gowtham<span className="logo-dot">.</span></div>
          <div className="nav-links">
            <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Projects</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
          </div>
        </nav>
      </header>

      <main className="main container">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h4>Address</h4>
            <p>Dindigul, Tamil Nadu</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>Email: gowthamp669@gmail.com</p>
            <p>Phone: +91 7010306825</p>
          </div>
          <div>
            <h4>Links</h4>
            <p><NavLink className="footer-link" to="/projects">Projects</NavLink></p>
            <p><NavLink className="footer-link" to="/about">About</NavLink></p>
          </div>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} Gowtham</div>
      </footer>
    </div>
  );
};

export default Layout;
