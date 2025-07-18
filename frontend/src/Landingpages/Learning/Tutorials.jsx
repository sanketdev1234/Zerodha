import { useState, useEffect } from "react";
import axios from "axios";
import "./Tutorials.css"; // Create this for custom styles

function Tutorials() {
  const [tutorials, setTutorials] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    axios.get("/tutorials") // Adjust base URL if needed
      .then(res => setTutorials(res.data))
      .catch(err => setTutorials([]));
  }, []);

  if (tutorials.length === 0) {
    return <div className="tutorials-loading">Loading tutorials...</div>;
  }

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? tutorials.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === tutorials.length - 1 ? 0 : prev + 1));

  const tutorial = tutorials[current];

  return (
    <div className="tutorials-slider-container mt-5">
      <div className="tutorials-slider-card">
        <h2>{tutorial.title}</h2>
        <div className="tutorials-content">{tutorial.content}</div>
        <div className="tutorials-slider-controls">
          <button onClick={handlePrev} className="tutorials-slider-btn">Previous</button>
          <span>{current + 1} / {tutorials.length}</span>
          <button onClick={handleNext} className="tutorials-slider-btn">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Tutorials;