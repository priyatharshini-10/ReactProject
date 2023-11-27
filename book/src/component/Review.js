import React, { useState } from 'react';
//  import './App.css';

function Review() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ title: '', author: '', rating: '', review: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews((prevReviews) => [...prevReviews, newReview]);
    setNewReview({ title: '', author: '', rating: '', review: '' });
  };

  return (
    <div className="App">
      <h1>ADD YOUR REVIEWS HERE</h1>
      
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={newReview.title} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Author:
          <input type="text" name="author" value={newReview.author} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Rating:
          <input type="number" name="rating" value={newReview.rating} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Review:
          <textarea name="review" value={newReview.review} onChange={handleInputChange} required />
        </label>
        <br />
        <button type="submit">Submit Review</button>
      </form>
      <h2>Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index}>
          <p>
            <strong>Title:</strong> {review.title}
          </p>
          <p>
            <strong>Author:</strong> {review.author}
          </p>
          <p>
            <strong>Rating:</strong> {review.rating}
          </p>
          <p>
            <strong>Review:</strong> {review.review}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Review;