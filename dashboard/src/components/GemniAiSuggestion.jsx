import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GeminiAdvisorSuggestions.css';

function GeminiAdvisorSuggestions() {
  const [suggestion, setSuggestion] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [rating, setRating] = useState(0);
  const [rated, setRated] = useState(false);

  const fetchSuggestion = () => {
    setLoading(true);
    setError('');
    axios.get('/api/advisor/gemini-suggestions')
      .then(res => {
        setSuggestion(res.data || '');
        setLoading(false);
        setRating(0);
        setRated(false);
      })
      .catch(() => {
        setError('Could not load suggestions.');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchSuggestion();
  }, []);

  const handleRate = (value) => {
    setRating(value);
    setRated(true);
    // Optionally, send the rating to your backend here
  };

  return (
    <div className="gemini-advisor-card" style={{ maxHeight: 600, margin: '2rem auto' }}>
      <h3 className="gemini-advisor-title">AI Trading Suggestions</h3>
      <button className="gemini-advisor-refresh" onClick={fetchSuggestion} disabled={loading}>
        {loading ? 'Loading...' : 'Refresh'}
      </button>
      {error && <div className="gemini-advisor-error">{error}</div>}
      {!error && !loading && typeof suggestion === 'string' && (
        <div className="gemini-advisor-suggestion"   style={{
          height: 300, // or any fixed value you want
          minHeight: 180,
          maxHeight: 500,
          margin: '0 auto',
          overflowY: 'auto',
          overflowX: 'hidden'
        }}>
          {(suggestion || '').split('\n').map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
          <div className="gemini-advisor-rating" style={{ marginTop: 20, textAlign: 'center' }}>
            <span style={{ marginRight: 8 }}>Rate this suggestion:</span>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                style={{
                  cursor: rated ? 'default' : 'pointer',
                  color: star <= rating ? '#fbbf24' : '#d1d5db',
                  fontSize: 24,
                  marginRight: 2,
                  transition: 'color 0.2s'
                }}
                onClick={() => !rated && handleRate(star)}
                role="button"
                aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                tabIndex={0}
              >
                ★
              </span>
            ))}
            {rated && <span style={{ marginLeft: 10, color: '#22c55e' }}>Thank you!</span>}
          </div>
        </div>
      )}
      {loading && (
        <div className="gemini-advisor-spinner">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
}

export default GeminiAdvisorSuggestions;
