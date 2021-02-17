require("dotenv").config();
// import ApolloServer class and schema; create new instance of apolloserver and pass schema
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const { createStore } = require('./utils');
const resolvers = require('./resolvers');

const LaunchAPI = require('./datasources/launch');
const UserAPI = require('./datasources/user');

const store = createStore();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        LaunchAPI: new LaunchAPI(),
        UserAPI: new UserAPI({ store })
    })
});

server.listen().then(() => {
    console.log(`
    BIG YEET! Listening on http://localhost:4000; graph at https://studio.apollographql.com/dev`)
})