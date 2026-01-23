import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  z-index: 100;
  background: ${props => props.scrolled ? 'rgba(15, 23, 42, 0.8)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(12px)' : 'none'};
  transition: all 0.3s ease;
  border-bottom: ${props => props.scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'};

  @media (max-width: 768px) {
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(12px);
    padding: 1rem 1.5rem;
  }
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--text-color);
  
  span {
    color: var(--accent-color);
  }
`;

const Links = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.active ? 'var(--accent-color)' : 'var(--text-secondary)'};
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  
  &:hover {
    color: var(--accent-color);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background: var(--accent-color);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ResumeButton = styled.a`
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(99, 102, 241, 0.1);
    transform: translateY(-2px);
  }
`;

const MobileMenuBtn = styled.button`
  display: none;
  font-size: 1.5rem;
  color: var(--text-color);
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  background: #0f172a;
  padding: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Certifications', path: '/certifications' },
  ];

  return (
    <NavContainer scrolled={scrolled}>
      <NavContent>
        <Logo to="/">
          Areeba<span>.</span>
        </Logo>

        <Links>
          {navLinks.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path} 
              active={isActive(link.path) ? 1 : 0}
            >
              {link.name}
            </NavLink>
          ))}
          <ResumeButton href={require('../resume/areebaresumefinal.pdf')} target="_blank">
            Resume
          </ResumeButton>
        </Links>

        <MobileMenuBtn onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </MobileMenuBtn>
      </NavContent>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                active={isActive(link.path) ? 1 : 0}
              >
                {link.name}
              </NavLink>
            ))}
            <ResumeButton href={require('../resume/areebaresumefinal.pdf')} target="_blank">
              Resume
            </ResumeButton>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavContainer>
  );
};

export default Navbar;
