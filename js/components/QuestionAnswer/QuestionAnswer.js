import "./QuestionAnswer.css";
import React, { useEffect, useState } from "react";

const QuestionAnswer = () => {
    const [answers, setAnswers] = useState([]);
    useEffect(() => {
        fetch("QuestionAnswer.json")
            .then(res => res.json())
            .then(data => setAnswers(data));
    }, []);
    return (
        <div className="answer-container">
            {answers.map(answer => (
                <div key={answer.id} className="answer">
                    <h3>Question: {answer.question}</h3>
                    <p>
                        <strong>Answer:</strong> {answer.answer}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default QuestionAnswer;
