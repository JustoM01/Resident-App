import React from 'react'
import { useQuery } from '@apollo/client';
import { Get_Users } from '../gql/queries';


const Profile = () => {
   
    const {loading, data} = useQuery(Get_Users)
    if(loading){
        return <div>loading</div>
    }
console.log(data)

const users = data.getUsers
  return (
   <div>
       {users.map((user) => (
        <h1 key={user.id}>{user.name}</h1>
    ))}
   </div>
  
  )
}

export default Profile