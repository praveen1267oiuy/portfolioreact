import React from 'react';
import styled from 'styled-components';

const reviewsData = [
  {
    name: 'John Doe',
    review: 'Great service and amazing results. Highly recommended!',
  },
  {
    name: 'Jane Smith',
    review: 'Excellent work! Very satisfied with the outcome.',
  },
  {
    name: 'Michael Johnson',
    review: 'Impressive skills and top-notch quality. Will work again!',
  },
  {
    name: 'Emily Davis',
    review: 'Outstanding experience! They exceeded my expectations.',
  },
];

const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Display two items per row on larger screens */
  gap: 20px;
  padding-top: 40px;
  text-align: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr); /* Display four items per row on larger screens */
  }
`;

const ReviewItem = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: #666;
  }
`;

const Review = () => {
  return (
    <div className='review'>
      <ReviewGrid>
        {reviewsData.map((review, index) => (
          <ReviewItem key={index}>
            <h3>{review.name}</h3>
            <p>{review.review}</p>
          </ReviewItem>
        ))}
      </ReviewGrid>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>You can be the next one to get services of NP Digital Agency!</p>
      </div>
    </div>
  );
};

export default Review;
