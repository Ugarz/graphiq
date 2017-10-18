// https://egghead.io/lessons/javascript-use-graphql-s-list-type-for-collections
'use strict'

const express = require('express');
const graphqlHTTP = require('express-graphql');
const { graphql, buildSchema } = require('graphql');

// Define port
const PORT = process.env.PORT || 3000;
const server = express();

// Description of capabilities of graphql server
const schema = buildSchema(`
  type Schema {
    query: Query
  }
  type Video {
    id: ID,
    title: String,
    duration: Int,
    watched: Boolean
  }
  type Query {
    video: Video,
    videos: [Video]
  }
`);

// Video types
const videoA = {
  id: 'a',
  title: 'Morning is Dying',
  duration: 120,
  watched: true
}
const videoB = {
  id: 'a',
  title: 'MAIF is eating Morning',
  duration: 280,
  watched: true
}
const videos = [videoA, videoB]

// a request
const resolvers = {
  video: () => ({
    id: '1',
    title: 'bar',
    duration: 180,
    watched: true
  }),
  videos: () => videos,
}

// Use graphql using schema, query and resolvers
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  rootValue: resolvers,
}));