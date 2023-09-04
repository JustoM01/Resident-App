import React from 'react'
import { useState } from 'react'

import { useMutation } from '@apollo/client'
import { login_User } from '../gql/mutations'
import { Get_Users } from '../gql/queries'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loginUser] = useMutation(login_User,{
        refetchQueries:[{query:Get_Users}]
    })



    const handleLogin = async () => {
        try {
           await loginUser({
            variables: { email, password },
          });
    
          // Handle successful login here
          console.log('User logged in');
    
     
        } catch (error) {
          // Handle login error here
          console.error('Login error:', error.message);
        }
      };

  return (
    <div>
    <h2>Login</h2>
    <form>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </form>
  </div>
  )
}

export default Login