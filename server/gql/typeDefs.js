const {gql} = require('apollo-server-express')
const typeDefs = gql`
 type User {
  _id:ID
  name: String
  email: String
  password:String
}
 

type AuthPayload {
    token: String!
    user: User
  }

 type Query{
    getUsers:[User]
 }



type Mutation{
    registerUser(name:String!, email:String!, password:String!):AuthPayload
    login(email: String!, password: String!): AuthPayload
     deleteUser( id:ID!):User
}


`



module.exports = typeDefs