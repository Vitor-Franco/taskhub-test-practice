import styled from 'styled-components';

export const ContainerTodo = styled.div`
  background: #1a202c;
  border-radius: 5px;
  padding: 2rem 3rem;
  margin: 3rem 0 0;

  .features {
    display: flex;
    margin-bottom: 3rem;
    justify-content: space-between;

    h2 {
      font-weight: bolder;
    }

    button {
      background-color: var(--green-400);
      border-radius: 5px;
      padding: 0.5rem 1rem;
      outline: 0;
      border: 0;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: var(--white);
      }
    }
  }

  @media (max-width: 768px) {
    overflow-x: scroll;
    & table {
      min-width: 900px;
    }
  }
`;
