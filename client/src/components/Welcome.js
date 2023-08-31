import React from 'react'
import { useQuery } from '@apollo/client';
import { Get_Users } from '../gql/queries';
import Register from './Register';
import Login from './Login';

const Welcome = () => {
   
    const {loading, data} = useQuery(Get_Users)
    if(loading){
        return <div>loading</div>
    }
console.log(data)
  return (
   <div>
    <Register></Register>
    <Login></Login>
   </div>
  
  )
}

export default Welcome