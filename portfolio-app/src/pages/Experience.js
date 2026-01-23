import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCertificate, FaFileAlt } from 'react-icons/fa';

const ExperienceSection = styled.section`
  min-height: 100vh;
  padding: 120px 2rem 5rem;
  background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.08), transparent 50%),
              radial-gradient(circle at bottom left, rgba(45, 212, 191, 0.08), transparent 50%),
              radial-gradient(circle at center, rgba(15, 23, 42, 1), rgba(15, 23, 42, 1));
  position: relative;
  overflow: hidden;
`;

const ExperienceContainer = styled.div`
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
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #f8fafc 0%, #818cf8 50%, #2dd4bf 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  color: var(--text-secondary);
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  svg {
    color: var(--accent-color);
  }
`;

const ExperienceCard = styled(motion.div)`
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2.5rem;
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-color), #2dd4bf);
  }
  
  &:hover {
    border-color: var(--accent-color);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.1);
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ExperienceInfo = styled.div``;

const ExperienceTitle = styled.h3`
  font-size: 1.5rem;
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

const ExperienceCompany = styled.p`
  color: var(--accent-color);
  font-size: 1.1rem;
  font-weight: 600;
`;

const DateBadge = styled.span`
  background: rgba(99, 102, 241, 0.15);
  color: var(--accent-color);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: 'Fira Code', monospace;
  border: 1px solid rgba(99, 102, 241, 0.3);
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const BulletItem = styled.li`
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.8;
  padding-left: 1.5rem;
  position: relative;
  
  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--accent-color);
    font-size: 1.2rem;
  }
`;

const CertificateButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, var(--accent-color), #2dd4bf);
  color: white;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
  }
  
  svg {
    font-size: 1.1rem;
  }
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CertificationCard = styled(motion.div)`
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(45, 212, 191, 0.3);
    box-shadow: 0 15px 30px rgba(45, 212, 191, 0.08);
    transform: translateY(-3px);
  }
`;

const CertificationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const CertificationTitle = styled.h4`
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 0.25rem;
`;

const CertificationProvider = styled.p`
  color: #2dd4bf;
  font-size: 0.95rem;
  font-weight: 600;
`;

const CertificationDate = styled.span`
  background: rgba(45, 212, 191, 0.15);
  color: #2dd4bf;
  padding: 0.4rem 0.8rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: 'Fira Code', monospace;
  border: 1px solid rgba(45, 212, 191, 0.3);
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;

const SkillTag = styled.span`
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-secondary);
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const Experience = () => {
  const certifications = [
    {
      title: "Introduction to Deep Learning and Neural Networks with Keras",
      provider: "Coursera",
      date: "Jan 2026",
      skills: ["Deep Learning", "Neural Networks", "Keras", "Artificial Intelligence (AI)", "Model Training & Evaluation"]
    },
    {
      title: "Fundamentals of AI Agent using RAG and LangChain",
      provider: "Coursera",
      date: "Jul 2025",
      skills: ["Retrieval-Augmented Generation (RAG)", "LangChain", "AI Agents", "Large Language Models (LLMs)", "Vector Databases"]
    },
    {
      title: "Generative AI for Everyone",
      provider: "Coursera",
      date: "Jul 2025",
      skills: ["Generative AI", "Large Language Models (LLMs)", "Prompt Engineering", "AI Applications"]
    },
    {
      title: "Deep Learning with Keras and TensorFlow",
      provider: "Coursera",
      date: "Jul 2025",
      skills: ["TensorFlow", "Keras", "Deep Learning", "Model Fine-Tuning", "Neural Network Architecture"]
    },
    {
      title: "Python for Data Science",
      provider: "Cognitive Class-IBM",
      date: "Aug 2024",
      skills: ["Functions, Classes and Objects", "Exception Handling", "File Handling", "Pandas", "Numpy"]
    }
  ];

  return (
    <ExperienceSection>
      <ExperienceContainer>
        <Header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title>Experience & Certifications</Title>
          <Subtitle>
            My professional journey, hands-on experience, and continuous learning in AI and full-stack development.
          </Subtitle>
        </Header>

        <SectionTitle>
          <FaBriefcase /> Professional Experience
        </SectionTitle>
        
        <ExperienceCard
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ExperienceHeader>
            <ExperienceInfo>
              <ExperienceTitle>
                <FaBriefcase /> Backend Intern
              </ExperienceTitle>
              <ExperienceCompany>TMRC, Islamabad</ExperienceCompany>
            </ExperienceInfo>
            <DateBadge>July 2025 – August 2025</DateBadge>
          </ExperienceHeader>
          
          <BulletList>
            <BulletItem>
              Built a scalable Django REST backend with JWT authentication, RBAC, custom permissions, and secure token-based workflows following MVC & REST principles.
            </BulletItem>
            <BulletItem>
              Designed optimized database schemas and modular APIs using viewsets, serializers, middleware, and ORM query optimization to ensure performance and data integrity.
            </BulletItem>
            <BulletItem>
              Developed a full-stack Resume Maker platform by integrating Django REST APIs with ReactJS, using Git/GitHub and Postman for collaborative development and API testing.
            </BulletItem>
          </BulletList>
          
          <CertificateButton 
            href={require('../experience/certificate-experience.pdf')} 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFileAlt /> View Experience Certificate
          </CertificateButton>
        </ExperienceCard>

        {/* Certifications moved to the Certifications page */}
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;