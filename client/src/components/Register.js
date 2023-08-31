import React from 'react'
import { useMutation } from '@apollo/client'
import { useState } from 'react'

// imported both mutations from my gql folder
import { register_User } from '../gql/mutations'
import { Get_Users } from '../gql/queries'



const Register = () => {
       


    const [registerUser] = useMutation(register_User, {
        refetchQueries: [{ query: Get_Users }],
      });
      


    const handleRegister = async()=>{
        try {
            const result = await registerUser({
                // passing use state variables to mutation
              variables: { name, email, password },
            });
            // succesful register
            console.log('User registered:', result.data.register);
      
          } catch (error) {
            // Handle registration error here
            console.error('Registration error:', error.message);
          }

          

    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  

  return (
    <div>
      <h2>Register</h2>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  )
}

export default Register