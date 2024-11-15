import React from 'react';
import './Navbar.css';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell ,faLocationDot } from '@fortawesome/free-solid-svg-icons';
 

function Navbar() {
    return (
        <>
            <div className="navbar-component">
                {/* Logo Section */}
                <div className="logo">hola'</div>

                {/* Search Bar Section */}
                <div className="search-bar">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    <input type="text" placeholder="search" />
                </div>

                {/* Notification Bell Icon */}
                <FontAwesomeIcon icon={faBell} className="notification-bell" />

                {/* Location Icon */}
                <FontAwesomeIcon icon={faLocationDot} className="location-icon" />



                {/* Profile Section */}
                <div className="current-profile">
                    <img src="" alt="" className="profile-pic" />@Naisyaa
                </div>
            </div>
        </>
    );
}

export default Navbar;









