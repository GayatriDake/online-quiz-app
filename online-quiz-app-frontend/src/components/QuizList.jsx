import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './QuizList.css'; 

const QuizList = () => {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await axios.get('http://localhost:5000/quizzes');
                console.log(response.data); // Log the response
                setQuizzes(response.data); // Adjust based on the response structure
            } catch (error) {
                console.error('Error fetching quizzes:', error);
            }
        };
        fetchQuizzes();
    }, []);

    return (
        <div className="quiz-list-container">
            <h1 className="quiz-list-title">Available Quizzes</h1>
            <div className="quiz-cards-container">
                {quizzes.length > 0 ? (
                    quizzes.map((quiz) => (
                        <div key={quiz.id} className="quiz-card">
                            <h2 className="quiz-card-title">{quiz.title}</h2>
                            <p className="quiz-card-description">{quiz.description}</p>
                            <Link to={`/quiz/${quiz.id}`} className="start-quiz-button">Start Quiz</Link>
                        </div>
                    ))
                ) : (
                    <p className="no-quizzes">No quizzes available at the moment.</p>
                )}
            </div>
        </div>
    );
};

export default QuizList;
