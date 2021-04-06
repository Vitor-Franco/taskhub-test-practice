import styled from 'styled-components';

export const ContentLogin = styled.section`
  max-width: 980px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    text-align: center;
    background: var(--blue-600);
    flex-direction: column;
    width: min(550px, 90vw);
    margin: 0 auto;
    border-radius: 6px;
    padding: 3rem 2rem;

    > svg {
      fill: var(--white);
    }

    > a {
      color: var(--gray-100);
      > span {
        margin: 1rem 0;
        font-size: 0.8rem;
        display: inline-block;
      }

      &:hover {
        color: var(--gray-300);
      }
    }

    h1 {
      margin-bottom: 2rem;
    }

    > span {
      color: var(--red-400);
      font-weight: bold;
      text-align: center;
      display: block;
      margin: 1rem 0;
    }

    > form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > input {
        height: 3rem;
        font-size: 1rem;
        padding: 1rem 1.5rem;
        border-radius: 6px;
        border: 0;
        outline: 0;
        width: 300px;
        background: var(--white);

        & + input {
          margin-top: 0.4rem;

          &:nth-child(odd) {
            margin-left: 0.4rem;
          }
        }

        &.error {
          border: 2px solid var(--red-400);
        }
      }

      > button {
        display: block;
        margin: 1rem 0 0;
        color: var(--white);
        font-weight: bolder;
        padding: 1rem 2rem;
        border-radius: 6px;
        background-color: var(--green-400);
        outline: 0;
        border: 0;

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }
`;
