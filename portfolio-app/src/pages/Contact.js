import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaMapMarkerAlt, FaRocket, FaHandshake, FaCode } from 'react-icons/fa';

const gradientShift = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
`;

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: 120px 2rem 5rem;
  background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.1), transparent 50%),
              radial-gradient(circle at bottom left, rgba(45, 212, 191, 0.1), transparent 50%),
              radial-gradient(ellipse at center, rgba(15, 23, 42, 1), rgba(15, 23, 42, 1));
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 15%;
    right: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.08), transparent 60%);
    border-radius: 50%;
    animation: ${float} 10s ease-in-out infinite;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 5rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #f8fafc 0%, #818cf8 50%, #2dd4bf 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientShift} 5s ease infinite;
`;

const Subtitle = styled.p`
  color: var(--text-secondary);
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const InfoSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactCard = styled(motion.div)`
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 2.5rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent-color), #2dd4bf);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    border-color: var(--accent-color);
    box-shadow: 0 25px 50px rgba(99, 102, 241, 0.2);
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(45, 212, 191, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
  animation: ${float} 4s ease-in-out infinite;
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 0.75rem;
`;

const CardText = styled.p`
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.7;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const InfoItem = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-secondary);
  padding: 1.25rem 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  
  svg {
    color: var(--accent-color);
    font-size: 1.25rem;
    flex-shrink: 0;
  }
  
  &:hover {
    background: rgba(99, 102, 241, 0.15);
    border-color: rgba(99, 102, 241, 0.3);
    color: var(--text-color);
    transform: translateX(8px);
  }
`;

const FormSection = styled(motion.div)`
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent);
    opacity: 0.5;
    pointer-events: none;
  }
`;

const FormTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    color: var(--accent-color);
  }
`;

const FormSubtitle = styled.p`
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  z-index: 1;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  color: var(--text-color);
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--accent-color);
    background: rgba(99, 102, 241, 0.1);
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.2);
  }
  
  &::placeholder {
    color: var(--text-muted);
  }
`;

const TextArea = styled.textarea`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  color: var(--text-color);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--accent-color);
    background: rgba(99, 102, 241, 0.1);
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.2);
  }
  
  &::placeholder {
    color: var(--text-muted);
  }
`;

const SubmitButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  background: linear-gradient(135deg, var(--accent-color), #818cf8);
  color: white;
  border: none;
  border-radius: 14px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(99, 102, 241, 0.4);
  }
`;

const SocialSection = styled(motion.div)`
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(45, 212, 191, 0.08));
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const SocialTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
`;

const SocialText = styled.p`
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const SocialGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const SocialButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  color: var(--text-secondary);
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  svg {
    font-size: 1.25rem;
  }
  
  &:hover {
    background: var(--accent-color);
    border-color: var(--accent-color);
    color: white;
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 15px 35px rgba(99, 102, 241, 0.35);
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContentWrapper>
        <Header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title>Let's Connect</Title>
          <Subtitle>
            I'm always excited to collaborate on innovative AI projects, discuss new opportunities, 
            or just chat about the latest in tech
          </Subtitle>
        </Header>

        <MainGrid>
          <InfoSection
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactCard whileHover={{ scale: 1.02 }}>
              <CardIcon><FaRocket /></CardIcon>
              <CardTitle>Open for Opportunities</CardTitle>
              <CardText>
                Whether it's a full-time role, freelance project, or exciting collaboration in AI/ML - I'm all ears!
              </CardText>
            </ContactCard>
            
            <ContactCard whileHover={{ scale: 1.02 }}>
              <CardIcon><FaHandshake /></CardIcon>
              <CardTitle>Let's Build Together</CardTitle>
              <CardText>
                Looking for a developer who can bring AI-powered ideas to life? Let's create something amazing.
              </CardText>
              <ContactInfo>
                <InfoItem 
                  href="mailto:syedmozamilshah99@gmail.com"
                  whileHover={{ x: 8 }}
                >
                  <FaEnvelope />
                  syedmozamilshah99@gmail.com
                </InfoItem>
                <InfoItem 
                  href="#"
                  whileHover={{ x: 8 }}
                >
                  <FaMapMarkerAlt />
                  Islamabad, Pakistan
                </InfoItem>
              </ContactInfo>
            </ContactCard>
          </InfoSection>

          <FormSection
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FormTitle><FaCode /> Send a Message</FormTitle>
            <FormSubtitle>Drop me a line and I'll get back to you soon!</FormSubtitle>
            
            <Form>
              <InputGroup>
                <Label>Your Name</Label>
                <Input type="text" placeholder="John Doe" />
              </InputGroup>
              
              <InputGroup>
                <Label>Email Address</Label>
                <Input type="email" placeholder="john@example.com" />
              </InputGroup>
              
              <InputGroup>
                <Label>Your Message</Label>
                <TextArea placeholder="Hi Mozamil, I'd love to discuss..." />
              </InputGroup>
              
              <SubmitButton
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane /> Send Message
              </SubmitButton>
            </Form>
          </FormSection>
        </MainGrid>

        <SocialSection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <SocialTitle>Find Me Online</SocialTitle>
          <SocialText>
            Connect with me on social platforms to stay updated with my latest projects and thoughts
          </SocialText>
          <SocialGrid>
            <SocialButton 
              href="https://github.com/syedmozamilshah" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub /> GitHub
            </SocialButton>
            <SocialButton 
              href="https://linkedin.com/in/syed-mozamil-shah-873a26230" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin /> LinkedIn
            </SocialButton>
            <SocialButton 
              href="mailto:syedmozamilshah99@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope /> Email
            </SocialButton>
          </SocialGrid>
        </SocialSection>
      </ContentWrapper>
    </ContactContainer>
  );
};

export default Contact;
