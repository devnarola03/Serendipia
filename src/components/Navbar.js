import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  const { title, isDarkMode, toggleDarkMode } = props;

  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark navbg' : 'navbar-light navbg'}`}>
      <div className="container-fluid">
        <a className={`navbar-brand ${isDarkMode ? 'text-dark' : 'text-light'} `} href="/"> 
          <img src="/img32.png" alt="" />
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${isDarkMode ? 'text-dark' : 'text-light'}`}></span>
        </button>
        <div className={`collapse navbar-collapse ${isDarkMode ? 'text-dark' : 'text-light'}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link ${isDarkMode ? 'text-dark' : 'text-light'}`} aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${isDarkMode ? 'text-dark' : 'text-light'}`} aria-current="page" target='blank' href="https://www.livechat.com/typing-speed-test/#/">
                Test Typing Speed
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${isDarkMode ? 'text-dark' : 'text-light'}`} href="/about">
                About
              </a>
            </li>
            <li className="nav-item" onClick={toggleDarkMode}>
              {isDarkMode ? (
                <i className="nav-link bi bi-sun text-dark"></i>
              ) : (
                <i className="nav-link bi bi-moon text-light"></i>
              )}
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
