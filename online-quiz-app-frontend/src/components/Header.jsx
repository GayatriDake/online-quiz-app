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
                <div className="dropdown">
                    <button onClick={toggleDropdown} className="header-button dropdown-toggle">
                        Quizzes
                    </button>
                    {isDropdownOpen && (
                        <div className="dropdown-content">
                            <Link to="/quiz/1" className="dropdown-item">History Quiz</Link>
                            <Link to="/quiz/2" className="dropdown-item">Science Quiz</Link>
                            <Link to="/quiz/3" className="dropdown-item">Math Quiz</Link>
                        </div>
                    )}
                </div>
                <div className="header-search">
                    <input type="text" placeholder="Search quizzes..." className="search-input" />
                </div>
                <Link to="/profile" className="header-button">Profile</Link>
            </nav>
        </header>
    );
};

export default Header;
