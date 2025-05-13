import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import CSS for styling

const Header = ({ quizId }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="header-container">
            <h1 className="header-title">Online Quiz App</h1>
            <nav className="header-nav">
                <Link to="/" className="header-button">Home</Link>
                {quizId && (
                    <Link to={`/quiz/${quizId}/leaderboard`} className="header-button">Leaderboard</Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
