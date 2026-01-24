import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaCode, FaBrain, FaRocket, FaHeart, FaUsers, FaLightbulb, FaComments, FaClock, FaTasks, FaHandshake } from 'react-icons/fa';

const gradientShift = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(3deg); }
  50% { transform: translateY(-15px) rotate(0deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const AboutContainer = styled.div`
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
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileCard = styled(motion.div)`
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 2.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-color), #2dd4bf);
  }
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  margin: 0 auto 1.5rem;
  
  &::before {
    content: '';
    position: absolute;
    inset: -5px;
    background: linear-gradient(135deg, var(--accent-color), #2dd4bf);
    border-radius: 50%;
    z-index: -1;
    animation: ${pulse} 3s ease-in-out infinite;
  }
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(15, 23, 42, 1);
`;

const ProfileName = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 0.5rem;
`;

const ProfileRole = styled.p`
  color: var(--accent-color);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background: rgba(99, 102, 241, 0.1);
    color: var(--accent-color);
    transform: translateX(5px);
  }
  
  svg {
    color: var(--accent-color);
    font-size: 1.1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialLink = styled(motion.a)`
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--accent-color);
    border-color: var(--accent-color);
    color: white;
    transform: translateY(-5px);
  }
`;

const InfoSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled(motion.div)`
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--accent-color);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.1);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    color: var(--accent-color);
  }
`;

const CardText = styled.p`
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.8;
`;

const SoftSkillsSection = styled.div`
  margin-top: 3rem;
`;

const SoftSkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SoftSkillCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(45, 212, 191, 0.05));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, var(--accent-color), #2dd4bf);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    border-color: var(--accent-color);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
    
    &::before {
      transform: scaleY(1);
    }
  }
`;

const SoftSkillIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(45, 212, 191, 0.15));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: ${props => props.color || 'var(--accent-color)'};
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    inset: -3px;
    background: linear-gradient(135deg, var(--accent-color), #2dd4bf);
    border-radius: 16px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${SoftSkillCard}:hover &::after {
    opacity: 0.3;
  }
`;

const SoftSkillTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 0.75rem;
`;

const SoftSkillDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.7;
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

const DrivesSection = styled.div`
  margin-top: 4rem;
`;

const DrivesWrapper = styled.div`
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(45, 212, 191, 0.03));
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 28px;
  padding: 3rem 2.5rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent-color), #2dd4bf, var(--accent-color));
    background-size: 200% 100%;
    animation: ${gradientShift} 3s ease infinite;
  }
`;

const DrivesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const DriveCard = styled(motion.div)`
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(135deg, ${props => props.color || 'var(--accent-color)'}, transparent);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 30px 60px ${props => props.color ? `${props.color}20` : 'rgba(99, 102, 241, 0.2)'};
    
    &::after {
      opacity: 1;
    }
  }
`;

const DriveIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
`;

const DriveIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 18px;
  background: linear-gradient(135deg, ${props => props.color || 'var(--accent-color)'}15, ${props => props.color || 'var(--accent-color)'}08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: ${props => props.color || 'var(--accent-color)'};
  flex-shrink: 0;
`;

const DriveTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-color);
  line-height: 1.3;
