import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Quiz.css";

function QuizSlider() {
  const [quizzes, setQuizzes] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    axios.get("/quizzes")
      .then(res => {
        setQuizzes(res.data);
        setLoading(false);
      })
      .catch(() => {
        setQuizzes([]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Reset state when moving to a new quiz
    setSelected(null);
    setSubmitted(false);
    setShowExplanation(false);
  }, [current]);

  if (loading) {
    return <div className="quiz-card">Loading quizzes...</div>;
  }
  if (!quizzes.length) {
    return <div className="quiz-card">No quizzes available.</div>;
  }

  // Show summary if completed
  if (completed) {
    let performance = "";
    const percent = (score / quizzes.length) * 100;
    if (percent === 100) performance = "Outstanding! You're a trading pro!";
    else if (percent >= 80) performance = "Great job! You have strong trading knowledge.";
    else if (percent >= 60) performance = "Good effort! Keep learning to improve.";
    else performance = "Don't worry, keep practicing and you'll get better!";
    return (
      <div className="quiz-slider-container">
        <div className="quiz-card" style={{textAlign: 'center'}}>
          <h2>Your Quiz Results</h2>
          <div style={{fontSize: '1.3rem', margin: '1rem 0'}}>
            Score: <b>{score} / {quizzes.length}</b>
          </div>
          <div style={{marginBottom: '1.5rem', color: '#2563eb', fontWeight: 600}}>{performance}</div>
          <div style={{marginBottom: '2rem'}}>Ready to put your knowledge into action?</div>
          <a href="/signup" className="quiz-register-btn">Register & Start Trading</a>
        </div>
      </div>
    );
  }

  const quiz = quizzes[current];

  const handleSelect = (idx) => {
    if (!submitted) setSelected(idx);
  };

  const handleSubmit = () => {
    if (selected !== null) {
      setSubmitted(true);
      if (selected === quiz.correctIndex) {
        setScore((prev) => prev + 1);
      }
    }
  };

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? quizzes.length - 1 : prev - 1));
  const handleNext = () => {
    if (current === quizzes.length - 1) {
      setCompleted(true);
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  return (
    <div className="quiz-slider-container mt-5">
      <div className="quiz-card">
        <h2 className="quiz-title">Quiz {current + 1} of {quizzes.length}</h2>
        <div className="quiz-question">{quiz.question}</div>
        <ul className="quiz-options">
          {quiz.options.map((opt, idx) => {
            let bulletClass = "quiz-bullet";
            if (submitted) {
              if (idx === quiz.correctIndex) bulletClass += " correct";
              else if (idx === selected && selected !== quiz.correctIndex) bulletClass += " wrong";
            }
            return (
              <li key={idx} className="quiz-option">
                <span className={bulletClass} tabIndex={0}></span>
                <label
                  className={`quiz-label ${selected === idx ? "selected" : ""} ${submitted ? "disabled" : ""}`}
                  onClick={() => handleSelect(idx)}
                >
                  {opt}
                </label>
              </li>
            );
          })}
        </ul>
        {!submitted && (
          <button className="quiz-submit-btn" onClick={handleSubmit} disabled={selected === null}>
            Submit
          </button>
        )}
        {submitted && (
          <div className="quiz-feedback">
            {selected === quiz.correctIndex ? (
              <span className="quiz-correct-msg">Correct!</span>
            ) : (
              <span className="quiz-wrong-msg">Incorrect.</span>
            )}
            <button className="quiz-explanation-btn" onClick={() => setShowExplanation((v) => !v)}>
              {showExplanation ? "Hide Explanation" : "Show Explanation"}
            </button>
            {showExplanation && <div className="quiz-explanation">{quiz.explanation || "No explanation provided."}</div>}
          </div>
        )}
        <div className="quiz-slider-controls">
          <button onClick={handlePrev} className="quiz-slider-btn">Previous</button>
          {submitted && (
            <button onClick={handleNext} className="quiz-slider-btn">
              {current === quizzes.length - 1 ? "Finish" : "Next"}
            </button>
          )}
          <span>{current + 1} / {quizzes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default QuizSlider;