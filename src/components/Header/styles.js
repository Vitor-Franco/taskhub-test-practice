import styled from 'styled-components';

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  height: 8vh;
  justify-content: space-between;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      fill: var(--white);
      margin-right: 1.8rem;
    }

    & ul {
      display: flex;

      & li {
        list-style: none;

        & + li {
          margin-left: 1rem;
        }

        & a {
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          font-weight: 400;

          transition: filter 0.2s;
          &:hover {
            filter: brightness(0.8);
          }

          svg {
            margin-left: 0.3rem;
            color: var(--gray-600);
          }
        }
      }
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  label {
    margin-left: auto;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    color: var(--gray-300);
    background: #24292eb3;
    border-radius: 5px;
    width: 240px;
    position: relative;

    > input {
      background: transparent;
      border: 0;
      outline: 0;
      width: 100%;
      font-size: 0.825rem;
      color: var(--gray-100);

      &::placeholder {
        color: var(--gray-300);
      }

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px #222 inset !important;
      }

      &:-webkit-autofill {
        -webkit-text-fill-color: var(--gray-100) !important;
      }

      &:focus {
        background: inherit;
      }
    }
    @media (max-width: 768px) {
      display: none;
    }
  }

  a > button {
    border: 0;
    outline: 0;
    background: transparent;
    color: var(--white);
    transition: filter 0.2s;
    padding: 0.4rem 0.4rem;
    font-weight: 300;

    & + button {
      margin-left: 0.8rem;
    }

    &.signUp {
      border: 1px solid var(--white);
      border-radius: 6px;
    }

    &:hover {
      filter: brightness(0.8);
    }
  }

  .userLogged {
    font-weight: bolder;
    background: var(--blue-500);
    padding: 0.5rem 1rem;
    border-radius: 5px;
    margin-left: 5px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
