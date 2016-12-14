// https://egghead.io/lessons/javascript-create-a-graphql-schema?play=yes
'use strict'

const { graphql, buildSchema } = require('graphql');

// Description of capabilities of graphql server
const schema = buildSchema(`
  type Schema {
    query: Query
  }
  type Query {
    id: ID,
    title: String,
    duration: Int,
    watched: Boolean
  }
`);

// Ma query
const query = `query myFirstQuery{ id title duration watched }`;

// a request
const resolvers = {
  id: () => '1',
  title: () => 'bar',
  duration: () => 180,
  watched: () => true
}

// Use graphql using schema, query and resolvers
graphql(schema, query, resolvers)
  .then(res => console.log(res))
  .catch(err => console.log(err))