import React from 'react';
import styled from 'styled-components';

const servicesData = [
  {
    title: 'Web Development',
    description: 'Creating interactive and innovative web experiences.',
  },
  {
    title: 'AI Artist',
    description: 'Designing AI-generated art using Midjourney and DALL-E.',
  },
  {
    title: 'Canva Designing',
    description: 'Creating visually appealing graphics using Canva.',
  },
  {
    title: 'Prompt Engineer',
    description: 'Engineering ChatGPT prompts for enhanced user interactions.',
  },
];

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding-top: 40px; `;

const ServiceItem = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  margin-bottom: 20px;

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #666;
    font-family: 'Poppins', sans-serif;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #FAF0E6;
  padding-top: 20px;
  margin-bottom: 5px;
`;

const Service = () => {
  return (
    <div className='service' id='services'  >
      <Heading>Our Services</Heading>
      <ServiceGrid>
        {servicesData.map((service, index) => (
          <ServiceItem key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </ServiceItem>
        ))}
      </ServiceGrid>
    </div>
  );
};

export default Service;