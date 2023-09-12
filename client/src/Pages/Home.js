import React from 'react'
import { useAuth } from '../utils/Context'
// import Profile from '../components/Profile';
const Home = () => {
    const { user } = useAuth();
  return (
    <div>
      <h2>Dashboard</h2>
      {user && (
        <div>
          <h2>Hello {user.name}</h2>
        
          {/* You can display other user information here */}
        </div>
      )}
    
    </div>
  )
}

export default Home