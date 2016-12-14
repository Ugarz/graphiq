// https://egghead.io/lessons/javascript-use-graphql-s-object-type-for-basic-types
'use strict'

const { graphql, buildSchema } = require('graphql');

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
    video: Video
  }
`);

// Ma query
const query = `query myFirstQuery{
  video {
    id,
    title,
    duration,
    watched
  }
}`;

// a request
const resolvers = {
  video: () => ({
    id: '1',
    title: 'bar',
    duration: 180,
    watched: true
  })
}

// Use graphql using schema, query and resolvers
graphql(schema, query, resolvers)
  .then(res => console.log(res))
  .catch(err => console.log(err))