import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --white: #f8f8f8;
    --black: #1a1d23;

    --gray-100: #d7d7d7;
    --gray-300: #bbbbbb;
    --gray-600: #8b8b8b;
    
    --blue-400: #2b6cb0;
    --blue-500: #2c5282;
    --blue-600: #091d48;
    
    --red-400: #e53e3e;
    
    --green-400: #34b859;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem 'Inter', sans-serif;
  }

  body {
    background-color: #040d21;
    color: var(--white);
    height: 100vh;
    position: relative;
  }


  button {
    cursor: pointer;
    border: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--black);

    padding: 3rem;
    margin: 0 1rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    font-size: 1rem;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export default GlobalStyles;
