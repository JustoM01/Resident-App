import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { login_User } from '../gql/mutations';
import { Get_Users } from '../gql/queries';
import { useAuth } from '../utils/Context';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
  const { login, user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginUser] = useMutation(login_User, {
    refetchQueries: [{ query: Get_Users }],
  });

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data } = await loginUser({
        variables: { email, password },
      });

      console.log('Data after login:', data);

      if (data && data.login) {
        const loggedInUser = data.login.user;
        console.log('User logged in', loggedInUser);
        login(loggedInUser);
        navigate('/home');
        console.log(user)
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <div className="black-background"> {/* Apply a black background */}
      <div>
      

        <div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="secondary" type="button" onClick={handleLogin}
            style={{marginTop:'3px'}}
            >
              Login
            </Button>
          </Form>
        </div>

      
      </div>
    </div>
  );
};

export default Login;
