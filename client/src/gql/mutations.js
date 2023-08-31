import { gql } from "@apollo/client";




export const register_User = gql`
mutation registerUser($name: String!, $email: String!, $password: String!){
  registerUser(name: $name, email: $email, password: $password) {
    token
    user {
      name
      email
      password
    }
  }
}
`;




export const login_User = gql`
mutation login ($email: String!, $password: String!){
  login(email: $email, password: $password) {
    token
    user {
      email
      password
    }
  }
}
`;
