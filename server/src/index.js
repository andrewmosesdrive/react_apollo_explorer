require("dotenv").config();
// import ApolloServer class and schema; create new instance of apolloserver and pass schema
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const server = new ApolloServer({ typeDefs });


server.listen().then(() => {
    console.log(`
    YEET! Listening on http://localhost:4000; graph at https://studio.apollographql.com/dev`)
})