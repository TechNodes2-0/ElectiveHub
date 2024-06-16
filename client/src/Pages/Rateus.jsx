import React, { useState } from 'react';
import styles from './RateUs.module.css';

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
    <div className={styles['rate-us__container']}>
      <div className={styles['rate-us__box']}>
        <h1 className={styles['rate-us__title']}>Rate Us</h1>
        <div className={styles['rate-us__emojis']}>
          {['😢', '😡', '😐','😊' ,'🤩'].map((emoji) => (
            <span
              key={emoji}
              className={`${styles['rate-us__emoji']} ${rating === emoji ? styles['rate-us__emoji--selected'] : ''} ${rating === '😡' && emoji === '😡' ? styles['rate-us__emoji--angry'] : ''}`}
              onClick={() => handleRatingClick(emoji)}
            >
              {emoji}
            </span>
          ))}
        </div>
        <form onSubmit={handleSubmit} className={styles['rate-us__comments-form']}>
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
