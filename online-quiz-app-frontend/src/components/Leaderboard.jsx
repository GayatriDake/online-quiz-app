import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams for getting URL params
import './Leaderboard.css'; // Importing CSS for styling

const Leaderboard = () => {
    const { id: quizId } = useParams(); // Get the quizId from URL parameters
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            const response = await axios.get(`http://localhost:5000/leaderboard/${quizId}`); // Correct the endpoint to access leaderboard
            setScores(response.data);
        };
        fetchLeaderboard();
    }, [quizId]);

    return (
        <div className="leaderboard-container">
            <h1 className="leaderboard-title">Leaderboard</h1>
            <table className="leaderboard-table">
                <thead>
                    <tr>
                        <th className="leaderboard-header">Rank</th>
                        <th className="leaderboard-header">Name</th>
                        <th className="leaderboard-header">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {scores.length > 0 ? (
                        scores.map((score, index) => (
                            <tr key={score.id} className="leaderboard-row">
                                <td className="leaderboard-cell">{index + 1}</td>
                                <td className="leaderboard-cell">{score.user_name}</td>
                                <td className="leaderboard-cell">{score.score}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="no-scores">No scores available yet.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
