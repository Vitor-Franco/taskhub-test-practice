import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { DropSession } from '../../store/Session/Session.action';
import { getSession } from '../../store/Session/Session.selectors';

import { BsChevronDown } from 'react-icons/bs';
import { ReactComponent as LogoGitHub } from '../../assets/github-logo.svg';
import { ReactComponent as SearchKeySlash } from '../../assets/search-key-slash.svg';
import { ContainerCommon } from '../../styles/common';
import { HeaderContent, SearchBar } from './styles';

const Header = () => {
  const session = useSelector((state) => getSession(state), shallowEqual);

  const dispatch = useDispatch();
  const history = useHistory();

  function handleLogout(e) {
    e.preventDefault();

    dispatch(DropSession());
    history.push('/');
  }

  return (
    <ContainerCommon>
      <HeaderContent>
        <nav>
          <Link to="/">
            <LogoGitHub className="logo" alt="logo" />
          </Link>
          <ul>
            <li>
              <a href="/">
                Why GitHub?
                <BsChevronDown />
              </a>
            </li>
            <li>
              <a href="/">Team</a>
            </li>
            <li>
              <a href="/">Enterprise</a>
            </li>
            <li>
              <a href="/">
                Explore
                <BsChevronDown />
              </a>
            </li>
            <li>
              <a href="/">Marketplace</a>
            </li>
            <li>
              <a href="/">
                Pricing
                <BsChevronDown />
              </a>
            </li>
          </ul>
        </nav>

        <SearchBar>
          <label htmlFor="search">
            <input type="text" id="search" placeholder="Search GitHub" />
            <SearchKeySlash />
          </label>

          {!session.id ? (
            <>
              <Link to="/Login">
                <button type="button">Sign in</button>
              </Link>
              <Link to="/">
                <button className="signUp" type="button">
                  Sign up
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/">
                <button onClick={handleLogout} className="logout" type="button">
                  Logout
                </button>
              </Link>
              <Link to="/Todo">
                <span className="userLogged">{session.name}</span>
              </Link>
            </>
          )}
        </SearchBar>
      </HeaderContent>
    </ContainerCommon>
  );
};

export default React.memo(Header);
