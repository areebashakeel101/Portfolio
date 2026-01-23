import React, {useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaRocket, FaBrain, FaGraduationCap, FaBriefcase, FaCertificate, FaArrowRight, FaServer, FaDatabase } from 'react-icons/fa';

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

// Section Styles
const Section = styled.section`
  padding: 6rem 2rem;
  position: relative;
`;

const SectionWrapper = styled.div`
  width: 100%;
  max-width: min(1200px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.75rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #f8fafc, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  
  svg {
    color: var(--accent-color);
    -webkit-text-fill-color: var(--accent-color);
  }
`;

const SectionSubtitle = styled.p`
  color: var(--text-secondary);
  font-size: 1.15rem;
  max-width: 600px;
  margin: 0 auto;
`;

// Skills Preview Section
const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const SkillCard = styled(motion.div)`
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
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
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

const SkillCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SkillIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(45, 212, 191, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--accent-color);
`;

const SkillCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-color);
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const SkillTag = styled.span`
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-secondary);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  
  &:hover {
    background: rgba(99, 102, 241, 0.15);
    color: var(--accent-color);
    border-color: rgba(99, 102, 241, 0.3);
    transform: scale(1.05);
  }
`;

// Projects Preview Section
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent);
    border-radius: 50%;
    transform: translate(30%, -30%);
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: var(--accent-color);
    box-shadow: 0 25px 50px rgba(99, 102, 241, 0.2);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 0.5rem;
`;

const ProjectSubtitle = styled.p`
  color: var(--accent-color);
  font-size: 0.9rem;
  font-family: 'Fira Code', monospace;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
  
  li {
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin-bottom: 0.6rem;
    padding-left: 1.5rem;
    position: relative;
    line-height: 1.6;
    
    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--accent-color);
    }
  }
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  font-size: 0.75rem;
  font-family: 'Fira Code', monospace;
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.03);
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

// Experience & Education Section
const TimelineGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const TimelineColumn = styled.div``;

const TimelineTitle = styled.h3`
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

const TimelineCard = styled(motion.div)`
  background: rgba(30, 41, 59, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 1.75rem;
  margin-bottom: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--accent-color);
    transform: translateX(8px);
    background: rgba(30, 41, 59, 0.6);
  }
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, var(--accent-color), #2dd4bf);
    border-radius: 4px 0 0 4px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const TimelineRole = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.5rem;
`;

const TimelineCompany = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const CompanyName = styled.span`
  color: #2dd4bf;
  font-weight: 500;
  font-family: 'Fira Code', monospace;
  font-size: 0.95rem;
`;

const DateBadge = styled.span`
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-muted);
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-family: 'Fira Code', monospace;
`;

const TimelineList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    padding-left: 1.25rem;
    position: relative;
    line-height: 1.6;
    
    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--accent-color);
    }
  }
`;

const CourseTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const CourseTag = styled.span`
  background: rgba(99, 102, 241, 0.1);
  color: #818cf8;
  padding: 0.3rem 0.7rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
`;

// Certifications Section
const CertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.25rem;
`;

const CertCard = styled(motion.div)`
  background: rgba(30, 41, 59, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(30, 41, 59, 0.6);
    border-color: var(--accent-color);
    transform: translateX(8px);
  }
`;

const CertIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(45, 212, 191, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: var(--accent-color);
  flex-shrink: 0;
`;

const CertInfo = styled.div`
  flex: 1;
`;

