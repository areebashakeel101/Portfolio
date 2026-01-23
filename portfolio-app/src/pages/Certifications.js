import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaCertificate, FaAward, FaExternalLinkAlt, FaPython, FaBrain, FaRobot } from 'react-icons/fa';

// Import certificate PDFs
import pythonCert from '../certificates/IBM PY0101EN Certificate _ Cognitive Class.pdf';
import ragLangchainCert from '../certificates/coursera-certificatefor-ragandlangchain.pdf';
import generativeAICert from '../certificates/Coursere-generativeAI.pdf';
import kerasDeepLearningCert from '../certificates/Coursera deep learning.pdf';
import tensorflowCert from '../certificates/coursera-certificatefortensorflow.pdf';
import experienceCert from '../experience/certificate-experience.pdf';

const gradientShift = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const CertContainer = styled.div`
  min-height: 100vh;
  padding: 120px 2rem 5rem;
  background: radial-gradient(circle at top right, rgba(45, 212, 191, 0.08), transparent 50%),
              radial-gradient(circle at center left, rgba(99, 102, 241, 0.08), transparent 50%),
              radial-gradient(circle at center, rgba(15, 23, 42, 1), rgba(15, 23, 42, 1));
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 30%;
    left: -15%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent 60%);
    border-radius: 50%;
    animation: ${float} 12s ease-in-out infinite;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
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
  line-height: 1.7;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: var(--accent-color);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
  }
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--accent-color), #2dd4bf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 500;
`;

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 24px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, var(--accent-color), #2dd4bf, transparent);
    
    @media (max-width: 768px) {
      left: 16px;
    }
  }
