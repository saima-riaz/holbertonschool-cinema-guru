import React from "react";
import "./navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Header = ({ userUsername, setIsLoggedIn }) => {
    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("username");
        setIsLoggedIn(false);
    };

    return (
        <nav className="header">
            <div className="header-left">
                <h1 className="header-title">Cinema Guru</h1>
            </div>
            <div className="header-right">
                <div className="user-info">
                    <img src="https://picsum.photos/100/100" alt="User Avatar" />
                    <p>Welcome, <strong>{userUsername || "Guest"}</strong>!</p>
                </div>
                <span className="logout-btn" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                </span>
            </div>
        </nav>
    );
};

export default Header;