const CertName = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.25rem;
`;

const CertProvider = styled.p`
  color: var(--text-muted);
  font-size: 0.85rem;
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
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const timelineRef = useRef(null);
  const certsRef = useRef(null);
  
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" });
  const certsInView = useInView(certsRef, { once: true, margin: "-100px" });

  const skills = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      skills: ["Python", "JavaScript", "C++", "TypeScript", "MySQL"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <FaServer />,
      skills: ["React", "Next.js", "Node.js", "LangChain", "FastAPI", "Django", "React Native"]
    },
    {
      title: "AI & ML",
      icon: <FaBrain />,
      skills: ["RAG", "LLMs", "LSTM", "TensorFlow", "CNNs", "GANs" ]
    },
    {
      title: "Databases & Tools",
      icon: <FaDatabase />,
      skills: ["MongoDB", "Firebase", "ChromaDB","FAISS", "Docker", "Git", "Vercel"]
    }
  ];

  const projects = [
    {
      title: "ParkinSense",
      subtitle: "ParkinSense — Smart Tracking for Life with Parkinson's (FYP)",
      description: [
        "Multi-platform monitoring (patient, caregiver, doctor, admin) across mobile & web.",
        "AI-driven symptom analysis and progression tracking with doctor-reviewed personalized care plans.",
        "One-tap SOS with real-time notifications, live GPS sharing, and emergency calling.",
        "Secure, scalable backend with JWT auth and role-based access; clinician dashboards."
      ],
      tech: ["Node.js", "FastAPI", "Gemini API", "LSTM", "RAG", "React.js", "MongoDB", "ChromaDB", "Tailwind CSS", "React Native", "Firebase"]
    },
    {
      title: "TravelGenie",
      subtitle: "AI-driven Travel Assistant",
      description: [
        "JWT-based user management and secure authentication.",
        "Web scraping to gather real-time travel data and destination insights.",
        "RAG + embeddings + LLM engine for context-aware travel recommendations."
      ],
      tech: ["LangGraph", "FastAPI", "MERN", "Web Scraping", "Gemini", "FAISS", "Next.js", "Node.js"]
    },
    {
      title: "DeepForge",
      subtitle: "Forge & Train Deep Learning Models",
      description: [
        "Transfer learning (AlexNet, VGG, ResNet) and fine-tuning for image classification.",
        "Applied YOLO / Faster R-CNN for object detection and GANs for image generation.",
        "LSTM-based sequence models and end-to-end pipelines with augmentation for varied datasets."
      ],
      tech: ["Transfer Learning", "Object Detection", "GANs", "LSTM", "TensorFlow", "Keras"]
    }
  ];

  const certifications = [
    { name: "Python for Data Science", provider: "Cognitive Class-IBM", file: require('../certificates/IBM PY0101EN Certificate _ Cognitive Class.pdf') },
    { name: "Fundamentals of AI Agent using RAG and LangChain", provider: "Coursera", file: require('../certificates/coursera-certificatefor-ragandlangchain.pdf') },
    { name: "Generative AI for Everyone", provider: "Coursera", file: require('../certificates/Coursere-generativeAI.pdf') },
    { name: "Deep Learning with Keras and TensorFlow", provider: "Coursera", file: require('../certificates/coursera-certificatefortensorflow.pdf') },
    { name: "Introduction to Deep Learning and Neural Networks with Keras", provider: "Coursera", file: require('../certificates/Coursera deep learning.pdf') },
    { name: "Machine Learning", provider: "Coursera", file: require('../certificates/Coursera-machineLearning.pdf') }
  ];

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
                href="https://github.com/areebashakeel" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
              </SocialLink>
              <SocialLink 
                href="https://linkedin.com/in/areebashakeel" 
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

      {/* Skills Section */}
      <Section ref={skillsRef}>
        <SectionWrapper>
          <SectionHeader
            initial={{ opacity: 0, y: 30 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle><FaCode /> Technical Skills</SectionTitle>
            <SectionSubtitle>
              My arsenal of tools and technologies for building innovative solutions
            </SectionSubtitle>
          </SectionHeader>

          <SkillsGrid>
            {skills.map((category, index) => (
              <SkillCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillCardHeader>
                  <SkillIcon>{category.icon}</SkillIcon>
                  <SkillCardTitle>{category.title}</SkillCardTitle>
                </SkillCardHeader>
                <SkillTags>
                  {category.skills.map((skill, i) => (
                    <SkillTag key={i}>{skill}</SkillTag>
                  ))}
                </SkillTags>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SectionWrapper>
      </Section>

      {/* Projects Section */}
      <Section ref={projectsRef}>
        <SectionWrapper>
          <SectionHeader
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle><FaRocket /> Featured Projects</SectionTitle>
            <SectionSubtitle>
              A showcase of my work in AI, Full Stack, and Deep Learning
            </SectionSubtitle>
          </SectionHeader>

          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
                <ProjectDescription>
                  {project.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ProjectDescription>
                <ProjectTech>
                  {project.tech.map((tech, i) => (
                    <TechTag key={i}>{tech}</TechTag>
                  ))}
                </ProjectTech>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </SectionWrapper>
      </Section>

      {/* Experience & Education Section */}
      <Section ref={timelineRef}>
        <SectionWrapper>
          <SectionHeader
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle><FaBriefcase /> Experience & Education</SectionTitle>
            <SectionSubtitle>
              My professional journey and academic background
            </SectionSubtitle>
          </SectionHeader>

          <TimelineGrid>
            <TimelineColumn>
              <TimelineTitle><FaBriefcase /> Experience</TimelineTitle>
              <TimelineCard
                initial={{ opacity: 0, x: -30 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <TimelineRole>Backend Intern</TimelineRole>
                <TimelineCompany>
                  <CompanyName>TMRC, ISLAMABAD</CompanyName>
                  <DateBadge>July 2025 – August 2025</DateBadge>
                </TimelineCompany>
                <TimelineList>
                  <li>Built scalable Django REST backend with JWT authentication & RBAC</li>
                  <li>Designed optimized database schemas and modular APIs</li>
                  <li>Developed full-stack Resume Maker integrating Django REST with ReactJS</li>
                </TimelineList>
              </TimelineCard>
            </TimelineColumn>

            <TimelineColumn>
              <TimelineTitle><FaGraduationCap /> Education</TimelineTitle>
              <TimelineCard
                initial={{ opacity: 0, x: 30 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <TimelineRole>Bachelor of Science in Computer Science</TimelineRole>
                <TimelineCompany>
                  <CompanyName>Air University Islamabad</CompanyName>
                  <DateBadge>2022 - 2026</DateBadge>
                </TimelineCompany>
                <CourseTags>
                  <CourseTag>Data Structures</CourseTag>
                  <CourseTag>Algorithms</CourseTag>
                  <CourseTag>AI</CourseTag>
                  <CourseTag>Deep Learning</CourseTag>
                  <CourseTag>Full Stack</CourseTag>
                  <CourseTag>Mobile Computing</CourseTag>
                </CourseTags>
              </TimelineCard>
            </TimelineColumn>
          </TimelineGrid>
        </SectionWrapper>
      </Section>

      {/* Certifications Section */}
      <Section ref={certsRef}>
        <SectionWrapper>
          <SectionHeader
            initial={{ opacity: 0, y: 30 }}
            animate={certsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle><FaCertificate /> Certifications</SectionTitle>
            <SectionSubtitle>
              Continuous learning and professional development
            </SectionSubtitle>
          </SectionHeader>

          <CertGrid>
            {certifications.map((cert, index) => (
              <CertCard
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={certsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                    <CertIcon><FaCertificate /></CertIcon>
                    <CertInfo>
                      <CertName>{cert.name}</CertName>
                      <CertProvider>{cert.provider}</CertProvider>
                      {cert.file && (
                        <div style={{ marginTop: '0.5rem' }}>
                          <a href={cert.file} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)', fontWeight: 600, textDecoration: 'none' }}>
                            View Certificate
                          </a>
                        </div>
                      )}
                    </CertInfo>
              </CertCard>
            ))}
          </CertGrid>
        </SectionWrapper>
      </Section>

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