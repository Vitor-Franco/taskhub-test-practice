import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    text-align: left;
    color: var(--gray-600);
    th {
      padding-bottom: 1.5rem;
    }

    tr {
      font-size: 0.8rem;
      border-bottom: 1px solid #cccccc2e;
    }
  }

  tbody > tr > td {
    padding: 1.8rem 0;
    border-bottom: 1px solid #cccccc2e;
  }

  td.infoUser {
    span {
      color: var(--gray-600);
    }
  }

  td.actionsInLi {
    max-width: 100%;

    > button {
      background: transparent;
      width: 20%;
      display: inline-block;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }

      & + button {
        margin-left: 1rem;
      }

      svg,
      span {
        color: var(--white);
        display: block;
        margin: 0 auto;
      }
    }
  }
`;
