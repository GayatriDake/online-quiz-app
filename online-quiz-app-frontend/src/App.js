// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizList from './components/QuizList';
import Quiz from './components/Quiz';
import Leaderboard from './components/Leaderboard'; 
import Header from './components/Header'; 

const App = () => {
    const [quizId, setQuizId] = useState(null); 

    return (
        <Router>
            <Header quizId={quizId} />
            <Routes>
                <Route path="/" element={<QuizList />} />
                <Route path="/quiz/:id" element={<Quiz setQuizId={setQuizId} />} /> 
                <Route path="/quiz/:id/leaderboard" element={<Leaderboard />} /> 
            </Routes>
        </Router>
    );
};

export default App;
