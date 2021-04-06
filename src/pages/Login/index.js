import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { StartSession } from '../../store/Session/Session.action';
import { selectAllUsers } from '../../store/RegisterUser/RegisterUser.selectors';
import * as yup from 'yup';

import { ReactComponent as LogoGitHub } from '../../assets/github-logo.svg';
import { ContentLogin } from './styles';

const Login = () => {
  const allUsers = useSelector((state) => selectAllUsers(state));
  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmitForm = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const schema = yup.object().shape({
          password: yup.string().required('Password is required!'),
          email: yup.string().email().required('E-mail is required!'),
        });

        await schema.validate({ email: email, password: password });

        if (allUsers.length === 0)
          throw new Error('Email/Password incorrects.');

        const userLogged = allUsers.find(
          (user) => user.email === email && user.password === password
        );

        if (!userLogged) throw new Error('Email/Password incorrects.');

        dispatch(
          StartSession({
            name: userLogged.name,
            email: userLogged.email,
            id: userLogged.id,
          })
        );

        setEmail('');
        setPassword('');
        setError('');
        alert("You're logged!");
        history.push('/Todo');
      } catch (err) {
        setError(err.message);
        return;
      }
    },
    [email, password, dispatch, history, allUsers]
  );

  return (
    <>
      <ContentLogin>
        <div>
          <LogoGitHub />
          <h1>Sign in to GitHub:</h1>
          {error && <span>{error}</span>}
          <form onSubmit={handleSubmitForm}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="E-mail"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Senha"
            />
            <button type="submit">Sign In</button>
          </form>
          <Link to="/">
            <span>New to GitHub? Create an account.</span>
          </Link>
        </div>
      </ContentLogin>
    </>
  );
};

export default Login;
