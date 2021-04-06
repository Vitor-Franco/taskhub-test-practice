import styled from 'styled-components';

export const ContainerFields = styled.div`
  width: 300px;
  display: inline-block;
  margin-bottom: 1rem;

  &:nth-child(even) {
    margin-left: 0.5rem;
  }

  @media (max-width: 1024px) {
    &:nth-child(even) {
      margin-left: 0;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: min(350px, 48%);

    &:nth-child(even) {
      margin-left: 1rem;
    }
  }
`;

export const InputField = styled.input`
  height: 3rem;
  font-size: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 6px;
  border: 0;
  outline: 0;
  width: 300px;
  background: var(--white);

  &.disabled {
    pointer-events: none;
  }

  &.error {
    background: var(--red-400);
    color: var(--white);
  }

  &.error::placeholder {
    color: var(--white);
  }

  & + span {
    font-size: 0.8rem;
    color: var(--red-400);
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  @media (max-width: 425px) {
    width: 185px;
  }
`;

export const LabelField = styled.label`
  color: var(--gray-300);
  font-size: 0.9rem;
  margin: 0 0 0.5rem 0;
  display: inline-block;
`;