`;

const DriveText = styled.p`
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.8;
`;

const About = () => {
  const softSkills = [
    {
      icon: <FaUsers />,
      color: "#818cf8",
      title: "Team Collaboration",
      description: "Working effectively with cross-functional teams to deliver high-quality solutions and achieve common goals."
    },
    {
      icon: <FaLightbulb />,
      color: "#fbbf24",
      title: "Problem Solving",
      description: "Breaking down complex challenges into manageable solutions with creative and analytical thinking."
    },
    {
      icon: <FaComments />,
      color: "#2dd4bf",
      title: "Communication",
      description: "Clearly articulating technical concepts to both technical and non-technical stakeholders."
    },
    {
      icon: <FaClock />,
      color: "#f472b6",
      title: "Time Management",
      description: "Prioritizing tasks efficiently and meeting deadlines while maintaining code quality and best practices."
    },
    {
      icon: <FaTasks />,
      color: "#a78bfa",
      title: "Adaptability",
      description: "Quickly learning new technologies and adapting to changing project requirements and environments."
    },
    {
      icon: <FaHandshake />,
      color: "#34d399",
      title: "Leadership",
      description: "Taking initiative in projects, mentoring peers, and driving technical decisions with confidence."
    }
  ];

  const drives = [
    {
      icon: <FaBrain />,
      color: "#f472b6",
      title: "AI & Machine Learning",
      description: "Building intelligent systems that understand users and provide actionable insights through RAG-based chatbots and AI applications."
    },
    {
      icon: <FaCode />,
      color: "#2dd4bf",
      title: "Full Stack Development",
      description: "Creating end-to-end solutions with modern frameworks like React, Node.js, Django, and FastAPI for seamless digital experiences."
    },
    {
      icon: <FaRocket />,
      color: "#818cf8",
      title: "Innovation & Problem Solving",
      description: "Combining creative thinking with hands-on development to bring AI-powered ideas to life and solve real-world problems."
    }
  ];

  return (
    <AboutContainer>
      <ContentWrapper>
        <Header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title>About Me</Title>
          <Subtitle>
            An Innovative AI Full Stack Developer, passionate about building intelligent systems 
            that solve real-world problems and deliver seamless digital experiences.
          </Subtitle>
        </Header>

        <MainGrid>
          <ProfileCard
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ProfileImageWrapper>
              <ProfileImage 
                src={require('../pics/areebaphoto.png')} 
                alt="Areeba Shakeel"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </ProfileImageWrapper>
            <ProfileName>Areeba Shakeel</ProfileName>
            <ProfileRole>AI Full Stack Developer</ProfileRole>
            
            <ContactList>
              <ContactItem href="mailto:beerasatti121@gmail.com">
                <FaEnvelope /> beerasatti121@gmail.com
              </ContactItem>
              <ContactItem href="tel:+923323844210">
                <FaPhone /> +92-332-3844210
              </ContactItem>
              <ContactItem as="div">
                <FaMapMarkerAlt /> Islamabad, Pakistan
              </ContactItem>
            </ContactList>

            <SocialLinks>
              <SocialLink 
                href="https://linkedin.com/in/beera" 
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
              </SocialLink>
              <SocialLink 
                href="https://github.com/areebashakeel101" 
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
              </SocialLink>
            </SocialLinks>
          </ProfileCard>

          <InfoSection
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <InfoCard>
              <CardTitle>
                <FaHeart /> Who I Am
              </CardTitle>
              <CardText>
                I'm an innovative AI Full Stack Developer passionate about building intelligent systems 
                that solve real-world problems. I create RAG-based chatbots and AI applications that 
                understand users, provide actionable insights, and deliver seamless digital experiences. 
                Skilled in designing end-to-end solutions, I enjoy combining creative thinking with 
                hands-on development to bring AI-powered ideas to life.
              </CardText>
            </InfoCard>

            <InfoCard>
              <CardTitle>
                <FaRocket /> What I Do
              </CardTitle>
              <CardText>
                I specialize in developing multi-platform applications with AI-powered health analysis, 
                building intelligent travel assistants using RAG and LLM APIs, and creating scalable 
                backend systems with Django and FastAPI. My expertise spans from designing interactive 
                dashboards to implementing secure, scalable architectures with JWT-based authentication 
                and role-based access control.
              </CardText>
            </InfoCard>
          </InfoSection>
        </MainGrid>

        <SoftSkillsSection>
          <SectionTitle>
            <FaHeart /> Soft Skills
          </SectionTitle>
          <SoftSkillsGrid>
            {softSkills.map((skill, index) => (
              <SoftSkillCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <SoftSkillIcon color={skill.color}>
                  {skill.icon}
                </SoftSkillIcon>
                <SoftSkillTitle>{skill.title}</SoftSkillTitle>
                <SoftSkillDescription>{skill.description}</SoftSkillDescription>
              </SoftSkillCard>
            ))}
          </SoftSkillsGrid>
        </SoftSkillsSection>

        <DrivesSection>
          <SectionTitle>
            <FaRocket /> What Drives Me
          </SectionTitle>
          <DrivesWrapper>
            <DrivesGrid>
              {drives.map((drive, index) => (
                <DriveCard
                  key={index}
                  color={drive.color}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <DriveIconWrapper>
                    <DriveIcon color={drive.color}>
                      {drive.icon}
                    </DriveIcon>
                    <DriveTitle>{drive.title}</DriveTitle>
                  </DriveIconWrapper>
                  <DriveText>{drive.description}</DriveText>
                </DriveCard>
              ))}
            </DrivesGrid>
          </DrivesWrapper>
        </DrivesSection>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;
