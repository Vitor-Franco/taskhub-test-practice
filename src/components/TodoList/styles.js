import styled from 'styled-components';

export const ListItem = styled.tr`
  td.checkboxInput,
  th.checkboxInput {
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 5rem;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 25px;
      width: 25px;
      transform: translateX(50%);
      top: calc(50% - 15px);
    }

    .checkmark {
      position: absolute;
      top: calc(50% - 12px);
      transform: translateX(50%);
      height: 25px;
      width: 25px;
      background-color: transparent;
      border: 1px solid var(--white);
      border-radius: 5px;
      pointer-events: none;
    }

    &:not(.completed) input:hover ~ .checkmark {
      background-color: var(--gray-300);
    }

    &.completed .checkmark {
      background-color: var(--green-400);
    }

    &.completed .checkmark:after {
      display: block;
    }

    .checkmark:after {
      content: '';
      position: absolute;
      display: none;
      left: calc(50% - 3px);
      top: calc(50% - 8px);
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;
