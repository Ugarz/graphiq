// https://egghead.io/lessons/javascript-use-graphql-s-list-type-for-collections
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

// Ma query
const query = `query myFirstQuery{
  videos {
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
  }),
  videos: () => videos,
}

// Use graphql using schema, query and resolvers
graphql(schema, query, resolvers)
  .then(res => console.log(res))
  .catch(err => console.log(err))