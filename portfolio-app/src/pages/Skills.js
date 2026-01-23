import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools, FaBrain, FaLayerGroup } from 'react-icons/fa';

const gradientShift = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;



const SkillsContainer = styled.div`
  min-height: 100vh;
  padding: 120px 2rem 5rem;
  background: radial-gradient(circle at top left, rgba(72, 85, 99, 0.08), transparent 50%),
              radial-gradient(circle at bottom right, rgba(99, 102, 241, 0.08), transparent 40%),
              radial-gradient(circle at center, rgba(15, 23, 42, 1), rgba(15, 23, 42, 1));
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
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const CategoryTab = styled(motion.button)`
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
    }
  `}
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
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
    background: ${props => props.gradient || 'linear-gradient(90deg, var(--accent-color), #2dd4bf)'};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, ${props => props.glowColor || 'rgba(99, 102, 241, 0.1)'}, transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
    border-radius: 50%;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: var(--accent-color);
    box-shadow: 0 25px 50px rgba(99, 102, 241, 0.2);
    
    &::before {
      transform: scaleX(1);
    }
    
    &::after {
      opacity: 1;
    }
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.75rem;
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: ${props => props.bg || 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(45, 212, 191, 0.1))'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  color: ${props => props.color || 'var(--accent-color)'};
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
`;

const CategoryTitle = styled.h3`
  font-size: 1.35rem;
  color: var(--text-color);
  font-weight: 700;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SkillTag = styled(motion.span)`
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-secondary);
  padding: 0.6rem 1.1rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  cursor: default;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(45, 212, 191, 0.15));
    color: var(--text-color);
    border-color: rgba(99, 102, 241, 0.3);
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.2);
    
    &::before {
      left: 100%;
    }
  }
`;

const ProficiencySection = styled(motion.div)`
  margin-top: 4rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(45, 212, 191, 0.08));
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 24px;
  padding: 2.5rem;
`;

const ProficiencyTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 2rem;
  text-align: center;
`;

const ProficiencyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const ProficiencyItem = styled(motion.div)`
  background: rgba(15, 23, 42, 0.5);
  border-radius: 16px;
  padding: 1.5rem;
  
  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-color);
    margin-bottom: 0.75rem;
  }
`;

const ProgressBar = styled.div`
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, var(--accent-color), #2dd4bf);
  border-radius: 10px;
`;

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    {
      id: 'languages',
      title: "Programming Languages",
      icon: <FaCode />,
      color: '#818cf8',
      skills: ["Python", "JavaScript", "C++", "TypeScript", "MySQL"]
    },
    {
      id: 'frameworks',
      title: "Frameworks & Libraries",
      icon: <FaServer />,
      color: '#2dd4bf',
      skills: ["React", "Node.js", "Express", "LangChain", "RAG", "FastAPI", "Next.js", "React Native", "Tailwind CSS", "Django"]
    },
    {
      id: 'ai',
      title: "AI & Machine Learning",
      icon: <FaBrain />,
      color: '#f472b6',
      skills: ["LangChain", "RAG", "LLMs", "Gemini API", "LSTM", "TensorFlow", "Keras", "YOLO", "GANs", "Computer Vision"]
    },
    {
      id: 'databases',
      title: "Databases",
      icon: <FaDatabase />,
      color: '#fbbf24',
      skills: ["MongoDB", "Firebase Firestore", "Oracle", "ChromaDB", "FAISS"]
    },
    {
      id: 'tools',
      title: "Tools & Technologies",
      icon: <FaTools />,
      color: '#34d399',
      skills: ["REST APIs", "Git & Github", "Agile Methodologies", "Docker", "Vercel", "JWT Authentication"]
    }
  ];

  const proficiencies = [
    { name: "Python & AI/ML", level: 90 },
    { name: "Full Stack Development", level: 85 },
    { name: "React & Next.js", level: 88 },
    { name: "Backend (Django/FastAPI)", level: 85 },
    { name: "Database Management", level: 80 },
    { name: "DevOps & Deployment", level: 75 }
  ];

  const filteredCategories = activeCategory === 'all' 
    ? categories 
    : categories.filter(cat => cat.id === activeCategory);

  return (
    <SkillsContainer>
      <ContentWrapper>
        <Header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title>Technical Arsenal</Title>
          <Subtitle>
            My weapons of choice for building innovative digital solutions
          </Subtitle>
        </Header>

        <CategoryTabs>
          <CategoryTab
            active={activeCategory === 'all'}
            onClick={() => setActiveCategory('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLayerGroup /> All Skills
          </CategoryTab>
          {categories.map(cat => (
            <CategoryTab
              key={cat.id}
              active={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.icon} {cat.title.split(' ')[0]}
            </CategoryTab>
          ))}
        </CategoryTabs>

        <AnimatePresence mode="wait">
          <Grid
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {filteredCategories.map((cat, index) => (
              <SkillCard
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                glowColor={`${cat.color}20`}
              >
                <CardHeader>
                  <IconWrapper color={cat.color} delay={`${index * 0.2}s`}>
                    {cat.icon}
                  </IconWrapper>
                  <CategoryTitle>{cat.title}</CategoryTitle>
                </CardHeader>
                <SkillList>
                  {cat.skills.map((skill, i) => (
                    <SkillTag
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      {skill}
                    </SkillTag>
                  ))}
                </SkillList>
              </SkillCard>
            ))}
          </Grid>
        </AnimatePresence>

        <ProficiencySection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <ProficiencyTitle>Proficiency Levels</ProficiencyTitle>
          <ProficiencyGrid>
            {proficiencies.map((item, index) => (
              <ProficiencyItem
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h4>{item.name}</h4>
                <ProgressBar>
                  <Progress
                    initial={{ width: 0 }}
                    animate={{ width: `${item.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  />
                </ProgressBar>
              </ProficiencyItem>
            ))}
          </ProficiencyGrid>
        </ProficiencySection>
      </ContentWrapper>
    </SkillsContainer>
  );
};

export default Skills;
