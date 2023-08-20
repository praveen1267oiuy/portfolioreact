import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: #fff;
  padding: 40px 0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const FooterText = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  a {
    color: #fff;
    font-size: 1.5rem;
    margin: 0 10px;
    transition: color 0.3s;

    &:hover {
      color: #f39c12;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
      margin: 5px 10px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Connect with me on social media:</FooterText>
      <SocialLinks>
        <a href="https://www.instagram.com/your_username/">Instagram</a>
        <a href="https://www.facebook.com/your_username/">Facebook</a>
        <a href="https://wa.me/your_phone_number/">WhatsApp</a>
        <a href="https://www.linkedin.com/in/your_username/">LinkedIn</a>
      </SocialLinks>
      <FooterText>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
