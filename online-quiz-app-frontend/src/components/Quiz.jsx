import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'; // Import Link to add navigation
import './Quiz.css';

const Quiz = () => {
    const { id } = useParams(); // Use useParams to get the quiz id
    const [quiz, setQuiz] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [userName, setUserName] = useState(''); // State to store user's name
    const [nameSubmitted, setNameSubmitted] = useState(false); // To track if the name is submitted

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/quizzes/${id}`);
                setQuiz(response.data);
            } catch (error) {
                console.error('Error fetching quiz:', error);
            }
        };
        fetchQuiz();
    }, [id]); // use id from useParams

    const handleSubmitName = (e) => {
        e.preventDefault();
        if (userName.trim() !== '') {
            setNameSubmitted(true); // If name is not empty, allow starting the quiz
        }
    };

    const handleSubmitQuiz = async (e) => {
        e.preventDefault();
        try {
            console.log('Submitting answers:', answers, 'User Name:', userName);
            const response = await axios.post(`http://localhost:5001/quizzes/${quiz.id}/submit`, { answers, userName });
            setScore(response.data.score);
            setSubmitted(true);
        } catch (error) {
            console.error('Error submitting answers:', error);
        }
    };

    if (!quiz) return <div className="loading">Loading...</div>;

    return (
        <div className="quiz-container">
            <h2 className="quiz-title">{quiz.title}</h2>

            {/* Name input form */}
            {!nameSubmitted ? (
                <form className="name-form" onSubmit={handleSubmitName}>
                    <label htmlFor="name-input">Enter your name to start the quiz:</label>
                    <input
                        type="text"
                        id="name-input"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="name-input"
                        required
                    />
                    <button type="submit" className="start-quiz-button">Start Quiz</button>
                </form>
            ) : (
                /* Quiz form appears only after name is submitted */
                <form className="quiz-form" onSubmit={handleSubmitQuiz}>
                    {quiz.questions.map((question, index) => (
                        <div key={index} className="question-block">
                            <p className="question-text">{question.question}</p>
                            {question.options.map((option) => (
                                <label key={option} className="option-label">
                                    <input
                                        type="radio"
                                        name={`question${index}`}
                                        value={option}
                                        onChange={(e) => setAnswers(prev => {
                                            const newAnswers = [...prev];
                                            newAnswers[index] = e.target.value;
                                            return newAnswers;
                                        })}
                                        className="option-input"
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    ))}
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            )}

            {submitted && <div className="score-display">Your score: {score}</div>}

            {/* Add Leaderboard link here */}
            {nameSubmitted && (
                <Link to={`/quiz/${id}/leaderboard`} className="leaderboard-link">View Leaderboard</Link>
            )}
        </div>
    );
};

export default Quiz;
