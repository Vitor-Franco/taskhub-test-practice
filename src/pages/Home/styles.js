import styled from 'styled-components';

export const ContentSessionActive = styled.div`
  button {
    padding: 1rem 2rem;
    border-radius: 5px;
    margin: 1rem 0;
    transition: filter 0.2s;
    font-weight: bold;
    background: var(--blue-400);
    color: var(--white);
    border: 0;
    outline: 0;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const Section = styled.section`
  position: relative;
  overflow: hidden;

  svg.heroGlow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: -1;
    height: auto;
  }

  hr {
    border-color: #cccccc1c;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    hr {
      margin: 2rem 0;
    }
  }
`;

export const ContentIndex = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  > div {
    flex: 1;

    .description {
      margin-bottom: 1rem;
      h2 {
        font-weight: bolder;
        font-size: 2.5rem;
      }

      p {
        color: var(--gray-300);
      }
    }

    .errorForm {
      color: var(--red-400);
      font-weight: bold;
      text-align: center;
      display: block;
    }

    > form {
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

      @media (max-width: 768px) {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
      }
    }
  }

  div.worldBox {
    z-index: -2;
    position: relative;
    height: 70vh;

    > video {
      width: 150%;
      position: absolute;
      left: -130px;
      bottom: -100px;
    }

    @media (max-width: 1024px) {
      > video {
        width: 200%;
        position: absolute;
        left: 0;
        transform: translateX(-30%);
        bottom: -30%;
      }
    }

    @media (max-width: 768px) {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      height: 100vh;

      > video {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        height: 100%;
        width: 300%;
        top: 30%;
        bottom: 0;
      }
    }
  }

  svg {
    overflow: hidden;
  }
`;

export const MoreInfos = styled.div`
  display: flex;
  font-family: 'Roboto Mono', monospace;

  > div {
    width: 200px;

    h4 {
      font-size: 1rem;
      font-weight: 500;
      color: var(--white);

      & > span {
        color: var(--gray-300);
      }
    }

    > span {
      font-size: 0.7rem;
      color: var(--gray-300);
    }
  }

  @media (max-width: 425px) {
    display: none;
  }
`;

export const Footer = styled.footer`
  background: var(--white);
  position: relative;
  margin-top: 5.5rem;
  height: 5.5vh;

  svg.divider {
    position: absolute;
    top: 1px;
    transform: translateY(-100%);
  }

  div.container {
    max-width: 1140px;
    margin: 0 auto;
    position: relative;

    svg.astronaut {
      position: absolute;
      right: 0;
      max-width: 480px;
      transform: translateX(33%);
      bottom: -60px;
    }
  }

  @media (max-width: 768px) {
    height: 15vh;
    margin-top: 20vh;

    div.container {
      svg.astronaut {
        transform: none;
        width: 300px;
        left: calc(50% - 150px);
      }
    }
  }
`;
