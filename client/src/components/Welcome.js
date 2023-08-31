import React from 'react'
import { useQuery } from '@apollo/client';
import { Get_Users } from '../gql/queries';

const Welcome = () => {
   
    const {loading, data} = useQuery(Get_Users)
    if(loading){
        return <div>loading</div>
    }
console.log(data)
  return (
    <div>Welcome</div>
  )
}

export default Welcome