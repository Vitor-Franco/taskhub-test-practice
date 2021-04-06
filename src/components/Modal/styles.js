import styled from 'styled-components';

export const ModalCustomStyles = styled.div`
  color: var(--white);

  h2 {
    padding: 1rem 0;
  }

  form {
    div + div {
      margin-top: 1rem;
    }

    input {
      height: 3rem;
      font-size: 1rem;
      padding: 1rem 1.5rem;
      border-radius: 6px;
      border: 0;
      outline: 0;
      width: 100%;
      /* background: var(--white); */
    }

    label {
      margin-bottom: 0.5rem;
      display: inline-block;
    }

    .error-message {
      color: var(--red-400);
      font-style: 1.2rem;
    }
  }

  button.submit {
    background-color: var(--green-400);
    color: var(--white);
    font-weight: bold;
    border-radius: 5px;
    padding: 1rem 2rem;
    margin: 1rem 0;
    outline: 0;
    border: 0;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
