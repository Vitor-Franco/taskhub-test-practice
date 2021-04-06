import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getSession } from '../../store/Session/Session.selectors';
import Header from '../../components/Header';
import FormRegister from '../../components/Form/Register';

import { ReactComponent as Astronaut } from '../../assets/astronaut.svg';
import { ReactComponent as Glow } from '../../assets/hero-glow.svg';
import { ReactComponent as Divider } from '../../assets/divider.svg';

import Video from '../../assets/globe.mp4';
import {
  ContentSessionActive,
  ContentIndex,
  Section,
  Footer,
  MoreInfos,
} from './styles';
import { ContainerCommon } from '../../styles/common';

const Home = () => {
  const session = useSelector((state) => getSession(state));

  return (
    <Section>
      <Header />
      <ContainerCommon>
        <ContentIndex>
          {session.id ? (
            <ContentSessionActive>
              <h2>Remember your tasks</h2>
              <Link to="/Todo">
                <button>My TodoList</button>
              </Link>
            </ContentSessionActive>
          ) : (
            <div>
              <div className="description">
                <h2>Register</h2>
              </div>
              <FormRegister />
            </div>
          )}
          <div className="worldBox">
            <video no-controls="true" autoPlay muted playsInline loop>
              <source type="video/mp4" src={Video} />
            </video>
          </div>
        </ContentIndex>
        <hr />
        <MoreInfos>
          <div>
            <h4>
              56<span>+</span> million
            </h4>
            <span>Developers</span>
          </div>

          <div>
            <h4>
              3<span>+</span> million
            </h4>
            <span>Organizations</span>
          </div>

          <div>
            <h4>
              100<span>+</span> million
            </h4>
            <span>Repositories</span>
          </div>

          <div>
            <h4>72%</h4>
            <span>Fortune 50</span>
          </div>
        </MoreInfos>
      </ContainerCommon>

      <Footer>
        <Divider className="divider" />
        <div className="container">
          <Astronaut className="astronaut" />
        </div>
      </Footer>
      <Glow className="heroGlow" />
    </Section>
  );
};

export default Home;
