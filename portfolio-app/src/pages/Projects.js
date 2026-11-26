import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaBrain, FaRobot, FaCode, FaMobile, FaLayerGroup, FaVideo, FaExternalLinkAlt } from 'react-icons/fa';

const gradientShift = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(1deg); }
`;

const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 120px 2rem 5rem;
  background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.08), transparent 50%),
              radial-gradient(circle at bottom left, rgba(45, 212, 191, 0.08), transparent 50%),
              radial-gradient(circle at center, rgba(15, 23, 42, 1), rgba(15, 23, 42, 1));
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 20%;
    left: -10%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent 70%);
    border-radius: 50%;
    animation: ${float} 8s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 10%;
    right: -5%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(45, 212, 191, 0.1), transparent 70%);
    border-radius: 50%;
    animation: ${float} 10s ease-in-out infinite reverse;
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
  animation: ${gradientShift} 5s ease infinite;
`;

const Subtitle = styled.p`
  color: var(--text-secondary);
  font-size: 1.25rem;
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.7;
`;

const FilterTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3.5rem;
  flex-wrap: wrap;
`;

const FilterTab = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  ${props => props.active ? `
    background: linear-gradient(135deg, var(--accent-color), #818cf8);
    color: white;
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
  ` : `
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-secondary);
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      color: var(--text-color);
      transform: translateY(-2px);
    }
  `}
`;

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.gradient || 'linear-gradient(90deg, var(--accent-color), #2dd4bf)'};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-12px) scale(1.02);
    border-color: var(--accent-color);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(99, 102, 241, 0.15);
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

const ProjectBadge = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(45, 212, 191, 0.2));
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${props => props.color || '#2dd4bf'};
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 2;
`;

const ProjectContent = styled.div`
  padding: 2.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(45, 212, 191, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  color: ${props => props.color || 'var(--accent-color)'};
  margin-bottom: 1.5rem;
  animation: ${float} 4s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
`;

const ProjectTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 0.5rem;
`;

const ProjectSubtitle = styled.p`
  color: var(--accent-color);
  font-size: 0.95rem;
  font-family: 'Fira Code', monospace;
  margin-bottom: 1.25rem;
  
  &::before {
    content: '// ';
    opacity: 0.5;
  }
`;

const ProjectDescription = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  flex: 1;
  
  li {
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin-bottom: 0.85rem;
    line-height: 1.7;
    position: relative;
    padding-left: 1.5rem;
    transition: all 0.3s ease;
    
    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--accent-color);
      font-weight: bold;
    }
    
    &:hover {
      color: var(--text-color);
      transform: translateX(5px);
    }
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: auto;
`;

const TechTag = styled(motion.span)`
  font-size: 0.8rem;
  font-family: 'Fira Code', monospace;
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.05);
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
  cursor: default;
  
  &:hover {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(45, 212, 191, 0.15));
    color: var(--text-color);
    border-color: rgba(99, 102, 241, 0.3);
    transform: translateY(-2px) scale(1.05);
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

const LinkButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  svg {
    font-size: 1.1rem;
  }
  
  &:hover {
    background: var(--accent-color);
    border-color: var(--accent-color);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
  }
`;

const FeaturedBadge = styled.div`
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  color: #1e293b;
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: 1rem;
  width: fit-content;
