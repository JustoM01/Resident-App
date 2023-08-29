const {gql} = require('apollo-server-express')
const typeDefs = gql`
 type Query {
Welcome: String
}
 


`



module.exports = typeDefs