import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #0f172a; /* Slate 900 */
    --secondary-color: #1e293b; /* Slate 800 */
    --accent-color: #6366f1; /* Indigo 500 */
    --accent-glow: rgba(99, 102, 241, 0.4);
    --text-color: #f8fafc; /* Slate 50 */
    --text-secondary: #94a3b8; /* Slate 400 */
    --text-muted: #64748b; /* Slate 500 */
    --border-color: #334155; /* Slate 700 */
    --success: #2dd4bf; /* Teal 400 */
    --card-bg: #1e293b;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--primary-color);
    color: var(--text-color);
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: var(--text-color);
  }

  a {
    color: var(--accent-color);
    text-decoration: none;
    transition: var(--transition);
    
    &:hover {
      color: #818cf8; /* Indigo 400 */
    }
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* Responsive container utilities */
  .container-responsive {
    width: 100%;
    max-width: min(1200px, calc(100% - 2rem));
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (min-width: 640px) {
    .container-responsive {
      padding: 0 1.5rem;
    }
  }

  @media (min-width: 1024px) {
    .container-responsive {
      padding: 0 2rem;
    }
  }

  /* Glassmorphism utilities */
  .glass {
    background: rgba(30, 41, 59, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export default GlobalStyles;
