const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    type Query{
        numberSix: Int !
        numberSeven: Int!
    }
`

const resolvers = {
    Query: {
        numberSix:()=>{
            return 6
        },
        numberSeven:()=>{
            return 7
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});