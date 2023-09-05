import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useMutation } from '@apollo/client'
import { login_User } from '../gql/mutations'
import { Get_Users } from '../gql/queries'
import { useAuth } from '../utils/Context'



const Login = () => {
  const { login,user } = useAuth(); // Access the login function from the context
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loginUser] = useMutation(login_User,{
        refetchQueries:[{query:Get_Users}]
    })

    const naviagte = useNavigate()

    const handleLogin = async () => {
      try {
        const { data } = await loginUser({
          variables: { email, password },
        });
  
        console.log('Data after login:', data);
  
        if (data && data.login) {
          const loggedInUser = data.login.user; // Extract user data from the response
          console.log('User logged in', loggedInUser);
          login(loggedInUser); // Update the user context with the logged-in user
          naviagte('/home');
        } else {
          console.error('Login failed');
        }
      } catch (error) {
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








      {/* Display the current logged-in user */}
      {user && (
        <div>
          <h3>Logged-in User:</h3>
          <p>Email: {user.email} {user.name}</p>
          
          {/* You can display other user information here */}
        </div>
      )}





  </div>
  )
}

export default Login