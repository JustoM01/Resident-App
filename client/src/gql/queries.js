import { gql } from "@apollo/client";

export const Get_Users= gql`

query getUsers{
getUsers{
    name
    email
    password
}
}


`