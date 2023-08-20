import React from 'react';
import styled from 'styled-components';

import instagram from "./assests/instagram.svg"
import facebook from "./assests/facebook.svg"
import whatsapp from "./assests/whatsapp.svg"
import gmail from "./assests/gmail.svg"
import linkedin from "./assests/linkedin.svg"
import youtube from "./assests/youtube.svg"


const ContactGrid = styled.div`
  display: grid;
  gap: 20px;
  padding-top: 40px;
  text-align: center;

  @media (min-width: 769px) {
    grid-template-columns: repeat(6, 1fr); /* Display five items per row on larger screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* Display three items per row on smaller screens */
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr); /* Display two items per row on even smaller screens */
  }
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
  }

  a {
    color: #333;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const Contact = () => {
  return (
    <div className='contact' id='contact' >
      {/* <Heading>Contact Me</Heading> */}
      <ContactGrid>
        <ContactItem>
          <img src= {instagram} alt="Instagram" />
          <a href="https://www.instagram.com/your_username/">Instagram</a>
        </ContactItem>
        <ContactItem>
          <img src={facebook} alt="Facebook" />
          <a href="https://www.facebook.com/your_username/">Facebook</a>
        </ContactItem>
        <ContactItem>
          <img src={whatsapp} alt="WhatsApp" />
          <a href="https://wa.me/your_phone_number/">WhatsApp</a>
        </ContactItem>
        <ContactItem>
          <img src={linkedin} alt="LinkedIn" />
          <a href="https://www.linkedin.com/in/your_username/">LinkedIn</a>
        </ContactItem>
        <ContactItem>
          <img src={gmail} alt="Gmail" />
          <p>YourEmail@gmail.com</p>
        </ContactItem>
        <ContactItem>
          <img src={youtube} alt="Youtube" />
          <p>Youtube</p>
        </ContactItem>
      </ContactGrid>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>Contact No: +919999990000</p>
      </div>
    </div>
  );
};

export default Contact;
