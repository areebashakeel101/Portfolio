import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  padding: 3rem 0;
  background: var(--secondary-color);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const SocialLink = styled.a`
  color: var(--text-secondary);
  font-size: 1.5rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--accent-color);
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  color: var(--text-muted);
  font-size: 0.9rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
`;

const Highlight = styled.span`
  color: var(--accent-color);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <SocialLink href="https://github.com/areebashakeel101" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/beera/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="mailto:beerasatti121@gmail.com">
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
        
        <Copyright>
          Designed & Built by <Highlight>Areeba Shakeel</Highlight> <br />
          © {new Date().getFullYear()} All Rights Reserved
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;