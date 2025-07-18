import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GeminiAdvisorSuggestions.css';

function GeminiAdvisorSuggestions() {
  const [suggestion, setSuggestion] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchSuggestion = () => {
    setLoading(true);
    setError('');
    axios.get('/api/advisor/gemini-suggestions')
      .then(res => {
        setSuggestion(res.data.suggestion);
        setLoading(false);
      })
      .catch(() => {
        setError('Could not load suggestions.');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchSuggestion();
  }, []);

  return (
    <div className="gemini-advisor-card">
      <h3 className="gemini-advisor-title">AI Trading Suggestions</h3>
      <button className="gemini-advisor-refresh" onClick={fetchSuggestion} disabled={loading}>
        {loading ? 'Loading...' : 'Refresh'}
      </button>
      {error && <div className="gemini-advisor-error">{error}</div>}
      {!error && !loading && (
        <div className="gemini-advisor-suggestion">
          {suggestion.split('\n').map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
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