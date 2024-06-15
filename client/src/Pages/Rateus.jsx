import React, { useState } from 'react';
import './RateUs.css';

const RateUs = () => {
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');

  const handleRatingClick = (emoji) => {
    setRating(emoji);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log('Rating:', rating);
    console.log('Comments:', comments);
  };

  return (
    <div className="container">
      <div className="rate-us-box">
        <h1>Rate Us</h1>
        <div className="emojis">
          {['😊', '😢', '😡', '😐', '🤩'].map((emoji) => (
            <span
              key={emoji}
              className={`emoji ${rating === emoji ? 'selected' : ''} ${rating === '😡' && emoji === '😡' ? 'angry' : ''}`}
              onClick={() => handleRatingClick(emoji)}
            >
              {emoji}
            </span>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="comments-form">
          <textarea
            value={comments}
            onChange={handleCommentsChange}
            placeholder="Leave your comments here..."
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RateUs;