`;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: "ParkinSense - Doctor & Admin Web App",
      subtitle: "Real-time Patient Monitoring & Management",
      badge: "Final Year Project",
      category: "web",
      featured: true,
      icon: <FaBrain />,
      iconColor: "#f472b6",
      gradient: "linear-gradient(90deg, #f472b6, #ec4899)",
      description: [
        "Real-time patient health dashboards with interactive charts (heart rate, tremors, gait monitoring)",
        "AI-powered medication management with override capabilities for treatment adjustments",
        "Emergency alert system for abnormal conditions with instant caregiver notifications",
        "Reports & analytics with PDF/Excel export for medical documentation"
      ],
      tech: ["React.js", "Node.js", "FastAPI", "MongoDB", "JWT", "Chart.js", "Tailwind CSS"],
      github: "https://github.com/areebashakeel101/Parkinsense-FYP"
    },
    {
      title: "ParkinSense - Patient Mobile App",
      subtitle: "Health Tracking & Emergency Assistance",
      badge: "Final Year Project",
      category: "mobile",
      featured: true,
      icon: <FaMobile />,
      iconColor: "#818cf8",
      gradient: "linear-gradient(90deg, #818cf8, #6366f1)",
      description: [
        "Integrated mobile sensors for real-time health data collection and preprocessing",
        "AI-generated personalized medication, diet & exercise plans with smart reminders",
        "One-tap SOS emergency system with auto-call & real-time GPS location sharing",
        "Monthly health reports & medication adherence tracking with PDF download"
      ],
      tech: ["React Native", "Firebase", "AI/ML", "GPS Integration"],
      github: "https://github.com/areebashakeel101/Parkinsense-FYP"
    },
    {
      title: "ParkinSense - Caregiver Mobile App",
      subtitle: "Patient Care & Emergency Response",
      badge: "Final Year Project",
      category: "mobile",
      featured: true,
      icon: <FaMobile />,
      iconColor: "#2dd4bf",
      gradient: "linear-gradient(90deg, #2dd4bf, #22d3ee)",
      description: [
        "Real-time patient health monitoring with alerts for missed medications & therapy tasks",
        "Emergency response system with live GPS tracking & fall detection notifications",
        "Manage patient diet, exercise & medication plans with adherence tracking",
        "Health status logging & communication system for doctor updates"
      ],
      tech: ["React Native", "Firebase", "Real-time Database", "GPS Tracking", "Push Notifications"],
      github: "https://github.com/areebashakeel101/Parkinsense-FYP"
    },
    {
      title: "ClauClip",
      subtitle: "AI-Powered Video Clipping SaaS",
      badge: "SaaS Web App",
      category: "web",
      featured: true,
      icon: <FaVideo />,
      iconColor: "#f472b6",
      gradient: "linear-gradient(90deg, #f472b6, #ec4899)",
      description: [
        "Production SaaS converting long YouTube videos into short clips: transcript extraction, AI highlight detection, clip generation and captioning",
        "Built authentication, project dashboard, admin panel and subscription/credit-based billing"
      ],
      tech: ["Next.js", "OpenAI API", "FFmpeg", "Supabase", "Whop"],
      live: "https://clauclip.app"
    },
    {
      title: "TravelGenie",
      subtitle: "AI-driven Travel Assistant",
      badge: "Full Stack Web App",
      category: "web",
      featured: true,
      icon: <FaRobot />,
      iconColor: "#fbbf24",
      gradient: "linear-gradient(90deg, #fbbf24, #f59e0b)",
      description: [
        "User management & secure authentication module using JWT",
        "Web scraping for real-time travel info, destination data & culture",
        "AI response engine using RAG + embeddings + LLM API for context-aware suggestions"
      ],
      tech: ["LangGraph", "FastAPI", "MERN", "Web Scraping", "Gemini", "FAISS", "Next.js"],
      github: "https://github.com/areebashakeel101/TravelGenie"
    },
    {
      title: "DeepForge",
      subtitle: "Forge and Train DL Models",
      badge: "Deep Learning",
      category: "ai",
      icon: <FaBrain />,
      iconColor: "#34d399",
      gradient: "linear-gradient(90deg, #34d399, #10b981)",
      description: [
        "ANN on IRIS dataset for multi-class classification",
        "AlexNet, VGGNet, ResNet transfer learning for plant leaf classification",
        "YOLO/Faster R-CNN for pet detection, GANs for design, LSTM for action recognition"
      ],
      tech: ["TensorFlow", "Keras", "YOLO", "GANs", "LSTM", "Transfer Learning"],
      github: "https://github.com/areebashakeel101/DeepForge"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: <FaLayerGroup /> },
    { id: 'ai', label: 'AI & ML', icon: <FaBrain /> },
    { id: 'web', label: 'Web Apps', icon: <FaCode /> },
    { id: 'mobile', label: 'Mobile', icon: <FaMobile /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <ProjectsContainer>
      <ContentWrapper>
        <Header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title>Featured Projects</Title>
          <Subtitle>
            A showcase of AI systems, full-stack applications, and innovative solutions 
            built with modern technologies
          </Subtitle>
        </Header>

        <FilterTabs>
          {filters.map(filter => (
            <FilterTab
              key={filter.id}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.icon} {filter.label}
            </FilterTab>
          ))}
        </FilterTabs>

        <AnimatePresence mode="wait">
          <ProjectGrid
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                gradient={project.gradient}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -12 }}
              >
                <ProjectBadge color={project.iconColor}>
                  {project.badge}
                </ProjectBadge>
                
                <ProjectContent>
                  {project.featured && (
                    <FeaturedBadge>
                      ⭐ Featured
                    </FeaturedBadge>
                  )}
                  
                  <ProjectIcon 
                    color={project.iconColor} 
                    delay={`${index * 0.2}s`}
                  >
                    {project.icon}
                  </ProjectIcon>
                  
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
                  
                  <ProjectDescription>
                    {project.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ProjectDescription>

                  <TechStack>
                    {project.tech.map((tech, i) => (
                      <TechTag 
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </TechTag>
                    ))}
                  </TechStack>

                  <Links>
                    <LinkButton 
                      href={project.github || project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {project.github ? <><FaGithub /> View on GitHub</> : <><FaExternalLinkAlt /> Visit Live Site</>}
                    </LinkButton>
                  </Links>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </AnimatePresence>
      </ContentWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
