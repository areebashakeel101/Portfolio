import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';

// Animations
const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(3deg); }
  50% { transform: translateY(-15px) rotate(0deg); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
  50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.6), 0 0 60px rgba(45, 212, 191, 0.3); }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const HomeContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.12), transparent 40%),
              radial-gradient(circle at bottom left, rgba(45, 212, 191, 0.08), transparent 40%),
              radial-gradient(circle at center, rgba(15, 23, 42, 1), rgba(15, 23, 42, 1));
  overflow-x: hidden;
`;

// Hero Section Styles
const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
`;

const HeroGlassCard = styled(motion.div)`
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 32px;
  padding: 4rem;
  width: 100%;
  max-width: 1300px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent);
  }

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 2.5rem;
    gap: 2.5rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 968px) {
    align-items: center;
  }
`;

const Badge = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(45, 212, 191, 0.1));
  color: var(--accent-color);
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(99, 102, 241, 0.3);
  width: fit-content;
  font-family: 'Plus Jakarta Sans', sans-serif;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: #2dd4bf;
    border-radius: 50%;
    animation: ${pulse} 2s ease-in-out infinite;
  }
`;

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.1;
  background: linear-gradient(135deg, #f8fafc 0%, #818cf8 50%, #2dd4bf 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shimmer} 5s ease infinite;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  color: var(--text-secondary);
  font-weight: 400;
  
  span {
    background: linear-gradient(90deg, #2dd4bf, #818cf8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.125rem;
  color: var(--text-muted);
  line-height: 1.9;
  max-width: 600px;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PrimaryButton = styled(Link)`
  background: linear-gradient(135deg, var(--accent-color), #818cf8);
  color: white;
  padding: 1rem 2rem;
  border-radius: 14px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: ${glow} 3s ease-in-out infinite;
  
  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.4);
    color: white;
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
`;

const SecondaryButton = styled(Link)`
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-color);
  padding: 1rem 2rem;
  border-radius: 14px;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--accent-color);
    transform: translateY(-4px);
    color: white;
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%);
    z-index: -1;
    animation: ${pulse} 4s ease-in-out infinite;
  }
`;

const ProfileImage = styled.img`
  width: 360px;
  height: 360px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid rgba(99, 102, 241, 0.4);
  box-shadow: 0 25px 50px rgba(0,0,0,0.4), 0 0 40px rgba(99, 102, 241, 0.3);
  animation: ${float} 6s ease-in-out infinite;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(45, 212, 191, 0.1));

  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialLink = styled(motion.a)`
  color: var(--text-secondary);
  font-size: 1.3rem;
  transition: all 0.3s ease;
  padding: 0.75rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: var(--accent-color);
    border-color: var(--accent-color);
    color: white;
    transform: translateY(-5px) rotate(5deg);
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
  }
`;

// CTA Section
const CTASection = styled(motion.section)`
  padding: 5rem 2rem;
  text-align: center;
`;

const CTACard = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(45, 212, 191, 0.1));
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 32px;
  padding: 4rem 3rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent);
    border-radius: 50%;
  }
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #f8fafc, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CTAText = styled.p`
  color: var(--text-secondary);
  font-size: 1.15rem;
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

// Component
const Home = () => {

  return (
    <HomeContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroGlassCard
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ContentWrapper>
            <Badge
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Available for opportunities
            </Badge>
            
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Areeba Shakeel
            </Title>
            
            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Innovative <span>AI Full Stack Developer</span>
            </Subtitle>
            
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Passionate about building intelligent systems that solve real-world problems. 
              I specialize in creating RAG-based chatbots and AI applications that provide 
              actionable insights and deliver seamless digital experiences.
            </Description>
            
            <ButtonGroup
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <PrimaryButton to="/projects">
                View Projects <FaArrowRight />
              </PrimaryButton>
              <SecondaryButton to="/about">
                Learn More
              </SecondaryButton>
            </ButtonGroup>
            
            <SocialLinks
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <SocialLink 
                href="https://github.com/areebashakeel101" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
              </SocialLink>
              <SocialLink 
                href="https://linkedin.com/in/beera" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
              </SocialLink>
              <SocialLink 
                href="mailto:beerasatti121@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
              </SocialLink>
            </SocialLinks>
          </ContentWrapper>
          
          <ImageWrapper
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ProfileImage src={require('../pics/areebaphoto.png')} alt="Areeba Shakeel" />
          </ImageWrapper>
        </HeroGlassCard>
      </HeroSection>

      {/* CTA Section */}
      <CTASection
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <CTACard>
          <CTATitle>Let's Build Something Amazing</CTATitle>
          <CTAText>
            I'm always excited to collaborate on innovative projects and discuss new opportunities in AI and Full Stack development.
          </CTAText>
          <CTAButtons>
            <PrimaryButton to="/projects">
              Explore Projects <FaArrowRight />
            </PrimaryButton>
            <SecondaryButton as="a" href="mailto:beerasatti121@gmail.com">
              Get in Touch
            </SecondaryButton>
          </CTAButtons>
        </CTACard>
      </CTASection>
    </HomeContainer>
  );
};

export default Home;