`;

const CertCard = styled(motion.a)`
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem 2rem 2rem 4rem;
  margin-bottom: 1.5rem;
  margin-left: 2rem;
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
  text-decoration: none;
  
  &::before {
    content: '';
    position: absolute;
    left: -2.5rem;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background: linear-gradient(135deg, var(--accent-color), #2dd4bf);
    border-radius: 50%;
    border: 3px solid var(--bg-color);
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
    z-index: 2;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props => props.gradient || 'linear-gradient(90deg, var(--accent-color), #2dd4bf)'};
    border-radius: 20px 20px 0 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  
  &:hover {
    transform: translateX(10px);
    border-color: var(--accent-color);
    box-shadow: 0 20px 50px rgba(99, 102, 241, 0.2);
    
    &::after {
      transform: scaleX(1);
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1.5rem;
    padding: 1.5rem 1.5rem 1.5rem 2.5rem;
  }
`;

const CertInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex: 1;
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: ${props => props.bg || 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(45, 212, 191, 0.1))'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${props => props.color || 'var(--accent-color)'};
  flex-shrink: 0;
  animation: ${float} 4s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
`;

const TextContent = styled.div`
  flex: 1;
`;

const CertTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 0.5rem;
  line-height: 1.4;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ViewBadge = styled.span`
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(45, 212, 191, 0.15));
  color: var(--accent-color);
  padding: 0.3rem 0.75rem;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border: 1px solid rgba(99, 102, 241, 0.3);
  
  svg {
    font-size: 0.6rem;
  }
`;

const CertProvider = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
  
  svg {
    color: var(--accent-color);
  }
`;

const DateBadge = styled.span`
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(45, 212, 191, 0.1));
  color: var(--accent-color);
  padding: 0.6rem 1.25rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: 'Fira Code', monospace;
  white-space: nowrap;
  border: 1px solid rgba(99, 102, 241, 0.2);
`;

const CategorySection = styled(motion.div)`
  margin-top: 4rem;
`;

const CategoryTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    color: var(--accent-color);
  }
`;

const ExperienceSection = styled(motion.div)`
  margin-top: 4rem;
`;

const ExperienceCard = styled(motion.a)`
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.05));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(251, 191, 36, 0.2);
  border-radius: 24px;
  padding: 2.5rem;
  display: block;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #fbbf24, #f59e0b);
  }
  
  &:hover {
    transform: translateY(-8px);
    border-color: #fbbf24;
    box-shadow: 0 25px 50px rgba(251, 191, 36, 0.15);
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ExperienceInfo = styled.div`
  flex: 1;
`;

const ExperienceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ExperienceCompany = styled.p`
  color: #fbbf24;
  font-size: 1.1rem;
  font-family: 'Fira Code', monospace;
  margin-bottom: 1rem;
`;

const ExperienceDate = styled.span`
  background: rgba(251, 191, 36, 0.15);
  color: #fbbf24;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: 'Fira Code', monospace;
  border: 1px solid rgba(251, 191, 36, 0.3);
  white-space: nowrap;
`;

const ExperienceDescription = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
  
  li {
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
    padding-left: 1.5rem;
    position: relative;
    line-height: 1.7;
    
    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: #fbbf24;
    }
  }
`;

const Certifications = () => {
  const certifications = [
    { 
      name: "Python for Data Science", 
      provider: "Cognitive Class - IBM", 
      date: "Aug 2024",
      icon: <FaPython />,
      color: "#3776ab",
      gradient: "linear-gradient(90deg, #3776ab, #ffd43b)",
      pdfLink: pythonCert
    },
    { 
      name: "Fundamentals of AI Agent using RAG and LangChain", 
      provider: "Coursera", 
      date: "Jul 2025",
      icon: <FaRobot />,
      color: "#2dd4bf",
      gradient: "linear-gradient(90deg, #2dd4bf, #22d3ee)",
      pdfLink: ragLangchainCert
    },
    { 
      name: "Generative AI for Everyone", 
      provider: "Coursera", 
      date: "Jul 2025",
      icon: <FaBrain />,
      color: "#818cf8",
      gradient: "linear-gradient(90deg, #818cf8, #6366f1)",
      pdfLink: generativeAICert
    },
    { 
      name: "Introduction to Deep Learning and Neural Networks with Keras", 
      provider: "Coursera", 
      date: "Jan 2026",
      icon: <FaBrain />,
      color: "#f472b6",
      gradient: "linear-gradient(90deg, #f472b6, #ec4899)",
      pdfLink: kerasDeepLearningCert
    },
    { 
      name: "Deep Learning with Keras and TensorFlow", 
      provider: "Coursera", 
      date: "Jul 2025",
      icon: <FaBrain />,
      color: "#fbbf24",
      gradient: "linear-gradient(90deg, #fbbf24, #f59e0b)",
      pdfLink: tensorflowCert
    }
  ];

  return (
    <CertContainer>
      <ContentWrapper>
        <Header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title>Certifications & Experience</Title>
          <Subtitle>
            Continuous learning and professional development in AI, Machine Learning, and modern technologies
          </Subtitle>
        </Header>

        <StatsGrid>
          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <StatNumber>5+</StatNumber>
            <StatLabel>Certifications Earned</StatLabel>
          </StatCard>
          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <StatNumber>3</StatNumber>
            <StatLabel>AI/ML Specializations</StatLabel>
          </StatCard>
          <StatCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <StatNumber>100+</StatNumber>
            <StatLabel>Hours of Learning</StatLabel>
          </StatCard>
        </StatsGrid>

        <ExperienceSection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <CategoryTitle>
            <FaAward /> Work Experience
          </CategoryTitle>
          
          <ExperienceCard 
            href={experienceCert} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -8 }}
          >
            <ExperienceHeader>
              <ExperienceInfo>
                <ExperienceTitle>
                  Backend Intern
                  <ViewBadge><FaExternalLinkAlt /> View Certificate</ViewBadge>
                </ExperienceTitle>
                <ExperienceCompany>TMRC, Islamabad</ExperienceCompany>
              </ExperienceInfo>
              <ExperienceDate>July 2025 – August 2025</ExperienceDate>
            </ExperienceHeader>
            <ExperienceDescription>
              <li>Built a scalable Django REST backend with JWT authentication, RBAC, custom permissions, and secure token-based workflows</li>
              <li>Designed optimized database schemas and modular APIs using viewsets, serializers, middleware, and ORM query optimization</li>
              <li>Developed a full-stack Resume Maker platform by integrating Django REST APIs with ReactJS</li>
            </ExperienceDescription>
          </ExperienceCard>
        </ExperienceSection>

        <CategorySection
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <CategoryTitle>
            <FaAward /> Professional Certifications
          </CategoryTitle>
          
          <Timeline>
            {certifications.map((cert, index) => (
              <CertCard
                key={index}
                href={cert.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                gradient={cert.gradient}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ x: 10 }}
              >
                <CertInfo>
                  <IconWrapper color={cert.color} delay={`${index * 0.2}s`}>
                    {cert.icon}
                  </IconWrapper>
                  <TextContent>
                    <CertTitle>
                      {cert.name}
                      <ViewBadge><FaExternalLinkAlt /> View</ViewBadge>
                    </CertTitle>
                    <CertProvider>
                      <FaCertificate /> {cert.provider}
                    </CertProvider>
                  </TextContent>
                </CertInfo>
                <DateBadge>{cert.date}</DateBadge>
              </CertCard>
            ))}
          </Timeline>
        </CategorySection>
      </ContentWrapper>
    </CertContainer>
  );
};

export default Certifications;
